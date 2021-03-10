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
    // https://github.com/isbrqu/toihack/raw/main/lazosjs/select.user.js
    function checkAndDelete() {
        console.log('checkAndDelete');
        const tag = document.querySelector('span[role=listitem][data-value="4:5"]');
        if (tag) {
            const checkbox = document.querySelectorAll('input[type=checkbox]');
            checkbox.forEach((item, index) => {item.click();});
            const selectOperation = document.getElementById('formactionid');
            selectOperation.value = 'bulkchange.php?plugin=manual&operation=deleteselectedusers';
            const deleteButton = document.getElementById('participantsform');
            deleteButton.submit();
        } else {
            setTimeout(checkAndDelete, 500);
        }
    }

    function pollDOM () {
        console.log('pollDOM');
        const select = document.getElementsByName('unified-filters[]')[0];
        if (select) {
            if (document.URL.indexOf('contextid=') != -1) {
                checkAndDelete();
            } else {
                select.value = '4:5';
                document.querySelector('form[method=post]').submit();
            }
        } else {
            setTimeout(pollDOM, 500);
        }
    }

    pollDOM();

})();
