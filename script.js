document.addEventListener('DOMContentLoaded', function() {
    // 1. Define an array of all button IDs and their corresponding target section IDs
    const buttonMappings = [
        { buttonId: 'btn-project-a', targetId: 'project-a' },
        { buttonId: 'btn-project-b', targetId: 'project-b' },
        { buttonId: 'btn-project-c', targetId: 'project-c' },
        { buttonId: 'btn-project-d', targetId: 'project-d' },
    ];

    // 2. Loop through each mapping to set up the click listener
    buttonMappings.forEach(mapping => {
        const button = document.getElementById(mapping.buttonId);
        
        if (button) {
            button.addEventListener('click', function() {
                // Find the target section using the targetId
                const targetSection = document.getElementById(mapping.targetId);

                // Check if the target section exists before attempting to scroll
                if (targetSection) {
                    // Smoothly scroll the page to the target section
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start' // Aligns the top of the section with the top of the viewport
                    });
                }
            });
        }
    });

    console.log("Multi-button script loaded.");
});
