const nameInput = document.querySelector("#name");
nameInput.addEventListener("focusout", () => {
    let name = document.getElementById("name");
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    let error = document.getElementById("nameError");
    if(!nameRegex.test(name.value)){
        error.value = "Name is Incorrect";
    }else{
        error.value = "";
    }
});

const emailInput = document.querySelector('#email');
email.addEventListener("focusout", () => {
    let email = emailInput.value;
    let emailRegex = RegExp('^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$');
    let error = document.getElementById("emailError");
    if(!emailRegex.test(email)){
        error.value = "Email is Incorrect";
    }else{
        error.value = "";
    }
});

const tel = document.querySelector('#tel');
tel.addEventListener("focusout", () => {
    let telRegex = RegExp('^[1-9]{1}[0-9]?[ ][1-9]{1}[0-9]{9}$');
    const telError = document.querySelector('.tel-error');
    if(!telRegex.test(tel.value))
        telError.textContent = "Phone number is Incorrect";
    else 
        telError.textContent = "";
});
