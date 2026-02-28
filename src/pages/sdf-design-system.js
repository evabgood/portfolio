export function sdfDesignSystemPage() {
  return `
    <section class="page-hero page-hero--project">
      <div class="container">
        <a href="#work" class="project-detail__back" data-link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Work
        </a>
        <div class="project-detail__tags" data-reveal data-delay="0.1">
          <span>Design Systems</span>
          <span>Component Library</span>
        </div>
        <h1 class="page-hero__title" data-reveal data-delay="0.15">SDF Design System</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.25" data-typewriter>
          Lead contributor to SDF's component library, color system, and typography foundations.
        </p>
      </div>
    </section>

    <section class="section project-detail__hero-section">
      <div class="container">
        <div class="brand-asset-frame brand-asset-frame--wide" data-reveal data-delay="0.1">
          <img src="/work/sdf-design-system/sdf-typography.svg" alt="SDF Design System typography scale and type foundations" />
        </div>
      </div>
    </section>

    <section class="section project-detail__overview">
      <div class="container">
        <div class="project-detail__meta">
          <div class="project-detail__description" data-reveal>
            <h2 class="project-detail__section-title">Overview</h2>
            <p>As a lead contributor to the SDF design system, I built out the component library from the ground up and played a key role in defining the color and typography foundations that power the entire product.</p>
            <p>The system needed to serve a developer-facing product with high information density — every component had to be precise, accessible, and flexible enough to handle complex data states without visual noise.</p>
            <p>From dropdowns and form inputs to color tokens and type scales, every decision was documented and built with both designers and engineers in mind.</p>
          </div>
          <div class="project-detail__meta-list" data-reveal data-delay="0.15">
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Role</span>
              <span class="project-detail__meta-value">Lead Contributor</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Tools</span>
              <span class="project-detail__meta-value">Figma</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Scope</span>
              <span class="project-detail__meta-value">Component library, color & type systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__gallery">
      <div class="container">
        <h2 class="project-detail__section-title" data-reveal>The Work</h2>

        <div class="project-detail__gallery-label" data-reveal>Typography</div>
        <div class="brand-asset-frame brand-asset-frame--wide" data-reveal data-delay="0.1">
          <img src="/work/sdf-design-system/sdf-typography.svg" alt="SDF type system — type scale, weights, and usage guidelines" />
        </div>
        <p class="project-detail__gallery-caption">A type system built for dense, data-heavy interfaces — clear hierarchy from display headings down to caption and label styles, all mapped to semantic tokens.</p>

        <div class="project-detail__gallery-label" data-reveal>Color System</div>
        <div class="brand-asset-frame brand-asset-frame--wide" data-reveal data-delay="0.1">
          <img src="/work/sdf-design-system/sdf-colors.svg" alt="SDF color system — base palette and token documentation" />
        </div>
        <div class="brand-asset-frame brand-asset-frame--wide" data-reveal data-delay="0.1" style="margin-top: var(--space-md)">
          <img src="/work/sdf-design-system/sdf-opaque-colors.svg" alt="SDF color system — opaque and transparency color variants" />
        </div>
        <p class="project-detail__gallery-caption">Color tokens covering brand, semantic, and interactive states — including a full set of opaque variants for layering on light and dark surfaces.</p>

        <div class="project-detail__gallery-label" data-reveal>Component Library</div>
        <div class="brand-asset-frame brand-asset-frame--wide" data-reveal data-delay="0.1">
          <img src="/work/sdf-design-system/sdf-dropdowns.svg" alt="SDF component library — dropdown variants and states" />
        </div>
        <p class="project-detail__gallery-caption">Every component documented across all states — default, hover, focus, error, disabled — built for direct handoff to engineering.</p>
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
