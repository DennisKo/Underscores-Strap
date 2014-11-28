
Underscores-Strap
===

v0.1.0
* [Wordpress starter theme called _s, or underscores](https://github.com/Automattic/_s)
* [Bootstrap for Sass v3.3.1](https://github.com/twbs/bootstrap-sass)
* [Grunt](http://gruntjs.com/)


##Getting Started


1. ```npm install```
2. Setup Underscores following the [getting started guide](https://github.com/automattic/_s)
3. ```grunt``` to watch for changes and livereload


##Assets management

###CSS
* Edit any file in styles/
* styles/style.scss for all the imports
* Remove/Comment out unwanted components in styles/bootstrap/_bootstrap.scss

###Javascript
* js/_custom.js for your custom JS
* Remove unwanted Bootstrap JS components from jsFileList in gruntfile.js
* _custom.js and bootstrap js gets concatenated and minified into scripts.min.js

##Misc
###Font Awesome
* Glyphicons are replaced with [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

###Bootstrap Menu
* A custom [WordPress nav walker](https://github.com/twittem/wp-bootstrap-navwalker) class to fully implement the Bootstrap 3.0+ navigation style in a custom theme using the WordPress built in menu manager.
* inc/wp_bootstrap_navwalker.php
