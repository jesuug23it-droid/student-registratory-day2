document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value.trim();
    let year = document.getElementById("year").value.trim();
    let projectTitle = document.getElementById("projectTitle").value.trim();

    // Check all fields filled
    if (!name || !email || !department || !year || !projectTitle) {
        alert("Please fill all fields.");
        return;
    }

    // Email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Registration Successful!");
});