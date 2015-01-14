var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var Mocha = require('mocha');
var hash = require('./src/hashFileName');

gulp.task('lint', function () {
  return gulp.src(['src/*.js'])
  .pipe(jshint({"esnext": true}))
  .pipe(jshint.reporter('default', { verbose: true }))
  .pipe(jshint.reporter('fail'));
});

gulp.task('test', ['lint'], function (done) {
  var m = new Mocha();
  m.addFile(__dirname + '/test/index.js');
  m.run().on('end', done);
});

gulp.task('default', ['lint'], function() {
  return gulp.src(['examples/*.*'])
  .pipe(hash())
  .pipe(gulp.dest('examples/out'))
  .pipe(uglify())
  .pipe(rename(function (path) {
    path.basename += "-min";
   }))
  .pipe(gulp.dest('examples/out'));
});
