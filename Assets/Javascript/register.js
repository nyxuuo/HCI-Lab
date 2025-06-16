// UNTUK FORM
const form = document.getElementById
("form")
const errormsg = document.getElementById("error")


form.addEventListener("submit", function(event){
    event.preventDefault()

    let name = document.getElementById("first-name").value
    console.log(name)
    let surname = document.getElementById("surname").value
    let email = document.getElementById("email").value
    let phoneNum = document.getElementById("phone-number").value

    let password = document.getElementById("password").value

    let confirmPassword = document.getElementById("confirm-password").value


    
// VALIDASII
    if(name.length == 0){
        errormsg.style.display = "block" //untuk display error 
        errormsg.innerHTML = "Name must be filled."
        return 
    }

    if(surname.length == 0){
        errormsg.style.display = "block" //untuk display error 
        errormsg.innerHTML = "Surname must be filled."
        return 
    }

    if (email.length == 0){
        errormsg.style.display = "block" //untuk display error 
        errormsg.innerHTML = "E-mail must be filled."
        return 
    }
    if(phoneNum.length == 0){
        errormsg.style.display = "block" //untuk display error 
        errormsg.innerHTML = "Phone Number must be filled."
        return 
    }

    let hasCapital = false
    let hasnotCapital = false
    let hasDigit = false
    for (let i=0; i<password.length; i++){
        let char = password[i]
        if(char >= 'a' && char <= 'z'){
            hasnotCapital = true
        }
        if (char >= 'A' && char <= 'Z'){
            hasCapital = true
        }
        if (char >= '0' && char <= '9'){
            hasDigit = true
        }
    }

    if(password.length<8 || hasCapital == false || hasnotCapital == false || hasDigit == false){
        errormsg.style.display = "block" //untuk display error 
        errormsg.innerHTML = "Password doesn't meet the requirements. Please try again."
        return 
    }



    if(confirmPassword.length==0 || password.length<8 || password !== confirmPassword){
        errormsg.style.display = "block" //untuk display error 
        errormsg.innerHTML = "Confirm Password doesn't match. Please try again"
        return 
    }


    error.style.display = "none"

    console.log("Name: " + name)
    console.log("Surname: " + surname)
    console.log("E-mail: " + email)
    console.log("Phone Number: " + phoneNum)
    console.log("Password: " + password)
    console.log("Confirm Password: " + confirmPassword)

    // redirect to subscription
    window.location.href = "subscription.html";
})