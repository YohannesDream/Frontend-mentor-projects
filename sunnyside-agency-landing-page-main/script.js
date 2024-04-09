
let openMenu = document.getElementById("menu-mobile-open");
let menuMobile = document.getElementById("menu-mobile");

openMenu.addEventListener("click", function(){
    if(menuMobile.style.display === "block") {
        menuMobile.style.display = "none";
    }
    else {
        menuMobile.style.display = "block";
    }
})