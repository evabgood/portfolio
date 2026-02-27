export function sdfLabsPage() {
  return `
    <section class="page-hero page-hero--project">
      <div class="container">
        <a href="#work" class="project-detail__back" data-link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Work
        </a>
        <div class="project-detail__tags" data-reveal data-delay="0.1">
          <span>Web Design</span>
          <span>Webflow Development</span>
        </div>
        <h1 class="page-hero__title" data-reveal data-delay="0.15">SDF Labs</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.25" data-typewriter>
          End-to-end website design and development for Semantic Data Fabric, from Figma to Webflow.
        </p>
      </div>
    </section>

    <section class="section project-detail__hero-section">
      <div class="container">
        <div class="browser-frame browser-frame--hero" data-reveal data-delay="0.1">
          <div class="browser-frame__bar">
            <span></span><span></span><span></span>
            <div class="browser-frame__url">sdflabs.io</div>
          </div>
          <div class="browser-frame__content">
            <img src="/work/sdf-labs/sdf-hero.png" alt="SDF Labs homepage — Transform Data with SDF hero section with floating orbs and trusted logos" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__overview">
      <div class="container">
        <div class="project-detail__meta">
          <div class="project-detail__description" data-reveal>
            <h2 class="project-detail__section-title">Overview</h2>
            <p>SDF Labs is a Semantic Data Fabric platform that unifies enterprise data into a coherent, queryable layer. I was brought on to design and build their entire web presence from scratch.</p>
            <p>Working closely with the founding team, I translated complex technical concepts into a clean, compelling visual narrative. The site needed to speak to both technical decision-makers and C-suite executives evaluating the platform.</p>
            <p>Every page was designed in Figma and then built pixel-perfect in Webflow, with custom interactions and animations to bring the product story to life.</p>
          </div>
          <div class="project-detail__meta-list" data-reveal data-delay="0.15">
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Role</span>
              <span class="project-detail__meta-value">Lead Designer & Developer</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Tools</span>
              <span class="project-detail__meta-value">Figma, Webflow</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Scope</span>
              <span class="project-detail__meta-value">Full website design & build</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Deliverables</span>
              <span class="project-detail__meta-value">Brand pages, product pages, interactive animations</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__gallery">
      <div class="container">
        <h2 class="project-detail__section-title" data-reveal>The Work</h2>

        <div class="project-detail__gallery-full" data-reveal data-delay="0.1">
          <div class="browser-frame">
            <div class="browser-frame__bar">
              <span></span><span></span><span></span>
              <div class="browser-frame__url">sdf.com</div>
            </div>
            <div class="browser-frame__content">
              <img src="/work/sdf-labs/sdf-full.png" alt="SDF Labs full homepage scroll — integrations, developer tools, and testimonials" loading="lazy" />
            </div>
          </div>
        </div>

        <div class="project-detail__gallery-pair" data-reveal data-delay="0.1">
          <div class="browser-frame">
            <div class="browser-frame__bar">
              <span></span><span></span><span></span>
            </div>
            <div class="browser-frame__content">
              <img src="/work/sdf-labs/sdf-features.png" alt="SDF Labs enterprise features — Change the economics of data development" loading="lazy" />
            </div>
          </div>
          <div class="project-detail__gallery-text">
            <h3 data-reveal data-delay="0.2">Designed for clarity</h3>
            <p data-reveal data-delay="0.25">Complex data infrastructure concepts translated into a clean, compelling visual narrative — built to speak to both technical teams and executive stakeholders.</p>
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
          <h2 class="cta-banner__title">Want to work together?</h2>
          <p class="cta-banner__sub">I'd love to hear about your project.</p>
          <a href="#contact" class="btn btn--light magnetic" data-link>
            <span>Reach out</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
