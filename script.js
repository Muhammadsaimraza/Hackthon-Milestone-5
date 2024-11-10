// Helper function to generate unique path based on username
function generateUniquePath(username) {
    return encodeURIComponent(username.toLowerCase().trim().replace(/\s+/g, '-'));
}
// Initialize form and output containers
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var educationInput = document.getElementById('education');
    var experienceInput = document.getElementById('experience');
    var skillsInput = document.getElementById('skills');
    // Generate a unique URL based on username
    var uniquePath = generateUniquePath(usernameInput.value);
    var uniqueUrl = "".concat(window.location.origin, "/").concat(uniquePath);
    // Display the resume
    resumeOutput.innerHTML = "\n        <h2>".concat(nameInput.value, "</h2>\n        <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n        <p><strong>Phone:</strong> ").concat(phoneInput.value, "</p>\n        <h3>Education</h3>\n        <p>").concat(educationInput.value, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experienceInput.value, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skillsInput.value, "</p>\n    ");
    // Display shareable link and enable PDF download
    shareableLink.href = uniqueUrl;
    shareableLink.textContent = uniqueUrl;
    shareableLinkContainer.style.display = 'block';
});
// Function to handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
