 var inputEmail = document.getElementById("input-email");
 var inputHolder = document.getElementById("input-holder");
 var submitEmail = document.getElementById("submit-email");
 var errorEmail = document.getElementById("error-email");

 submitEmail.addEventListener("click", function(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(inputEmail.value)){
        inputEmail.classList.add("error-input");
        errorEmail.style.display = "block";
        inputHolder.style.borderWidth = "2px";
        inputHolder.style.borderColor = "red";
    }
    else {
        
    }
 })
  
