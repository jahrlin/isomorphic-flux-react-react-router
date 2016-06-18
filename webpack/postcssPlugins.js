module.exports = [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('postcss-nested')(),
    require('autoprefixer')({
        browsers: ['last 2 versions', 'IE < 8']
    }),
    require('postcss-reporter')({
        clearMessages: true
    })
];
