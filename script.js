// Deep Dive — minimal shared behavior (mobile menu only)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var closeBtn = document.querySelector('.close-menu');
  var menu = document.querySelector('.mobile-menu');
  if (menu && toggle) {
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
  }

  // Feature cards — quiet expand/collapse, each independent (not an accordion)
  var cards = document.querySelectorAll('.feature-card');
  cards.forEach(function (card) {
    function toggleCard () {
      var isOpen = card.classList.toggle('open');
      card.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });
});

