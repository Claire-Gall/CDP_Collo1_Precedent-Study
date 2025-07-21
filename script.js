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
    document.querySelectorAll('.section-toggle').forEach(button => {
        button.addEventListener('click', () => {
            // Find the nearest .collapsible-section and its .section-content
            const collapsible = button.closest('.collapsible-section');
            const content = collapsible.querySelector('.section-content');
            content.classList.toggle('open');
        });
    });
    const list = document.getElementById("bulletList");

const items = ["Spatial systems mapping", "Form finding through creating different spatial vantage points using light, sensory technology and participant feedbck data", "Biorythms: to inform my work not to be involved in my work", "Geometric abstraction within interactive installation and informative visuals"];

items.forEach(text => {
const li = document.createElement("li");
li.textContent = text;
list.appendChild(li);
});

}); //