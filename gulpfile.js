const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

var serverFiles = ['lib/**/*.js', 'test/server/**/*.js', 'routes/**/*.js',
'models/**/*.js', 'gulpfile.js', 'server.js'];
var clientFiles = ['app/**/*.js', 'test/client/**/*.js'];

gulp.task('lint:server', () => {
  return gulp.src(serverFiles)
  .pipe(eslint('./.eslintrc'))
  .pipe(eslint.format());
});

gulp.task('lint:client', () => {
  return gulp.src(clientFiles)
  .pipe(eslint('./app/.eslintrc'))
  .pipe(eslint.format());
});
