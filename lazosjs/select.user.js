// ==UserScript==
// @name         select
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lazos.neuquen.edu.ar/user/index.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function bruh() {
        // const bruh = document.getElementById('checkallonpage');
        const checkbox = document.querySelectorAll('input[type=checkbox]');
        checkbox.forEach((item, index) => {
            item.click();
        });
        var value = 'bulkchange.php?plugin=manual&operation=deleteselectedusers'
        document.getElementById('formactionid').value = value;
    }
    function pollDOM () {
        console.log('intento n');
        const select = document.getElementsByName('unified-filters[]')[0];
        if (select) {
            if (document.URL.indexOf('contextid=') != -1) {
                console.log('esperando un cacho');
                setTimeout(function(){}, 7000);
                console.log('termine de esperar');
                if (document.querySelector('span[role=listitem][data-value="Rol: Estudiante"]')) {
                    bruh();
                }
                // document.getElementById('participantsform').submit();
            } else {
                select.value = '4:5';
                document.querySelector('form[method=post]').submit();
           }
        } else {
            setTimeout(pollDOM, 600);
        }
    }
    pollDOM();
})();
