// Get the contact form
const contactForm = document.getElementById("contactForm");

// Run this function when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check whether all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Show a success message
    alert("Thank you, " + name + "! Your message has been submitted.");

    // Clear the form after submission
    contactForm.reset();
});