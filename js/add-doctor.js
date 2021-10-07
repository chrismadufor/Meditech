

function addDoctor() {

    let doctorDataArray = JSON.parse(localStorage.getItem("userDB"))

    let name = document.getElementById("doctor-name");
    let email = document.getElementById("doctor-email");
    let id = document.getElementById("doctor-id");
    let department = document.getElementById("doctor-dept");

    const response = document.getElementById("response");

    let nameFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let doctorIdFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let doctorDeptFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let numberFormat = /\d/g;


    if (!name.value || !email.value || !id.value || !department.value) {
        response.innerText = `Kindly fill all input fields`;
    } else if(nameFormat.test(name.value) || Number(name.value) == name.value  
    || numberFormat.test(name.value) === true) {
        response.innerText = `Enter a valid name`;
    } else if(!emailFormat.test(email.value)) {
        response.innerText = `Enter a valid email`;
    } else if(doctorIdFormat.test(id.value) || id.value.length < 5 || 
    numberFormat.test(id.value) === false) {
        response.innerText = `Enter a valid ID`;
    } else if(doctorDeptFormat.test(department.value) || 
    Number(department.value) == department.value || numberFormat.test(department.value) === true) {
        response.innerText = `Enter the correct departmment`;
    } else {
        response.innerText = '';
 
    let doctorProfile = new Object();
    doctorProfile.name = name.value;
    doctorProfile.email = email.value;
    doctorProfile.id = id.value;
    doctorProfile.department = department.value;
    doctorProfile.userType = "Doctor"
    doctorProfile.dateOfBirth = "";
    doctorProfile.phoneNumber = "";
    doctorProfile.nationality = "";
    doctorProfile.city = "";
    doctorProfile.address = "";
    doctorProfile.appointments = [];
    doctorProfile.profilePhoto = "";
    doctorProfile.passWord = "1234567890"
    doctorProfile.randomId = Math.random();


    

    if (!doctorDataArray) {
        doctorDataArray = new Array();
    }
    doctorDataArray.push(doctorProfile);

    localStorage.setItem("userDB", JSON.stringify(doctorDataArray));
    console.log('success')

    name.value = "";
    email.value = "";
    id.value = "";
    department.value = "";

    addDoctorSuccess();
    }
}

function addDoctorSuccess() {
    let addDoctor = document.getElementById('add-doctor-successful');
    addDoctor.style.display = 'none'
    if (addDoctor.style.display === 'none') {
        addDoctor.style.display = 'block'
        setTimeout(() => {
            addDoctor.style.display = 'none'
            location.assign('./manage-doctors.html');
        }, 4000)
    } else addDoctor.style.display = 'none'
}





