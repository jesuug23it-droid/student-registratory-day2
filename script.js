// Store registrations in an array
let registrations = [];

// Function for validation
function validateForm(name, email, department, year, projectTitle) {
  if (!name || !email || !department || !year || !projectTitle) {
    alert("Please fill all fields.");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }
  return true;
}

// Function to display all registrations in console
function showRegistrations() {
  console.clear();
  console.log("All Registrations:");
  registrations.forEach((reg, index) => {
    console.log(
      `${index + 1}. ${reg.name} - ${reg.email} - ${reg.department} - ${reg.year} - ${reg.projectTitle}`
    );
  });
}

// Event listener for form submit
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let department = document.getElementById("department").value.trim();
  let year = document.getElementById("year").value.trim();
  let projectTitle = document.getElementById("projectTitle").value.trim();

  if (validateForm(name, email, department, year, projectTitle)) {
    registrations.push({ name, email, department, year, projectTitle });
    alert("Registration Successful!");
    this.reset();
    showRegistrations();
  }
});
