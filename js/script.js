const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};

let typed = new Typed('.text', {
  strings: ['Frontend Developer', 'Copywriter', 'Web Developer'],
  typespeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
