var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('css/*.css')
    .pipe(autoprefixer('last 4 version', '>1%','ie9'))
    .pipe(concatCss('main.css'))
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Есть!'));
})

gulp.task('watch', function() {
    gulp.watch('css/*.css',['default'])
})