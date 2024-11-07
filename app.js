// Getting the button and skills section element by ID
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Initially hide the skills section
skillsSection.style.display = 'none';
// Function to toggle the visibility of the skills section
function toggleSkillsVisibility() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show the skills section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the skills section
    }
}
// Add click event listener to the button to trigger the toggle function
if (toggleSkillsButton) {
    toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);
}
