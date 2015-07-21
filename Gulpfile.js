var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles'));
});
