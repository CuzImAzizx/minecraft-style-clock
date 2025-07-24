window.onload = () => {
    const savedTheme = localStorage.getItem('bsTheme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    const themeToggle = document.getElementById('themeToggle');
    //themeToggle.checked = false;
    if (savedTheme == "dark") {
        themeToggle.checked = true
    } else {
        themeToggle.checked = false
    }
    document.body.style.backgroundImage = `url("assets/${savedTheme}.png")`;
    // Optional: Also set background-size and background-repeat if needed for full coverage
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // If you want it fixed when scrolling
};

// Save theme to localStorage on toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('bsTheme', newTheme);
    document.body.style.backgroundImage = `url("assets/${newTheme}.png")`;
    // Optional: Also set background-size and background-repeat if needed for full coverage
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // If you want it fixed when scrolling
}
