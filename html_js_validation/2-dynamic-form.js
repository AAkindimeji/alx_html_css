const numFieldsSelect = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

// Function to generate input fields
function generateInputFields(numFields) {
  inputContainer.innerHTML = ''; // Clear existing fields

  for (let i = 1; i <= numFields; i++) {
    const label = document.createElement('label');
    label.textContent = `Field ${i}:`;

    const input = document.createElement('input');
    input.type = 'text';
    input.name = `field${i}`;

    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
  }
}

// Add event listener for dropdown change
numFieldsSelect.addEventListener('change', () => {
  const selectedValue = numFieldsSelect.value;
  generateInputFields(selectedValue);
});

// Function to validate form
function validateForm() {
  const inputs = document.querySelectorAll('#inputContainer input');

  for (const input of inputs) {
    if (input.value === '') {
      alert('Please fill in all fields.');
      return false; // Prevent form submission
    }
  }

  return true; // Allow form submission
}

// Add event listener for form submission
const form = document.getElementById('dynamicForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default submission

  if (!validateForm()) {
    return;
  }

  // Form is valid, submit here (e.g., using fetch or other methods)
  // ...
});
