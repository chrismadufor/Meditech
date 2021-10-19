const dummyData = [
    {
        doctor: 'Marylyn Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending',
        
    },
    {
        doctor: 'Jack Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Jumoke Ajoke',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Jimmy Kimmel',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Cancelled'
    },
    {
        doctor: 'Tasha Conrad',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Peter Parker',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Cancelled'
    },
    {
        doctor: 'Marvin Gaye',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Cancelled'
    },
    {
        doctor: 'Mary Lynn',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Ada Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Tobiloba Daniels',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Cancelled'
    },
    {
        doctor: 'Anu Morenike',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Moe Phillip',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Mark Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Grace David',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Howard Jones',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Jack Miller',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Cancelled'
    },
    {
        doctor: 'Davidson Peter',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Billy Porter',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Russ Poe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Ross Geller',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Completed'
    },
    {
        doctor: 'Marylyn Monroe',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Pending'
    },
    {
        doctor: 'Monica Smith',
        date: '12-11-2012',
        time: '2:30pm',
        contact: '08032888201',
status: 'Cancelled'
    }
]

let current_page = 1;
let records_per_page = 7;
let btn_next = document.getElementsByClassName("control-box")[3];
let btn_next_double = document.getElementsByClassName("control-box")[4];
let btn_prev = document.getElementsByClassName("control-box")[1];
let btn_prev_double = document.getElementsByClassName("control-box")[0];

function modal() {
    let modal = document.getElementById('modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none'
    } else modal.style.display = 'block'
}
function editProfile() {
    let editProfileModal = document.getElementById('edit-profile-modal');
    if (editProfileModal.style.display === 'block') {
        editProfileModal.style.display = 'none'
    } else editProfileModal.style.display = 'block'
}

function signUpSuccess() {
    let signUp = document.getElementById('sign-up-successful');
    signUp.style.display = "none"
    if (signUp.style.display === 'none') {
        signUp.style.display = 'block'
        setTimeout(() => {
            signUp.style.display = 'none'
            signOut()
        }, 4000)
    } else signUp.style.display = 'none'
}

function addDoctorSuccess() {
    let addDoctor = document.getElementById('add-doctor-successful');
    addDoctor.style.display = "none"
    if (addDoctor.style.display === 'none') {
        addDoctor.style.display = 'block'
        setTimeout(() => {
            addDoctor.style.display = 'none'
        }, 4000)
    } else addDoctor.style.display = 'none'
}

function signOut() {
    window.location.assign('patient-signin.html')
}

let numberOfPages = () =>  Math.ceil(dummyData.length / records_per_page);

let prevPage = (double) => {
    if (current_page > 1) {
        if(double){
            current_page-=2;
        } else {
            current_page--
        }
        changePage(current_page);
    }
}

let nextPage = (double) => {
    if (current_page < numberOfPages()) {
        if(double){
            current_page+=2;
        } else {
            current_page++
        }
        changePage(current_page);
    }
}
  
btn_next.addEventListener('click',() =>{
    nextPage()
})
btn_prev.addEventListener('click', () =>{
    prevPage()
})
btn_next_double.addEventListener('click',() =>{
    nextPage(true)
})
btn_prev_double.addEventListener('click', () =>{
    prevPage(true)
})

let handleBtnVisibility = (page) => {
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
        btn_prev_double.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
        btn_prev_double.style.visibility = "visible";
    }

    if (page == numberOfPages()) {
        btn_next.style.visibility = "hidden";
        btn_next_double.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
        btn_next_double.style.visibility = "visible";
    }
 } 

function changePage(page){
    let page_span = document.getElementsByClassName("control-box")[2];
    let tableBody = document.getElementById("table-body-ad")

    // Validate page
    if (page < 1) page = 1;
    if (page > numberOfPages()) page = numberOfPages();

    tableBody.innerHTML = " "
    for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < dummyData.length; i++) {
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td class="firstCol">
        <span><img src="./img/avatarImg.png" /></span>
        <span>${dummyData[i].doctor}</span></td>
        <td>${dummyData[i].date}</td>
        <td>${dummyData[i].time}</td>
        <td>${dummyData[i].contact}</td>
        <td>
            <div class="tableTag ${dummyData[i].status.toLocaleLowerCase()}">${dummyData[i].status}</div>
        </td>`
        tableBody.append(tableRow)
    }
    page_span.innerHTML = page
    handleBtnVisibility(page)
}

changePage(1)

window.onclick = function(event) {
    let closeModal = document.getElementById('modal');
    let signUp = document.getElementById
    let editProfileModal = document.getElementById('edit-profile-modal');('sign-up-successful');
    if (event.target == closeModal) {
        modal()
    }
    if (event.target == signUp) {
        signUpSuccess()
    }
    if (event.target == editProfileModal) {
        editProfile()
    }
}

// Side Nav Stuff
let navIcon = document.querySelector('.page-name i')
navIcon.addEventListener('click', () => {
    if(navIcon){}
})

function sideNavToggle() {
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