// gulpfile.js
// Require the needed packages
var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');

var paths = {
  haml: ['app/**/*.haml'],
  sass: ['app/**/*.scss']
};

gulp.task('haml', function() {
  gulp.src(paths.haml).pipe(haml()).pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  gulp.src(paths.sass).pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['haml']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);