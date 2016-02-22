/*
 * Imports
 */
import babel 	from 'gulp-babel';
import config 	from './config.json';
import gulp 	from 'gulp';
import gutil 	from 'gulp-util';
import rename 	from 'gulp-rename';
import uglify 	from 'gulp-uglify';

/*
 * Uglify options
 */
const uglifyOptions = {
	'preserveComments': 'license'
};

/*
 * JavaScript task (for ES5 only)
 * ------------------------------
 * Here we transpile ES6 to ES5, uglify and save the code into the build folder
 */
export default gulp.task( 'js:build', () => {

	return gulp

		// Get JS file
		.src( `${config.paths.src}/burgerlicious.js` )

		// Transpile ES6 code to ES5 code
		.pipe( babel() )

		// Save ES5 JS file
		.pipe( rename( 'burgerlicious.es5.js' ) )
		.pipe( gulp.dest( config.paths.dest ) )

		// Uglify JS
		.pipe( uglify( uglifyOptions ).on( 'error', gutil.log ) )

		// Save minified ES5 JS file
		.pipe( rename( 'burgerlicious.es5.min.js' ) )
		.pipe( gulp.dest( config.paths.dest ) );

} );
