var gulp = require('gulp'),
    argv = require('yargs').argv,
    config = require('./gulp.config')(),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src(config.allJs)
        .pipe($.if(argv.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('wiredep', function () {
    log('Wire up the bower css js and our app js into the html');
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js, {read: false}), {
            ignorePath: 'src', addRootSlash: false}))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep'], function () {
    log('Wire up the app css into the html, and call wiredep ');
    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css, {read: false}), {
            ignorePath: 'src', addRootSlash: false}))
        .pipe(gulp.dest(config.client));
});

/*************************************************************************************
* gulp utility log messages
**************************************************************************************/

function log(messages) {
    if (typeof (messages) === 'object') {
        for (var item in messages) {
            if (messages.hasOwnProperty(item)) {
                $.util.log($.util.colors.yellow(messages[item]));
            }
        }
    } else {
        $.util.log($.util.colors.yellow(messages));
    }
}
