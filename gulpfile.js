var gulp = require('gulp'),
    argv = require('yargs').argv,
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('./gulp.config')();

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
