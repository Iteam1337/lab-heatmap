var gulp       = require('gulp')
,   path       = require('path')
,   less       = require('gulp-less')
,   livereload = require('gulp-livereload')
,   plumber    = require('gulp-plumber');
var rename = require("gulp-rename");

var config = {
  styles: 'css/',
  stylesOut: 'temp/',
  allStyle: '*.less',
  mainStyle: 'app.less'
}

gulp.task('less', function () {
  gulp.src(config.styles + config.mainStyle)
    .pipe(plumber())
    .pipe(less({
      compress: true
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest(config.stylesOut));
});

gulp.task('watch', function () {
  gulp.watch([config.styles + config.allStyle], ['less']);

  var server = livereload();
  gulp.watch('temp/**').on('change', function (file) {
      server.changed(file.path);
  });
});

gulp.task('default', ['less', 'watch']);