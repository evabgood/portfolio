export function contactPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section__label" data-reveal>Contact</span>
        <h1 class="page-hero__title" data-reveal data-delay="0.1">Contact</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.2">Say what you need to say.</p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-card" data-reveal data-delay="0.1">
              <div class="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 class="contact-card__title">Email</h3>
              <p class="contact-card__value">hello@evagood.design</p>
            </div>

            <div class="contact-card" data-reveal data-delay="0.2">
              <div class="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 class="contact-card__title">Location</h3>
              <p class="contact-card__value">San Francisco, CA</p>
            </div>

            <div class="contact-card" data-reveal data-delay="0.3">
              <div class="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3 class="contact-card__title">Availability</h3>
              <p class="contact-card__value">Open to freelance &amp; full-time</p>
            </div>

            <div class="contact-socials" data-reveal data-delay="0.4">
              <h3>Find me online</h3>
              <div class="social-links">
                <a href="#" class="social-link magnetic" aria-label="Dribbble">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.18 10.18 0 0 1 2.312 6.375c-.337-.063-3.75-.75-7.187-.325-.075-.175-.138-.363-.213-.55-.2-.488-.413-.988-.637-1.475 3.825-1.563 5.55-3.788 5.725-4.025zM12 1.75c2.65 0 5.075 1.013 6.9 2.675-.138.213-1.688 2.313-5.375 3.7-1.675-3.088-3.538-5.625-3.825-6.013A10.28 10.28 0 0 1 12 1.75zM7.938 3.012c.275.363 2.1 2.913 3.8 5.938-4.788 1.275-9.013 1.25-9.475 1.25a10.29 10.29 0 0 1 5.675-7.188zM1.75 12v-.325c.45.013 5.375.075 10.475-1.463.288.563.563 1.138.825 1.713-.137.038-.288.075-.425.125-5.35 1.725-8.188 6.438-8.375 6.75A10.19 10.19 0 0 1 1.75 12zm3.688 8.338c.125-.213 2.225-4.275 7.963-6.238.025-.013.05-.013.063-.025 1.425 3.688 2.013 6.788 2.163 7.688a10.21 10.21 0 0 1-10.188-1.425zm11.962.45c-.1-.625-.638-3.6-1.975-7.238 3.25-.525 6.1.337 6.45.45a10.25 10.25 0 0 1-4.475 6.788z"/></svg>
                </a>
                <a href="#" class="social-link magnetic" aria-label="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" class="social-link magnetic" aria-label="Twitter/X">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" class="social-link magnetic" aria-label="GitHub">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper" data-reveal data-delay="0.2">
            <form class="contact-form" id="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" class="form-input" placeholder="Your name" required>
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-input" placeholder="your@email.com" required>
              </div>
              <div class="form-group">
                <label for="project-type" class="form-label">Project Type</label>
                <select id="project-type" class="form-input form-select">
                  <option value="">Select a type...</option>
                  <option>Product Design</option>
                  <option>Brand Identity</option>
                  <option>Design System</option>
                  <option>Mobile App</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" class="form-input form-textarea" placeholder="Tell me about your project..." rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn--primary btn--full magnetic">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
