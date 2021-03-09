// ==UserScript==
// @name         restore
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lazos.neuquen.edu.ar/backup/restorefile.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('cell c3')[0].getElementsByTagName('a')[0].click();
    // Your code here...
})();