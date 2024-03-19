var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var password = document.getElementById("password");
var email = document.getElementById("email");
var submitBtn = document.getElementById("submit-btn");
var myForm = document.getElementById("myForm");

myForm.addEventListener('submit', function(event){
    event.preventDefault();

    if(firstName.value.trim() === ''){
        errorMessage(firstName, 'First Name cannot be empty');
        firstName.classList.add('error-input');
    }
    else {
        clearErrorMessage(firstName);
        firstName.classList.remove('error-input');
    }

    if(lastName.value.trim() === ''){
        errorMessage(lastName, 'Last Name cannot be empty');
        lastName.classList.add('error-input');
    }
    else {
        clearErrorMessage(lastName);
        lastName.classList.remove('error-input');
    }

    if(password.value.trim() === ''){
        errorMessage(password, 'Password cannot be empty');
        password.classList.add('error-input');
    }
    else {
        clearErrorMessage(password);
        password.classList.remove('error-input');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        errorMessage(email, 'Look like this is not an email');
        email.classList.add('error-input');
    }
    else {
        clearErrorMessage(email);
        email.classList.remove('error-input');
    }

    function errorMessage(userInput, errorMessage) {
        const errorMessageDisplayer = userInput.nextElementSibling;
        errorMessageDisplayer.textContent = errorMessage;
    }
    
    function clearErrorMessage(userInput) {
        const errorMessageDisplayer = userInput.nextElementSibling;
        errorMessageDisplayer.textContent = '';
    }
});
 
 