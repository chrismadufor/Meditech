var signInBtn = document.querySelector(".signInBtn");

signInBtn.addEventListener("click", loginAuth);

function loginAuth() {
  var usernameSignin = document.querySelector(".usenameSignin");
  var passwordSignin = document.querySelector(".passwordSignin");
  var usernameErr = document.querySelector(".usernameErr");
  var passwordErr = document.querySelector(".passwordErr");
  var loginErr = document.querySelector(".loginErr");

  usernameErr.innerText = "";
  passwordErr.innerText = "";
  loginErr.innerText = "";

  console.log(usernameSignin.value);
  console.log(passwordSignin.value);

  let userDb = JSON.parse(localStorage.getItem("userDB"));

  if (usernameSignin.value == "") {
    usernameErr.innerText = "Username cannot be empty";
  } else if (passwordSignin.value == "") {
    passwordErr.innerText = "Password cannot be empty";
  } else {
    if (userDb) {
      userDb.forEach((personObj) => {
        if (
          usernameSignin.value == personObj.email &&
          passwordSignin.value == personObj.passWord &&
          personObj.userType == "Patient"
        ) {
          window.location.assign("patient-dashboard.html");
          localStorage.setItem("presentUser", personObj.id);
        } else if (
          usernameSignin.value == personObj.email &&
          passwordSignin.value == personObj.passWord &&
          personObj.userType == "Doctor"
        ) {
          window.location.assign("Doctors-dashboard.html");
          localStorage.setItem("presentUser", personObj.id);
        } else if (usernameSignin.value == "ad10001") {
          window.location.assign("admin-dashboard.html");
        } else {
          loginErr.innerText = "Username and password does not match";
        }
      });
    } else {
      loginErr.innerText = "No Record in Database";
    }
  }
}
