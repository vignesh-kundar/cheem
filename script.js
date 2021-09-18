let icon = document.getElementById("icon-d");

let check = document.getElementById("check");

let atag = document.getElementById("atag");

icon.onclick = function() {

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "light-mode.png";
    } else {
        icon.src = "dark-mode.png";
    }
}


check.onclick = function() {
    document.getElementById("container").classList.toggle("blur-class");
    document.getElementById("check-btn-rotate").classList.toggle("rotate-check");
}


atag.onclick = function() {
    document.getElementById('check-btn-rotate').click();
}