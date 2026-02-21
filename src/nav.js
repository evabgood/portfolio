export function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('mobile-menu');
  let lastScroll = 0;
  let menuOpen = false;

  // Scroll behavior - hide/show nav
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 200 && !menuOpen) {
      nav.classList.add('nav--hidden');
    } else {
      nav.classList.remove('nav--hidden');
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  burger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    burger.classList.toggle('nav__burger--active');
    mobileMenu.classList.toggle('nav__mobile-menu--open');
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      burger.classList.remove('nav__burger--active');
      mobileMenu.classList.remove('nav__mobile-menu--open');
      document.body.classList.remove('no-scroll');
    });
  });
}
