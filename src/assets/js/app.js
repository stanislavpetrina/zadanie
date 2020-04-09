
// ------------------------------------------------------------------------------------------------


import $ from 'jquery';
//import 'what-input';


// ------------------------------------------------------------------------------------------------


/*

Iconify is innovative SVG framework that loads only icons that are used on your page. 
Load on demand feature makes it possible to offer thousands of icons without using lots of bandwidth.
Iconify combines pixel perfect rendering of SVG with ease of use of glyph fonts, while offering more 
choice than any glyph font or SVG framework.

*/

import './icons';


// ------------------------------------------------------------------------------------------------


// MY JAVASCRIPT :)

import './global';


// ------------------------------------------------------------------------------------------------


/*

High performance and SEO friendly lazy loader for images (responsive and normal), 
iframes and more, that detects any visibility changes triggered through user interaction, 
CSS or JavaScript without configuration.

Documentation:

https://github.com/aFarkas/lazysizes

*/

import 'lazysizes';


// ------------------------------------------------------------------------------------------------


/*

lazysizes works out of the box with standard and responsive images (src, srcset and picture) and iframes.
The scripts in this folder can be used as extensions or as boilerplate snippets to extend and adjust 
lazysizes to your needs.

URL:

https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins

*/

import 'lazysizes/plugins/bgset/ls.bgset';


// ------------------------------------------------------------------------------------------------


// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.

window.jQuery = $;

//require('foundation-sites');


// ------------------------------------------------------------------------------------------------


// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below

import './lib/foundation-explicit-pieces';


// ------------------------------------------------------------------------------------------------


$(document).foundation();
