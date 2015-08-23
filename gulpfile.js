var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var filter = require('gulp-filter');

var paths = {
  haml: ['app/**/*.haml'],
  sass: ['app/**/*.scss'],
  js: ['app/**/*.js']
};

var vendoredPaths = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/underscore/underscore-min.js',
  'node_modules/semantic-ui/dist/semantic.min.js',
  'node_modules/semantic-ui/dist/semantic.min.css',
  'node_modules/handlebars/dist/handlebars.min.js'
];

gulp.task('haml', function() {
  gulp.src(paths.haml).pipe(haml()).pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  gulp.src(paths.sass).pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
  gulp.src(paths.js).pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['haml']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('vendored', function() {
  gulp.src(vendoredPaths).pipe(filter('*.css')).pipe(gulp.dest('./public/css'));
  gulp.src(vendoredPaths).pipe(filter('*.js')).pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['watch', 'haml', 'sass', 'js', 'vendored']);