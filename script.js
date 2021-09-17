let icon = document.getElementById("icon-d");

let check = document.getElementById("check");

let screenWidth = window.innerWidth;


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