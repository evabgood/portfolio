export function sdfReportsPage() {
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
        <h1 class="page-hero__title" data-reveal data-delay="0.15">SDF Reports</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.25" data-typewriter>
          Designing a data reporting feature for the SDF Cloud — from empty states to drill-down detail views.
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
            <img src="/work/sdf-reports/sdf-reports.svg" alt="SDF Cloud reports dashboard — main reports overview" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__overview">
      <div class="container">
        <div class="project-detail__meta">
          <div class="project-detail__description" data-reveal>
            <h2 class="project-detail__section-title">Overview</h2>
            <p>The SDF Cloud needed a reporting feature that could surface meaningful insights from complex data pipelines — without overwhelming users who are already managing dense technical workflows.</p>
            <p>I designed the full reporting experience end-to-end: the main reports dashboard, pinned reports for quick access, drill-down views for deeper investigation, and empty states to guide first-time users through setup.</p>
            <p>The challenge was balancing information density with clarity — making it easy to spot what matters quickly while still surfacing the depth that data teams need.</p>
          </div>
          <div class="project-detail__meta-list" data-reveal data-delay="0.15">
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Role</span>
              <span class="project-detail__meta-value">Product Designer</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Tools</span>
              <span class="project-detail__meta-value">Figma</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Platform</span>
              <span class="project-detail__meta-value">SDF Cloud</span>
            </div>
            <div class="project-detail__meta-item">
              <span class="project-detail__meta-label">Scope</span>
              <span class="project-detail__meta-value">End-to-end feature design</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail__gallery">
      <div class="container">
        <h2 class="project-detail__section-title" data-reveal>The Work</h2>

        <div class="project-detail__gallery-label" data-reveal>Reports Dashboard</div>
        <div class="browser-frame" data-reveal data-delay="0.1">
          <div class="browser-frame__bar">
            <span></span><span></span><span></span>
            <div class="browser-frame__url">cloud.sdf.com</div>
          </div>
          <div class="browser-frame__content">
            <img src="/work/sdf-reports/sdf-reports.svg" alt="SDF reports dashboard — full reports list view" loading="lazy" />
          </div>
        </div>
        <p class="project-detail__gallery-caption">The main reports view gives data teams a centralized place to access, organize, and track all their generated reports across the warehouse.</p>

        <div class="project-detail__gallery-label" data-reveal>Pinned Reports</div>
        <div class="browser-frame" data-reveal data-delay="0.1">
          <div class="browser-frame__bar">
            <span></span><span></span><span></span>
          </div>
          <div class="browser-frame__content">
            <img src="/work/sdf-reports/sdf-pinned.svg" alt="SDF pinned reports — quick access to frequently used reports" loading="lazy" />
          </div>
        </div>
        <p class="project-detail__gallery-caption">Pinned reports let users surface their most-used reports to the top — reducing friction for the workflows they run most often.</p>

        <div class="project-detail__gallery-pair" data-reveal data-delay="0.1">
          <div>
            <div class="project-detail__gallery-label">Drill-Down View</div>
            <div class="browser-frame">
              <div class="browser-frame__bar">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-frame__content">
                <img src="/work/sdf-reports/sdf-drilldown.svg" alt="SDF drill-down report — detailed view of a specific report" loading="lazy" />
              </div>
            </div>
          </div>
          <div>
            <div class="project-detail__gallery-label">Empty State</div>
            <div class="browser-frame">
              <div class="browser-frame__bar">
                <span></span><span></span><span></span>
              </div>
              <div class="browser-frame__content">
                <img src="/work/sdf-reports/sdf-empty-state.svg" alt="SDF reports empty state — onboarding guidance for new users" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <p class="project-detail__gallery-caption">Drill-down views expose the full detail of any report, while the empty state was designed to guide users toward generating their first report without feeling lost.</p>

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
