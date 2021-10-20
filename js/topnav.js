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

  // Side Nav Stuff
let navIcon = document.querySelector('.page-name i')
console.log("navIcon is " + navIcon)
navIcon.addEventListener('click', () => {
  console.log("There has been a click!")
  if(!navIcon.classList.contains('show')) {
      navIcon.classList.add('show');
      sideNavOn();
  }
  else {
      navIcon.classList.remove('show')
      sideNavOff();
  }
})
function sideNavOn() {
    let sideNav = document.querySelector('.side-nav')
    let sideNavText = document.querySelectorAll('.side-nav-links li span')
    let sideNavLink = document.querySelectorAll ('.side-nav-links li')
    let sideHeader = document.querySelector('.side-nav .header h2')
    let main = document.querySelector('.main')
    let topNav = document.querySelector('.top-nav')

    sideNavText.forEach (item => item.style.display = 'inline')
    sideHeader.style.display = 'block'
    sideNavLink.forEach (item => item.style.paddingRight = 'unset')
    sideNav.style.width = '240px'
    main.style.marginLeft = '240px'
    topNav.style.width = 'calc(100% - 240px)'
}
function sideNavOff() {
    let sideNav = document.querySelector('.side-nav')
    let sideNavText = document.querySelectorAll('.side-nav-links li span')
    let sideNavLink = document.querySelectorAll ('.side-nav-links li')
    let sideHeader = document.querySelector('.side-nav .header h2')
    let main = document.querySelector('.main')
    let topNav = document.querySelector('.top-nav')

    sideNavText.forEach (item => item.style.display = 'none')
    sideHeader.style.display = 'none'
    sideNavLink.forEach (item => item.style.paddingRight = '40px')
    sideNav.style.width = 'unset'
    main.style.marginLeft = '100px'
    topNav.style.width = 'calc(100% - 100px)'
}