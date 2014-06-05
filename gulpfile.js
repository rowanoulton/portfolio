var gulp     = require('gulp'),
    compass  = require('gulp-compass'),
    imagemin = require('gulp-imagemin');

gulp.task('compass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(compass({
            config_file: './compass.rb',
            css: 'assets/css',
            sass: 'src/scss'
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('images', function () {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/img'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['compass']);
    gulp.watch('./src/img/*', ['images']);
});

gulp.task('build', ['images', 'compass']);
gulp.task('default', ['watch']);