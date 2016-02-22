/*
 * Imports
 */
import config 	from './config.json';
import csscomb 	from 'gulp-csscomb';
import csslint 	from 'gulp-csslint';
import gulp 	from 'gulp';

/*
 * Base CSS task
 * -------------
 * Here we format and lint our original source file
 */
export default gulp.task( 'css:base', () => {

	return gulp

		// Get CSS file
		.src( `${config.paths.src}/burgerlicious.css` )

		// Format CSS
		.pipe( csscomb( './.csscomb.json' ) )

		// Lint CSS
		.pipe( csslint( './.csslintrc' ) )
		.pipe( csslint.reporter() )
		.pipe( csslint.failReporter() )

		// Update CSS file
		.pipe( gulp.dest( config.paths.src ) );

} );
