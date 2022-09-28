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