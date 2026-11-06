const btnDarkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');
const cardJobs = document.querySelector('.cardJobs')
const overlay = document.querySelector('.overlay');
const btnInvia = document.querySelector('#btnInvia');
const btnModal = document.querySelector('#btnModal');
const btnCloseModal = document.querySelector('#btnCloseModal');
const myForm = document.querySelector('form');
const messag = document.querySelector('#messaggio');
const titleH2 = document.querySelectorAll('h2');
btnDarkMode.addEventListener('click', (e) => {
    body.classList.toggle('darkMode')
    cardJobs.classList.toggle('cardDarkMode')
    titleH2.forEach((h2) => {
        h2.classList.toggle('titleDark');
    })
    
    body.classList.contains('darkMode') 
    ? btnDarkMode.innerHTML = '<i class="fa-regular fa-sun" style="color:white;"></i>' 
    : btnDarkMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
    

})
    


btnModal.addEventListener('click', (e) => {
  overlay.classList.add('modalOpen')
  
  
});

btnCloseModal.addEventListener('click', (e) => {
   overlay.classList.remove('modalOpen')
});

window.addEventListener('click', (e) => {
    if(e.target === overlay){
        overlay.classList.remove('modalOpen')
    }
})

myForm.addEventListener('submit', (e) => {
	e.preventDefault();
    messag.textContent = '✔️ Grazie! Abbiamo ricevuto la tua richiesta'
    myForm.reset();

    setTimeout(() => {
        messag.textContent = ''
        overlay.classList.remove('modalOpen')
    } ,2000)
        
    
});