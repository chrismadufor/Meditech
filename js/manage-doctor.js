window.onload = function addDoctorProfile(){
    let doctorDataArray = JSON.parse(localStorage.getItem("userDB"));

    let docProfileContainer = document.getElementById('doctor-profile-container');
    docProfileContainer.innerHTML = ''
    if(!doctorDataArray){
        docProfileContainer.innerHTML += 
        `<h2 style="text-align: center; width: 100%; 
        margin: 50px 0;">No doctors in database</h2>`
    } else {
        let len = doctorDataArray.length - 1;
        let i = len;
        let stopper = 0;
    while (stopper < 8) {
        
        if(doctorDataArray[i].userType === "Doctor"){

        let doctorDepartment = doctorDataArray[i].department.toUpperCase();
        let doctorName = doctorDataArray[i].name.toUpperCase();
     
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
            stopper++;
            }
            i--;
        }
  
    }
}
