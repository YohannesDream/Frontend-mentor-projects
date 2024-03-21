var share = document.getElementById("share-btn");
var shareLink = document.getElementById("share-link");
var profileSection = document.getElementById("profile-section");

share.addEventListener("click", function() {
    if (shareLink.style.visibility === "visible") {
        shareLink.style.visibility = "hidden";
        this.style.backgroundImage = "url('images/icon-share.svg')";
        this.style.backgroundColor = "hsl(210, 46%, 95%)";
        
    }
    else {
        shareLink.style.visibility = "visible";
        this.style.backgroundImage = "url('images/icon-share-clicked.svg')";
        this.style.backgroundColor = "hsl(214, 17%, 51%)";
    }
     
});
 

