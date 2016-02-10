(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.burgerlicious = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	/*!
  * Burgerlicious
  *
  * Yummy! Burgerlicious is the animated burger icon you always wanted. SVG-based, dependency-free, customizable.
  *
  * @author 	   Dominique Müller <hello@dominique-mueller.de>
  * @copyright  Dominique Müller
  * @license    MIT <http://opensource.org/licenses/MIT>
  * @link 	   Github <https://github.com/dominique-mueller/burgerlicious>
  * @version    1.0.0
  */

	/* ==========  POLYFILL FOR CUSTOM EVENTS  ========== */

	/* eslint-disable */

	/*
  * Polyfill for creating custom events, will be used in IE9+
  *
  * Taken from the Mozilla developer site:
  * <https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent>
  */
	(function (window) {
		function CustomEvent(event, params) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent('CustomEvent');
			evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
			return evt;
		}
		CustomEvent.prototype = window.Event.prototype;
		window.CustomEvent = CustomEvent;
	})(window);

	/* eslint-enable */

	/* ==========  VARIABLES  ========== */

	/*
  * SVG namespace
  * @type  {String}
  */
	var SVGNS = 'http://www.w3.org/2000/svg';

	/*
  * Default options
  * @type  {Object}
  */
	var DEFAULTOPTIONS = new Map([['lineColor', '#111'], ['lineThickness', 2], ['animationRotation', 'right'], ['animationDuration', 500]]);

	/*
  * Events
  * @type  {Map}
  */
	var EVENTS = new Map([['onOpen', new CustomEvent('burgerlicious.open')], ['onOpened', new CustomEvent('burgerlicious.opened')], ['onClose', new CustomEvent('burgerlicious.close')], ['onClosed', new CustomEvent('burgerlicious.closed')]]);

	/* ==========  CLASSES  ========== */

	/*
  * Burger class
  */

	var Burger = exports.Burger = function () {

		/*
   * Burger constructor
   * ------------------
   * Setup and configuration
   *
   * @param  {DOM Element}  element    Burger button DOM element
   * @param  {Object} 	  [options]  Burger options object
   */

		function Burger(element, options) {
			var _this = this;

			_classCallCheck(this, Burger);

			// Create and setup class attributes
			this._btn = element;
			this._isOpen = false;
			this._options = new Map(DEFAULTOPTIONS);

			// Overwrite default options with custom options (if available)
			if (typeof options !== 'undefined') {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = DEFAULTOPTIONS.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var key = _step.value;

						if (options.hasOwnProperty(key)) {
							this._options.set(key, options[key]);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}

			// Build the burger icon
			this._burger = this.build();

			// Setup click event listener
			this._btn.addEventListener('click', function () {
				_this.toggle();
			});
		}

		/*
   * Build the svg burger icon
   * -------------------------
   * In here we build the svg icon as well as add classes and styles.
   *
   * @return  {DOM element}  Reference to the svg DOM element
   */


		_createClass(Burger, [{
			key: 'build',
			value: function build() {

				// Create SVG element
				var svg = document.createElementNS(SVGNS, 'svg');
				svg.setAttributeNS(null, 'width', '32');
				svg.setAttributeNS(null, 'height', '32');
				svg.setAttributeNS(null, 'viewBox', '0 0 32 32');
				svg.setAttributeNS(null, 'class', 'dm-burger rotate-' + this._options.get('animationRotation'));

				// Create groups
				var topGroup = document.createElementNS(SVGNS, 'g');
				topGroup.setAttributeNS(null, 'transform', 'translate(0, -6)');
				var bottomGroup = document.createElementNS(SVGNS, 'g');
				bottomGroup.setAttributeNS(null, 'transform', 'translate(0, 6)');

				// Add some extra space if the thickness is an odd number
				// This should prevent blurred looking lines
				var extraSpace = this._options.get('lineThickness') % 2 === 0 ? 0 : 0.5;

				// Create line
				var middleLine = document.createElementNS(SVGNS, 'line');
				middleLine.setAttributeNS(null, 'x1', 6 + extraSpace);
				middleLine.setAttributeNS(null, 'y1', 16 + extraSpace);
				middleLine.setAttributeNS(null, 'x2', 26 + extraSpace);
				middleLine.setAttributeNS(null, 'y2', 16 + extraSpace);

				// Set line stroke and color
				middleLine.setAttributeNS(null, 'stroke', this._options.get('lineColor'));
				middleLine.setAttributeNS(null, 'stroke-width', this._options.get('lineThickness'));

				// Create and setup lines
				var topLine = middleLine.cloneNode(false);
				topLine.setAttributeNS(null, 'class', 'dm-burger-top');
				var bottomLine = middleLine.cloneNode(false);
				bottomLine.setAttributeNS(null, 'class', 'dm-burger-bottom');
				middleLine.setAttributeNS(null, 'class', 'dm-burger-middle');

				// Set animations
				if (this._options.get('animationDuration') !== 0) {
					var animationSlow = this._options.get('animationDuration') + 'ms';
					var animationMedium = this._options.get('animationDuration') / 1.5 + 'ms';
					var animationFast = this._options.get('animationDuration') / 3 + 'ms';
					svg.style.transition = 'transform ' + animationSlow + ' ease-in-out';
					topLine.style.transition = 'transform ' + animationSlow + ' ease-in-out';
					bottomLine.style.transition = 'transform ' + animationSlow + ' ease-in-out';
					middleLine.style.transition = 'opacity ' + animationMedium + ' ease-in-out ' + animationFast + ',\n\t\t\t\t\t\t\t\t\t\t   transform ' + animationMedium + ' ease-in-out ' + animationFast;
				}

				// Take ingredients, create the burger and put it on the grill
				topGroup.appendChild(topLine);
				bottomGroup.appendChild(bottomLine);
				svg.appendChild(topGroup);
				svg.appendChild(middleLine);
				svg.appendChild(bottomGroup);

				// Set button position first
				// This is necessary in order to center out the burger icon on the button surface
				if (this._btn.style.position === '' || this._btn.style.position === 'static' || this._btn.style.position === 'initial' || this._btn.style.position === 'inherit') {
					this._btn.style.position = 'relative';
				}

				// Make it awesome
				this._btn.style.cursor = 'pointer';

				// It's done, so put it in the site
				var fragment = document.createDocumentFragment();
				fragment.appendChild(svg);
				this._btn.appendChild(fragment);

				return svg;
			}

			/*
    * Toggle the burger
    */

		}, {
			key: 'toggle',
			value: function toggle() {
				this._isOpen ? this.close() : this.open();
			}

			/*
    * Open the burger
    */

		}, {
			key: 'open',
			value: function open() {
				var _this2 = this;

				// Open burger
				this._burger.classList.add('is-open');
				this._isOpen = true;

				// Throw 'onOpen' event
				document.dispatchEvent(EVENTS.get('onOpen'));

				// Throw 'onOpened' event (if animations are enabled)
				if (this._options.animationDuration === 0) {
					document.dispatchEvent(EVENTS.get('onOpened'));
				} else {
					(function () {
						var _self = _this2;
						_this2._burger.addEventListener('transitionend', function done() {
							_self._burger.removeEventListener('transitionend', done);
							document.dispatchEvent(EVENTS.get('onOpened'));
						});
					})();
				}
			}

			/*
    * Close the burger
    */

		}, {
			key: 'close',
			value: function close() {
				var _this3 = this;

				// Close burger
				this._burger.classList.remove('is-open');
				this._isOpen = false;

				// Throw 'onClose' event
				document.dispatchEvent(EVENTS.get('onClose'));

				// Throw 'onClosed' event (if animations are enabled)
				if (this._options.animationDuration === 0) {
					document.dispatchEvent(EVENTS.get('onClosed'));
				} else {
					(function () {
						var _self = _this3;
						_this3._burger.addEventListener('transitionend', function done() {
							_self._burger.removeEventListener('transitionend', done);
							document.dispatchEvent(EVENTS.get('onClosed'));
						});
					})();
				}
			}

			/**
    * Checks if the burger is open
    * @return  {Boolean}  Burger status
    */

		}, {
			key: 'isOpen',
			value: function isOpen() {
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

		}, {
			key: 'on',
			value: function on(event, callback) {
				document.addEventListener('burgerlicious.' + event, callback);
			}

			/*
    * Remove an event listener
    * ------------------------
    * This is just a shorter way of removing listeners for burger events.
    *
    * @param  {String}    event     Name of the event
    * @param  {Function}  callback  Callback function
    */

		}, {
			key: 'off',
			value: function off(event, callback) {
				document.removeEventListener('burgerlicious.' + event, callback);
			}
		}]);

		return Burger;
	}();
});