// const dropdownMenu = document.querySelector('#dropdown-menu');
// const dropdownMenuClose = document.querySelector('#dropdown-menu-close');
// const dropdownMenuLinks = dropdownMenu.querySelectorAll('a');

// dropdownMenuLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     dropdownMenu.style.display = 'none';
//   });
// });

// dropdownMenuClose.addEventListener('click', () => {
//   dropdownMenu.style.display = 'none';
  
// });

const openButton = document.getElementById('open-dropdown');
const closeButton = document.getElementById('close-dropdown');
const dropdown = document.getElementById('dropdown');

openButton.addEventListener('click', () => {
  dropdown.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  dropdown.style.display = 'none';
});