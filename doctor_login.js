document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // You can still capture the values of patient ID and password if needed
        const patientId = document.getElementById('patient_id').value;
        const password = document.getElementById('password').value;

        // Perform any necessary actions with the credentials, but login proceeds no matter what
        console.log("Patient ID:", patientId, "Password:", password);

        // Redirect to the appointments page regardless of the credentials
        window.location.href = 'view_appointments.html';
    });
});
