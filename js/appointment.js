function bookAppointmentSuccess() {
    let bookAppointment = document.getElementById('book-appointment-successful');
    if (bookAppointment.style.display === 'none') {
        bookAppointment.style.display = 'block'
        setTimeout(() => {
            bookAppointment.style.display = 'none'
            window.location.assign('patient-appointments.html')
        }, 4000)
    } else bookAppointment.style.display = 'none'
}

function bookAnAppointment() {

    let dept = document.getElementById("department")
    let date = document.getElementById("appointment-date")
    let time = document.getElementById("appointment-time")
    let details = document.getElementById("appointment-details")

    let appointmentItem = {
        doctorAssigned: "Jessica Alaba",
        doctorContact: "0709943765",
        appointmentDate: date.value,
        appointmentTime: time.value,
        department: dept.value
    }
    
    let userDb = JSON.parse(localStorage.getItem("userDb"));
    if (userDb === null) userDb = [];
    if (userDb[0] === undefined) userDb[0] = {};
    if (!userDb[0].appointments) userDb[0].appointments = [];
    userDb[0].appointments.unshift(appointmentItem)

    localStorage.setItem("userDb", JSON.stringify(userDb));

    bookAppointmentSuccess()

    date.value = ""
    time.value = ""
    dept.value = ""
    details.value = ""
}

function showAppointmentOnPage() {
    let userDb = JSON.parse(localStorage.getItem("userDb"));
    let presentUserId = localStorage.getItem("presentUser");
    let tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""
    let tableRow;
    userDb.forEach(record => {
        if(presentUserId === record.id) {
           record.appointment.forEach(appointment => {
            tableRow = `<tr>
            <td  class="firstCol">
              <span><img src="./img/avatarImg.png" /></span>
             <span> ${appointment.doctorAssigned}</span></td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.doctorContact}</td>
             <td>
              
              <div  class="tableTag pending">Cancelled</div></td>
            </tr>`
            tableBody.append(tableRow)
           })
        }
    })
    
}
showAppointmentOnPage()