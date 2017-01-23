# Gulp-Example
My default use of gulp

## Explanation

### My devDependencies in the package.json:

```json
"devDependencies": {
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.1",
    "gulp-cssmin": "^0.1.7",
    "gulp-htmlmin": "^3.0.0",
    "gulp-imagemin": "^3.1.1",
    "gulp-jshint": "^2.0.4",
    "gulp-live-server": "0.0.30",
    "gulp-load-plugins": "^1.4.0",
    "gulp-order": "^1.1.1",
    "gulp-uglify": "^2.0.0",m
    "jshint": "^2.9.4",
    "jshint-stylish": "^2.2.1",
    "load-gulp-tasks": "^0.1.0",
    "pump": "^1.0.2"
  }
```

### My gulpfile.js

In the gulpfile.js is only called the base packages: gulp, plugins and pump (I like to use :D).
Is created the options variable, where is all the options as paths and others packages.
In the end is called the 'load-gulp-tasks' package, passing the 3 variables (gulp, optinos and plugins).

```javascript
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pump = require('pump');

var options = {
	'pump'	: pump,
	'paths' : {
		'src' : {
			'js'	: ['./assets/src/js/*.js'],
			'img'	: './assets/src/img/',
			'css'	: './assets/src/css/*.css',
			'fonts'	: './assets/src/fonts/**/*.{eot,svg,ttf,woff,woff2}',
		},
		'dist' : {
			'js'	: './assets/dist/js/',
			'img'	: './assets/dist/img/', 
			'css'	: './assets/dist/css/',
			'fonts'	: './assets/dist/fonts/',
		}
	}
};
```

### In tasks/default.js where is all the default tasks.

```javascript
module.exports = function (gulp, options, plugins) {
    gulp.task('default', [
    	'imgTask',
        'scriptTask',
        'styleTask',
    ]);
};

```

### Below there is a task exemple(tasks/styleTask.js):

```javascript
module.exports = function(gulp, options, plugins){

	gulp.task('styleTask', function(cb){
		options.pump([
			gulp.src(options.paths.src.css),
			plugins.concat('styles.min.css'),
			plugins.cssmin(),
			gulp.dest(options.paths.dist.css)
			], cb);
	});

};

```