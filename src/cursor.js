export function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (!cursor || !follower) return;

  // Only show custom cursor on non-touch devices
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effects on interactive elements
  document.addEventListener('mouseover', (e) => {
    const interactive = e.target.closest('a, button, .card, .project-card');
    if (interactive) {
      cursor.classList.add('cursor--active');
      follower.classList.add('cursor-follower--active');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const interactive = e.target.closest('a, button, .card, .project-card');
    if (interactive) {
      cursor.classList.remove('cursor--active');
      follower.classList.remove('cursor-follower--active');
    }
  });
}
