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

  if (usernameSignin.value == "") {
    usernameErr.innerText = "Username cannot be empty";
  } else if (passwordSignin.value == "") {
    passwordErr.innerText = "Password cannot be empty";
  } else {
    if (usernameSignin == "pt10001") {
      window.location.assign("patient-dashboard.html");
    } else if (usernameSignin == "dt10001") {
      window.location.assign("Doctors-dashboard.html");
    } else if (usernameSignin == "ad10001") {
      window.location.assign("admin-dashboard.html");
    } else {
      loginErr.innerText = "Username and password does not match";
    }
  }
}
