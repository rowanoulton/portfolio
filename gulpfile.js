var gulp    = require('gulp'),
    compass = require('gulp-compass');

gulp.task('compass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(compass({
            config_file: './compass.rb',
            css: 'assets/css',
            sass: 'src/scss'
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['compass']);
});

gulp.task('default', ['watch']);