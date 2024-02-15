function addFile() {
    var fileName = document.getElementById("fileName").value;

    // Store the file information in a global array
    files.push({
        fileName: fileName,
        createdBy: "admin"
    });

    alert("File added: " + fileName);
}
function logout() {
    // Redirect to the login page
    window.location.href = "index.html";
}

// Example global array to store file information
var files = [];