// Medicare Hospital Appointment Booking System

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (
        name === "" ||
        age === "" ||
        phone === "" ||
        doctor === "" ||
        date === "" ||
        time === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    alert(
        "✅ Appointment Booked Successfully!\n\n" +
        "Patient Name: " + name +
        "\nAge: " + age +
        "\nPhone: " + phone +
        "\nDoctor: " + doctor +
        "\nDate: " + date +
        "\nTime: " + time +
        "\n\nThank you for choosing Medicare Hospital!"
    );

    appointmentForm.reset();
});