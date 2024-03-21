var submitBtn = document.getElementById("submit-btn");
var rateStatus = document.getElementById("rate-status");
var thankCard = document.getElementById("thank-card");
var rateCard = document.getElementById("rate-card");

function  rate(value) {
    submitBtn.addEventListener("click", function() {
            rateStatus.innerHTML = "You selected " + value + " out of 5";
           if (rateCard.style.display === "none"){
            rateCard.style.display = "block";
            thankCard.style.display = "none";
           } 
           else {
            rateCard.style.display = "none";
            thankCard.style.display = "block";
           }
    });
}
 