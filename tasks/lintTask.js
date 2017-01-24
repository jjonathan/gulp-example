module.exports = function(gulp, options, plugins){

	gulp.task('lintTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.js),
			plugins.jshint(),
			plugins.jshint.reporter(options.stylish)
		], cb);
	});
}