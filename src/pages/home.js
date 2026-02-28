export function homePage() {
  return `
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__gradient"></div>
        <div class="hero__grid"></div>
        <div class="hero__orb hero__orb--follow"></div>
      </div>

      <div class="hero__content">
        <div class="hero__eyebrow" data-reveal data-delay="0.1">
          <span class="hero__status">*</span>
          Index
        </div>

        <h1 class="hero__title" data-reveal data-delay="0.2">
          <span class="hero__line">Eva Good</span>
          <span class="hero__line hero__line--accent">designs things</span>
          <span class="hero__line">for <span class="hero__underline">screens</span>.</span>
        </h1>

        <p class="hero__sub" data-reveal data-delay="0.4" data-typewriter>
          Product designer, 8 years in. I make interfaces that work
          and sometimes look good doing it.
        </p>

        <div class="hero__ctas" data-reveal data-delay="0.55">
          <a href="#work" class="btn btn--primary magnetic" data-link>
            <span>Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#about" class="btn btn--ghost magnetic" data-link>
            <span>Info</span>
          </a>
        </div>
      </div>

      <div class="hero__scroll" data-reveal data-delay="0.8">
        <div class="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <section class="section marquee-section">
      <div class="marquee">
        <div class="marquee__inner">
          <span>Product Design</span>
          <span class="marquee__dot">/</span>
          <span>UI/UX</span>
          <span class="marquee__dot">/</span>
          <span>Brand Identity</span>
          <span class="marquee__dot">/</span>
          <span>Design Systems</span>
          <span class="marquee__dot">/</span>
          <span>Interaction Design</span>
          <span class="marquee__dot">/</span>
          <span>Prototyping</span>
          <span class="marquee__dot">/</span>
          <span>User Research</span>
          <span class="marquee__dot">/</span>
          <span>Product Design</span>
          <span class="marquee__dot">/</span>
          <span>UI/UX</span>
          <span class="marquee__dot">/</span>
          <span>Brand Identity</span>
          <span class="marquee__dot">/</span>
          <span>Design Systems</span>
          <span class="marquee__dot">/</span>
          <span>Interaction Design</span>
          <span class="marquee__dot">/</span>
          <span>Prototyping</span>
          <span class="marquee__dot">/</span>
          <span>User Research</span>
          <span class="marquee__dot">/</span>
        </div>
      </div>
    </section>

    <section class="section featured">
      <div class="container">
        <div class="section__header" data-reveal>
          <span class="section__label">Work</span>
          <h2 class="section__title">Selected</h2>
        </div>

        <div class="featured__grid">
          <a href="#work/sdf-labs" class="project-card-link" data-link>
          <div class="project-card tilt-card" data-reveal data-delay="0.1">
            <div class="project-card__image project-card__image--screenshot">
              <img src="/work/sdf-labs/sdf-hero.png" alt="SDF Labs homepage" />
            </div>
            <div class="project-card__info">
              <span class="project-card__tag">Web Design</span>
              <h3 class="project-card__title">SDF Labs</h3>
              <p class="project-card__desc">Designed and built the complete web presence for SDF Labs (Semantic Data Fabric) from Figma to Webflow.</p>
            </div>
          </div>
          </a>

          <a href="#work/sdf-lineage" class="project-card-link" data-link>
          <div class="project-card tilt-card" data-reveal data-delay="0.25">
            <div class="project-card__image project-card__image--screenshot">
              <img src="/work/sdf-lineage/lineage-classic.svg" alt="SDF Cloud lineage view" />
            </div>
            <div class="project-card__info">
              <span class="project-card__tag">Product Design</span>
              <h3 class="project-card__title">SDF Lineage</h3>
              <p class="project-card__desc">Three kinds of data lineage for the SDF Cloud — classic, column-level, and classifier.</p>
            </div>
          </div>
          </a>

          <div class="project-card project-card--wide tilt-card" data-reveal data-delay="0.15">
            <div class="project-card__image" style="background: linear-gradient(135deg, #181818 0%, #202020 100%)">
              <div class="project-card__mockup">
                <div class="mockup-window mockup-window--wide">
                  <div class="mockup-window__bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="mockup-window__content mockup--atlas">
                    <div class="mockup-sidebar"></div>
                    <div class="mockup-main">
                      <div class="mockup-chart"></div>
                      <div class="mockup-data-row"></div>
                      <div class="mockup-data-row"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-card__info">
              <span class="project-card__tag">Design System</span>
              <h3 class="project-card__title">Atlas Design System</h3>
              <p class="project-card__desc">A comprehensive design system serving 12 product teams. Reduced design debt by 60% and accelerated shipping velocity.</p>
            </div>
          </div>
        </div>

        <div class="featured__cta" data-reveal>
          <a href="#work" class="btn btn--secondary magnetic" data-link>
            <span>All Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="section stats">
      <div class="container">
        <div class="stats__grid">
          <div class="stat" data-reveal data-delay="0.1">
            <span class="stat__number" data-count="8" data-suffix="+">0</span>
            <span class="stat__label">Years of Experience</span>
          </div>
          <div class="stat" data-reveal data-delay="0.2">
            <span class="stat__number" data-count="50" data-suffix="+">0</span>
            <span class="stat__label">Projects Shipped</span>
          </div>
          <div class="stat" data-reveal data-delay="0.3">
            <span class="stat__number" data-count="12" data-suffix="">0</span>
            <span class="stat__label">Design Awards</span>
          </div>
          <div class="stat" data-reveal data-delay="0.4">
            <span class="stat__number" data-count="3" data-suffix="M+">0</span>
            <span class="stat__label">Users Impacted</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section philosophy">
      <div class="container">
        <div class="philosophy__content">
          <span class="section__label" data-reveal>Approach</span>
          <blockquote class="philosophy__quote" data-reveal data-delay="0.15">
            <p>I don't believe in <em>pixel-perfect</em>. I believe in decisions that hold up under pressure and interfaces that don't waste anyone's time.</p>
          </blockquote>

          <div class="philosophy__pillars">
            <div class="pillar" data-reveal data-delay="0.2">
              <div class="pillar__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <h3 class="pillar__title">Evidence</h3>
              <p class="pillar__desc">Every pixel is backed by user insights and data-driven decisions.</p>
            </div>
            <div class="pillar" data-reveal data-delay="0.3">
              <div class="pillar__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3 class="pillar__title">Structure</h3>
              <p class="pillar__desc">Building scalable foundations, not just beautiful screens.</p>
            </div>
            <div class="pillar" data-reveal data-delay="0.4">
              <div class="pillar__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 class="pillar__title">Obsession</h3>
              <p class="pillar__desc">The difference between good and great lives in the details.</p>
            </div>
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
          <h2 class="cta-banner__title">Have something in mind?</h2>
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
