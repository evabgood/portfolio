export function sdfBrandPage() {
  return `
    <section class="page-hero page-hero--project">
      <div class="container">
        <a href="#work" class="project-detail__back" data-link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Work
        </a>
        <div class="project-detail__tags" data-reveal data-delay="0.1">
          <span>Brand Identity</span>
          <span>Visual Design</span>
        </div>
        <h1 class="page-hero__title" data-reveal data-delay="0.15">SDF Brand</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.25" data-typewriter>
          Visual identity system for SDF Labs — logos, color language, and brand elements.
        </p>
      </div>
    </section>

    <section class="section project-detail__hero-section">
      <div class="container">
        <div class="brand-asset-frame brand-asset-frame--banner" data-reveal data-delay="0.1">
          <img src="/work/sdf-brand/sdf-banner.svg" alt="SDF Labs brand banner showing the visual identity system with gradient orbs and logo mark" />
        </div>
      </div>
    </section>

    <section class="section project-detail__overview">
      <div class="container">
        <div class="project-detail__meta">
          <div class="project-detail__description" data-reveal>
            <h2 class="project-detail__section-title">Overview</h2>
            <p>SDF Labs needed a visual identity that felt technical and precise without being cold — one that could communicate the sophistication of a data platform while remaining approachable for developer audiences.</p>
            <p>The system is built around a distinctive logo mark, a rich purple-to-magenta gradient palette, and a set of organic shapes and color orbs that bring energy and warmth to otherwise dense product surfaces.</p>
          </div>
          <div class="project-detail__meta-list" data-reveal data-delay="0.15">
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Role</span>
              <span class="project-detail__meta-value">Brand Designer</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Tools</span>
              <span class="project-detail__meta-value">Figma</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Deliverables</span>
              <span class="project-detail__meta-value">Logo system, color palette, brand elements</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__gallery">
      <div class="container">
        <h2 class="project-detail__section-title" data-reveal>The Work</h2>

        <div class="project-detail__gallery-label" data-reveal>Logo System</div>
        <div class="brand-logo-grid" data-reveal data-delay="0.1">
          <div class="brand-asset-frame brand-asset-frame--logo brand-asset-frame--dark">
            <img src="/work/sdf-brand/sdf-logo-color.svg" alt="SDF Labs color logo on purple gradient background" />
          </div>
          <div class="brand-asset-frame brand-asset-frame--logo brand-asset-frame--dark">
            <img src="/work/sdf-brand/sdf-logo-bw.svg" alt="SDF Labs black and white logo" />
          </div>
          <div class="brand-asset-frame brand-asset-frame--logo brand-asset-frame--dark">
            <img src="/work/sdf-brand/sdf-logo-bwgradient.svg" alt="SDF Labs black and white gradient logo" />
          </div>
        </div>

        <div class="project-detail__gallery-label" data-reveal>Color Language</div>
        <div class="brand-asset-frame brand-asset-frame--wide" data-reveal data-delay="0.1">
          <img src="/work/sdf-brand/sdf-orbs.svg" alt="SDF Labs brand color orbs — the color language of the identity system" />
        </div>
        <p class="project-detail__gallery-caption">The color orbs define the SDF palette — warm orange, teal, golden yellow, mauve, and slate blue — used across marketing, product, and communications.</p>

        <div class="project-detail__gallery-label" data-reveal>Visual Identifiers</div>
        <div class="brand-asset-frame brand-asset-frame--keys" data-reveal data-delay="0.1">
          <img src="/work/sdf-brand/sdf-keys.svg" alt="SDF Labs visual key identifiers" />
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
