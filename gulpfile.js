'use strict';

var config      = require('./config.json');
var gulp        = require('gulp');
var run         = require('gulp-run');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var fs          = require('fs');

gulp.task('watch', ['sass-change'], function() {
    browserSync.init({
        proxy: {
            target: "localhost:8080",
            reqHeaders: function(config) {
                return {
                    "host": "www.aleksip.dev"
                }
            }
        }
    });
    gulp.watch(config.sass.srcFiles, ['sass-change']);
    gulp.watch(config.patternFiles, ['patterns-change']);
    gulp.watch(config.templateFiles, ['templates-change']);
});

gulp.task('sass', function() {
    return gulp.src(config.sass.srcFiles)
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass.options).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.sass.destDir))
        .pipe(browserSync.stream())
    ;
});

gulp.task('sass-change', function() {
    runSequence('sass', 'pl:copy-css', 'pl:generate');
});

gulp.task('patterns-change', function() {
    runSequence('pl:copy-patterns', 'pl:generate');
});

gulp.task('templates-change', function() {
    runSequence('drush:cr', 'bs:reload');
});

gulp.task('pl:copy-css', function() {
    try {
        if (fs.statSync(config.patternLab.sourceCssDir).isDirectory()) {
            return gulp.src(config.sass.destDir + '/**/*')
                .pipe(gulp.dest(config.patternLab.sourceCssDir))
            ;
        }
    }
    catch (err) {
        return;
    }
});

gulp.task('pl:copy-patterns', function() {
    try {
        if (fs.statSync(config.patternLab.sourcePatternsDir).isDirectory()) {
            return gulp.src(config.patternFiles)
                .pipe(gulp.dest(config.patternLab.sourcePatternsDir))
            ;
        }
    }
    catch (err) {
        return;
    }
});

gulp.task('pl:copy', ['pl:copy-css', 'pl:copy-patterns']);

gulp.task('pl:generate', function() {
    try {
        if (fs.statSync(config.patternLab.sourcePatternsDir).isDirectory()) {
            run('php pattern-lab/core/console --generate').exec();
        }
    }
    catch (err) {
    }
});

gulp.task('drush:cr', function() {
    return run('drush ' + config.drush.alias + ' cr').exec();
});

gulp.task('bs:reload', function () {
    browserSync.reload();
});

gulp.task('default', function() {
    runSequence('pl:copy-patterns', 'watch');
});
