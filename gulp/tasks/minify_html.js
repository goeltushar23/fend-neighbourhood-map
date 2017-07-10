var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var config = require('../config').minify_html;

gulp.task('minify_html', function() {
    gulp.src(config.src)
        .pipe(minifyHTML())
        .pipe(rename(config.outputName))
        .pipe(gulp.dest(config.dest));
});
