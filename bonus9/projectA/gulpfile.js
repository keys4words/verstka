const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
   return gulp.src('scss/style.css')
       .pipe(plumber())
       .pipe(sourceMaps.init())
       .pipe(sass())
       .pipe(autoprefixer({
           browser: ['last 2 versions']
       }))
       .pipe(sourceMaps.write())
       .pipe(gulp.dest('build/css'));
});