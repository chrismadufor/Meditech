
function authenticateDetails() {
  let uName = document.getElementById("username");
  let emailAdd = document.getElementById("email");
  let hId = document.getElementById("hospitalid");
  let pWord = document.getElementById("password");

  if (uName.value === "" || emailAdd.value === "" || pWord.value === "") {
    let errorDisplay = document.getElementById("message");
    errorDisplay.innerHTML = `<p style="color: red;">
        Please fill all input fields</p>`;
  } else {
    userLogin = {};
    userLogin.userName = uName.value;
    userLogin.email = emailAdd.value;
    userLogin.hospitalId = hId.value;
    userLogin.passWord = pWord.value;
    userLogin.userType = "Patient"
    userLogin.dateOfBirth = "";
    userLogin.phoneNumber = "";
    userLogin.nationality = "";
    userLogin.city = "";
    userLogin.address = "";
    userLogin.profilePhoto = "";
    userLogin.appointments = [];
    userLogin.id = Math.random();
    userNameFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    hospitalIdFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    passWordFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    let errorDisplay = document.getElementById("message");
    if (
      userNameFormat.test(userLogin.userName) ||
      Number(userLogin.userName) == userLogin.userName
    ) {
      errorDisplay.innerHTML = `<p style="color: red;">Invalid Username Format<br>
        Username must not contain special characters and numbers</p>`;
    } else if (!emailFormat.test(userLogin.email)) {
      errorDisplay.innerHTML = `<p style="color: red;">Invalid Email <br>
         Please Enter a valid email address</p>`;
    } else if (hospitalIdFormat.test(userLogin.hospitalId)) {
      errorDisplay.innerHTML = `<p style="color: red;">Invalid Hospital ID <br>
         ID must not contain special characters</p>`;
    } else if (userLogin.passWord.length < 7) {
      errorDisplay.innerHTML = `<p style="color: red;">Invalid Password Format <br> 
        Password must be a minimum of 8 Characters</p>`;
    } else {
      errorDisplay.innerHTML = "";
      let userDataArray = JSON.parse(localStorage.getItem("userDB"));

      if (userDataArray === null) {
        userDataArray = [];
        userDataArray.push(userLogin);
      } else if(userDataArray !== null){
        userDataArray.push(userLogin);
      }
      localStorage.setItem("userDB", JSON.stringify(userDataArray));
      signUpSuccess()
     }
  }
}
function signUpSuccess() {
  let signUp = document.getElementById('sign-up-successful');
  signUp.style.display = 'none'
  if (signUp.style.display === 'none') {
      signUp.style.display = 'block'
      setTimeout(() => {
          signUp.style.display = 'none'
          window.location.assign('patient-signin.html');
      }, 4000)
  } else signUp.style.display = 'none'
}