document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Check if user preference is stored in localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
        if (savedMode === 'dark-mode') {
            modeToggle.textContent = 'Switch to Light Mode';
        }
    }

    modeToggle.addEventListener('click', function () {
        // Toggle dark mode class
        body.classList.toggle('dark-mode');

        // Update button text based on mode
        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            modeToggle.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
