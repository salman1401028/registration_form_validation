let firstNameValid = document.getElementById("firstNameValid");
let firstNameInvalid = document.getElementById("firstNameInvalid");
let lastNameValid = document.getElementById("lastNameValid");
let lastNameInvalid = document.getElementById("lastNameInvalid");
let emailValid = document.getElementById("emailValid");
let emailInvalid = document.getElementById("emailInvalid");
let phoneValid = document.getElementById("phoneValid");
let phoneInvalid = document.getElementById("phoneInvalid");
let zipCodeValid = document.getElementById("zipCodeValid");
let zipCodeInvalid = document.getElementById("zipCodeInvalid");
let tncValid = document.getElementById("tncValid");
let tncInvalid = document.getElementById("tncInvalid");
let stateValid = document.getElementById("stateValid");
let stateInvalid = document.getElementById("stateInvalid");

function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    let tNCCheckBox = document.getElementById("tNCCheckBox").checked;

    if (firstName === '') {
        firstNameInvalid.style.display = 'block';
        firstNameValid.style.display = 'none';
        firstNamecheck=false;
    }
    else {
        firstNameInvalid.style.display = 'none';
        firstNameValid.style.display = 'block';
        firstNamecheck=true;
    }


    if (lastName === '') {
        lastNameInvalid.style.display = 'block';
        lastNameValid.style.display = 'none';
        lastNamecheck=false;
    }
    else {
        lastNameInvalid.style.display = 'none';
        lastNameValid.style.display = 'block';
        lastNamecheck=true;
    }

    if (email === '' || !email.includes('@') || email.startsWith('@') || email.slice(email.lastIndexOf('.')).length < 3) {
        emailInvalid.style.display = 'block';
        emailValid.style.display = 'none';
        emailcheck=false;
    }
    else {
        emailInvalid.style.display = 'none';
        emailValid.style.display = 'block';
        emailcheck=true;
    }
    if (phoneNumber === '' || phoneNumber.length != 10 || Number(phoneNumber[0]) < 7) {  //to control only the entry of number and not characters or special character we can do that on HTML by type=number.
        phoneNumberInvalid.style.display = 'block';
        phoneNumberValid.style.display = 'none';
        phoneNumbercheck=false;
    }
    else {
        phoneNumberInvalid.style.display = 'none';
        phoneNumberValid.style.display = 'block';
        phoneNumbercheck=true;
    }
    if (zipCode === '' || zipCode.length != 6) {
        zipCodeInvalid.style.display = 'block';
        zipCodeValid.style.display = 'none';
        zipCodecheck=false;
    }
    else {
        zipCodeInvalid.style.display = 'none';
        zipCodeValid.style.display = 'block';
        zipCodecheck=true;
    }
    
    if (state === '') {
        stateInvalid.style.display = 'block';
        stateValid.style.display = 'none';
        statecheck=false;
    }
    else {
        stateValid.style.display = 'block';
        stateInvalid.style.display = 'none';
        statecheck=true;
    }

    if (!tNCCheckBox) {
        tncInvalid.style.display = 'block';
        tncValid.style.display = 'none';
        tNCCheckBoxcheck=false;
    }
    else {
        tncInvalid.style.display = 'none';
        tncValid.style.display = 'block';
        tNCCheckBoxcheck=true;
    }
    /*if("firstNamecheck===true && lastNamecheck==true && emailcheck==true && phoneNumbercheck==true && zipCodecheck==true && statecheck==true && tNCCheckBoxcheck==true"){
        console.log("Registration successfull");
    }
    else{   
       console.log("Please recheck your form");
    } */
     if(phoneNumbercheck && zipCodecheck && firstNamecheck && lastNamecheck && emailcheck && statecheck && tNCCheckBoxcheck){
         //console.log("yes success");
         window.location = 'success.html';
     }
     else{
         console.log("no success");
     }
    

}