'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


///////////////
// - SCSS/CSS
//////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';


// Complie SCSS
gulp.task('compile_scss', function(done){
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
  done();
});

// ALWAYS RUNNING TO DETECT CHANGES AND WRITE  (LOOP RUNNING)
//detect changed in SCSS
gulp.task('watch_scss', function(done){
  gulp.watch(SCSS_SRC, gulp.parallel('compile_scss'));done();
});


// Run Tasks
gulp.task('default', gulp.series('watch_scss', function(done) {
  done();
}));
