function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for (let item of errors)
    {
        item.innerHTML = "";
    }
}





function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){

    let returnval = true;
    clearErrors();

    // perform validation if validation fails, set the value of return value to false

    let name = document.forms["myForm"]["fname"].value;
    if (name.length < 4){
        seterror("name", "*length of name is too short");
        returnval = false;
    }

    let email = document.forms["myForm"]["femail"].value;
    if (email.length > 15){
        seterror("email", "*length of email is too long");
        returnval = false;
    }

    let phone = document.forms["myForm"]["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*phone no should be 10 digit");
        returnval = false;
    }

    let address = document.forms["myForm"]["faddress"].value;
    if (address.length > 30){
        seterror("address", "*address length is too large");
        returnval = false;
    }

   



   







    return returnval;
}