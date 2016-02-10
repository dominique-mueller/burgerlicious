/*
 * Imports
 */
import config 	from './config.json';
import eslint 	from 'gulp-eslint';
import gulp 	from 'gulp';
import jscs 	from 'gulp-jscs';

/*
 * JSCS options
 */
const jscsOptions = {
	'fix': true
};

/*
 * Base JavaScript task
 * --------------------
 * Here we format and lint our original source file
 */
export default gulp.task( 'js-base', () => {

		// Get JS file
	gulp.src( config.paths.src + '/burgerlicious.js' )

		// Format JS
		.pipe( jscs( jscsOptions ) )
		.pipe( jscs.reporter() )

		// Lint JS
		.pipe( eslint() )
		.pipe( eslint.format() )

		// Update JS file
		.pipe( gulp.dest( config.paths.src ) );

} );
