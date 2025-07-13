// script.js

// Function to show message when the demoButton is clicked
function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "You clicked the button!";
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is now running!');

    // ----- Portfolio Button Logic -----
    const button = document.getElementById('demoButton');
    const messageArea = document.getElementById('messageDisplay');

    if (button && messageArea) {
        button.addEventListener('click', function () {
            const currentTime = new Date().toLocaleTimeString();
            const message = 'Hello! You clicked the button at ' + currentTime;
            messageArea.textContent = message;

            button.textContent = 'Thanks for clicking!';
            setTimeout(function () {
                button.textContent = 'Click Me!';
            }, 2000);
        });
    }

// ----- Dropdown Toggle Logic -----
const toggles = document.querySelectorAll('.section-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.classList.toggle('open');
    });
});