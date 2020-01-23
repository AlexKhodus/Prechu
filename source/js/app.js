'use strict';
$('.menu-mobile_icon').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-mobile_icon__active');
});
menu.onclick = function openMenu() {
    var x = document.getElementById('topMenu');
    if (x.className === "menu-list"){
        x.className += " responsive";
    }
    else {
        x.className = "menu-list"
    }
}
