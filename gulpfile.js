const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const htmlreplace = require('gulp-html-replace');
const concat      = require('gulp-concat');
const cleanCSS    = require('gulp-clean-css');
const sass        = require('gulp-sass');
const minify      = require('gulp-minify');

const scripts     = require('./build-config/scripts');

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
    .pipe(htmlreplace({
        'fonts': 'fonts/font-awesome/css/font-awesome.min.css',
        'css': 'css/styles.css',
        'js': 'js/vendor-min.js',
        'base': '<base href="/">'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function () {
    gulp.src("./src/fonts/**/*.*")
    .pipe(gulp.dest('./dist/fonts'));

    gulp.src("./node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest('./dist/fonts/font-awesome/css'));

    gulp.src("./node_modules/font-awesome/fonts/*.*")
    .pipe(gulp.dest('./dist/fonts/font-awesome/fonts'));
});

gulp.task('css', function () {
    gulp.src('./src/sass/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));

    gulp.src('./src/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    gulp.src("./src/js/*.js")
    .pipe(gulp.dest('./dist/js'));

    gulp.src(scripts)
    .pipe(concat('vendor.js'))
    .pipe(minify({
        noSource: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function () {
    gulp.src("./src/images/*.*")
    .pipe(gulp.dest('./dist/images'));

});

gulp.task('sass', function () {

    return gulp.src('./src/sass/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./src/css/'));
});

gulp.task('htaccess', function () {
    gulp.src("./src/.htaccess")
    .pipe(gulp.dest('./dist/'));

});

gulp.task('robots', function () {
    gulp.src("./src/robots.txt")
    .pipe(gulp.dest('./dist/'));

});

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        //open: false,
        server: "./",
        startPath: "./src/",
        // ui: {
        //   port: 8080
        // }
    });

    gulp.watch("./src/sass/**/*.scss", ['sass']);
    gulp.watch("./src/app/**/*.*").on('change', browserSync.reload);
    gulp.watch("./src/css/**/*.*").on('change', browserSync.reload);
    gulp.watch("./src/fonts/**/*.*").on('change', browserSync.reload);
    gulp.watch("./src/images/**/*.*").on('change', browserSync.reload);
    gulp.watch("./src/js/**/*.*").on('change', browserSync.reload);
});

gulp.task('build', function () {
    gulp.start(['html', 'htaccess', 'robots', 'fonts', 'sass', 'css', 'js', 'images']);
});

gulp.task('default', ['serve']);
