function openAppointmentsPage() {
    window.location.assign('book-appointment.html')
}

function bookAppointmentSuccess() {
    let bookAppointment = document.getElementById('book-appointment-successful');
    if (bookAppointment.style.display === 'none') {
        bookAppointment.style.display = 'block'
        setTimeout(() => {
            bookAppointment.style.display = 'none'
            window.location.assign('patient-appointment.html')
        }, 4000)
    } else bookAppointment.style.display = 'none'
}

function bookAnAppointment() {

    let dept = document.getElementById("department")
    let date = document.getElementById("appointment-date")
    let time = document.getElementById("appointment-time")
    let presentUserId = localStorage.getItem("presentUser");
    let details = document.getElementById("appointment-details")

    let appointmentItem = {
        doctorAssigned: "Jessica Alaba",
        doctorContact: "0709943765",
        appointmentDate: date.value,
        appointmentTime: time.value,
        department: dept.value
    }
    
    let userDb = JSON.parse(localStorage.getItem("userDB"));
    if (userDb === null) userDb = [];
    userDb.forEach(record => {
        if(presentUserId === record.id) {
            record.appointments.unshift(appointmentItem)
        }
    })

    localStorage.setItem("userDB", JSON.stringify(userDb));

    bookAppointmentSuccess()

    date.value = ""
    time.value = ""
    dept.value = ""
    details.value = ""
}

function showAppointmentOnPage() {
    let controls = document.querySelector(".tableControls")
    let userDb = JSON.parse(localStorage.getItem("userDB"));
    let presentUserId = localStorage.getItem("presentUser");
    let tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""
    userDb.forEach(record => {
        if(presentUserId === record.id) {
            if (!record.appointments) {
                tableBody.innerHTML = "No appointments has been booked"
                controls.style.display = "none"

            } else {
                record.appointments.forEach(appointment => {
                    let tableRow = document.createElement('tr');
                    tableRow.innerHTML = `
                    <td  class="firstCol">
                    <span><img src="./img/avatarImg.png" /></span>
                    <span> ${appointment.doctorAssigned}</span></td>
                    <td>${appointment.appointmentDate}</td>
                    <td>${appointment.appointmentTime}</td>
                    <td>${appointment.doctorContact}</td>
                    <td>
                    <div  class="tableTag pending">Pending</div></td>`
                    tableBody.append(tableRow)
                controls.style.display = "block"
               })
            }
        }
    })
    
}
showAppointmentOnPage()