const menu = document.querySelector('.menu-button');
const navLinks = document.querySelector('.menuLinks')
menu.addEventListener('click', (e) => {
  e.preventDefault();
  if (navLinks.style.display == "none") {
    navLinks.style.display = "block"
  } else {
    navLinks.style.display = "none"
  }
})