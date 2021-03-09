// ==UserScript==
// @name         backup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lazos.neuquen.edu.ar/backup/backup.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // document.getElementsByName('setting_root_imscc11')[0].click();
// document.getElementsByName('setting_root_users')[0].click();
// document.getElementsByName('setting_root_anonymize')[0].click();
// document.getElementsByName('setting_root_role_assignments')[0].click();
document.getElementsByName('setting_root_badges')[0].click();
document.getElementsByName('setting_root_activities')[0].click();
document.getElementsByName('setting_root_blocks')[0].click();
document.getElementsByName('setting_root_filters')[0].click();
document.getElementsByName('setting_root_comments')[0].click();
document.getElementsByName('setting_root_calendarevents')[0].click();
document.getElementsByName('setting_root_userscompletion')[0].click();
// document.getElementsByName('setting_root_logs')[0].click();
document.getElementsByName('setting_root_grade_histories')[0].click();
document.getElementsByName('setting_root_questionbank')[0].click();
document.getElementsByName('setting_root_groups')[0].click();
document.getElementsByName('setting_root_competencies')[0].click();
document.getElementById('id_submitbutton').click();

    // Your code here...
})();