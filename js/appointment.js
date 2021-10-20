function openAppointmentsPage() {
    window.location.assign('book-appointment.html')
}

function bookAppointmentSuccess() {
    let bookAppointment = document.getElementById('book-appointment-successful');
    bookAppointment.style.display = "none"
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
        doctorAssigned: "Grace Ekweremadu",
        doctorContact: "0709943765",
        appointmentDate: date.value,
        appointmentTime: time.value,
        department: dept.value,
        status: "pending"
    }
    
    let userDb = JSON.parse(localStorage.getItem("userDB"));    
    userDb.forEach(record => {
        if(presentUserId == record.id) {
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
    console.log(userDb)
    tableBody.innerHTML = `<p style = "margin: 20px;">No appointments has been booked</p>`
    controls.style.display = "none"
    userDb.forEach(record => {
        if(presentUserId == record.id) {
            if (record.appointments == []) {

            } else {
                tableBody.innerHTML = ``
                record.appointments.forEach(appointment => {
                    let tableRow = document.createElement('tr');
                    tableRow.innerHTML = `
                    <td class="firstCol">
                    <span><img src="./img/avatarImg.png" /></span>
                    <span>${appointment.doctorAssigned}</span></td>
                    <td>${appointment.appointmentDate}</td>
                    <td>${appointment.appointmentTime}</td>
                    <td>${appointment.doctorContact}</td>
                    <td>
                    <div class="tableTag pending">Pending</div></td>`
                    tableBody.append(tableRow)
                controls.style.display = "flex"
               })
            }
        }
    })
    
}
// showAppointmentOnPage()

