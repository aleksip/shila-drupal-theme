'use strict';

// Configuration.

var config = {};
config.browserSync = {
  proxyTarget: 'localhost:8080',
  proxyReqHeaders: {
    host: ''
  },
  open: false
};
config.patternsDir = './dist/_patterns';
config.sass = {
  srcFiles: [
    './dist/sass/*.scss'
  ],
  watchFiles: [
    './dist/sass/**/*.scss',
    config.patternsDir + '/**/*.scss',
    './node_modules/shila-css/**/*.scss'
  ],
  options: {
    includePaths: [
      './dist/sass',
      './node_modules/shila-css'
    ],
    outputStyle: 'expanded'
  },
  destDir: './dist/css'
};
config.patternLab = {
  dir: './pattern-lab',
  watchFiles: [
    config.patternsDir + '/**/*.twig',
    config.patternsDir + '/**/*.json',
    config.patternsDir + '/**/*.yml'
  ],
  publicCssDir: './pattern-lab/public/css'
};

// Load Gulp and other tools.

var fs = require('fs');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var run = require('gulp-run');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sassLint = require('gulp-sass-lint');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

// Helper functions.

function isDirectory(dir) {
  try {
    return fs.statSync(dir).isDirectory();
  }
  catch (err) {
    return false;
  }
}

// Gulp tasks.

/**
 * Sets up Browsersync and watchers.
 */
gulp.task('watch', function () {
  browserSync.init({
    proxy: {
      target: config.browserSync.proxyTarget,
      reqHeaders: config.browserSync.proxyReqHeaders
    },
    open: config.browserSync.open
  });
  gulp.watch(config.sass.watchFiles, ['sass-change']);
  gulp.watch(config.patternLab.watchFiles, ['patterns-change']);
});

/**
 * Task sequence to run when Sass files have changed.
 */
gulp.task('sass-change', function () {
  runSequence('sass', 'copy-css');
});

/**
 * Task sequence to run when pattern files have changed.
 */
gulp.task('patterns-change', function () {
  runSequence('pl:generate', 'bs:reload');
});

/**
 * Processes Sass files and updates Browsersync.
 */
gulp.task('sass', function () {
  return gulp.src(config.sass.srcFiles)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.destDir))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

/**
 * Copies CSS files to Pattern Lab's public dir.
 */
gulp.task('copy-css', function () {
  if (isDirectory(config.patternLab.dir)) {
    return gulp.src(config.sass.destDir + '/**/*.css')
      .pipe(gulp.dest(config.patternLab.publicCssDir))
      .pipe(browserSync.stream());
  }
});

/**
 * Generates Pattern Lab front-end.
 */
gulp.task('pl:generate', function () {
  if (isDirectory(config.patternLab.dir)) {
    return run('php ' + config.patternLab.dir + '/core/console --generate').exec();
  }
});

/**
 * Calls Browsersync reload.
 */
gulp.task('bs:reload', function () {
  browserSync.reload();
});

/**
 * Lints Sass files.
 */
gulp.task('lint:sass', function () {
  return gulp.src(config.sass.srcFiles)
    .pipe(sassLint())
    .pipe(sassLint.format());
});

/**
 * Gulp default task.
 */
gulp.task('default', function () {
  runSequence('sass', 'pl:generate', 'watch');
});
