function checkEmail() {
    console.log("checkEmail() called");  
    let email = document.getElementById("email").value;
    let output = document.getElementById("email-output");

    if (email.includes("@")) {
        output.value = "Valid email!";
    } else {
        output.value = "Invalid email!";
    }
}
