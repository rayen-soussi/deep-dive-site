// Deep Dive — minimal shared behavior (mobile menu only)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var closeBtn = document.querySelector('.close-menu');
  var menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  function openMenu () {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu () {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
});
