document.addEventListener('DOMContentLoaded', () => {
    console.log('System Initialized...');

    // Terminal typing effect
    const terminalLines = document.querySelectorAll('.terminal-window p:not(.blink)');

    if (terminalLines.length > 0) {
        terminalLines.forEach(line => {
            const originalText = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';
        });

        let lineIndex = 0;

        function typeLine(line) {
            const text = line.getAttribute('data-text') || line.innerHTML; // Fallback to innerHTML if stored elsewhere, but better to use array
            // Actually, let's just restore the text we cleared
            // To make it simple, we'll assume the text in HTML is what we want
            // But we cleared it above. Let's store it first.
        }

        // Simpler approach for typing:
        // 1. Hide all lines initially (via CSS or JS)
        // 2. Reveal one by one with typing

        // Re-selecting to reset
        const linesToType = [
            "> INITIALIZING SYSTEM...",
            "> LOADING SECURITY MODULES...",
            "> SYSTEM SECURE. ACCESS GRANTED."
        ];

        terminalLines.forEach((line, index) => {
            line.textContent = '';
            if (linesToType[index]) line.setAttribute('data-typing', linesToType[index]);
        });

        let currentLine = 0;

        function typeNextLine() {
            if (currentLine >= terminalLines.length) return;

            const line = terminalLines[currentLine];
            const text = linesToType[currentLine];
            let charIndex = 0;

            line.style.opacity = '1';

            const typeInterval = setInterval(() => {
                line.textContent += text.charAt(charIndex);
                charIndex++;

                if (charIndex >= text.length) {
                    clearInterval(typeInterval);
                    currentLine++;
                    setTimeout(typeNextLine, 500); // Wait before next line
                }
            }, 50);
        }

        // Start typing after a short delay
        setTimeout(typeNextLine, 1000);
    }

    // Add hover sound effect logic (optional, keeping it simple for now)

    // Random Glitch Effect
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            glitchElement.classList.toggle('glitch-active');
            setTimeout(() => {
                glitchElement.classList.toggle('glitch-active');
            }, 200);
        }, 3000);
    }
    // Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Hamburger Animation
            hamburger.classList.toggle('toggle');
        });
    }

});
