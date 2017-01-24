module.exports = function (gulp, options, plugins) {
    gulp.task('default', [
    	'htmlTask',
    	'imgTask',
        'scriptTask',
        'styleTask',
        'fontsTask',
        'watchTask',
        'serverTask']);
};