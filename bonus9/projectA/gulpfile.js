var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
   return gulp.src('scss/style.scss')
       .pipe(plumber())
       .pipe(sourceMaps.init())
       .pipe(sass())
       .pipe(autoprefixer({
           browsers: ['last 2 versions']
       }))
       .pipe(sourceMaps.write())
       .pipe(gulp.dest('build/css'))
       .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function () {
    gulp.watch("scss/**/*.scss", gulp.series('sass'));
    gulp.watch('*.html', gulp.series('html'));
});

gulp.task('serve', gulp.series('html', 'sass', 'watch'), function () {
   browserSync.init({
       server:"build"
    });
});

// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const plumber = require('gulp-plumber');
// const autoprefixer = require('gulp-autoprefixer');
// const browserSync = require('browser-sync').create();
// const sourceMaps = require('gulp-sourcemaps');
//
// gulp.task('sass', function () {
//     return gulp.src('scss/style.scss')
//         .pipe(plumber())
//         .pipe(sourceMaps.init())
//         .pipe(sass())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//         }))
//         .pipe(sourceMaps.write())
//         .pipe(gulp.dest('build/css'))
//         .pipe(browserSync.reload({stream: true}));
// });
//
// gulp.task('html', function () {
//     return gulp.src('*.html')
//         .pipe(gulp.dest('build'))
//         .pipe(browserSync.reload({stream: true}));
// });
//
// gulp.task('serve', ['html', 'sass'], function () {
//     browserSync.init({
//         server: "build"
//     });
//
//     gulp.watch("scss/**/*.scss", ["sass"]);
//     gulp.watch("*.html", ["html"]);
// });