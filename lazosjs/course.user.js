// ==UserScript==
// @name         course
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lazos.neuquen.edu.ar/course/view.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = 'https://lazos.neuquen.edu.ar/backup/backup.php?id=';
    window.location = url + document.URL.split('=')[1];
    document.getElementById('id_submitbutton').click();
    // Your code here...
})();