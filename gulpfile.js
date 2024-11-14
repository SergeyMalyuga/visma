const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const htmlMin = require('gulp-htmlmin');
const del = require('del');

function server() {
    browserSync.init({
        server: {baseDir: './dist'},
        port: 8080
    });
}

function html() {
    return gulp.src('src/**/*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function clean() {
    del('./dist');
}


exports.server = server;
exports.html = html;
exports.clean = clean;
exports.default = server;