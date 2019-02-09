let activeScreen;

document.addEventListener("DOMContentLoaded", function () {
    let navBar = document.getElementById("navBar");
    let navBtn = document.getElementById("nav-btn");
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
                navBtn.click();
            }, 50)
        }
    });
    navBtn.onclick = function () {
        if(!navBar.classList.contains("open-nav")){
            navBar.classList.add("open-nav");
            this.classList.add("nav-btn-react");
        }else {
            navBar.classList.remove("open-nav");
            this.classList.remove("nav-btn-react");
        }
    };
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