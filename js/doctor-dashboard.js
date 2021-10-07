function retrieveData() {
    let userDb = JSON.parse(localStorage.getItem("userDB"));
    let presentUserId = localStorage.getItem("presentUser");
    var DashDoctorName = document.querySelector(".doctor-name");
    
    var dashImg = document.querySelector(".doctor-img");
  
    console.log(userDb);
    console.log(dashImg);
  
    userDb.forEach((personData) => {
      if (presentUserId == personData.id) {
        DashDoctorName.innerText = personData.name.toUpperCase();
        if (personData.profilePhoto == "") {
          dashImg.src = "img/9.png";
        } else {
          dashImg.src = "data:image/jpeg;base64," + personData.profilePhoto;
        }
  
       
      }
    });
  }
  
  retrieveData();