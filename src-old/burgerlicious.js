const SVGNS = 'http://www.w3.org/2000/svg';

/**
 * Default options
 * @type  {Object}
 */
const DEFAULTOPTIONS = new Map( [
	[ 'lineColor', '#111' ],
	[ 'lineThickness', 2 ],
	[ 'animationRotation', 'right' ],
	[ 'animationDuration', 500 ]
] );

/* ==========  CLASSES  ========== */

/**
 * Burger class
 */
export class Burger {

		// Create SVG element
		// const svg = document.createElementNS( SVGNS, 'svg' );
		// svg.setAttributeNS( null, 'width', '32' );
		// svg.setAttributeNS( null, 'height', '32' );
		// svg.setAttributeNS( null, 'viewBox', '0 0 32 32' );
		// svg.setAttributeNS( null, 'class', `dm-burger rotate-${this._options.get( 'animationRotation' )}` );

		// Create groups
		// const topGroup = document.createElementNS( SVGNS, 'g' );
		// topGroup.setAttributeNS( null, 'transform', 'translate(0, -6)' );
		// const bottomGroup = document.createElementNS( SVGNS, 'g' );
		// bottomGroup.setAttributeNS( null, 'transform', 'translate(0, 6)' );

		// Add some extra space if the thickness is an odd number
		// This should prevent blurred looking lines
		// const extraSpace = this._options.get( 'lineThickness' ) % 2 === 0 ? 0 : 0.5;

		// Create line
		// const middleLine = document.createElementNS( SVGNS, 'line' );
		// middleLine.setAttributeNS( null, 'x1', 6 + extraSpace );
		// middleLine.setAttributeNS( null, 'y1', 16 + extraSpace );
		// middleLine.setAttributeNS( null, 'x2', 26 + extraSpace );
		// middleLine.setAttributeNS( null, 'y2', 16 + extraSpace );
		// middleLine.style.transformOrigin = `${16 + extraSpace}px ${16 + extraSpace}px`;

		// Set line stroke and color
		// middleLine.setAttributeNS( null, 'stroke', this._options.get( 'lineColor' ) );
		// middleLine.setAttributeNS( null, 'stroke-width', this._options.get( 'lineThickness' ) );

		// Create and setup lines
		// topLine.setAttributeNS( null, 'class', 'dm-burger-top' );
		// bottomLine.setAttributeNS( null, 'class', 'dm-burger-bottom' );
		// middleLine.setAttributeNS( null, 'class', 'dm-burger-middle' );

		// Set animations
		// if ( this._options.get( 'animationDuration' ) !== 0 ) {
		// 	const animationSlow = `${this._options.get( 'animationDuration' )}ms`;
		// 	const animationMedium = `${this._options.get( 'animationDuration' ) / 1.5}ms`;
		// 	const animationFast = `${this._options.get( 'animationDuration' ) / 3}ms`;
		// 	svg.style.transition = `transform ${animationSlow} ease-in-out`;
		// 	topLine.style.transition = `transform ${animationSlow} ease-in-out`;
		// 	bottomLine.style.transition = `transform ${animationSlow} ease-in-out`;
		// 	middleLine.style.transition = `opacity ${animationMedium} ease-in-out ${animationFast},
		// 								   transform ${animationMedium} ease-in-out ${animationFast}`;
		// }

		// Make it awesome
		// this._btn.style.cursor = 'pointer';

	}

}
