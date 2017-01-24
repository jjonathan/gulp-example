module.exports = function(gulp, options, plugins){
	gulp.task('htmlTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.html),
			plugins.htmlmin({collapseWhitespace: true}),
			gulp.dest(options.paths.dist.html)
			],
			cb);
	});
}