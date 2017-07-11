var gulp = require('gulp');
var config = require('../config').resources;

gulp.task('resources', ['img']);

gulp.task('fonts', function() {
    gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('img', function() {
    gulp.src(config.img.src)
        .pipe(gulp.dest(config.img.dest));
});
