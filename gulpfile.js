var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var paths = {
  html : ['*.html'],
  css : ['*.css'],
}

gulp.task ('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
});

gulp.task ('watch',['browser-sync'], function () {
  gulp.watch(paths.html).on('change', browserSync.reload)
  gulp.watch(paths.css).on('change', browserSync.reload)
});

gulp.task ('default', ['browser-sync','watch']);
