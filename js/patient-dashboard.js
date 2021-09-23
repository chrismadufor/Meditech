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
      if (personData.profilePhoto == "") {
        dashImg.src = "img/9.png";
      } else {
        dashImg.src = "data:image/jpeg;base64," + personData.profilePhoto;
      }
      if (personData.hospitalId == null || personData.hospitalId == "") {
        DashPatientHospitalId.innerText = "Contact Hospital for ID";
      } else {
        DashPatientHospitalId.innerText = personData.hospitalId.toUpperCase();
      }
    }
  });
}
if(window.location.assign == "patient-dashboard.html"){
retrieveData();
<<<<<<< HEAD
=======
}
function profilePageFill() {
  let userDb = JSON.parse(localStorage.getItem("userDB"));
  let presentUserId = localStorage.getItem("presentUser");
  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      profileName.innerText = personData.userName;
      profileHosID.innerText = personData.hospitalId;
      profileEmail.innerText = personData.email;
      profilePhone.innerText = personData.phoneNumber;
      profileDOB.innerText = personData.dateOfBirth;
      profileCity.innerText = personData.city;
      profileNation.innerText = personData.nationality;
      profileAdd.innerText = personData.address;
      profileImage.src = "data:image/jpeg;base64," + personData.profilePhoto;
    }
  });
}

profileSideBtn.addEventListener("click", profilePageFill);

// listen for the change event so we can capture the file

editprofileImage.onchange = function (e) {
  const file = e.target.files[0];

  // encode the file using the FileReader API
  const reader = new FileReader();
  reader.onloadend = () => {
    // use a regex to remove data url part
    const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    // log to console
    // logs wL2dvYWwgbW9yZ...
    console.log(base64String);

    editprofileShow.src = "data:image/jpeg;base64," + base64String;

    // editprofileImage.value = "";
  };
  reader.readAsDataURL(file);
};

editProfileBtn.addEventListener("click", editProfModal);

function editProfModal() {
  let userDb = JSON.parse(localStorage.getItem("userDB"));
  let presentUserId = localStorage.getItem("presentUser");
  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      editprofileName.value = personData.userName;
      editprofileHosID.value = personData.hospitalId;
      editprofileEmail.value = personData.email;
      editprofilePhone.value = personData.phoneNumber;
      editprofileDOB.value = personData.dateOfBirth;
      editprofileCity.value = personData.city;
      editprofileNation.value = personData.nationality;
      editprofileAdd.value = personData.address;
      editprofileImage.src =
        "data:image/jpeg;base64," + personData.profilePhoto;
    }
  });
}

function saveEdit() {
  let userDb = JSON.parse(localStorage.getItem("userDB"));
  let presentUserId = localStorage.getItem("presentUser");
  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      personData.userName = editprofileName.value;
      personData.hospitalId = editprofileHosID.value;
      personData.email = editprofileEmail.value;
      personData.phoneNumber = editprofilePhone.value;
      personData.dateOfBirth = editprofileDOB.value;
      personData.city = editprofileCity.value;
      personData.nationality = editprofileNation.value;
      personData.address = editprofileAdd.value;
      personData.profilePhoto = editprofileShow.src;

      localStorage.setItem("userDB", JSON.stringify(array));

      profilePageFill();
    }
  });
}

submitEdit.addEventListener("click", saveEdit);
>>>>>>> develop
