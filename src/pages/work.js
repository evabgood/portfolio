export function workPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section__label" data-reveal>Portfolio</span>
        <h1 class="page-hero__title" data-reveal data-delay="0.1">Work</h1>
        <p class="page-hero__sub" data-reveal data-delay="0.2" data-typewriter>Things I've shipped. Most of them on purpose.</p>
      </div>
    </section>

    <section class="section work-grid-section">
      <div class="container">
        <div class="work-filters" data-reveal>
          <button class="filter-btn filter-btn--active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="product">Product</button>
          <button class="filter-btn" data-filter="web">Web</button>
          <button class="filter-btn" data-filter="brand">Brand</button>
          <button class="filter-btn" data-filter="system">Systems</button>
        </div>

        <div class="work-grid">
          <a href="#work/sdf-labs" class="work-card-link" data-link>
          <article class="work-card tilt-card" data-category="web" data-reveal data-delay="0.1">
            <div class="work-card__visual work-card__visual--screenshot">
              <img src="/work/sdf-labs/sdf-hero.png" alt="SDF Labs homepage" />
              <div class="work-card__overlay">
                <span class="work-card__view">View Project</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Web Design</span>
                <span>Webflow Development</span>
              </div>
              <h3 class="work-card__title">SDF Labs</h3>
              <p class="work-card__desc">Designed and developed the entire website for SDF Labs (Semantic Data Fabric), end-to-end in Figma and Webflow.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>End-to-end</strong>
                  <span>Design & Dev</span>
                </div>
                <div class="work-card__stat">
                  <strong>Figma</strong>
                  <span>to Webflow</span>
                </div>
              </div>
            </div>
          </article>
          </a>

          <a href="#work/sdf-lineage" class="work-card-link" data-link>
          <article class="work-card tilt-card" data-category="product" data-reveal data-delay="0.2">
            <div class="work-card__visual work-card__visual--screenshot">
              <img src="/work/sdf-lineage/lineage-classic.svg" alt="SDF Cloud lineage view" />
              <div class="work-card__overlay">
                <span class="work-card__view">View Project</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Product Design</span>
                <span>SDF Labs</span>
              </div>
              <h3 class="work-card__title">SDF Lineage</h3>
              <p class="work-card__desc">Designed three kinds of data lineage for the SDF Cloud — classic, column-level, and classifier (PII) lineage.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>3 Types</strong>
                  <span>Lineage Views</span>
                </div>
                <div class="work-card__stat">
                  <strong>Figma</strong>
                  <span>End-to-end Design</span>
                </div>
              </div>
            </div>
          </article>
          </a>

          <a href="#work/sdf-design-system" class="work-card-link" data-link>
          <article class="work-card work-card--wide tilt-card" data-category="system" data-reveal data-delay="0.15">
            <div class="work-card__visual work-card__visual--screenshot">
              <img src="/work/sdf-design-system/sdf-colors.svg" alt="SDF Design System color palette" />
              <div class="work-card__overlay">
                <span class="work-card__view">View Project</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Design Systems</span>
                <span>Component Library</span>
              </div>
              <h3 class="work-card__title">SDF Design System</h3>
              <p class="work-card__desc">Lead contributor to SDF's component library and design foundations — color tokens, typography, and a full component library built in Figma.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>Lead</strong>
                  <span>Contributor</span>
                </div>
                <div class="work-card__stat">
                  <strong>Full</strong>
                  <span>Component Library</span>
                </div>
              </div>
            </div>
          </article>
          </a>

          <a href="#work/sdf-brand" class="work-card-link" data-link>
          <article class="work-card tilt-card" data-category="brand" data-reveal data-delay="0.2">
            <div class="work-card__visual work-card__visual--screenshot">
              <img src="/work/sdf-brand/sdf-banner.svg" alt="SDF Labs brand identity" />
              <div class="work-card__overlay">
                <span class="work-card__view">View Project</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Brand Identity</span>
                <span>Visual Design</span>
              </div>
              <h3 class="work-card__title">SDF Brand</h3>
              <p class="work-card__desc">Visual identity system for SDF Labs — logos, color language, and brand elements built in Figma.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>Full System</strong>
                  <span>Logo & Color</span>
                </div>
                <div class="work-card__stat">
                  <strong>Figma</strong>
                  <span>End-to-end Design</span>
                </div>
              </div>
            </div>
          </article>
          </a>

          <a href="#work/sdf-reports" class="work-card-link" data-link>
          <article class="work-card tilt-card" data-category="product" data-reveal data-delay="0.3">
            <div class="work-card__visual work-card__visual--screenshot">
              <img src="/work/sdf-reports/sdf-reports.svg" alt="SDF Cloud reports dashboard" />
              <div class="work-card__overlay">
                <span class="work-card__view">View Project</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Product Design</span>
                <span>SDF Labs</span>
              </div>
              <h3 class="work-card__title">SDF Reports</h3>
              <p class="work-card__desc">End-to-end design for a data reporting feature in SDF Cloud — dashboards, drill-downs, pinned reports, and empty states.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>4 Views</strong>
                  <span>Designed</span>
                </div>
                <div class="work-card__stat">
                  <strong>Figma</strong>
                  <span>End-to-end Design</span>
                </div>
              </div>
            </div>
          </article>
          </a>

          <a href="#work/dbt-cost-insights" class="work-card-link" data-link>
          <article class="work-card tilt-card" data-category="product" data-reveal data-delay="0.25">
            <div class="work-card__visual work-card__visual--screenshot">
              <img src="/work/dbt-cost-insights/cost-insights.svg" alt="dbt Cost Insights dashboard" />
              <div class="work-card__overlay">
                <span class="work-card__view">View Project</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Product Design</span>
                <span>dbt Labs</span>
              </div>
              <h3 class="work-card__title">Cost Insights</h3>
              <p class="work-card__desc">A cost tracking feature for dbt Cloud that surfaces total savings from Fusion and state-aware orchestration.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>3 Views</strong>
                  <span>Designed</span>
                </div>
                <div class="work-card__stat">
                  <strong>Figma</strong>
                  <span>End-to-end Design</span>
                </div>
              </div>
            </div>
          </article>
          </a>
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
          <h2 class="cta-banner__title">Got something?</h2>
          <p class="cta-banner__sub">I'm listening.</p>
          <a href="#contact" class="btn btn--light magnetic" data-link>
            <span>Reach out</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
