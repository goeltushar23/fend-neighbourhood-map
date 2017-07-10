var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').app_js;

gulp.task('app_js', function() {
    gulp.src(config.src)
        .pipe(concat(config.outputName))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest));
});
