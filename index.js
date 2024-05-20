document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menuIcon');
    const about = document.querySelector('.about');
    const menuItems = document.querySelectorAll('.menu_items li a');
    const closeButton = document.querySelector('.about .menu_items li:last-child a');
  
    // Add event listener to the hamburger menu icon
    menuIcon.addEventListener('click', () => {
      about.style.display = 'flex';
    });
  
    // Add event listeners to the menu options
    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        about.style.display = 'none';
        // Display the corresponding content here
      });
    });
  
    // Add event listener to the close button
    closeButton.addEventListener('click', () => {
      about.style.display = 'none';
    });
  });