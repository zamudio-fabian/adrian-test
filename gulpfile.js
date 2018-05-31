var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    prefix = require('gulp-autoprefixer')
    sass = require('gulp-sass');


// Minifies JS
gulp.task('js', function(){
    return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

// SASS Version
gulp.task('styles', function(){
    return gulp.src('assets/sass/*.sass')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', function() {
    gulp.run('styles')
    gulp.run('js')
});

