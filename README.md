<div align="center">

# burgerlicious

**Yummy! Burgerlicious is _the_ animated burger icon you always wanted.<br>SVG-based, customizable via SASS, dependency-free.**

</div>

<br><br>

## What it does

Some love it, some hate it: The burger icon, a three-lined icon synbolising a navigatable list. Why its Usability is debatable, it's for
sure a neat and clean way to hide the bigger kind of menus behind a simple button.

So, if you're searching for a beautifully animated burger icon based on SVG and SASS - you're there, you got it! Have fun!

![Burgerlicious Animations](/docs/preview.gif?raw=true)

> **Browser compatibility:**<br>Due to the IE not being able to animate SVG via CSS, animations won't work in this browser! Progressive
> Enhancement at its best!

<br><br><br>

## How to use

Using this burger means simple copy-pasting code into your project (mainly because including HTML files in the frontend, without
backend / build steps, is quite a pain). The following files exist:

- `src/burgerlicious.html` contains the HTML part, in particiular the burger icon as SVG
- `src/burgerlicious.scss` contains the styles as SASS, incl. variables & animations

> This project also comes with a build step (`npm run build`) to turn the SASS into plain CSS.

Once included, you can toggle the burger on and off using the `is-open` class on the svg (with the class `burgerlicious`).

<br>

### Customization

The following SASS variables can be used to customize the design of the burger:

- `$burgerlicious--color` defines the line color *(defaults to `#333`)*
- `$burgerlicious--weight` defines the line stroke width (preferably even numbers) *(defaults to `2px`)*
- `$burgerlicious--animation-speed` defines the complete animation duration *(defaults to `.5s`)*
- `$burgerlicious--animation-rotation` defines the animation rotation direction (`left` or `right`) *(defaults to `right`)*

<br>

### On Usability & Accessibility

Both usability and accessibility of the burger menu could be improved by:

- placing the burger inside an actual `<button type="button">` node
- making the burger button more affordable
- adding a short label such as "Menu" or "Navigation" below or above the burger icon
- putting a tooltip on top of the icon (e.g. using the `title` attribute)
- adding accessibility nodes to the SVG, such as `<title>` or `desc`
- disable animations if the user prefers reduced motion / no motion at all
