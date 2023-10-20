const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  header.style.backgroundColor = scrollPosition > 250 ? '#29323c' : 'transparent';
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
});