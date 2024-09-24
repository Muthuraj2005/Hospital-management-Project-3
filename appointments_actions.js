document.addEventListener('DOMContentLoaded', () => {
    const successMessage = document.getElementById('successMessage');

    // Handle Approve and Reject buttons
    document.querySelectorAll('.approve-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Handle approve action here
            alert('Appointment Approved');
            showSuccessMessage();
        });
    });

    document.querySelectorAll('.reject-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Handle reject action here
            alert('Appointment Rejected');
            showSuccessMessage();
        });
    });

    function showSuccessMessage() {
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 2000);
    }
});
