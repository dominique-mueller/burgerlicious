/* eslint-disable */

/*
 * Imports
 */
import cssBase 		from './gulp/css-base';
import css 			from './gulp/css';
import jsBase 		from './gulp/js-base';
import js 			from './gulp/js';
import gulp 		from 'gulp';
import gutil 		from 'gulp-util';
import runSequence 	from 'run-sequence';

/* eslint-enable */

/*
 * Build task
 * ----------
 * This is the main production build task
 * - First we call the base tasks which update the original source files
 * - Then we build the transpiled / optimized versions
 */
gulp.task( 'build', ( done ) => {
	gutil.log( 'Automated build process started ...' );
	runSequence(
		[ 'css-base', 'js-base' ],
		[ 'css', 'js' ],
		done
	);
	gutil.log( 'Build process successfully finished.' );
} );

/*
 * Code check task
 * ---------------
 * This task only validates and formats the original source code
 */
gulp.task( 'codecheck', [ ' css-base', 'js-base' ] );
