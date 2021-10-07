function getTopNavPic() {
    let userDb = JSON.parse(localStorage.getItem("userDB"));
    let presentUserId = localStorage.getItem("presentUser");
    
    var dashImg = document.querySelector(".top-img");
  
    userDb.forEach((personData) => {
      if (presentUserId == personData.id) {
        
        if (personData.profilePhoto == "") {
          dashImg.src = "img/9.png";
        } else {
          dashImg.src = "data:image/jpeg;base64," + personData.profilePhoto;
        }
      }
    });
  }
  
  getTopNavPic();