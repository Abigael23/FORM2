// document.getElementById("signupdiv").style.display = "block"
// document.getElementById("logindiv").style.display = "none"
    
    // let username = document.getElementById("username")
    let email = document.getElementById("email")
    // let phonenumber = document.getElementById("phonenumber")
    let password = document.getElementById("password")
    // let confirmpassword = document.getElementById("confirmpassword")

    let registeredUsers = JSON.parse(localStorage.getItem("users"));
    console.log(registeredUsers);
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


function logIn(ev) {
    ev.preventDefault();
    
    let authorizedUsers = registeredUsers.find(element => element.email == email.value && element.password == password.value);
    // console.log(authorizedUsers);
    if (authorizedUsers) {
        alert("Login has been Successful")
        window.location.href = "dashboard.html";
        localStorage.setItem("CU", JSON.stringify(authorizedUsers));
    } else {
       console.log("failed");
       alert("Login failed")
    }
    
}