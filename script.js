document.addEventListener('DOMContentLoaded', () => {
    const neonLetters = document.querySelectorAll('.neon-letter');

    neonLetters.forEach(letter => {
        const letterChar = letter.dataset.letter; // Get the letter character
        let glowColor;

        // Assign a glow color based on the letter
        switch (letterChar) {
            case 'L':
                glowColor = '#ff00de'; // Pink
                break;
            case 'O':
                glowColor = '#00e6e6'; // Cyan
                break;
            case 'V':
                glowColor = '#ffcc00'; // Yellow/Orange
                break;
            case 'E':
                glowColor = '#00ff00'; // Green
                break;
            default:
                glowColor = '#fff'; // Default to white if not specified
        }

        // Set the CSS variable for each letter's glow color
        letter.style.setProperty('--neon-color-shadow', glowColor);

        letter.addEventListener('click', () => {
            // Optional: Add a simple click interaction
            console.log(`Clicked on letter: ${letterChar}`);
            letter.classList.toggle('clicked'); // Add/remove a class for styling
            // You could play a sound, trigger another animation, etc.
        });
    });

    // Optional: Add a more global dynamic effect
    // Example: Randomly toggle one letter's flicker class
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * neonLetters.length);
        const randomLetter = neonLetters[randomIndex];

        randomLetter.style.animation = 'none'; // Stop current animation
        void randomLetter.offsetWidth; // Trigger reflow to restart animation
        randomLetter.style.animation = null; // Reapply the original animation
    }, 3000); // Every 3 seconds, reset a random letter's animation for a subtle sync break
});