let userDb = JSON.parse(localStorage.getItem("userDB"));
let presentUserId = localStorage.getItem("presentUser");

function retrieveData() {
  let userDb = JSON.parse(localStorage.getItem("userDB"));
  let presentUserId = localStorage.getItem("presentUser");
  var DashPatientName = document.querySelector(".pat-name");
  var DashPatientHospitalId = document.querySelector(".hos-num");
  var dashImg = document.querySelector(".patient-img");

  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      DashPatientName.innerText = personData.userName;

      if (personData.hospitalId == null || personData.hospitalId == "") {
        DashPatientHospitalId.innerText = "Contact Hospital for ID";
      } else {
        DashPatientHospitalId.innerText = personData.hospitalId.toUpperCase();
      }
    }
  });
}

retrieveData();
