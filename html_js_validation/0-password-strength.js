function validatePassword(password) {
    // Define password strength criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
  
    // Check if all criteria are met
    if (minLength <= password.length && hasUppercase && hasLowercase && hasDigit && hasSpecial) {
      return true;
    } else {
      return false;
    }
  }
  
  // Add event listener to form submission
  const passwordForm = document.getElementById('passwordForm');
  passwordForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
  
    // Validate password and display error message if needed
    if (validatePassword(password)) {
      errorElement.textContent = ''; // Clear error message
      passwordForm.submit(); // Submit the form
    } else {
      errorElement.textContent = 'Password must meet all criteria: at least 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special character.';
    }
  });
  