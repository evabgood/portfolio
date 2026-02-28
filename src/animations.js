// Module-level references for cleanup
let scrollObserver = null;
let scrollHandler = null;
let orbCleanup = null;
let typewriterTimeouts = [];

export function cleanupAnimations() {
  if (scrollObserver) {
    scrollObserver.disconnect();
    scrollObserver = null;
  }
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
    scrollHandler = null;
  }
  if (orbCleanup) {
    orbCleanup();
    orbCleanup = null;
  }
  typewriterTimeouts.forEach(id => clearTimeout(id));
  typewriterTimeouts = [];
}

export function initAnimations() {
  // Always init interactive features (orb follower, magnetic buttons, etc.)
  initOrbFollower();
  initTypewriters();

  const reveals = document.querySelectorAll('[data-reveal]:not(.revealed)');
  if (!reveals.length) return;

  // Get a reliable viewport height (fallback 600px for headless/preview environments)
  const vh = Math.max(
    window.innerHeight || 0,
    document.documentElement.clientHeight || 0,
    600
  );

  // Phase 1: Immediately reveal above-fold elements with staggered delays
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh + 100) {
      const delay = parseFloat(el.dataset.delay) || 0;
      setTimeout(() => el.classList.add('revealed'), delay * 1000);
    }
  });

  // Phase 2: IntersectionObserver for below-fold scroll reveals
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const d = parseFloat(entry.target.dataset.delay) || 0;
        setTimeout(() => entry.target.classList.add('revealed'), d * 1000);
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '80px 0px 0px 0px' });

  // Observe below-fold elements after a beat (lets Phase 1 claims settle)
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => {
      scrollObserver.observe(el);
    });
  }, 200);

  // Phase 3: Scroll-based fallback (catches anything IntersectionObserver misses)
  scrollHandler = function onScroll() {
    const currentVh = Math.max(window.innerHeight || 0, 600);
    const unrevealed = document.querySelectorAll('[data-reveal]:not(.revealed)');
    if (!unrevealed.length) {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler = null;
      return;
    }
    unrevealed.forEach(el => {
      if (el.getBoundingClientRect().top < currentVh * 0.88) {
        const d = parseFloat(el.dataset.delay) || 0;
        setTimeout(() => el.classList.add('revealed'), d * 1000);
      }
    });
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });

  // === Interactive features ===

  // Magnetic buttons
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s ease-out';
    });
  });

  // Counter animation
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    let started = false;

    function run() {
      if (started) return;
      started = true;
      const start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / 2000, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 4)) * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
    }

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); obs.unobserve(el); }
    }, { threshold: 0.3 });
    obs.observe(el);

    // Fallback: run after 2s if observer never fires
    setTimeout(run, 2000);
  });

  // Tilt cards
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${y * -12}deg) rotateY(${x * 12}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
      card.style.transition = 'transform 0.5s ease';
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
  });

  // Work page filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.work-card').forEach(card => {
        const visible = f === 'all' || card.dataset.category === f;
        const gridChild = card.closest('.work-card-link') || card;
        gridChild.style.display = visible ? '' : 'none';
      });
    });
  });
}

// --- Orb cursor follower ---
function initOrbFollower() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const orb = hero.querySelector('.hero__orb--follow');
  if (!orb) return;

  const navHeight = 72;

  function onMove(e) {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - 200;
    const y = e.clientY - rect.top - 200;

    // Fade out the orb when cursor is in the nav area
    const cursorY = e.clientY - rect.top;
    if (cursorY < navHeight) {
      orb.style.opacity = '0';
    } else {
      orb.style.opacity = '';
    }

    orb.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onLeave() {
    // When cursor leaves, let it stay where it was — the transition
    // will keep it smooth. No snap back to center.
  }

  hero.addEventListener('mousemove', onMove);
  hero.addEventListener('mouseleave', onLeave);

  // Store cleanup so it runs on page navigation
  orbCleanup = () => {
    hero.removeEventListener('mousemove', onMove);
    hero.removeEventListener('mouseleave', onLeave);
  };
}

// --- Typewriter effect ---
function initTypewriters() {
  const els = document.querySelectorAll('[data-typewriter]');
  if (!els.length) return;

  els.forEach(el => {
    const fullText = el.textContent.trim().replace(/\s+/g, ' ');
    el.textContent = '';
    const textSpan = document.createElement('span');
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    el.appendChild(textSpan);
    el.appendChild(cursor);

    // Wait for the reveal, then type after the reveal animation finishes
    function waitForReveal() {
      if (el.classList.contains('revealed')) {
        // 800ms = revealUp animation duration
        const tid = setTimeout(() => typeText(textSpan, fullText, 0), 800);
        typewriterTimeouts.push(tid);
      } else {
        const rid = requestAnimationFrame(waitForReveal);
        // Store a cleanup in case navigation happens before reveal
        typewriterTimeouts.push(setTimeout(() => cancelAnimationFrame(rid), 10000));
      }
    }
    waitForReveal();
  });
}

function typeText(el, text, index) {
  if (index >= text.length) return;
  el.textContent += text[index];
  const delay = 30 + Math.random() * 40;
  const tid = setTimeout(() => typeText(el, text, index + 1), delay);
  typewriterTimeouts.push(tid);
}
