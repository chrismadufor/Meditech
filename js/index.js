function modal() {
    let modal = document.getElementById('modal');
    if (modal.style.display === 'none') {
        modal.style.display = 'block'
    } else modal.style.display = 'none'
}

function signUpSuccess() {
    let signUp = document.getElementById('sign-up-successful');
    if (signUp.style.display === 'none') {
        signUp.style.display = 'block'
        setTimeout(() => {
            signUp.style.display = 'none'
            signOut()
        }, 4000)
    } else signUp.style.display = 'none'
}

function signOut() {
    window.location.assign('patient-signin.html')
}

window.onclick = function(event) {
    let closeModal = document.getElementById('modal');
    let signUp = document.getElementById('sign-up-successful');
    if (event.target == closeModal) {
        modal()
    }
    if (event.target == signUp) {
        signUpSuccess()
    }
}