// ==UserScript==
// @name         backup2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lazos.neuquen.edu.ar/backup/backup.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function pollDOM () {
        console.log('intento n');
        const backup = document.getElementById('backup-none-included');
        const name = document.getElementsByName('setting_root_filename');
        const conti = document.getElementsByClassName('continuebutton');
        if (conti.length) {
            conti[0].getElementsByTagName('input')[0].click()
        } else if (name.length) {
            document.getElementById('id_submitbutton').click();
        } else if (backup) {
            document.getElementById('backup-none-included').click();
            document.getElementById('backup-none-userdata').click();
            document.getElementById('id_submitbutton').click();
        } else {
            setTimeout(pollDOM, 300); // try again in 300 milliseconds
        }
    }
    pollDOM();
})();