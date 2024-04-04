
let menuBtn = document.getElementById("menu-icon-btn");
let sideMenu = document.getElementById("side-menu");
let menuCloseBtn = document.getElementById("menu-close-btn");
let body = document.getElementById("body");

menuBtn.addEventListener("click", function() {
        sideMenu.style.width = "200px";
        sideMenu.style.padding = "20px";
        sideMenu.style.boxShadow = "-2px 3px 128px 200px rgba(0,0,0,0.45)";
})

menuCloseBtn.addEventListener("click", function() {
        sideMenu.style.width = "0px";
        sideMenu.style.padding = "0px";
        sideMenu.style.boxShadow = "none";
})