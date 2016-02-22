/*
 * Imports
 */
import config 	from './config.json';
import eslint 	from 'gulp-eslint';
import gulp 	from 'gulp';

/**
 * eslint options
 */
const eslintOptions = {
	'fix': true
};

/*
 * Base JavaScript task
 * --------------------
 * Here we format and lint our original source file
 */
export default gulp.task( 'js:base', () => {

	return gulp

		// Get JS file
		.src( `${config.paths.src}/burgerlicious.js` )

		// Lint and format JS
		.pipe( eslint( './.eslintrc.json' ) )
		.pipe( eslint( eslintOptions ) )
		.pipe( eslint.format() )
		.pipe( eslint.failOnError() )

		// Update JS file
		.pipe( gulp.dest( config.paths.src ) );

} );
