[![GitHub version](https://badge.fury.io/gh/dominique-mueller%2Fburgerlicious.svg)](https://badge.fury.io/gh/dominique-mueller%2Fburgerlicious)
[![Bower version](https://badge.fury.io/bo/burgerlicious.svg)](https://badge.fury.io/bo/burgerlicious)
[![npm version](https://badge.fury.io/js/burgerlicious.svg)](https://badge.fury.io/js/burgerlicious)
[![devDependency Status](https://david-dm.org/dominique-mueller/burgerlicious/dev-status.svg)](https://david-dm.org/dominique-mueller/burgerlicious#info=devDependencies)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![Build Status](https://travis-ci.org/dominique-mueller/burgerlicious.svg?branch=master)](https://travis-ci.org/dominique-mueller/burgerlicious)

# Burgerlicious

Yummy! Burgerlicious is *the* animated burger icon you always wanted.<br>*SVG-based, dependency-free, customizable. And ES6-ready.*

![Burgerlicious Animations](/documentation/burgerlicious_animations.gif?raw=true)

<br>

---

**This document contains only the documentation for developers!**

- Details about **contributing** can be found [right here](https://github.com/dominique-mueller/burgerlicious/blob/master/.github/CONTRIBUTING.md).
- Details about the **license** can be found [right here](https://github.com/dominique-mueller/burgerlicious/blob/master/LICENSE).
- A detailed **changelog** is available [right here](https://github.com/dominique-mueller/burgerlicious/blob/master/CHANGELOG.md).

---

<br>

## How to install the burger

#### Using Bower

```
bower install burgerlicious --save
```

#### Using NPM

```
npm install burgerlicious --save
```

#### Using GitHub

```
git clone https://github.com/dominique-mueller/burgerlicious.git
```

#### Add to your document

Add the JavaScript file at the end of the html body or in your html head:

``` html
<!-- JavaScript (ES5 minified) -->
<script src="[path_to_burgerlicious]/build/burgerlicious.es5.min.js"></script>
```

Then add the CSS file in your html head:

``` html
<!-- CSS (minified) -->
<link rel="stylesheet" href="[path_to_burgerlicious]/build/burgerlicious.min.css">
```

#### Notes about JavaScript ES6

This library is ES6-ready! But due to many browser not being 100% compatible with ES6 yet, I strongly recommend to use the ES5 version for now. If your project is entirely written in ES6 and you're planing to transpile it later on in your development process, you may use the ES6 version located at `src/burgerlicious.js`.

<br>

## How to use the burger

#### Create the burger

Creating the burger is really simple:

``` javascript
// First get the button you want to place the burger in
var myButton = document.getElementById( 'awesome-btn' );

// Then create the burger (here with default options)
var myBurger = new burgerlicious.Burger( myButton );
```

> If you're using the ES6 version, you can import the burger as a module.

#### Customize the burger

With the code above you get the default burger. But I can see in your eyes that you want to do your own thing, and that's fine. Of course you can customize the burger in several ways so that it fits in your page like a beautiful unicorn.

*Watch out: You can customize the burger only once and only at creation time!*

``` javascript
// First define your custom options (the following options are the default ones)
var myBurgerOptions = {

	// Define how thick the lines should be (in px)
	'lineThickness': 2,

	// Select a line color (in HEX, RGB, RGBA, ...)
	'lineColor': '#111',

	// Set the rotation direction
	// ('right' means first rotation goes clockwise, 'left' means the opposite)
	'animationRotation': 'right',

	// Choose how long the animation should take (in ms)
	// Sidenote: A value of 0 turns all animations off
	'animationDuration': 500

};

// Then you can pass in the options object as the second parameter (when creating the burger)
var myBurger = new burgerlicious.Burger( myButton, myBurgerOptions );
```

### Quick Tip: The burger button

Well, semantically you definitely should use a button for the burger icon. But per default buttons just don't look very good. So in order to make a button which is invisible, use the following styles in your css file:

``` css
/*
 * Width and height are just examples,
 * all the other attributes should make the button transparent
 */
.myButton {
	width: 50px;
	height: 50px;
	padding: 0;
	background: none;
	border: none;
	cursor: pointer;
}
```

<br>

## Advanced ways of using the burger

When creating the burger, it's active. It's working. You can lean back and see the burger do it's work. But: Some people might think about doing some advanced stuff. They need more control. Maybe you're one of these persons.

#### Control the burger

With the following lines of code you can control the burger manually, from inside your own JavaScript code:

``` javascript
// You can toggle the burger
myBurger.toggle();

// You can also open the burger (turn it into an x)
myBurger.open();

// And you can close the burger (get the burger back)
myBurger.close();
```

#### Check the burger status

You want to know at some point whether the burger is currently open or not? Here's how you can do that:

``` javascript
// Check if the burger is open (returns true or false)
var isMyBurgerOpen = myBurger.isOpen();
```

#### Handling burger events

But wait, there's more. Maybe you want to get notified and do some action if a user starts using your burger. For this reason you can listen to some special burger events.

There is a short version for that, but of course you can use vanilla JavaScript or jQuery for fetching these events:

``` javascript
// Use the short version (recommended)
myBurger.on( 'open', function handleEvent() { ... } );

// Use the vanilla JavaScript way of listening to events
document.addEventListener( 'burgerlicious.open', function handleEvent() { ... } );

// Or even use jQuery for that
$( 'document' ).on( 'burgerlicious.open', function handleEvent() { ... } );
```

And you might want to remove event listeners with the following:

``` javascript
// Use the short version (recommended)
myBurger.off( 'open', handleEvent );

// Use the vanilla JavaScript way of removing event listeners
document.removeEventListener( 'burgerlicious.open', handleEvent );

// Or again use jQuery for that
$( 'document' ).off( 'burgerlicious.open', handleEvent );
```

The following is a complete event table. It presents the event names (short as well as long versions) and a description explaining when each event will be thrown.

| Short  | Long                 | Description                               |
| ------ | -------------------- | ----------------------------------------- |
| open   | burgerlicious.open   | Burger starts turning into an x           |
| opened | burgerlicious.opened | Burger is done turning into an x          |
| close  | burgerlicious.close  | Burger starts turning back into a burger  |
| closed | burgerlicious.closed | Burger is done turning back into a burger |

<br>

## Browser support

This library should work fine with the following browsers:
- latest versions of Mozilla Firefox
- latest versions of Google Chrome
- latest versions of Opera
- latest versions of Safari

This library does not work with the following browsers:
- Internet Explorer
- Microsoft Edge

> Improvments concerning browser support could be one of the next development steps here.

<br>

## Creator

**Dominique Müller**

- E-Mail: [hello@dominique-mueller.de](mailto:hello@dominique-mueller.de)
- Website: [www.dominique-mueller.de](https://www.dominique-mueller.de/)
- Twitter: [@itsdevdom](https://twitter.com/itsdevdom)
