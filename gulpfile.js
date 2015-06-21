var gulp    = require('gulp');
var stylus  = require('gulp-stylus');
var jade    = require('gulp-jade');
var jeet    = require('jeet');
var rupture = require('rupture')

var path = {
    views:  './app/*.jade',
    styles: './app/stylus/*.styl'
};

gulp.task('stylus', function () {
    var options = {
        compress: true,
        use: [jeet(), rupture()]
    };

    gulp.src(path.styles)
        .pipe(stylus(options))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch(path.views, ['jade']);
    gulp.watch(path.styles, ['stylus']);
});

gulp.task('jade', function() {
    gulp.src(path.views)
        .pipe(jade())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['watch']);
