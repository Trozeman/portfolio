let activeScreen;

document.addEventListener("DOMContentLoaded", function () {
    activeScreen = document.getElementById("about");
    if(window.location.hash){
        setTimeout(function () {
        activeScreen = document.getElementById(window.location.hash.substr(1));
        activeScreen.scrollIntoView();
        }, 50)
    }
    let navItems = document.getElementsByClassName('item');
    Array.from(navItems).forEach(function (i) {
        i.onclick = function () {
            setTimeout(function () {
                activeScreen = document.getElementById(window.location.hash.substr(1));
            }, 50)
        }
    });
});

document.onmousewheel = function( e ) {
    scroll(activeScreen, e.deltaY);
};

function scroll(elem, delta) {
    if(delta > 0 && elem.nextElementSibling !== null && elem.nextElementSibling.hasAttribute('id')){
        elem.nextElementSibling.scrollIntoView();
        activeScreen = elem.nextElementSibling;
    }
    if(delta < 0 && elem.previousElementSibling.hasAttribute('id')){
        elem.previousElementSibling.scrollIntoView();
        activeScreen = elem.previousElementSibling;
    }
}