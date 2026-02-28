import { homePage } from './pages/home.js';
import { workPage } from './pages/work.js';
import { aboutPage } from './pages/about.js';
import { contactPage } from './pages/contact.js';
import { sdfLabsPage } from './pages/sdf-labs.js';
import { sdfLineagePage } from './pages/sdf-lineage.js';
import { initAnimations, cleanupAnimations } from './animations.js';

const routes = {
  home: homePage,
  work: workPage,
  about: aboutPage,
  contact: contactPage,
  'work/sdf-labs': sdfLabsPage,
  'work/sdf-lineage': sdfLineagePage,
};

export function router() {
  const hash = window.location.hash.slice(1) || 'home';
  const page = routes[hash] || routes.home;
  const content = document.getElementById('page-content');

  // Clean up observers and listeners from previous page
  cleanupAnimations();

  // Swap content instantly
  content.innerHTML = page();

  // Update active nav links
  document.querySelectorAll('.nav__link, .nav__mobile-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Wait one frame for the browser to lay out the new DOM, then animate.
  // Use both rAF (ideal) and setTimeout (fallback for headless environments
  // where rAF may not fire due to zero-height viewport).
  let initialized = false;
  function init() {
    if (initialized) return;
    initialized = true;
    initAnimations();
  }
  requestAnimationFrame(init);
  setTimeout(init, 50);
}
