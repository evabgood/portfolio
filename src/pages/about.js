export function aboutPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section__label" data-reveal>About</span>
        <h1 class="page-hero__title" data-reveal data-delay="0.1">Info</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.2">Some context.</p>
      </div>
    </section>

    <section class="section about-intro">
      <div class="container">
        <div class="about-intro__grid">
          <div class="about-intro__photo" data-reveal>
            <div class="about-intro__photo-frame">
              <div class="about-intro__avatar">
                <div class="avatar-graphic">
                  <div class="avatar-graphic__bg"></div>
                  <div class="avatar-graphic__shape avatar-graphic__shape--1"></div>
                  <div class="avatar-graphic__shape avatar-graphic__shape--2"></div>
                  <div class="avatar-graphic__initials">EG</div>
                </div>
              </div>
              <div class="about-intro__photo-accent"></div>
            </div>
          </div>

          <div class="about-intro__text">
            <h2 class="about-intro__headline" data-reveal data-delay="0.1">I like making things that hold up.</h2>
            <p data-reveal data-delay="0.2">
              I'm Eva — a product designer with 8+ years of experience crafting digital experiences for companies ranging from early-stage startups to Fortune 500s. I specialize in turning complex problems into simple, intuitive solutions.
            </p>
            <p data-reveal data-delay="0.3">
              My approach sits at the intersection of user research, visual design, and systems thinking. I don't just make things look good — I make them <em>work</em> beautifully. Every decision is intentional, every interaction considered.
            </p>
            <p data-reveal data-delay="0.4">
              When I'm not pushing pixels, you'll find me exploring typography in bookshops, photographing architecture, or experimenting with generative art.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section experience">
      <div class="container">
        <div class="section__header" data-reveal>
          <span class="section__label">Experience</span>
          <h2 class="section__title">Where I've made an impact</h2>
        </div>

        <div class="timeline">
          <div class="timeline__item" data-reveal data-delay="0.1">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__date">2023 — Present</span>
              <h3 class="timeline__role">Senior Product Designer</h3>
              <span class="timeline__company">Horizon Labs</span>
              <p>Leading design for the core platform experience. Built and scaled a design system used by 12 product teams.</p>
            </div>
          </div>

          <div class="timeline__item" data-reveal data-delay="0.2">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__date">2020 — 2023</span>
              <h3 class="timeline__role">Product Designer</h3>
              <span class="timeline__company">Wavelength</span>
              <p>Designed the end-to-end experience for a B2B SaaS platform. Shipped features that grew ARR by 3x.</p>
            </div>
          </div>

          <div class="timeline__item" data-reveal data-delay="0.3">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__date">2018 — 2020</span>
              <h3 class="timeline__role">UI/UX Designer</h3>
              <span class="timeline__company">Pixel & Co</span>
              <p>Worked across mobile and web for clients including wellness brands, fintech startups, and e-commerce platforms.</p>
            </div>
          </div>

          <div class="timeline__item" data-reveal data-delay="0.4">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__date">2016 — 2018</span>
              <h3 class="timeline__role">Junior Designer</h3>
              <span class="timeline__company">Studio Neon</span>
              <p>Cut my teeth on brand identity, web design, and learning what makes great design tick.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section skills-section">
      <div class="container">
        <div class="section__header" data-reveal>
          <span class="section__label">Skills & Tools</span>
          <h2 class="section__title">Stack</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-group" data-reveal data-delay="0.1">
            <h3 class="skill-group__title">Design</h3>
            <div class="skill-tags">
              <span class="skill-tag">UI Design</span>
              <span class="skill-tag">UX Design</span>
              <span class="skill-tag">Interaction Design</span>
              <span class="skill-tag">Visual Design</span>
              <span class="skill-tag">Design Systems</span>
              <span class="skill-tag">Prototyping</span>
              <span class="skill-tag">Motion Design</span>
            </div>
          </div>

          <div class="skill-group" data-reveal data-delay="0.2">
            <h3 class="skill-group__title">Research</h3>
            <div class="skill-tags">
              <span class="skill-tag">User Interviews</span>
              <span class="skill-tag">Usability Testing</span>
              <span class="skill-tag">A/B Testing</span>
              <span class="skill-tag">Journey Mapping</span>
              <span class="skill-tag">Heuristic Analysis</span>
            </div>
          </div>

          <div class="skill-group" data-reveal data-delay="0.3">
            <h3 class="skill-group__title">Tools</h3>
            <div class="skill-tags">
              <span class="skill-tag">Figma</span>
              <span class="skill-tag">Framer</span>
              <span class="skill-tag">Principle</span>
              <span class="skill-tag">After Effects</span>
              <span class="skill-tag">Webflow</span>
              <span class="skill-tag">HTML/CSS</span>
            </div>
          </div>

          <div class="skill-group" data-reveal data-delay="0.4">
            <h3 class="skill-group__title">Strategy</h3>
            <div class="skill-tags">
              <span class="skill-tag">Product Strategy</span>
              <span class="skill-tag">Brand Strategy</span>
              <span class="skill-tag">Workshop Facilitation</span>
              <span class="skill-tag">Design Ops</span>
              <span class="skill-tag">Stakeholder Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section values-section">
      <div class="container">
        <div class="section__header" data-reveal>
          <span class="section__label">Values</span>
          <h2 class="section__title">Principles</h2>
        </div>

        <div class="values-grid">
          <div class="value-card" data-reveal data-delay="0.1">
            <span class="value-card__number">01</span>
            <h3 class="value-card__title">Intentionality</h3>
            <p class="value-card__desc">Every element serves a purpose. Nothing is decorative without reason.</p>
          </div>
          <div class="value-card" data-reveal data-delay="0.2">
            <span class="value-card__number">02</span>
            <h3 class="value-card__title">Accessibility</h3>
            <p class="value-card__desc">Great design works for everyone. Inclusion is not an afterthought.</p>
          </div>
          <div class="value-card" data-reveal data-delay="0.3">
            <span class="value-card__number">03</span>
            <h3 class="value-card__title">Collaboration</h3>
            <p class="value-card__desc">The best work happens when design, engineering, and product think together.</p>
          </div>
          <div class="value-card" data-reveal data-delay="0.4">
            <span class="value-card__number">04</span>
            <h3 class="value-card__title">Growth</h3>
            <p class="value-card__desc">Stay curious. Stay humble. The craft evolves, and so should we.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-banner" data-reveal>
          <div class="cta-banner__bg">
            <div class="cta-banner__orb cta-banner__orb--1"></div>
            <div class="cta-banner__orb cta-banner__orb--2"></div>
          </div>
          <h2 class="cta-banner__title">Questions?</h2>
          <p class="cta-banner__sub">I'm around.</p>
          <a href="#contact" class="btn btn--light magnetic" data-link>
            <span>Reach out</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
