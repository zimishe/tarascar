/**
 * Created by eugene on 22.09.2016.
 */

/**
 * Created by eugene on 9.12.15.
 *
 * uglify js -> sudo npm install --save-dev gulp-uglify
 * concat js -> sudo npm install --save-dev gulp-concat
 * concat -> sudo npm install --save-dev gulp-concat
 * 
 * sudo npm install --save redux react-redux gulp gulp-watch gulp-sass gulp-cssmin gulp-rename gulp-util gulp-autoprefixer gulp-sourcemaps
 * 
 * for server ==> sudo npm install --save consolidate errorhandler express morgan resource-routing swig nconf nodemon
 */

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('watch', ['sass'], function () {
    
    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch([
        '*.html',
        'assets/js/**/*.js',
        'assets/css/**/*.css'
    ])
});

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function(){
   return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(e) {
            gutil.log(e);
            this.emit('end');
        })) // Using gulp-sass
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css/compressed'))
});

















