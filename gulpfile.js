let gulp = require('gulp');
let less = require('gulp-less');
let postcss = require('gulp-postcss');
let cssnext = require('postcss-cssnext');
let cleancss = require('gulp-clean-css');
let rename = require('gulp-rename');

let postcssOptions = [cssnext];

gulp.task('css', () => {
    return gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(postcss(postcssOptions))
        .pipe(postcss([require('autoprefixer')]))
        .pipe(gulp.dest('dist/css'))
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
});

// Primera prueba
// let gulp = require('gulp');
// let colors = require('ansi-colors');

// gulp.task('default', () => {
//     console.log('Tarea por ' + colors.red('defecto.'));
// });

// Segunda prueba
// let gulp = require('gulp');
// let newer = require('gulp-newer');
// let less = require('gulp-less');

// gulp.task('css', () => {
//     return gulp.src('src/css/*.less')
//         .pipe(newer({
//             dest: 'dist/css',
//             ext: '.css',
//             extra: 'src/css/includes/**/*.less',
//         }))
//         .pipe(less())
//         .pipe(gulp.dest('dist/css'))
// });