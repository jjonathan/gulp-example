module.exports = function(gulp, options, plugins){

	gulp.task('fontsTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.fonts),
			gulp.dest(options.paths.dist.fonts)
			], cb);
	});
}