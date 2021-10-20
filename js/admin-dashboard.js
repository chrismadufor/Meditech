
let records_per_page = 4;
let records = JSON.parse(localStorage.getItem("userDB"))
let userID = localStorage.getItem('presentUser')
let userObj = records.filter(record => record.id == userID)
let appointments = userObj[0].appointments

let numberOfPages = () =>  Math.ceil(appointments.length / records_per_page);

function openAppointments() {
  let appointment = document.getElementById('appointment-details')
  if (appointment.style.visibility = "visible") {
      appointment.style.visibility = "hidden";
  } else appointment.style.visibility = "visible";
}

let patientTableUpdate = (arg) => {
    let cancelBtn = document.getElementById('cancel-btn')
    let tableRow = document.createElement('tr');
            tableRow.addEventListener('click', () => {
                if(arg.status == 'pending') openAppointments()
                cancelBtn.addEventListener('click', () => {
                    arg.status = 'cancelled'
                    initailizeTable(1)
                    openAppointments()
                })
            })
            tableRow.innerHTML = `
            <td class="firstCol">
            <span><img src="./img/avatarImg.png" /></span>
            <span>${arg.doctorAssigned}</span></td>
            <td>${arg.appointmentDate}</td>
            <td>${arg.appointmentTime}</td>
            <td>${arg.doctorContact}</td>
            <td>
                <div class="tableTag ${arg.status.toLowerCase()}">${arg.status.charAt(0).toUpperCase() + arg.status.slice(1)}</div>
            </td>`
        return tableRow
  }
  
  let doctorsTableUpdate = (arg) => {
    let tableRow = document.createElement('tr');
    let yesBtn = document.getElementById('yes-btn')
    tableRow.addEventListener('click', () => {
        if(arg.status == 'pending') openAppointments()
        yesBtn.addEventListener('click', () => {
            arg.status = 'completed'
            initailizeTable(1)
            openAppointments()
        })
    })
    tableRow.innerHTML = `
    <td class="firstCol">
    <span><img src="./img/avatarImg.png" /></span>
    <span>${arg.patientAssigned}</span></td>
    <td>${arg.appointmentDate}</td>
    <td>${arg.appointmentTime}</td>
    <td>${arg.patientContact}</td>
    <td>
        <div class="tableTag ${arg.status.toLocaleLowerCase()}">${arg.status.charAt(0).toUpperCase() + arg.status.slice(1)}</div>
    </td>`
  
    return tableRow
  }

function initailizeTable(page) {
  let tableBody = document.getElementById("table-body-dashboard")

  // Validate page
  if (page < 1) page = 1;
  if (page > numberOfPages()) page = numberOfPages();

  tableBody.innerHTML = " "
  for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < appointments.length; i++) {
      if (userObj[0].userType == 'Patient') {
          
          tableBody.append(patientTableUpdate(appointments[i]))
      } else if (userObj[0].userType == 'Doctor') {
          
          tableBody.append(doctorsTableUpdate(appointments[i]))
      }
      
  }
}

initailizeTable(1)