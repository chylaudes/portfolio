//required plugins
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    cssmin = require('gulp-cssmin');



//calling scripts
//plumber should be the very first thing you should pipe in
//if you cause an error it will not kick you out
gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream: true}))
  return gutil.log('scripts is running')
})

//minifies css!
gulp.task('css', function(){
  gulp.src('app/css/style.css')
  .pipe(plumber())
  .pipe(cssmin())
  .pipe(rename({suffix:'.min'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css'))
  .pipe(reload({stream: true}))
  return gutil.log('css is uglified');
});

//creating a html tasks, watching it!
gulp.task('html', function(){
  gulp.src('app/*.html')
  return gutil.log('html is running')
});

//creating the browser-sync tasks
//your reload is always the last thing that you pipe
gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: "./app"
    }
  });
})


//creating the browser-sync tasks
//your reload is always the last thing that you pipe
gulp.task('build:serve', function(){
  browserSync({
    server: {
      baseDir: "./build/"
    }
  });
})

//creating a watch task
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts'])
  gulp.watch('app/css/**/*.css', ['css'])
  gulp.watch('app/**/*.html', ['html'])
});

// create a default task and just log a message
gulp.task('default', ['scripts','css', 'html', 'browser-sync', 'watch'],  function() {
  return gutil.log('Gulp is running!')
});
