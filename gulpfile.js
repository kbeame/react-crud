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

gulp.task('webpack:dev', () => {
  gulp.src('./app/*.js')
  .pipe(webpack({
    entry: './app/entry.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }]
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('static', () => {
  gulp.src('app/*.html')
    .pipe(gulp.dest('./build'));
  gulp.src('app/*.css')
    .pipe(gulp.dest('./build'));
});

gulp.task('lint', ['lint:server', 'lint:client']);
gulp.task('default', ['webpack:dev', 'static']);
