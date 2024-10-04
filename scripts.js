document.getElementById("greet-btn").addEventListener("click", function() {
    const messageElement = document.getElementById("greeting-message");
    messageElement.innerHTML = "Hello, thanks for visiting my portfolio! I hope you enjoy exploring my work.";
    messageElement.style.display = "block";
});

// get all project titles
const projectTitles = document.querySelectorAll(".project-title");

// Add click event listeners to each title
projectTitles.forEach(title => {
    title.addEventListener("click", function() {
        const projectDetails = this.parentElement.getAttribute("data-details"); // get the details from the parent
        alert(projectDetails); // show the project details in an alert
    });
});




