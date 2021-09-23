let userDb = JSON.parse(localStorage.getItem("userDB"));
let presentUserId = localStorage.getItem("presentUser");

var editProfileBtn = document.querySelector(".edit-profile");

var profileName = document.querySelector(".profileName");
var profileHosID = document.querySelector(".profileHosID");
var profileEmail = document.querySelector(".profileEmail");
var profilePhone = document.querySelector(".profilePhone");
var profileDOB = document.querySelector(".profileDOB");
var profileCity = document.querySelector(".profileCity");
var profileNation = document.querySelector(".profileNation");
var profileAdd = document.querySelector(".profileAdd");
var profileImage = document.querySelector(".profile-img");

var editprofileName = document.querySelector("#patient-name");
var editprofileHosID = document.querySelector("#patient-id");
var editprofileEmail = document.querySelector("#patient-email");
var editprofilePhone = document.querySelector("#patient-phone");
var editprofileDOB = document.querySelector("#patient-dob");
var editprofileCity = document.querySelector("#patient-city");
var editprofileNation = document.querySelector("#patient-nationality");
var editprofileAdd = document.querySelector("#patient-address");
var editprofileImage = document.querySelector("#patient-image");
var editprofileShow = document.querySelector(".edit-profile-img");

var submitEdit = document.querySelector("#submit-form");

function retrieveData() {
  var DashPatientName = document.querySelector(".pat-name");
  var DashPatientHospitalId = document.querySelector(".hos-num");
  var dashImg = document.querySelector(".patient-img");

  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      DashPatientName.innerText = personData.userName;
      dashImg.src = "data:image/jpeg;base64," + personData.profilePhoto;
      if (personData.hospitalId == null || personData.hospitalId == "") {
        DashPatientHospitalId.innerText = "Contact Hospital for ID";
      } else {
        DashPatientHospitalId.innerText = personData.hospitalId.toUpperCase();
      }
    }
  });
}

retrieveData();

function profilePageFill() {
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

profilePageFill();

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
