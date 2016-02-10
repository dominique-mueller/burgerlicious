/*
 * Imports
 */
import autoprefixer from 'gulp-autoprefixer';
import config 		from './config.json';
import csscomb 		from 'gulp-csscomb';
import cssmin 		from 'gulp-cssmin';
import gulp 		from 'gulp';
import rename 		from 'gulp-rename';

/*
 * Autoprefixer options
 */
const autoprefixerOptions = {
	'browsers': [ 'last 2 versions', '> 5%', 'Firefox ESR' ]
};

/*
 * CSS task
 * --------
 * Here we autoprefix and minify the code into the build folder
 */
export default gulp.task( 'css', () => {

		// Get CSS file
	gulp.src( config.paths.src + '/burgerlicious.css' )

		// Run CSS through autoprefixer
		.pipe( autoprefixer( autoprefixerOptions ) )

		// Minify CSS
		.pipe( cssmin() )

		// Save new CSS file
		.pipe( rename( 'burgerlicious.min.css' ) )
		.pipe( gulp.dest( config.paths.dest ) );

} );
