window.onload = function addDoctorProfile(){
    var doctorDataArray = JSON.parse(localStorage.getItem("userDB"));
    let docProfileContainer = document.getElementById('doctor-profile-container');
    let doctorArray = new Array();

    docProfileContainer.innerHTML = 
        `<h2 id="header-main" style="text-align: center; width: 100%; 
        margin: 50px 0;">No doctors in database</h2>`

    for(let i = 0; i < 9; i++){
        if (doctorDataArray[i].userType === "Doctor") {
            doctorArray.push(doctorDataArray[i]);
        }
    }

    if (!(doctorArray.length === 0)) {
        doctorArray.forEach(doctor => {

            let header = document.getElementById('header-main');
            let doctorDepartment = doctor.department.toUpperCase();
            let doctorName = doctor.name.toUpperCase();
     
            header.style.display = "none"
            docProfileContainer.innerHTML += `
            <div class="card">
            <div class="doctor-image">
                <img src="./img/9.png" alt="">
            </div>
            <div class="doctor-text">
                <p class="name">${doctorName}</p>
                <p class="department">${doctorDepartment}</p>
            </div>
            <div class="hamburger">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            </div>
            `
            
        });
    }
}