let postcss = require('gulp-postcss');
let cssnext = require('postcss-cssnext');
let cleancss = require('gulp-clean-css');
let rename = require('gulp-rename');

let postcssOptions = [cssnext];

gulp.task('css', () => {    
    return gulp.src('src/css/*.less')

        .pipe(less())
        .pipe(postcss(postcssOptions))
        .pipe(gulp.dest('dist/css'))
        .pipe(postcss(autoprefixer))
        .pipe(cleanscss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
});