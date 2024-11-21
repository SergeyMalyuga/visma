const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const htmlMin = require('gulp-htmlmin');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const mediaCombine = require('postcss-combine-media-query');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');

function server() {
    browserSync.init({
        server: {baseDir: './dist'},
        port: 8080,
        browser: ['/usr/bin/google-chrome'],
    });
}

function html() {
    return gulp.src('src/**/*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function scss() {
    const plugins = [autoprefixer(), cssnano(), mediaCombine()]
    return gulp.src('src/SASS/style.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}


function images() {
    return gulp.src('src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,avif}', {encoding: false})
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({stream: true}));
}

/*function fonts() {
    return gulp.src('src/vendor/fonts/!**!/!*.{eot,woff,woff2}')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.reload({stream: true}));
}*/

// function js(){
//     return gulp.src('src/**/*.js')
//         // .pipe(babel({presets: ['@babel/preset-env']}))
//         .pipe(terser())
//         .pipe(gulp.dest('dist/'))
//         .pipe(browserSync.reload({stream: true}));
// }

function js() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
}

function clean() {
    return del('dist');
}

function watchApp() {
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/**/*.scss', scss);
    gulp.watch(['src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,avif}'], images);
    // gulp.watch('src/fonts/**/*.{eot,woff,woff2}', fonts());
}

const build = gulp.series(clean, gulp.parallel(html, scss, js, images));
const watch = gulp.parallel(build, watchApp, server);

exports.server = server;
exports.html = html;
exports.scss = scss;
exports.clean = clean;
exports.default = server;
exports.images = images;
// exports.fonts = fonts;
exports.js = js;
exports.build = build;
exports.watch = watch;