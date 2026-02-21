import { router } from './router.js';
import { initCursor } from './cursor.js';
import { initNav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  router();

  window.addEventListener('hashchange', router);
});
