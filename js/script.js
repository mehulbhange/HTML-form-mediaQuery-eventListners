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


const passwordInput = document.querySelector("#pwd");
passwordInput.addEventListener("focus", () =>{
    let rules = document.getElementById("pass-rules");
    rules.style.display = "block";
});

passwordInput.addEventListener("input", () =>{
    //let passwordRegex = RegExp("^(?=.*\\d)(?=.*[A-Z])(?=.*\\W)(?!.*\\W\\w*\\W)(?!.*\\s).{8,}$");
    let pass = document.querySelector("#pwd").value;
    let rule1 = document.querySelector(".rule1");
    let rule2 = document.querySelector(".rule2");
    let rule3 = document.querySelector(".rule3");
    let rule4 = document.querySelector(".rule4");
    let regexRule2 = RegExp("^(.*[A-Z].*)$");
    let regexRule3 = RegExp("^(.*[0-9].*)$");
    let regexRule4 = RegExp("^(?=.*?[0-9a-zA-Z])[0-9a-zA-Z]*[@#$%^&*][0-9a-zA-Z]*$");
    
    if(pass.length >= 8){
        rule1.style.color = "green";
    }else{
        rule1.style.color = "red";
    }
    
    if(regexRule2.test(pass)){
        rule2.style.color = "green";
    }else{
        rule2.style.color = "red";
    }
    
    if(regexRule3.test(pass)){
        rule3.style.color = "green";    
    }else{
        rule3.style.color = "red";
    }

    if(regexRule4.test(pass)){
        rule4.style.color ="green";
    }else{
        rule4.style.color ="red";    
    }
});

passwordInput.addEventListener("focusout", () =>{
    let rules = document.getElementById("pass-rules");
    rules.style.display = "none";
});