const gulp = require('gulp')
const sass = require('gulp-sass')
const CleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('/www/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css/style.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('/scss/styles.scss', ['scss'])
});
gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',['sass','sass:watch','minify-css'])
