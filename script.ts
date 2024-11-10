// Helper function to generate unique path based on username
function generateUniquePath(username: string): string {
    return encodeURIComponent(username.toLowerCase().trim().replace(/\s+/g, '-'));
}

// Initialize form and output containers
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    
    // Generate a unique URL based on username
    const uniquePath = generateUniquePath(usernameInput.value);
    const uniqueUrl = `${window.location.origin}/${uniquePath}`;
    
    // Display the resume
    resumeOutput.innerHTML = `
        <h2>${nameInput.value}</h2>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Phone:</strong> ${phoneInput.value}</p>
        <h3>Education</h3>
        <p>${educationInput.value}</p>
        <h3>Experience</h3>
        <p>${experienceInput.value}</p>
        <h3>Skills</h3>
        <p>${skillsInput.value}</p>
    `;
    
    // Display shareable link and enable PDF download
    shareableLink.href = uniqueUrl;
    shareableLink.textContent = uniqueUrl;
    shareableLinkContainer.style.display = 'block';
});

// Function to handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print();
});
