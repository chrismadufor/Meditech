function modal() {
    let modal = document.getElementById('modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none'
    } else modal.style.display = 'block'
}
function editProfile() {
    let editProfileModal = document.getElementById('edit-profile-modal');
    if (editProfileModal.style.display === 'block') {
        editProfileModal.style.display = 'none'
    } else editProfileModal.style.display = 'block'
}

function signUpSuccess() {
    let signUp = document.getElementById('sign-up-successful');
    signUp.style.display = "none"
    if (signUp.style.display === 'none') {
        signUp.style.display = 'block'
        setTimeout(() => {
            signUp.style.display = 'none'
            signOut()
        }, 4000)
    } else signUp.style.display = 'none'
}

function addDoctorSuccess() {
    let addDoctor = document.getElementById('add-doctor-successful');
    addDoctor.style.display = "none"
    if (addDoctor.style.display === 'none') {
        addDoctor.style.display = 'block'
        setTimeout(() => {
            addDoctor.style.display = 'none'
        }, 4000)
    } else addDoctor.style.display = 'none'
}

function signOut() {
    window.location.assign('patient-signin.html')
}

window.onclick = function(event) {
    let closeModal = document.getElementById('modal');
    let signUp = document.getElementById
    let editProfileModal = document.getElementById('edit-profile-modal');('sign-up-successful');
    if (event.target == closeModal) {
        modal()
    }
    if (event.target == signUp) {
        signUpSuccess()
    }
    if (event.target == editProfileModal) {
        editProfile()
    }
}