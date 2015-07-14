'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./app/public/sass/application.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/public/css/'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./app/public/sass/application.sass', ['sass']);
});

