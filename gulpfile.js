'use strict'

const gulp = require('gulp');
const gulpPlugin = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
// const through2 = require('through2');

/* Plugin for W3C HTML validation */

/* Plugin for start browser */
gulp.task('serve', function() {
  browserSync.init({
      server: "./public"
  });
});

/* Pug preprocessor */
gulp.task('pug', function() {
  return gulp.src('app/pug/pages/*.pug')
        .pipe(gulpPlugin.pug({
          pretty: true
        }))
        .pipe(gulp.dest('public'))
        .on('end', browserSync.reload);
});

/* CSS task */
gulp.task('css', function() {
  return gulp.src('app/styles/*.css')
        .pipe(gulpPlugin.sourcemaps.init())
        .pipe(gulpPlugin.sourcemaps.write())
        .pipe(gulp.dest('public/assets/css/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

/* SASS preprocessor */
gulp.task('sass', function() {
  return gulp.src('app/styles/sass/style.sass')
        // .pipe(gulpPlugin.sourcemaps.init())
        .pipe(gulpPlugin.sass({}))
        .pipe(gulpPlugin.autoprefixer({}))
        .on("error", gulpPlugin.notify.onError({
          message: "Error: <%= error.message %>",
          title: "Error in style"
        }))
        // .pipe(gulpPlugin.sourcemaps.write())
        .pipe(gulp.dest('public/assets/css/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

/* Fonts task */
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('public/assets/fonts/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

/* Image task */
gulp.task('img', function() {
  return gulp.src('app/img/*.*')
        .pipe(gulp.dest('public/assets/images/'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

/* JavaScript task */
gulp.task('script', function() {
  return gulp.src('app/js/*.js')
  // .pipe(gulpPlugin.concat('main.js'))
  .pipe(gulp.dest('public/assets/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// /* Robots.txt */
// gulp.task('robots', function() {
//   return gulp.src('app/robots.txt')
//   .pipe(gulp.dest('public/'))
//   .pipe(browserSync.reload({
//     stream: true
//   }));
// });

/* JSON task */
// gulp.task('json', function() {
//   return gulp.src('app/data/*.json')
//         .pipe(gulp.dest('public/data/'))
//         .pipe(browserSync.reload({
//           stream: true
//         }));
// });

/* All tasks monitoring */
gulp.task('watch', function() {
  gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('app/styles/*.css', gulp.series('css'));
  gulp.watch('app/styles/sass/*.sass', gulp.series('sass'));
  gulp.watch('app/js/*.js', gulp.series('script'));
  // gulp.watch('app/robots.txt', gulp.series('robots'));
  // gulp.watch('app/data/*.json', gulp.series('json'));
});

/* Default task */
gulp.task('default', gulp.series(
  gulp.parallel('pug', 'fonts', 'sass', 'img', 'css', 'script'),
  gulp.parallel('watch', 'serve')
));
