var fs = require('fs');

var gulp = require('gulp');
var jade = require('gulp-jade');

var paths = {
	jade : {
		src : 'src/markups/pages/*.jade',
		dist : 'dist/pages'
	}
};

gulp.task('jade', function() {
	var YOUR_LOCALS = './content.json';

	gulp.src(paths.jade.src)
		.pipe(jade({
			locals: JSON.parse(fs.readFileSync(YOUR_LOCALS, 'utf-8')),
			pretty : '\t'
		}))
		.pipe(gulp.dest(paths.jade.dist))
});

gulp.task('watch', function () {
	gulp.watch(paths.jade.src, ['jade'])
});

gulp.task('default', ['jade', 'watch']);