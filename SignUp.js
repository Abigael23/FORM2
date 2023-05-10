// document.getElementById("signupdiv").style.display = "block"
// document.getElementById("logindiv").style.display = "none"
    
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let phonenumber = document.getElementById("phonenumber")
    let password = document.getElementById("password")
    let confirmpassword = document.getElementById("confirmpassword")

    function signupbutton() {
        document.getElementById("signupdiv").style.display = "block"
        document.getElementById("logindiv").style.display = "none"
        document.getElementById("signup1").style.backgroundColor = "green"
    }
    function loginbutton() {
        document.getElementById("signupdiv").style.display = "none"
        document.getElementById("logindiv").style.display = "block"
        document.getElementById("login2").style.backgroundColor = "blue"
    }

    let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    function signUp(ev){
        ev.preventDefault();
        let user ={
            username: username.value,
            email: email.value,
            phonenumber: phonenumber.value,
            password: password.value,
            confirmpassword: confirmpassword.value
        }
        registeredUsers.push(user);
        localStorage.setItem("users", JSON.stringify(registeredUsers))
        console.log(user);
        if  (password.value == "" || email.value == "" || phonenumber.value ==""|| username.value =="") {
            alert("Input field cannot be empty") 
        }else if(password.value !== confirmpassword.value) {
            alert("Password does not match")
        } else if (password.value.length < 6) {
            alert("Password too weak")
        } else if(password.value === confirmpassword.value){
            alert("Sign Up successful")
            window.location.href = "Login.html"
        }

    }