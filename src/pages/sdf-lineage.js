export function sdfLineagePage() {
  return `
    <section class="page-hero page-hero--project">
      <div class="container">
        <a href="#work" class="project-detail__back" data-link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Work
        </a>
        <div class="project-detail__tags" data-reveal data-delay="0.1">
          <span>Product Design</span>
          <span>SDF Labs</span>
        </div>
        <h1 class="page-hero__title" data-reveal data-delay="0.15">SDF Lineage</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.25" data-typewriter>
          Designing three kinds of data lineage for the SDF Cloud — classic, column-level, and classifier.
        </p>
      </div>
    </section>

    <section class="section project-detail__hero-section">
      <div class="container">
        <div class="browser-frame browser-frame--hero" data-reveal data-delay="0.1">
          <div class="browser-frame__bar">
            <span></span><span></span><span></span>
            <div class="browser-frame__url">cloud.sdf.com</div>
          </div>
          <div class="browser-frame__content">
            <img src="/work/sdf-lineage/lineage-classic.svg" alt="SDF Cloud — classic lineage view showing upstream and downstream table dependencies" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__overview">
      <div class="container">
        <div class="project-detail__meta">
          <div class="project-detail__description" data-reveal>
            <h2 class="project-detail__section-title">Overview</h2>
            <p>Data lineage is one of the most critical features for data teams — it shows where data comes from, how it flows, and where it ends up. I led the design for introducing three distinct lineage views into the SDF Cloud platform.</p>
            <p>Each view serves a different audience: classic lineage for broad data flow visibility, column-level lineage for precise dependency tracking, and classifier lineage for identifying and tracing sensitive data like PII across the warehouse.</p>
            <p>The challenge was making all three feel cohesive and intuitive while handling the complexity that comes with visualizing large, interconnected data graphs.</p>
          </div>
          <div class="project-detail__meta-list" data-reveal data-delay="0.15">
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Role</span>
              <span class="project-detail__meta-value">Lead Product Designer</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Tools</span>
              <span class="project-detail__meta-value">Figma</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Scope</span>
              <span class="project-detail__meta-value">3 lineage feature types</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Platform</span>
              <span class="project-detail__meta-value">SDF Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__gallery">
      <div class="container">
        <h2 class="project-detail__section-title" data-reveal>The Work</h2>

        <div class="project-detail__gallery-full" data-reveal data-delay="0.1">
          <div class="project-detail__gallery-label" data-reveal>Classic Lineage</div>
          <div class="browser-frame">
            <div class="browser-frame__bar">
              <span></span><span></span><span></span>
              <div class="browser-frame__url">cloud.sdf.com</div>
            </div>
            <div class="browser-frame__content">
              <img src="/work/sdf-lineage/lineage-classic.svg" alt="Classic lineage view — upstream and downstream table dependency graph" loading="lazy" />
            </div>
          </div>
          <p class="project-detail__gallery-caption">Classic lineage gives data teams a bird's-eye view of how tables and models connect across the warehouse — upstream dependencies and downstream consumers in a single graph.</p>
        </div>

        <div class="project-detail__gallery-full" data-reveal data-delay="0.1">
          <div class="project-detail__gallery-label" data-reveal>Column-Level Lineage</div>
          <div class="browser-frame">
            <div class="browser-frame__bar">
              <span></span><span></span><span></span>
              <div class="browser-frame__url">cloud.sdf.com</div>
            </div>
            <div class="browser-frame__content">
              <img src="/work/sdf-lineage/lineage-column.svg" alt="Column-level lineage view — tracing individual column transformations across models" loading="lazy" />
            </div>
          </div>
          <p class="project-detail__gallery-caption">Column-level lineage drills into exactly which columns feed into which — critical for debugging transformations and understanding how a specific field is derived.</p>
        </div>

        <div class="project-detail__gallery-full" data-reveal data-delay="0.1">
          <div class="project-detail__gallery-label" data-reveal>Classifier Lineage</div>
          <div class="browser-frame">
            <div class="browser-frame__bar">
              <span></span><span></span><span></span>
              <div class="browser-frame__url">cloud.sdf.com</div>
            </div>
            <div class="browser-frame__content">
              <img src="/work/sdf-lineage/lineage-classifier.svg" alt="Classifier lineage view — tracing PII and sensitive data classifications across the warehouse" loading="lazy" />
            </div>
          </div>
          <p class="project-detail__gallery-caption">Classifier lineage traces sensitive data labels — like PII — as they propagate through the warehouse, giving compliance and security teams clear visibility into data risk.</p>
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
