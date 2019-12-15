require('dotenv').config();

const gulp = require('gulp'),
	eslint = require('gulp-eslint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify'),
	zip = require('gulp-zip'),
	connect = require('gulp-connect');
concat = require('gulp-concat');

let port = process.env.PORT || 8000,
	sassFiles = ['css/global.scss', 'css/reveal.scss', 'css/custom.scss', 'css/a11y-dark.scss'];

gulp.task('js', () =>
	gulp
		.src(['./js/reveal.js'])
		.pipe(uglify())
		.pipe(rename('reveal.min.js'))
		.pipe(gulp.dest('./js'))
);

gulp.task(
	'css-core',
	gulp.series(
		() =>
			gulp
				.src(sassFiles)
				.pipe(sass())
				.pipe(concat('reveal.css'))
				.pipe(gulp.dest('./css')),
		() =>
			gulp
				.src(['css/reveal.css'])
				.pipe(minify())
				.pipe(rename('reveal.min.css'))
				.pipe(gulp.dest('./css'))
	)
);

gulp.task('css', gulp.parallel('css-core'));

gulp.task(
	'test',
	gulp.series(() =>
		gulp
			.src(['./js/reveal.js'])
			.pipe(eslint({ useEslintrc: true }))
			.pipe(eslint.format())
	)
);

gulp.task('default', gulp.series(gulp.parallel('js', 'css')));

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
	gulp.watch(['css/*.scss'], gulp.series('css-core'));
});
