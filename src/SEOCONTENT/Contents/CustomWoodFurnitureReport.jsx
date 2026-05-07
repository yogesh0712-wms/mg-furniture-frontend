import { useEffect, useRef } from "react";
import Header, { Footer } from "../../Header";

const stats = [
  { label: "Market Growth (2024–26)", value: "~22%" },
  { label: "Custom Furniture Share", value: "38%" },
  { label: "Avg. Lead Time", value: "3–5 Weeks" },
  { label: "Local Craftsmen in Jaipur", value: "12,000+" },
];

const pricingData = [
  {
    tier: "Budget",
    range: "₹15,000 – ₹45,000",
    material: "Engineered wood / MDF",
    finish: "Laminate / PU coat",
    bestFor: "Rentals, starter homes",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    tier: "Mid-Range",
    range: "₹45,000 – ₹1,20,000",
    material: "Sheesham / Acacia",
    finish: "Duco / Wax polish",
    bestFor: "Primary residences",
    color: "bg-stone-50 border-stone-300",
    badge: "bg-stone-200 text-stone-800",
    highlight: true,
  },
  {
    tier: "Premium",
    range: "₹1,20,000 – ₹5,00,000+",
    material: "Teak / Walnut / Mango",
    finish: "Hand-rubbed oil / lacquer",
    bestFor: "Luxury villas, offices",
    color: "bg-[#fdf6ec] border-[#c9a96e]",
    badge: "bg-[#c9a96e] text-white",
  },
];

const insights = [
  "Sheesham wood accounts for over 55% of all custom furniture orders in Jaipur.",
  "Work-from-home culture has boosted home office furniture demand by ~34% since 2023.",
  "Buyers aged 28–42 are the fastest-growing segment for custom wood furniture in Jaipur.",
  "Digital discovery (Instagram, WhichD) has increased inbound leads for local makers by 60%.",
];

function useScrollFade(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
}

function FadeSection({ children, className = "" }) {
  const ref = useRef(null);
  useScrollFade(ref);
  return (
    <div ref={ref} className={`fade-section ${className}`}>
      {children}
    </div>
  );
}

export default function JaipurFurnitureReport() {
  useEffect(() => {
    document.title =
      "Custom Wood Furniture Market in Jaipur: Trends, Pricing & Demand Report";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content =
      "Explore Jaipur's custom wood furniture market in 2026. Learn about pricing trends, popular furniture types, buyer demand, and why custom furniture is growing fast.";
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@400;500&display=swap');

        body { background: #faf8f4; }

        .report-root {
          font-family: 'DM Sans', sans-serif;
          color: #2b2318;
          background: #faf8f4;
          min-height: 100vh;
        }

        .display-font { font-family: 'Playfair Display', Georgia, serif; }
        .serif-font   { font-family: 'Source Serif 4', Georgia, serif; }

        .fade-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-rule {
          border: none;
          border-top: 1.5px solid #e8e0d4;
          margin: 2.5rem 0;
        }

        .label-tag {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          color: #8b6c3e;
          background: #f1e8d8;
          padding: 3px 10px;
          border-radius: 3px;
          margin-bottom: 0.75rem;
        }

        .h2-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.65rem;
          font-weight: 700;
          color: #1e1509;
          line-height: 1.3;
          margin: 0 0 0.35rem;
        }

        .h3-title {
          font-family: 'Source Serif 4', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2f1e0a;
          margin: 1.4rem 0 0.4rem;
        }

        .body-text {
          font-family: 'Source Serif 4', serif;
          font-size: 1rem;
          line-height: 1.82;
          color: #4a3b28;
        }

        .insight-box {
          background: #fff9f0;
          border-left: 3px solid #c9a96e;
          border-radius: 0 6px 6px 0;
          padding: 1.1rem 1.4rem;
          margin: 2rem 0;
        }

        .insight-box p {
          font-family: 'Source Serif 4', serif;
          font-style: italic;
          color: #3d2c12;
          font-size: 0.98rem;
          line-height: 1.75;
          margin: 0.3rem 0;
        }

        .stat-card {
          background: #fff;
          border: 1px solid #e3d9cb;
          border-radius: 8px;
          padding: 1.1rem 1.25rem;
          text-align: center;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #8b5e26;
          display: block;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.78rem;
          color: #7a6040;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-top: 0.35rem;
          display: block;
        }

        .pricing-card {
          border-radius: 10px;
          border: 1.5px solid;
          padding: 1.4rem;
          flex: 1;
          min-width: 200px;
          background: #fff;
        }

        .pricing-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 0.65rem;
        }

        .pricing-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e1509;
          margin: 0.3rem 0 0.75rem;
        }

        .pricing-row {
          font-size: 0.87rem;
          color: #5a4730;
          margin: 0.3rem 0;
          display: flex;
          gap: 6px;
        }

        .pricing-row strong {
          color: #2e1c08;
          font-weight: 500;
        }

        .bullet-list li {
          font-family: 'Source Serif 4', serif;
          font-size: 0.97rem;
          color: #4a3b28;
          line-height: 1.75;
          padding: 0.25rem 0;
          padding-left: 1.1rem;
          position: relative;
        }

        .bullet-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-size: 0.75rem;
          top: 0.45rem;
        }

        .cta-section {
          background: #1e1509;
          border-radius: 12px;
          padding: 3rem 2.5rem;
          text-align: center;
          margin-top: 3.5rem;
        }

        .hero-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          border-radius: 10px;
          display: block;
        }

        .inline-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 2rem 0;
        }

        .highlight-card {
          background: linear-gradient(135deg, #fff9f0 0%, #faf3e8 100%);
          border: 1px solid #dfd0b8;
          border-radius: 10px;
          padding: 1.5rem 1.75rem;
          margin: 2rem 0;
        }

        .toc-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: #7a6040;
          padding: 4px 0;
          border-bottom: 1px solid #ede5d8;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toc-num {
          font-family: 'Playfair Display', serif;
          font-size: 0.75rem;
          color: #c9a96e;
          font-weight: 700;
          min-width: 20px;
        }

        @media (max-width: 640px) {
          .pricing-flex { flex-direction: column; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="report-root">
        <Header />
        <div
          style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem 4rem" }}
        >
          {/* Header */}
          <FadeSection>
            <div
              style={{
                paddingTop: "3.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1.5px solid #e8e0d4",
              }}
            >
              <span className="label-tag">Market Report · 2026</span>
              <h1
                className="display-font"
                style={{
                  fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#1a1005",
                  lineHeight: 1.22,
                  marginBottom: "1rem",
                }}
              >
                Custom Wood Furniture Market
                <br />
                in Jaipur: Trends, Pricing
                <br />
                &amp; Demand Report
              </h1>
              <p
                className="body-text"
                style={{ maxWidth: 640, marginBottom: "1.25rem" }}
              >
                A comprehensive look at how the demand for custom wood furniture
                in Jaipur has evolved in 2026—covering pricing tiers, material
                preferences, buyer behavior, and the growing shift away from
                ready-made solutions.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.82rem", color: "#8b6c3e" }}>
                  Published: May 2026
                </span>
                <span style={{ fontSize: "0.82rem", color: "#8b6c3e" }}>
                  Jaipur, Rajasthan
                </span>
                <span style={{ fontSize: "0.82rem", color: "#8b6c3e" }}>
                  8 min read
                </span>
              </div>
            </div>
          </FadeSection>

          {/* Hero Image */}
          <FadeSection>
            <div style={{ margin: "2rem 0" }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Indian wooden furniture workshop"
                className="hero-img"
              />
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#9a845e",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontStyle: "italic",
                }}
              >
                A skilled craftsman at work in a Jaipur furniture workshop
              </p>
            </div>
          </FadeSection>

          {/* Table of Contents */}
          <FadeSection>
            <div className="highlight-card">
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "#8b6c3e",
                  marginBottom: "0.75rem",
                }}
              >
                In This Report
              </p>
              {[
                "Popular Furniture Types in Jaipur",
                "Average Pricing Ranges",
                "Demand Trends: Home vs Office",
                "Shift Toward Custom Furniture",
                "Why Buyers Prefer Local Makers",
                "Material Trends",
                "Future Outlook",
                "Conclusion",
              ].map((item, i) => (
                <div key={i} className="toc-item">
                  <span className="toc-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </FadeSection>

          {/* Stats Cards */}
          <FadeSection>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
                margin: "2.5rem 0",
              }}
            >
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 1 */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 01</span>
              <h2 className="h2-title">Popular Furniture Types in Jaipur</h2>
              <p className="body-text">
                Jaipur's furniture market has diversified significantly. While
                traditional hand-carved pieces remain iconic, modern homeowners
                are gravitating toward cleaner silhouettes that blend heritage
                craftsmanship with contemporary utility.
              </p>

              <h3 className="h3-title">Bedroom Furniture Demand</h3>
              <p className="body-text">
                Beds, wardrobes, and study units make up nearly 47% of all
                custom furniture orders in Jaipur. Buyers increasingly request
                built-to-size wardrobes with integrated lighting and mirror
                panels. King-size platform beds in sheesham with walnut stain
                are among the most popular configurations in 2026.
              </p>

              <h3 className="h3-title">Living Room Trends</h3>
              <p className="body-text">
                Solid wood TV units and coffee tables with hairpin legs are
                trending in urban homes across Vaishali Nagar, Mansarovar, and
                Jagatpura. Buyers want pieces that are photogenic, durable, and
                sized precisely for Indian living rooms—an impossible ask for
                most ready-made brands.
              </p>

              <h3 className="h3-title">Modular Furniture Growth</h3>
              <p className="body-text">
                Modular kitchen cabinets and modular bookshelves have seen a 31%
                increase in demand since 2024. Homeowners prefer modular
                configurations because they can be disassembled and relocated—a
                key consideration for the renting-to-owning transition that many
                Jaipur families are navigating.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 2 — Pricing Table */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 02</span>
              <h2 className="h2-title">Average Pricing Ranges</h2>
              <p className="body-text" style={{ marginBottom: "1.5rem" }}>
                Pricing for custom wood furniture in Jaipur varies significantly
                based on wood species, joinery method, and surface finish. Below
                is a structured overview of what buyers can expect at each tier.
              </p>

              <div
                className="pricing-flex"
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                {pricingData.map((p, i) => (
                  <div
                    key={i}
                    className="pricing-card"
                    style={{
                      borderColor:
                        i === 2 ? "#c9a96e" : i === 1 ? "#c8c0b2" : "#e3d4b8",
                      boxShadow:
                        i === 1 ? "0 2px 18px rgba(0,0,0,0.07)" : "none",
                    }}
                  >
                    <span
                      className="pricing-badge"
                      style={{
                        background:
                          i === 2 ? "#c9a96e" : i === 1 ? "#e4ddd4" : "#fde9c0",
                        color:
                          i === 2 ? "#fff" : i === 1 ? "#4a3b28" : "#7a5020",
                      }}
                    >
                      {p.tier}
                    </span>
                    {i === 1 && (
                      <div>
                        <span
                          style={{
                            fontSize: 10,
                            background: "#2e1c08",
                            color: "#f5e6cc",
                            padding: "2px 8px",
                            borderRadius: 20,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                          }}
                        >
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="pricing-price">{p.range}</div>
                    <div className="pricing-row">
                      <strong>Wood:</strong> {p.material}
                    </div>
                    <div className="pricing-row">
                      <strong>Finish:</strong> {p.finish}
                    </div>
                    <div className="pricing-row">
                      <strong>Best for:</strong> {p.bestFor}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="h3-title">Budget Segment</h3>
              <p className="body-text">
                The budget tier caters primarily to rental properties and
                student housing near Sitapura and Sodala. MDF-core furniture
                with a laminate finish delivers acceptable aesthetics at a low
                price point, though longevity rarely exceeds 5–7 years under
                regular use.
              </p>

              <h3 className="h3-title">Mid-Range Segment</h3>
              <p className="body-text">
                The mid-range bracket sees the highest volume of orders in
                Jaipur. Sheesham furniture with a duco or wax finish strikes the
                right balance between price, aesthetics, and durability. Most
                reputable local makers operate primarily in this segment.
              </p>

              <h3 className="h3-title">Premium Segment</h3>
              <p className="body-text">
                Premium custom furniture typically involves solid teak or
                walnut, hand-fitted dovetail joints, and oil-rubbed finishes
                that deepen over time. Orders in this category are often tied to
                villa construction in Jagatpura, Ajmer Road, or Tonk Road
                corridors.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 3 */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 03</span>
              <h2 className="h2-title">Demand Trends: Home vs Office</h2>

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80"
                alt="Modern Indian home with wooden furniture"
                className="inline-img"
              />

              <h3 className="h3-title">Residential Demand</h3>
              <p className="body-text">
                Residential buyers account for approximately 72% of the custom
                furniture market in Jaipur. New apartment owners completing
                fit-outs in projects like Mahindra Happinest, Omaxe, and VVIP
                represent a consistent pipeline of mid-range orders.
              </p>

              <h3 className="h3-title">Office Furniture Growth</h3>
              <p className="body-text">
                Commercial demand has grown sharply as co-working spaces and
                boutique offices in Bais Godam and Malviya Nagar seek
                distinctive interiors. Custom reception desks, executive cabins,
                and conference tables in solid wood have become differentiators
                for forward-looking businesses.
              </p>

              <h3 className="h3-title">Work-From-Home Impact</h3>
              <p className="body-text">
                The hybrid work model has fundamentally changed how Jaipur
                residents think about their homes. A dedicated home office is no
                longer a luxury—it is a necessity. Compact writing desks,
                ergonomic chair configurations, and floating wall-mounted
                shelves in solid wood are among the fastest-growing
                sub-categories in 2026.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Insight Box */}
          <FadeSection>
            <div className="insight-box">
              <p
                style={{
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#8b5e26",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                Key Market Insights
              </p>
              {insights.map((ins, i) => (
                <p key={i}>▸ &nbsp;{ins}</p>
              ))}
            </div>
          </FadeSection>

          {/* Section 4 */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 04</span>
              <h2 className="h2-title">Shift Toward Custom Furniture</h2>

              <h3 className="h3-title">Problems with Ready-Made</h3>
              <p className="body-text">
                Ready-made furniture brands struggle to serve Indian homes,
                which are characterized by non-standard room dimensions, low
                ceiling clearances, and split-family living arrangements. A
                wardrobe that works in a European studio flat rarely fits a
                10×12 ft Jaipur bedroom with a slanted ceiling.
              </p>

              <h3 className="h3-title">Benefits of Custom</h3>
              <ul
                className="bullet-list"
                style={{ listStyle: "none", padding: 0, margin: "0.75rem 0" }}
              >
                {[
                  "Exact dimensions matched to your room — no gaps, no awkward corners",
                  "Wood species, finish, hardware, and colour chosen by you",
                  "Longer lifespan — solid wood typically outlasts flat-pack by 15–20 years",
                  "Better after-sales support from the same craftsman who built it",
                  "Unique pieces that cannot be replicated from a catalogue",
                ].map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <h3 className="h3-title">Long-Term Value Mindset</h3>
              <p className="body-text">
                Buyers in Jaipur are increasingly evaluating furniture as a
                long-term investment. A well-made sheesham dining table
                purchased today for ₹60,000 will outlast three cycles of
                flat-pack alternatives—shifting the cost-per-year calculus
                decisively in favour of custom wood furniture.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 5 */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 05</span>
              <h2 className="h2-title">Why Buyers Prefer Local Makers</h2>

              <h3 className="h3-title">Direct Communication</h3>
              <p className="body-text">
                Working directly with a local craftsman eliminates the
                frustrating ambiguity of ordering through a national retailer.
                Buyers can visit the workshop, review wood samples, adjust
                dimensions in real time, and speak with the person who will
                actually build their furniture.
              </p>

              <h3 className="h3-title">Flexible Pricing</h3>
              <p className="body-text">
                Local makers in Jaipur are open to negotiation, phased payment
                schedules, and design modifications without penalty charges.
                This flexibility is impossible to replicate with large-format
                retail—where catalogue pricing is final and alterations carry a
                premium.
              </p>

              <h3 className="h3-title">Jaipur Craftsmanship Advantage</h3>
              <p className="body-text">
                Jaipur has a centuries-old tradition of fine woodworking, inlay
                work, and lacquer finishing. The city's artisan community
                carries inherited skill sets that are difficult to find
                elsewhere in India. Buyers who understand this heritage actively
                seek out custom wood furniture in Jaipur over alternatives from
                other cities.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 6 */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 06</span>
              <h2 className="h2-title">Material Trends</h2>

              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Indian carpenter crafting wooden furniture"
                className="inline-img"
              />

              <h3 className="h3-title">Sheesham Dominance</h3>
              <p className="body-text">
                Sheesham (Indian Rosewood) continues to dominate the Jaipur
                market, prized for its distinctive grain, natural oil content,
                and excellent workability. Its mid-range price point makes it
                accessible to the broadest buyer segment, and its warm brown
                tones suit both traditional and contemporary interiors.
              </p>

              <h3 className="h3-title">Teak as a Premium Option</h3>
              <p className="body-text">
                Teak commands a 60–80% price premium over sheesham but justifies
                the cost through superior density, moisture resistance, and a
                finish that improves with age. It is the material of choice for
                outdoor furniture, kitchen cabinetry near wet areas, and
                heritage restoration projects.
              </p>

              <h3 className="h3-title">Engineered Wood Demand</h3>
              <p className="body-text">
                Engineered wood—BWP-grade plywood and HDHMR board—has found a
                legitimate place in the market for modular kitchens, kids' room
                furniture, and rental-grade interiors. Contrary to its
                reputation, high-quality engineered wood with moisture-resistant
                cores performs reliably for 8–12 years in typical household
                conditions.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 7 */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 07</span>
              <h2 className="h2-title">Future Outlook</h2>

              <h3 className="h3-title">Market Growth</h3>
              <p className="body-text">
                The custom wood furniture segment in Jaipur is projected to grow
                at 18–24% CAGR through 2028, driven by increasing homeownership
                rates, rising middle-class disposable income, and the broader
                premiumisation of the Indian home interiors market. Jaipur is
                well-positioned to capture a disproportionate share of this
                growth given its artisan ecosystem.
              </p>

              <h3 className="h3-title">Digital Influence</h3>
              <p className="body-text">
                Instagram, Pinterest, and interior design platforms like
                Livspace and WhichD are fundamentally changing how buyers
                discover and evaluate craftsmen. Local workshops that invest in
                professional photography, social media presence, and online
                consultation tools are outgrowing peers who rely solely on
                walk-in traffic.
              </p>

              <h3 className="h3-title">Future Buyer Behaviour</h3>
              <p className="body-text">
                Younger buyers (ages 25–38) entering the custom furniture market
                in Jaipur have markedly different expectations: they want
                transparent pricing, 3D previews before production,
                WhatsApp-first communication, and guaranteed delivery timelines.
                Craftsmen who adapt to these expectations will define the next
                decade of the market.
              </p>
            </section>
          </FadeSection>

          <hr className="section-rule" />

          {/* Section 8 — Conclusion */}
          <FadeSection>
            <section>
              <span className="label-tag">Section 08</span>
              <h2 className="h2-title">Conclusion</h2>
              <p className="body-text">
                The market for custom wood furniture in Jaipur is not a niche—it
                is a mature, growing, and increasingly sophisticated industry.
                Buyers are better informed, expectations are higher, and the gap
                between ready-made solutions and true custom craftsmanship is
                widening in ways that favour local artisans.
              </p>

              <div className="highlight-card" style={{ marginTop: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8b6c3e",
                    marginBottom: "0.85rem",
                  }}
                >
                  Summary
                </p>
                <ul
                  className="bullet-list"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {[
                    "Sheesham and teak remain the dominant wood choices; engineered wood fills the budget tier.",
                    "Mid-range buyers (₹45K–₹1.2L) represent the largest and most active segment.",
                    "Work-from-home demand has permanently elevated home office furniture orders.",
                    "Local craftsmen with digital presence are growing faster than traditional walk-in workshops.",
                    "Custom furniture delivers superior lifetime value versus ready-made alternatives.",
                    "Jaipur's heritage craftsmanship is a genuine competitive advantage—not a marketing cliché.",
                  ].map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <p className="body-text" style={{ marginTop: "1.25rem" }}>
                Whether you are furnishing a new apartment, renovating a family
                home, or outfitting a commercial space, Jaipur's community of
                skilled woodworkers offers a combination of craftsmanship,
                pricing flexibility, and material quality that is difficult to
                match anywhere else in North India.
              </p>
            </section>
          </FadeSection>

          {/* CTA */}
          <FadeSection>
            <div className="cta-section">
              <p
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Ready to Start?
              </p>
              <h2
                className="display-font"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#faf3e8",
                  marginBottom: "0.85rem",
                  lineHeight: 1.3,
                }}
              >
                Get Your Custom Furniture
                <br />
                Designed in Jaipur
              </h2>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  color: "#c4b49a",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  maxWidth: 480,
                  margin: "0 auto 1.75rem",
                }}
              >
                Speak directly with a Jaipur craftsman, share your dimensions,
                and receive a detailed quote—no commitments, no middlemen.
              </p>
              <button
                style={{
                  background: "#c9a96e",
                  color: "#1e1509",
                  border: "none",
                  borderRadius: 6,
                  padding: "0.85rem 2.25rem",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#e0bb80")}
                onMouseLeave={(e) => (e.target.style.background = "#c9a96e")}
              >
                Get Free Quote
              </button>
            </div>
          </FadeSection>
        </div>
        <Footer />
      </div>
    </>
  );
}
