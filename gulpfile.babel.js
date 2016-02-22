/* eslint-disable */

/*
 * Imports
 */
import cssBase 		from './tools/gulp_tasks/css_base';
import css 			from './tools/gulp_tasks/css_build';
import jsBase 		from './tools/gulp_tasks/js_base';
import js 			from './tools/gulp_tasks/js_build';
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
	runSequence(
		[ 'css:base', 'js:base' ],
		[ 'css:build', 'js:build' ],
		done
	);
} );

/*
 * Code check task
 * ---------------
 * This task only validates and formats the original source code
 */
gulp.task( 'codecheck', [ ' css:base', 'js:base' ] );
