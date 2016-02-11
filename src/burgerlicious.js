/*!
 * Burgerlicious
 *
 * Yummy! Burgerlicious is the animated burger icon you always wanted.
 * SVG-based, dependency-free, customizable. And ES6-ready.
 *
 * @author 	   Dominique Müller <hello@dominique-mueller.de>
 * @copyright  Dominique Müller
 * @license    MIT <http://opensource.org/licenses/MIT>
 * @link 	   Github <https://github.com/dominique-mueller/burgerlicious>
 * @version    1.0.1
 */

/* ==========  POLYFILL FOR CUSTOM EVENTS  ========== */

/* eslint-disable */

/*
 * Polyfill for creating custom events, will be used in IE9+
 *
 * Taken from the Mozilla developer site:
 * <https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent>
 */
( function( window ) {
	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
} )( window );

/* eslint-enable */

/* ==========  VARIABLES  ========== */

/*
 * SVG namespace
 * @type  {String}
 */
const SVGNS = 'http://www.w3.org/2000/svg';

/*
 * Default options
 * @type  {Object}
 */
const DEFAULTOPTIONS = new Map( [
	[ 'lineColor', '#111' ],
	[ 'lineThickness', 2 ],
	[ 'animationRotation', 'right' ],
	[ 'animationDuration', 500 ]
] );

/*
 * Events
 * @type  {Map}
 */
const EVENTS = new Map( [
	[ 'onOpen', new CustomEvent( 'burgerlicious.open' ) ],
	[ 'onOpened', new CustomEvent( 'burgerlicious.opened' ) ],
	[ 'onClose', new CustomEvent( 'burgerlicious.close' ) ],
	[ 'onClosed', new CustomEvent( 'burgerlicious.closed' ) ]
] );

/* ==========  CLASSES  ========== */

/*
 * Burger class
 */
export class Burger {

	/*
	 * Burger constructor
	 * ------------------
	 * Setup and configuration
	 *
	 * @param  {DOM Element}  element    Burger button DOM element
	 * @param  {Object} 	  [options]  Burger options object
	 */
	constructor( element, options ) {

		// Create and setup class attributes
		this._btn = element;
		this._isOpen = false;
		this._options = new Map( DEFAULTOPTIONS );

		// Overwrite default options with custom options (if available)
		if ( typeof options !== 'undefined' ) {
			for ( const key of DEFAULTOPTIONS.keys() ) {
				if ( options.hasOwnProperty( key ) ) {
					this._options.set( key, options[ key ] );
				}
			}
		}

		// Build the burger icon
		this._burger = this.build();

		// Setup click event listener
		this._btn.addEventListener( 'click', () => {
			this.toggle();
		} );

	}

	/*
	 * Build the svg burger icon
	 * -------------------------
	 * In here we build the svg icon as well as add classes and styles.
	 *
	 * @return  {DOM element}  Reference to the svg DOM element
	 */
	build() {

		// Create SVG element
		const svg = document.createElementNS( SVGNS, 'svg' );
		svg.setAttributeNS( null, 'width', '32' );
		svg.setAttributeNS( null, 'height', '32' );
		svg.setAttributeNS( null, 'viewBox', '0 0 32 32' );
		svg.setAttributeNS( null, 'class', 'dm-burger rotate-' + this._options.get( 'animationRotation' ) );

		// Create groups
		const topGroup = document.createElementNS( SVGNS, 'g' );
		topGroup.setAttributeNS( null, 'transform', 'translate(0, -6)' );
		const bottomGroup = document.createElementNS( SVGNS, 'g' );
		bottomGroup.setAttributeNS( null, 'transform', 'translate(0, 6)' );

		// Add some extra space if the thickness is an odd number
		// This should prevent blurred looking lines
		const extraSpace = this._options.get( 'lineThickness' ) % 2 === 0 ? 0 : 0.5;

		// Create line
		const middleLine = document.createElementNS( SVGNS, 'line' );
		middleLine.setAttributeNS( null, 'x1', 6 + extraSpace );
		middleLine.setAttributeNS( null, 'y1', 16 + extraSpace );
		middleLine.setAttributeNS( null, 'x2', 26 + extraSpace );
		middleLine.setAttributeNS( null, 'y2', 16 + extraSpace );
		middleLine.style.transformOrigin = `${16 + extraSpace}px ${16 + extraSpace}px`;

		// Set line stroke and color
		middleLine.setAttributeNS( null, 'stroke', this._options.get( 'lineColor' ) );
		middleLine.setAttributeNS( null, 'stroke-width', this._options.get( 'lineThickness' ) );

		// Create and setup lines
		const topLine = middleLine.cloneNode( false );
		topLine.setAttributeNS( null, 'class', 'dm-burger-top' );
		const bottomLine = middleLine.cloneNode( false );
		bottomLine.setAttributeNS( null, 'class', 'dm-burger-bottom' );
		middleLine.setAttributeNS( null, 'class', 'dm-burger-middle' );

		// Set animations
		if ( this._options.get( 'animationDuration' ) !== 0 ) {
			const animationSlow = this._options.get( 'animationDuration' ) + 'ms';
			const animationMedium = this._options.get( 'animationDuration' ) / 1.5 + 'ms';
			const animationFast = this._options.get( 'animationDuration' ) / 3 + 'ms';
			svg.style.transition = `transform ${animationSlow} ease-in-out`;
			topLine.style.transition = `transform ${animationSlow} ease-in-out`;
			bottomLine.style.transition = `transform ${animationSlow} ease-in-out`;
			middleLine.style.transition = `opacity ${animationMedium} ease-in-out ${animationFast},
										   transform ${animationMedium} ease-in-out ${animationFast}`;
		}

		// Take ingredients, create the burger and put it on the grill
		topGroup.appendChild( topLine );
		bottomGroup.appendChild( bottomLine );
		svg.appendChild( topGroup );
		svg.appendChild( middleLine );
		svg.appendChild( bottomGroup );

		// Set button position first
		// This is necessary in order to center out the burger icon on the button surface
		if ( this._btn.style.position === '' ||
			this._btn.style.position === 'static' ||
			this._btn.style.position === 'initial' ||
			this._btn.style.position === 'inherit' ) {
			this._btn.style.position = 'relative';
		}

		// Make it awesome
		this._btn.style.cursor = 'pointer';

		// It's done, so put it in the site
		const fragment = document.createDocumentFragment();
		fragment.appendChild( svg );
		this._btn.appendChild( fragment );

		return svg;

	}

	/*
	 * Toggle the burger
	 */
	toggle() {
		this._isOpen ? this.close() : this.open();
	}

	/*
	 * Open the burger
	 */
	open() {

		// Open burger
		this._burger.classList.add( 'is-open' );
		this._isOpen = true;

		// Throw 'onOpen' event
		document.dispatchEvent( EVENTS.get( 'onOpen' ) );

		// Throw 'onOpened' event (if animations are enabled)
		if ( this._options.animationDuration === 0 ) {
			document.dispatchEvent( EVENTS.get( 'onOpened' ) );
		} else {
			const _self = this;
			this._burger.addEventListener( 'transitionend', function done() {
				_self._burger.removeEventListener( 'transitionend', done );
				document.dispatchEvent( EVENTS.get( 'onOpened' ) );
			} );
		}

	}

	/*
	 * Close the burger
	 */
	close() {

		// Close burger
		this._burger.classList.remove( 'is-open' );
		this._isOpen = false;

		// Throw 'onClose' event
		document.dispatchEvent( EVENTS.get( 'onClose' ) );

		// Throw 'onClosed' event (if animations are enabled)
		if ( this._options.animationDuration === 0 ) {
			document.dispatchEvent( EVENTS.get( 'onClosed' ) );
		} else {
			const _self = this;
			this._burger.addEventListener( 'transitionend', function done() {
				_self._burger.removeEventListener( 'transitionend', done );
				document.dispatchEvent( EVENTS.get( 'onClosed' ) );
			} );
		}

	}

	/**
	 * Checks if the burger is open
	 * @return  {Boolean}  Burger status
	 */
	isOpen() {
		return this._isOpen;
	}

	/*
	 * Add an event listener
	 * ---------------------
	 * This is just a shorter way of listening to burger events.
	 *
	 * @param  {String}    event     Name of the event
	 * @param  {Function}  callback  Callback function
	 */
	on( event, callback ) {
		document.addEventListener( `burgerlicious.${event}`, callback );
	}

	/*
	 * Remove an event listener
	 * ------------------------
	 * This is just a shorter way of removing listeners for burger events.
	 *
	 * @param  {String}    event     Name of the event
	 * @param  {Function}  callback  Callback function
	 */
	off( event, callback ) {
		document.removeEventListener( `burgerlicious.${event}`, callback );
	}

}
