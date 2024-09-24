document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const successMessage = document.getElementById('successMessage');

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from actually submitting

        // Capture form data
        const patientName = document.getElementById('patient_name').value;
        const mobile = document.getElementById('mobile').value;
        const doctorName = document.getElementById('doctor_name').value;
        const problem = document.getElementById('problem').value;
        const appointmentDate = document.getElementById('appointment_date').value;

        // Log the data for testing purposes (can be removed later)
        console.log({
            patientName,
            mobile,
            doctorName,
            problem,
            appointmentDate
        });

        // Show the success message
        successMessage.classList.remove('hidden');

        // Optionally clear the form if needed
        appointmentForm.reset();
    });
});
