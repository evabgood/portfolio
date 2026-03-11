import { router } from './router.js';
import { initCursor } from './cursor.js';
import { initNav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  router();

  // Reveal the app only after content is injected — prevents flash of empty layout
  requestAnimationFrame(() => {
    const app = document.getElementById('app');
    app.style.transition = 'opacity 0.15s ease';
    app.style.opacity = '1';
  });

  window.addEventListener('hashchange', router);
});
