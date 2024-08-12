document.querySelector('#form-page').addEventListener('submit', (e)=>{
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