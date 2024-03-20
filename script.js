const form = document.querySelector('form');
const email = document.querySelector('#email');


let error = email.nextElementSibling;
let errorB = form.nextElementSibling;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateForm();
});

function validateForm() {
  const userEmail = email.value;

  if (userEmail === '') {
    error.textContent = 'Oops! Please enter your email.'
    errorB.textContent = 'Oops! Please enter your email.'
  }
  else {
    validateEmail(userEmail, error);
  }
}
function validateEmail(userEmail, error) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!(emailRegex.test(userEmail)))
    error.textContent = "oops! that doesnt look like an email"
    errorB.textContent = "oops! that doesnt look like an email"
}