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
          <button class="filter-btn" data-filter="mobile">Mobile</button>
          <button class="filter-btn" data-filter="brand">Brand</button>
          <button class="filter-btn" data-filter="system">Systems</button>
        </div>

        <div class="work-grid">
          <a href="#work/sdf-labs" class="work-card-link" data-link>
          <article class="work-card tilt-card" data-category="product" data-reveal data-delay="0.1">
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

          <article class="work-card work-card--wide tilt-card" data-category="system" data-reveal data-delay="0.15">
            <div class="work-card__visual" style="background: linear-gradient(135deg, #181818 0%, #202020 100%)">
              <div class="work-card__mockup">
                <div class="mockup-window mockup-window--wide">
                  <div class="mockup-window__bar"><span></span><span></span><span></span></div>
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
              <div class="work-card__overlay">
                <span class="work-card__view">View Case Study</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Design System</span>
                <span>Enterprise</span>
              </div>
              <h3 class="work-card__title">Atlas Design System</h3>
              <p class="work-card__desc">A comprehensive design system serving 12 product teams and 200+ engineers. Unified the visual language across an entire product suite.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>12</strong>
                  <span>Teams served</span>
                </div>
                <div class="work-card__stat">
                  <strong>-60%</strong>
                  <span>Design debt</span>
                </div>
              </div>
            </div>
          </article>

          <article class="work-card tilt-card" data-category="brand" data-reveal data-delay="0.2">
            <div class="work-card__visual" style="background: linear-gradient(135deg, #1a1a1a 0%, #242424 100%)">
              <div class="work-card__mockup">
                <div class="mockup-brand">
                  <div class="mockup-logo-circle"></div>
                  <div class="mockup-brand-lines">
                    <div></div><div></div><div></div>
                  </div>
                  <div class="mockup-color-swatches">
                    <div style="background: #fa709a"></div>
                    <div style="background: #fee140"></div>
                    <div style="background: #1a1a2e"></div>
                  </div>
                </div>
              </div>
              <div class="work-card__overlay">
                <span class="work-card__view">View Case Study</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Brand Identity</span>
                <span>Visual Design</span>
              </div>
              <h3 class="work-card__title">Solstice Rebrand</h3>
              <p class="work-card__desc">A complete visual identity overhaul for a climate-tech startup, from logo to full brand system.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>3x</strong>
                  <span>Brand recall</span>
                </div>
                <div class="work-card__stat">
                  <strong>+85%</strong>
                  <span>Brand sentiment</span>
                </div>
              </div>
            </div>
          </article>

          <article class="work-card tilt-card" data-category="product" data-reveal data-delay="0.3">
            <div class="work-card__visual" style="background: linear-gradient(135deg, #1b1b1b 0%, #232323 100%)">
              <div class="work-card__mockup">
                <div class="mockup-window">
                  <div class="mockup-window__bar"><span></span><span></span><span></span></div>
                  <div class="mockup-window__content mockup--canvas">
                    <div class="mockup-toolbar"></div>
                    <div class="mockup-canvas-area">
                      <div class="mockup-shape mockup-shape--1"></div>
                      <div class="mockup-shape mockup-shape--2"></div>
                      <div class="mockup-shape mockup-shape--3"></div>
                    </div>
                    <div class="mockup-properties"></div>
                  </div>
                </div>
              </div>
              <div class="work-card__overlay">
                <span class="work-card__view">View Case Study</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>SaaS Platform</span>
                <span>Product Design</span>
              </div>
              <h3 class="work-card__title">Canvas Pro</h3>
              <p class="work-card__desc">Designing a collaborative design tool that feels as natural as sketching on paper.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>2M+</strong>
                  <span>Users</span>
                </div>
                <div class="work-card__stat">
                  <strong>Series B</strong>
                  <span>Funded</span>
                </div>
              </div>
            </div>
          </article>

          <article class="work-card tilt-card" data-category="mobile" data-reveal data-delay="0.25">
            <div class="work-card__visual" style="background: linear-gradient(135deg, #191919 0%, #212121 100%)">
              <div class="work-card__mockup">
                <div class="mockup-phone">
                  <div class="mockup-phone__notch"></div>
                  <div class="mockup-phone__content mockup--neon">
                    <div class="mockup-status-bar"></div>
                    <div class="mockup-map-block"></div>
                    <div class="mockup-bottom-sheet">
                      <div class="mockup-handle"></div>
                      <div class="mockup-list-item"></div>
                      <div class="mockup-list-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="work-card__overlay">
                <span class="work-card__view">View Case Study</span>
              </div>
            </div>
            <div class="work-card__meta">
              <div class="work-card__tags">
                <span>Mobile App</span>
                <span>Maps & Navigation</span>
              </div>
              <h3 class="work-card__title">Wayfinder</h3>
              <p class="work-card__desc">Reimagining urban navigation with accessibility-first design and real-time transit data.</p>
              <div class="work-card__stats">
                <div class="work-card__stat">
                  <strong>1M+</strong>
                  <span>Monthly users</span>
                </div>
                <div class="work-card__stat">
                  <strong>A11y</strong>
                  <span>AAA rated</span>
                </div>
              </div>
            </div>
          </article>
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
