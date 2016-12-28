const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp.src('/www/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css/style.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('/scss/styles.scss', ['scss'])
});
gulp.task('default',['sass','sass:watch'])
