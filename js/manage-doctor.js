window.onload = function addDoctorProfile(){
    var doctorDataArray = JSON.parse(localStorage.getItem("userDB"));
    let docProfileContainer = document.getElementById('doctor-profile-container');
    let doctorArray = new Array();

    docProfileContainer.innerHTML = 
        `<h2 id="header-main" style="text-align: center; width: 100%; 
        margin: 50px 0;">No doctors in database</h2>`

    doctorDataArray.forEach(doctor => {
        
        if ((doctor.userType === "Doctor") && doctorArray.length !== 8) {
            doctorArray.push(doctor);
        }
    });

    if (!(doctorArray.length === 0)) {
        doctorArray.forEach(doctor => {

            let header = document.getElementById('header-main');
            let doctorDepartment = doctor.department.toUpperCase();
            let doctorName = doctor.name.toUpperCase();
            let profileSrc;
            if(doctor.profilePhoto == ""){
                profileSrc = "./img/9.png"
            }else{
                profileSrc = "data:image/jpeg;base64," + doctor.profilePhoto
            }
            
     
            header.style.display = "none"
            docProfileContainer.innerHTML += `
            <div class="card">
            <div class="doctor-image">
                <img src=${profileSrc} alt="">
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
