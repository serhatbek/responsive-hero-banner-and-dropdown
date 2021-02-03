const dropdownLink = document.querySelector('.dropdown-btn');
const subDropdownLink = document.querySelector('.dropdown-btn2');

const dropdown = document.querySelector('.main-nav__dropdown');
const subDropdown = document.querySelector('.sub-dropdown');

dropdownLink.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('js-dropdown');
  console.log('drop');
});

subDropdownLink.addEventListener('click', (e) => {
  e.stopPropagation();
  subDropdown.classList.toggle('js-sub-dropdown');
  console.log('subdrop');
});

// Hamburger Menu & Nav Collapse

const burgerMenu = document.querySelector('.hamburger-menu');
const navCollapse = document.querySelector('header');

burgerMenu.addEventListener('click', openNav);

function openNav() {
  burgerMenu.classList.toggle('open');
  navCollapse.classList.toggle('navCollapse');
}
