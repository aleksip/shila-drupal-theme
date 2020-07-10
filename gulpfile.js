// Load Gulp and other tools.

var cp = require('child_process');
var fs = require('fs');

var plConfig = undefined;
var patternlab = undefined;
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-dart-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var stylelint = require('gulp-stylelint');
var yaml = require('js-yaml');


// Load configuration from YAML file.
var config = yaml.safeLoad(fs.readFileSync('./gulp-config.yml', 'utf8'));


// Define tasks.

gulp.task('watch', watch);
gulp.task('compileSass', compileGlobalSass);
gulp.task('plGenerate', plGenerate);
gulp.task('lintSass', lintSass);
gulp.task('copyCss', copyCss);
gulp.task('default', gulp.series(compileGlobalSass, styleguideScripts, plGenerate, watch));


// Task and helper functions.

function isDirectory(dir) {
  try {
    return fs.statSync(dir).isDirectory();
  }
  catch (err) {
    return false;
  }
}

/**
 * Sets up Browsersync and watches files for changes.
 */
function watch(cb) {
  if (config.browserSync.proxy.target) {
    browserSync.init({
      proxy: config.browserSync.proxy,
      open: config.browserSync.open
    });
  }
  else {
    browserSync.init({
      server: config.browserSync.server,
      open: config.browserSync.open
    });
  }
  gulp.watch(config.sass.watchFiles, gulp.series(compileGlobalSass, copyCss));
  gulp.watch(config.patternLab.watchFiles, gulp.series(styleguideScripts, plGenerate, bsReload));
  cb();
}
watch.description = 'Sets up Browsersync and watches files for changes.';

/**
 * Compiles global Sass files and updates Browsersync.
 */
function compileGlobalSass() {
  return gulp.src(config.sass.global.srcFiles)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.global.destDir))
    .pipe(browserSync.stream({match: '**/*.css'}));
}
compileGlobalSass.description = 'Compiles global Sass files and updates Browsersync.';

/**
 * Copies global CSS files to Pattern Lab's public directory.
 */
function copyCss(cb) {
  if (isDirectory(config.patternLab.publicCssDir)) {
    gulp.src(config.sass.global.destDir + '/**/*.css')
      .pipe(gulp.dest(config.patternLab.publicCssDir))
      .pipe(browserSync.stream());
  }
  cb();
}
copyCss.description = "Copies global CSS files to Pattern Lab's public directory.";

/**
 * Creates concatenated JavaScript file for Pattern Lab.
 */
function styleguideScripts(cb) {
  gulp.src(config.js.srcFiles)
    .pipe(concat('scripts-styleguide.js'))
    .pipe(gulp.dest(config.js.destDir));
  cb();
}
styleguideScripts.description = 'Creates concatenated JavaScript file for Pattern Lab.';

/**
 * Generates the Pattern Lab front-end.
 */
function plGenerate(cb) {
  if (isDirectory(config.patternLab.dir)) {
    cp.exec('php ' + config.patternLab.dir + '/core/console --generate', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
  else {
    if (!plConfig) {
      plConfig = require('./patternlab-config.json');
    }
    if (!patternlab) {
      patternlab = require('@pattern-lab/core')(plConfig);
    }
    patternlab
      .build({
        cleanPublic: plConfig.cleanPublic
      })
      .then(function () {
        cb();
      });
  }
}
plGenerate.description = 'Generates the Pattern Lab front-end.';

/**
 * Calls Browsersync reload.
 */
function bsReload(cb) {
  browserSync.reload();
  cb();
}

/**
 * Lints Sass files.
 */
function lintSass(cb) {
  gulp.src(config.sass.watchFiles)
    .pipe(stylelint({
      failAfterError: false,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
  cb();
}
lintSass.description = 'Lints Sass files.';
