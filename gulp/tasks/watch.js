var gulp = require('gulp');
var config = require('../config');

gulp.task('watch_js', function() {
    gulp.watch(config.app_js.watch, ['app_js']);
});

gulp.task('watch_css', function() {
    gulp.watch(config.app_css.watch, ['app_css']);
});

gulp.task('watch_html', function() {
    gulp.watch(config.minify_html.watch, ['minify_html']);
});


