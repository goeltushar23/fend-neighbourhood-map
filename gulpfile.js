/*
	gulpfile.js
	===========
	Rather than manage one giant configuration file responsible
	for creating multiple tasks, each task has been broken out into
	its own file in gulp/tasks. Any files in that directory get
	automatically required below.

	To add a new task, simply add a new task file in the gulp/task directory.
*/

var requireDir = require('require-dir');
var gulp = require('gulp');

// Require all tasks in gulp/tasks
requireDir('./gulp/tasks', { recurse: true })

// $> gulp build
gulp.task('build', ['resources', 'app_css', 'lib_js', 'app_js', 'minify_html']);

// $> gulp
gulp.task('default', ['set_watch', 'watch_js', 'watch_css', 'watch_html', 'nodemon']);
