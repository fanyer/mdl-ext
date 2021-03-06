const gulp = require('gulp');
const posthtml = require('gulp-posthtml');

gulp.task('build-demo', ['posthtml-build-demo', 'copy-css', 'copy-scripts']);

gulp.task('posthtml-build-demo', function() {
  const plugins = [
    require('posthtml-include')({
      encoding: 'utf-8',
      root: './src/demo/'
    })
  ];

  return gulp.src('./src/demo/*.html')
    .pipe(posthtml(plugins))
    .pipe(gulp.dest('./demo'));
});

gulp.task('copy-css', function() {
  return gulp.src([
    './src/demo/styles/*.css',
    './node_modules/dialog-polyfill/dialog-polyfill.css'
  ])
  .pipe(gulp.dest('./demo/styles'));
});

gulp.task('copy-scripts', function() {
  return gulp.src([
    './src/demo/scripts/*.js',
    './node_modules/dialog-polyfill/dialog-polyfill.js'
  ])
  .pipe(gulp.dest('./demo/scripts'));
});
