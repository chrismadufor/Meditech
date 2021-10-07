let userDb = JSON.parse(localStorage.getItem("userDB"));
let presentUserId = localStorage.getItem("presentUser");
console.log(userDb);


var editProfileBtn = document.querySelector(".edit-profile");

var profileName = document.querySelector(".profileName");
var profileHosID = document.querySelector(".doctor-id");
var profileEmail = document.querySelector(".profileEmail");
var profilePhone = document.querySelector(".profilePhone");
var profileDOB = document.querySelector(".profileDOB");
var profileCity = document.querySelector(".profileCity");
var profileNation = document.querySelector(".profileNation");
var profileAdd = document.querySelector(".profileAdd");
var profileImage = document.querySelector(".profile-img");
var profileDept = document.querySelector(".profileDept");


var editprofileName = document.querySelector("#doctor-name");
var editprofileHosID = document.querySelector("#doctor-id");
var editprofileEmail = document.querySelector("#doctor-email");
var editprofilePhone = document.querySelector("#doctor-phone");
var editprofileDOB = document.querySelector("#doctor-dob");
var editprofileCity = document.querySelector("#doctor-city");
var editprofileNation = document.querySelector("#doctor-nationality");
var editprofileAdd = document.querySelector("#doctor-address");
var editprofileImage = document.querySelector("#doctor-image");
var editprofileShow = document.querySelector(".edit-profile-img");

var submitEdit = document.querySelector("#submit-form");

function profilePageFill() {
  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      profileName.innerText = personData.name;
      profileHosID.innerText = personData.id;
      profileEmail.innerText = personData.email;
      profilePhone.innerText = personData.phoneNumber;
      profileDOB.innerText = personData.dateOfBirth;
      profileCity.innerText = personData.city;
      profileNation.innerText = personData.nationality;
      profileAdd.innerText = personData.address;
      profileDept.innerText = personData.department
      if (personData.profilePhoto == "") {
        profileImage.src = "img/9.png";
      } else {
        profileImage.src = "data:image/jpeg;base64," + personData.profilePhoto;
      }
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
    userDb.forEach((personData, index, array) => {
      if (presentUserId == personData.id) {
        personData.profilePhoto = base64String;

        localStorage.setItem("userDB", JSON.stringify(array));

        profilePageFill();
      }
    });

    // editprofileImage.value = "";
  };
  reader.readAsDataURL(file);
};

editProfileBtn.addEventListener("click", editProfModal);

function editProfModal() {
  userDb.forEach((personData) => {
    if (presentUserId == personData.id) {
      editprofileName.value = personData.name;
      editprofileHosID.value = personData.id;
      editprofileEmail.value = personData.email;
      editprofilePhone.value = personData.phoneNumber;
      editprofileDOB.value = personData.dateOfBirth;
      editprofileCity.value = personData.city;
      editprofileNation.value = personData.nationality;
      editprofileAdd.value = personData.address;
      if (personData.profilePhoto == "") {
        editprofileImage.src = "img/9.png";
        editprofileShow.src = "img/9.png";
      } else {
        editprofileImage.src =
          "data:image/jpeg;base64," + personData.profilePhoto;
        editprofileShow.src =
          "data:image/jpeg;base64," + personData.profilePhoto;
      }
    }
  });
}

function saveEdit() {
  userDb.forEach((personData, index, array) => {
    if (presentUserId == personData.id) {
      personData.name = editprofileName.value;
      personData.id = editprofileHosID.value;
      personData.email = editprofileEmail.value;
      personData.phoneNumber = editprofilePhone.value;
      personData.dateOfBirth = editprofileDOB.value;
      personData.city = editprofileCity.value;
      personData.nationality = editprofileNation.value;
      personData.address = editprofileAdd.value;

      console.log(personData);

      localStorage.setItem("userDB", JSON.stringify(array));

      profilePageFill();
    }
  });
}

submitEdit.addEventListener("click", saveEdit);
