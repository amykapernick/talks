require('dotenv').config();

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const zip = require('gulp-zip');
const connect = require('gulp-connect');

let port = process.env.PORT || 8000;

gulp.task('js', () =>
	gulp
		.src(['./js/reveal.js'])
		.pipe(uglify())
		.pipe(rename('reveal.min.js'))
		.pipe(gulp.dest('./js'))
);

gulp.task('css-themes', () =>
	gulp
		.src(['./css/theme/source/*.{sass,scss}'])
		.pipe(sass())
		.pipe(gulp.dest('./css/theme'))
);

gulp.task(
	'css-core',
	gulp.series(
		() =>
			gulp
				.src(['css/reveal.scss', 'css/custom.scss', 'css/a11y-dark.scss'])
				.pipe(sass())
				.pipe(autoprefixer())
				.pipe(gulp.dest('./css')),
		() =>
			gulp
				.src(['css/reveal.css'])
				.pipe(minify())
				.pipe(rename('reveal.min.css'))
				.pipe(gulp.dest('./css'))
	)
);

gulp.task('css', gulp.parallel('css-themes', 'css-core'));

gulp.task(
	'test',
	gulp.series(() =>
		gulp
			.src(['./js/reveal.js'])
			.pipe(eslint({ useEslintrc: true }))
			.pipe(eslint.format())
	)
);

gulp.task('default', gulp.series(gulp.parallel('js', 'css'), 'test'));

gulp.task(
	'package',
	gulp.series('default', () =>
		gulp
			.src(['./*/*.html', './css/**', './js/**', './lib/**', './images/**', './plugin/**', './**.md'])
			.pipe(zip('reveal-js-presentation.zip'))
			.pipe(gulp.dest('./'))
	)
);

gulp.task('serve', () => {
	connect.server({
		root: '.',
		port: port,
		livereload: true,
		useAvailablePort: true,
	});
	gulp.watch(['js/reveal.js'], gulp.series('js'));
	gulp.watch(['css/**/*.scss'], gulp.series('css-core'));
});
