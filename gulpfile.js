var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pump = require('pump');
var stylish = require('jshint-stylish');

var options = {
	'pump'	: pump,
	'stylish' : stylish,
	'paths' : {
		'src' : {
			'js'	: './assets/src/js/*.js',
			'img'	: './assets/src/img/*',
			'css'	: './assets/src/css/*.css',
			'html'	: './_html/**/*.html',
			'fonts'	: './assets/src/fonts/*.{eot,svg,ttf,woff,woff2}',
		},
		'dist' : {
			'js'	: './assets/dist/js/',
			'img'	: './assets/dist/img/', 
			'css'	: './assets/dist/css/',
			'html'	: './',
			'fonts'	: './assets/dist/fonts/',
		}
	}
};

require('load-gulp-tasks')(gulp, options, plugins);