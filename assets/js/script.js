const btnDarkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');
const cardJobs = document.querySelector('.cardJobs')

btnDarkMode.addEventListener('click', (e) => {
    body.classList.toggle('darkMode')
    cardJobs.classList.toggle('cardDarkMode')
})
        
        