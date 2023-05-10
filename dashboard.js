let currentUser = JSON.parse(localStorage.getItem("CU"));
    document.getElementById("screen").innerHTML = " " + currentUser.username + "...";

    if (!currentUser) {
        window.location.href = "Login.html";
    }

    document.getElementById("signOut").addEventListener('click', () => {
        window.location.href = "Login.html";
        localStorage.removeItem("CU");
    })