let activeScreen;
let bot = "http://trozeman.kl.com.ua/dpm/";
document.addEventListener("DOMContentLoaded", function () {
    let navBar = document.getElementById("navBar");
    let navBtn = document.getElementById("nav-btn");
    let send = document.getElementById("send");
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
    send.onclick = function () {
        let message = {
            username: document.getElementById("userName").value,
            content: document.getElementById("message").value
        };
        console.log(message);
        $PostTo(bot, message);
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


$PostTo = function (url, data) {
    let xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest !== 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }

    let keys = Object.keys(data);
    let submit = "";
    xmlhttp.open("post", url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (let i = 0; i < keys.length; i++) {
        if (i < 1) {
            submit += keys[i] + "=" + encodeURIComponent(data.username);
        } else {
            submit += "&" + keys[i] + "=" + encodeURIComponent(data.content);
        }
    }
    xmlhttp.send(submit);
    if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
            return JSON.parse(xmlhttp.responseText);
        }
    }

};







