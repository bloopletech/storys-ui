var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var bower = require('gulp-bower');

var paths = {
  haml: ['app/**/*.haml'],
  sass: ['app/**/*.scss'],
  js: ['app/**/*.js']
};

gulp.task('haml', function() {
  gulp.src(paths.haml).pipe(haml()).pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  gulp.src(paths.sass).pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  gulp.src(paths.js).pipe(gulp.dest('./public'));
});

gulp.task('bower', function() {
  bower().pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['haml']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'haml', 'sass', 'js', 'bower']);