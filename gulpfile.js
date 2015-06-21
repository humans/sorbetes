var gulp       = require('gulp');
var stylus     = require('gulp-stylus');
var jade       = require('gulp-jade');
var imagemin   = require('gulp-imagemin');
var jeet       = require('jeet');
var rupture    = require('rupture')
var pngquant   = require('imagemin-pngquant');
var livereload = require('gulp-livereload');

var path = {
    views:  './app/*.jade',
    styles: './app/assets/stylus/*.styl',
    images: './app/assets/images/**/*.png'
};

gulp.task('stylus', function () {
    var options = {
        compress: true,
        use: [jeet(), rupture()]
    };

    gulp.src(path.styles)
        .pipe(stylus(options))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(path.views, ['jade']);
    gulp.watch('./app/assets/stylus/**/*.styl', ['stylus']);
});

gulp.task('jade', function () {
    gulp.src(path.views)
        .pipe(jade())
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

gulp.task('optimize', function () {
    var options = {
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use:         [pngquant()]
    };

    return gulp.src(path.images)
               .pipe(imagemin(options))
               .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['watch']);
