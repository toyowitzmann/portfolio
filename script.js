// A simple function to add interactivity to the button
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const ctaButton = document.getElementById('ctaButton');

    // Add an event listener for a click
    ctaButton.addEventListener('click', function() {
        // When clicked, run this code:
        alert('You clicked the "Start Exploring" button! JavaScript is working!');
        
        // Change the button text and style after click
        ctaButton.textContent = 'Exploration Began!';
        ctaButton.style.backgroundColor = '#dc3545'; // Change to red
    });

    // You can add more complex functionality here later!
    console.log("Website scripts loaded and running.");
});
