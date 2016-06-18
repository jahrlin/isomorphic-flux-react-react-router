var path = require('path');
// Karma configuration
// Generated on Sat Jun 18 2016 13:20:34 GMT+0200 (CEST)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],


		// list of files / patterns to load in the browser
		files: [
			'tests.webpack.js'
		],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,
		plugins: [
			'karma-mocha',
			'karma-chai',
			'karma-webpack',
			'karma-phantomjs-launcher',
			'karma-spec-reporter',
			'karma-sourcemap-loader'
		],
		webpack: {
			devtool: 'inline-source-map',
			context: path.join(__dirname, "src"),
			module: {
				loaders: [
				{
					test: /\.js$|\.jsx$/,
					loader: 'babel',
					query: {
						"plugins": [
							"transform-react-remove-prop-types",
							"transform-react-constant-elements",
							"transform-react-inline-elements"
						]
					},
					include: path.join(__dirname, 'src'),
					exclude: path.join(__dirname, '/node_modules/')
				},
				{ test: /\.json$/, loader: "json-loader" },
				{ test: /\.css$/, loader: "null-loader" }
				],
			},
			resolve: {
				extensions: ['', '.js', '.jsx', '.css'],
				modulesDirectories: [
					'src', 'node_modules'
				],
				alias: {
					'sinon': 'sinon/pkg/sinon'
				}
			},
			node: {
				fs: "empty"
			},
			watch: true,
			noparse: [
				/node_modules\/sinon\//
			],
			externals: {
				'jsdom': 'window',
				'cheerio': 'window',
				'react/lib/ExecutionEnvironment': true,
				'react/addons': true,
				'react/lib/ReactContext': true
			}
		}
	});
};
