function validateSignup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmNewPassword = document.getElementById("confirmNewPassword").value;

    // Perform your signup validation here
    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save the user data or perform any necessary actions
    // For simplicity, you can display an alert indicating successful signup
    alert("Signup successful! You can now login.");

    // Optionally, you can redirect the user to the login page after successful signup
    window.location.href = "index.html";
}