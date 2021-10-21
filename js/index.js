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
function openAppointments() {
    let appointment = document.getElementById ('appointment-details')
    if (appointment.style.display === 'block') {
        appointment.style.display = 'none'
    } else appointment.style.display = 'block'
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

window.onclick = function(event) {
    let closeModal = document.getElementById('modal');
    let signUp = document.getElementById('sign-up-successful');
    let editProfileModal = document.getElementById('edit-profile-modal');
    let appointment = document.getElementById('appointment-details')
    if (event.target == closeModal) {
        modal()
    }
    if (event.target == signUp) {
        signUpSuccess()
    }
    if (event.target == editProfileModal) {
        editProfile()
    }
    if (event.target == appointment) {
        openAppointments()
    }
}

let records = JSON.parse(localStorage.getItem("userDB"))
 let userID = localStorage.getItem('presentUser')
 userObj = records.filter(record => record.id == userID)
 let appointments = userObj[0].appointments

let current_page = 1;
let records_per_page = 7;
let btn_next = document.getElementsByClassName("control-box")[3];
let btn_next_double = document.getElementsByClassName("control-box")[4];
let btn_prev = document.getElementsByClassName("control-box")[1];
let btn_prev_double = document.getElementsByClassName("control-box")[0];

const selectElement = document.querySelector('.filterOption');

selectElement.addEventListener('change', (event) => {
  let val = event.target.value;
  if(val != 'all'){
    let filterValue = appointments.filter(el => el.status == val);
    changePage(1, filterValue)
  } else {
    let records = JSON.parse(localStorage.getItem("userDB"))
    let userID = localStorage.getItem('presentUser')
    userObj = records.filter(record => record.id == userID)
    let appointments = userObj[0].appointments
    changePage(1, appointments)
  }
});

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

function changePage(page, rows = appointments){
    
    let page_span = document.getElementsByClassName("control-box")[2];
    let tableBody = document.getElementById("table-body-ad")

    // Validate page
    if (page < 1) page = 1;
    if (page > numberOfPages()) page = numberOfPages();

    tableBody.innerHTML = " "
    for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < rows.length; i++) {
        if (userObj[0].userType == 'Patient') {
            let cancelBtn = document.getElementById('cancel-btn')
            let tableRow = document.createElement('tr');
            tableRow.addEventListener('click', () => {
                if(rows[i].status == 'pending') openAppointments()
                cancelBtn.addEventListener('click', () => {
                    rows[i].status = 'cancelled'
                    changePage(page)
                    openAppointments()
                })
            })
            tableRow.innerHTML = `
            <td class="firstCol">
            <span><img src="./img/avatarImg.png" /></span>
            <span>${rows[i].doctorAssigned}</span></td>
            <td>${rows[i].appointmentDate}</td>
            <td>${rows[i].appointmentTime}</td>
            <td>${rows[i].doctorContact}</td>
            <td>
                <div class="tableTag ${rows[i].status.toLowerCase()}">${rows[i].status.charAt(0).toUpperCase() + rows[i].status.slice(1)}</div>
            </td>`
            tableBody.append(tableRow)
        }
        if (userObj[0].userType == 'Doctor') {
            let tableRow = document.createElement('tr');
            let yesBtn = document.getElementById('yes-btn')
            tableRow.addEventListener('click', () => {
                if(rows[i].status == 'pending') openAppointments()
                yesBtn.addEventListener('click', () => {
                    rows[i].status = 'completed'
                    changePage(page)
                    openAppointments()
                })
            })
            tableRow.innerHTML = `
            <td class="firstCol">
            <span><img src="./img/avatarImg.png" /></span>
            <span>${rows[i].patientAssigned}</span></td>
            <td>${rows[i].appointmentDate}</td>
            <td>${rows[i].appointmentTime}</td>
            <td>${rows[i].patientContact}</td>
            <td>
                <div class="tableTag ${rows[i].status.toLocaleLowerCase()}">${rows[i].status.charAt(0).toUpperCase() + rows[i].status.slice(1)}</div>
            </td>`
            tableBody.append(tableRow)
        }
        
    }
    page_span.innerHTML = page
    handleBtnVisibility(page)
}

changePage(1)
