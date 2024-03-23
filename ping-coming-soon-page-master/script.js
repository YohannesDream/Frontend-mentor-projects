var email = document.getElementById("email");
var notifyBtn = document.getElementById("notify-btn");
var errorEmail = document.getElementById("error-email");

notifyBtn.addEventListener("click", function(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){
        errorEmail.style.display = "block";
        email.style.borderColor = "hsl(354, 100%, 66%)";

    }
    else {
        errorEmail.style.display = "none";
        email.style.borderColor = "hsl(223, 100%, 88%)";
    }
})