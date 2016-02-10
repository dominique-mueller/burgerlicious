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
export default gulp.task( 'css-base', () => {

		// Get CSS file
	gulp.src( config.paths.src + '/burgerlicious.css' )

		// Format CSS
		.pipe( csscomb() )

		// Lint CSS
		.pipe( csslint() )
		.pipe( csslint.reporter() )

		// Update CSS file
		.pipe( gulp.dest( config.paths.src ) );

} );
