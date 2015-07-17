'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./app/public/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/public/css/'));
});

gulp.task('default', function(){
  gulp.watch('./app/public/sass/**/*.sass', ['sass']);
});
