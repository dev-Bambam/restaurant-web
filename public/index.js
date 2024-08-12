// theme swithcer
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-controller');
    const htmlElement = document.documentElement;

    // Retrieve the theme from local storage
    const storedTheme = localStorage.getItem('theme');

    // If a theme is stored, apply it
    if (storedTheme) {
        htmlElement.setAttribute('data-theme', storedTheme);
    } else {
        // If no theme is stored, default to 'dark'
        htmlElement.setAttribute('data-theme', 'garden');
        localStorage.setItem('theme', 'garden');
    }

    themeToggle.addEventListener('change', () => {
        // Toggle the theme between 'dark' and 'garden'
        if (themeToggle.checked) {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'garden');
            localStorage.setItem('theme', 'garden');
        }
    })
})

// place reservation
const form = document.querySelector('#form')
form.addEventListener('submit',()=>{
    alert('Reservation placed')
})