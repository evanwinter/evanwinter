var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %>\n',
  ' */\n',
  ''
].join('');

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
  return gulp.src('scss/styles.scss')
    .pipe(sass())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('css/styles.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Default task
gulp.task('default', ['sass', 'minify-css', 'copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'sass', 'minify-css'], function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('css/*.css', ['minify-css']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
});
