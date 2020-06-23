const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const server = browserSync.create();
const paths = {
    'scripts': {
        src: './src/*js',
        dist: './dist/assets/js/',
        serve: './public/assets/js/'
    },
    'styles': {
        src: './styles/*.scss',
        dist: './dist/assets/css/',
        serve: './public/assets/css/'
    }
};

const build_scripts = () => {

};

const reload = (done) => {

};

const serve = (done) => {
    server.init({
        server: {
            baseDir: "./public"
        },
    });

    gulp.watch("./styles/*.scss", () => {
        return gulp.src("styles/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("public/assets/css"))
            .pipe(browserSync.stream());
    });

    gulp.watch("./public/*.html").on('change', server.reload);

    gulp.watch(paths.scripts.src, function build_scripts(done) {
        gulp.src(paths.scripts.src, { sourcemaps: true })
            .pipe(babel({
                presets: ['@babel/preset-env']
            }))
            .pipe(uglify())
            .pipe(concat('build.min.js'))
            .pipe(gulp.dest(paths.scripts.serve));
        server.reload();
        done();
    });

    done();
};

const build = () => {

};

exports.serve = serve;
exports.build = build;
