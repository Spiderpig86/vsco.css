var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var $ = require('gulp-load-plugins')();

gulp.task('compile', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe($.concat('app.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['compile'], function() {
    return gulp.src(['./dist/app.css'])
        .pipe(minify())
        .pipe($.size())
        .pipe($.concat('app.min.css'))
        .pipe(gulp.dest('./dist/'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['compile']);
});