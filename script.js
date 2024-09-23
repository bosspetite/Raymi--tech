const form = document.getElementById('myForm');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validate form fields
  if (!nameInput.value || !emailInput.value) {
    alert('Please fill in all required fields.');
    return;
  }

  // Perform additional validation if needed

  // Submit form data (e.g., using AJAX)
  console.log('Form submitted!');
});
