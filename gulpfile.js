// gulpfile.js
// Require the needed packages
var gulp = require('gulp');
var haml = require('gulp-haml');

var paths = {
  haml: ['app/**.haml']
};

gulp.task('haml', function() {
  gulp.src(paths.haml).pipe(haml()).pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['haml']);
});

gulp.task('default', ['watch']);