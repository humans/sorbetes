var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var jade         = require('gulp-jade');
var imagemin     = require('gulp-imagemin');
var uglify       = require('gulp-uglify');
var jeet         = require('jeet');
var rupture      = require('rupture')
var pngquant     = require('imagemin-pngquant');
var livereload   = require('gulp-livereload');
var autoprefixer = require('autoprefixer-stylus');

var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify('./app/assets/js/main.js')
        .transform(babelify, { stage: 4 })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('stylus', function () {
    var options = {
        compress: true,
        use: [
            jeet(),
            rupture(),
            autoprefixer({ browsers: ['last 2 versions'] })
        ]
    };

    gulp.src('./app/assets/stylus/*.styl')
        .pipe(stylus(options))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

gulp.task('compress', function () {
    return gulp.src('app/assets/js/bundle.js')
               .pipe(uglify())
               .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('./app/**/*.jade', ['jade']);
    gulp.watch('./app/assets/js/**/*.js', ['browserify']);
    gulp.watch('./app/assets/stylus/**/*.styl', ['stylus']);
    gulp.watch('./app/assets/js/bundle.js', ['compress']);
});

gulp.task('jade', function () {
    gulp.src('./app/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

gulp.task('optimize', function () {
    var options = {
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use:         [pngquant()]
    };

    return gulp.src('./app/assets/images/**/*.png')
               .pipe(imagemin(options))
               .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['watch']);
