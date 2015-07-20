import cp from 'child_process';
import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import streamify from 'gulp-streamify';
import reactify from 'reactify';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import gulpUtil from 'gulp-util';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const src = Object.create(null);

let watch = false;

gulp.task('bundle', cb => {
  const config = require('./webpack.config.js');
  const bundler = webpack(config);
  const verbose = !!argv.verbose;
  let bundlerRunCount = 0;

  function bundle(err, stats) {
    if (err) {
      throw new gulpUtil.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: gulpUtil.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    if (++bundlerRunCount === (watch ? config.length : 1)) {
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});

//bundles all the client stuff into
gulp.task('bundleapp', () => {

  var b = browserify({
    entries: './src/app.js',
    debug: true
  });

  b.transform(babelify)
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .on('error', (err) => {
      console.log('err1', err);
    })
    .pipe(gulp.dest('dist'))
    .on('error', (err) => {
      console.log('err', err);
    });
});

gulp.task('browsersync', cb => {
  browserSync({
    logPrefix: 'VRT',
    notify: false,
    https: false,
    proxy: 'localhost:5000'
  }, cb);

  process.on('exit', () => browserSync.exit());
});

gulp.task('sass', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest('build/public'));
});

gulp.task('sass:watch', cb => {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  cb();
});

gulp.task('copyviews', () => {
  return gulp.src('src/views/**')
    .pipe(gulp.dest('build/views'));
});

gulp.task('copyassets', () => {
  return gulp.src('src/public/**')
    .pipe(gulp.dest('build/public'));
});

gulp.task('watch', cb => {
  watch = true;
  gulp.watch([
    'src/public/**',
    'src/views/**'
  ], ['copyassets', 'copyviews']);
  cb();
});

gulp.task('serve', cb => {
  //files to watch
  src.server = [
    'build/**/*'
  ];
  let started = false;
  let server = (function startup() {
    const child = cp.fork('build/server.js', {
      env: Object.assign({NODE_ENV: 'development'}, process.env)
    });
    child.once('message', message => {
      if (message.match(/^online$/)) {
        if (browserSync) {
          browserSync.reload();
        }
        if (!started) {
          started = true;
          gulp.watch(src.server, function() {
            console.log('Restarting development server.');
            server.kill('SIGTERM');
            server = startup();
          });
          cb();
        }
      }
    });
    return child;
  })();
});

gulp.task('default', () => {
  runSequence(['watch', 'bundle', 'sass', 'sass:watch'], ['copyassets', 'copyviews'], 'serve', 'browsersync');
});
