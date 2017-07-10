var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    config = require('../config').app_css;

gulp.task('app_css', function() {
    gulp.src(config.src)
        .pipe(minify())
        .pipe(concat(config.outputName))
        .pipe(gulp.dest(config.dest));
});
