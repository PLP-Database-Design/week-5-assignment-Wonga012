document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactMethod = document.getElementById('contactMethod').value;
    const termsAccepted = document.getElementById('terms').checked;
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Check if contact method is selected
    if (!contactMethod) {
        alert('Please select a preferred contact method.');
        return;
    }
    // Create an object to store form data
    const formData = {
        name: name,
        email: email,
        contactMethod: contactMethod,
        termsAccepted: termsAccepted
    };
    // Display form data in the summary section
    const summaryDiv = document.getElementById('formSummary');
    summaryDiv.innerHTML = `
        <h3>Form Summary</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
        <p><strong>Terms Accepted:</strong> ${formData.termsAccepted ? 'Yes' : 'No'}</p>
    `;
    // Confirmation message
    alert('Form submitted successfully!');
});
// Real-time feedback for email validation
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) && email.length > 0) {
        this.setCustomValidity('Invalid email format');
    } else {
        this.setCustomValidity('');
    }
});