var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').lib_js;

gulp.task('lib_js', function() {
    gulp.src(config.src)
        .pipe(concat(config.outputName))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(config.dest));
});
