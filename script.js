const menu = document.querySelectorAll('.menu-button');
const navLinks = document.querySelector('.nav-links');
const cancel = document.querySelector('.link-cancel');
menu.forEach((menuBtn) => {
  menuBtn.addEventListener('click', () => {
    if (navLinks.classList.contains('menuLinks')) {
      navLinks.classList.remove('menuLinks');
      cancel.classList.remove('d-none');
    } else {
      navLinks.classList.add('menuLinks');
      cancel.classList.add('d-none');
    }
  });
});
