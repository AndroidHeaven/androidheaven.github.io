var gulp       = require('gulp'),
	bower      = require('gulp-bower');
	sass       = require('gulp-sass'),
	prefix     = require('gulp-autoprefixer'),
	minify     = require('gulp-minify-css'),
	concat     = require('gulp-concat'),
	uglify     = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps');

var paths = {
	styles:  'styles/*.scss',
	scripts: ['scripts/modernizr.js', 'scripts/parallax.js', 'bower_components/fastclick/lib/fastclick.js', 'bower_components/dropzone/downloads/dropzone.js', 'scripts/main.js'],
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(prefix('last 2 versions', '> 1%', 'ie 9', 'ie 8', 'Firefox ESR', 'Opera 12.1'))
			.pipe(minify({cache: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('styles/build/'));
});

gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(concat('main.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('scripts/build/'));
});

gulp.task('watch', function() {
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.scripts, ['scripts']);
});

// Workflows
// $ gulp: Builds, prefixes, and minifies CSS files; concencates and minifies JS files; watches for changes. The works.
gulp.task('default', ['styles', 'scripts', 'watch']);

// $ gulp build: Builds, prefixes, and minifies CSS files; concencates and minifies JS files. For deployments.
gulp.task('build', ['styles', 'scripts']);