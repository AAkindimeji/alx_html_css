function validateEmail(email) {
    // Regular expression for email format
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  }
  
  // Add event listener to form submission
  const emailForm = document.getElementById('emailForm');
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error');
  
    // Validate email and display error message if needed
    if (validateEmail(email)) {
      errorElement.textContent = ''; // Clear error message
      emailForm.submit(); // Submit the form
    } else {
      errorElement.textContent = 'Please enter a valid email address.';
    }
  });
  