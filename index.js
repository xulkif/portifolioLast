document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menuIcon');
  const about = document.querySelector('.about');
  const menuItems = document.querySelectorAll('.menu_items li a');
  const closeButton = document.querySelector('.about .menu_items li:last-child a');
  const contactForm = document.getElementById('contactForm');
  const emailInput = document.getElementById('emailInput');
  const errorMessageElement = document.getElementById('errorMessage');

  menuIcon.addEventListener('click', () => {
    about.style.display = 'flex';
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      about.style.display = 'none';
    });
  });

  closeButton.addEventListener('click', () => {
    about.style.display = 'none';
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Check if the email is in lowercase
    if (emailInput.value.toLowerCase() === emailInput.value) {
      // The email is in lowercase, so we can submit the form
      errorMessageElement.textContent = '';
      event.target.submit();
    } else {
      // The email is not in lowercase, so we show an error message
      errorMessageElement.textContent = 'Please enter the email in lowercase.';
    }
  });
});