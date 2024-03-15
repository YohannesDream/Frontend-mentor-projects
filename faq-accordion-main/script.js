var questionBtn = document.getElementsByClassName("question-btn");

for (var i = 0; i < questionBtn.length; i++) {
    questionBtn[i].addEventListener("click", function() {
    this.classList.toggle("selected");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
      
    } else {
        answer.style.display = "block";
    }
  });
}
 