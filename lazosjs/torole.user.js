// ==UserScript==
// @name         torole
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lazos.neuquen.edu.ar/course/view.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = 'https://lazos.neuquen.edu.ar/user/index.php?perpage=100&id=';
    var id = document.URL.split('=')[1];
    window.location = url + id;
    // Your code here...
})();