const submitForm = document.getElementById('submitForm');
const messageElement = document.getElementById('message');

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Validate form
  if (!name || !email) {
    messageElement.textContent = 'Please fill in all required fields.';
    return; // Stop further processing
  }

  // Form is valid, submit here (e.g., using fetch or other methods)
  // ...

  messageElement.textContent = 'Form submitted successfully!';
}

// Add event listener to form submission
submitForm.addEventListener('submit', handleFormSubmit);
