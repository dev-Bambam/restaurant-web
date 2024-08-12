document.querySelector('#form').addEventListener('submit', (e)=>{

    e.preventDefault()

    const fName = document.querySelector('#fName').value.trim()
    const lName = document.querySelector('#lName').value.trim()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()
    
    if(fName && lName && email && password){
        window.location.href = 'index.html'
    }
    else{
        alert ('input all field')
    }
})

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