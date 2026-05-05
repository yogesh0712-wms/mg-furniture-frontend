import { useEffect, useRef } from "react";
import Header, { Footer } from "../../Header";

export default function BestFurnitureOptionsJaipur() {
  useEffect(() => {
    document.title = "Best Custom Wood Furniture Options for Homes in Jaipur";
    const desc = document.querySelector("meta[name='description']");
    if (desc) {
      desc.setAttribute(
        "content",
        "Explore the best custom wood furniture options in Jaipur for homes. Discover beds, wardrobes, modular designs, pricing, and how to choose the right furniture.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore the best custom wood furniture options in Jaipur for homes. Discover beds, wardrobes, modular designs, pricing, and how to choose the right furniture.";
      document.head.appendChild(meta);
    }
    const canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href =
        window.location.origin +
        "/blogs/custom-wood-furniture-in-jaipur/best-furniture-options-jaipur-homes";
      document.head.appendChild(link);
    }
  }, []);

  // Scroll fade-in hook
  function useFadeIn() {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
    return ref;
  }

  function FadeSection({ children, className = "" }) {
    const ref = useFadeIn();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: 1,
          transform: "translateY(0)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#faf8f4",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ── Hero / H1 ── */}
      <header
        style={{
          background: "#faf8f4",
          borderBottom: "1px solid #e8dfd0",
          paddingTop: "56px",
          paddingBottom: "48px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8B4513",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Jaipur Furniture Guide
          </p>
          <h1
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#1a0f00",
            }}
          >
            Best Custom Wood Furniture Options for Homes in Jaipur
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.75,
              color: "#5a4030",
              maxWidth: "640px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            A practical guide to choosing the right custom wood furniture in
            Jaipur — from bedroom storage to modular living rooms, wood types,
            pricing, and what actually works in Indian homes.
          </p>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "20px",
              fontSize: "13px",
              color: "#a0856b",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <span>Updated May 2025</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main
        style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}
      >
        {/* ── Intro ── */}
        <FadeSection className="mt-12">
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.85,
              color: "#3d2a1a",
              fontFamily: "system-ui, sans-serif",
              margin: 0,
            }}
          >
            If you're furnishing a home in Jaipur, custom wood furniture gives
            you something off-the-shelf rarely can — furniture built to your
            exact room dimensions, wood of your choice, and finishes that match
            your home's character. Whether you're in a compact flat in
            Mansarovar or a spacious villa in Jagatpura, this guide walks you
            through every major furniture category, the best wood options,
            realistic pricing, and how to make the right call before placing an
            order.
          </p>
        </FadeSection>

        <Divider />

        {/* ── Section 1: Bedroom ── */}
        <FadeSection>
          <section>
            <SectionImage
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt="Indian bedroom with custom wooden furniture"
            />
            <h2 style={h2Style}>1. Bedroom Furniture Options</h2>
            <p style={bodyStyle}>
              The bedroom is where most homeowners in Jaipur invest first in
              custom wood furniture. The key advantage is fitting furniture
              precisely to your room's dimensions, especially in older buildings
              where walls are rarely standard-sized.
            </p>

            <h3 style={h3Style}>Storage Beds</h3>
            <p style={bodyStyle}>
              Storage beds are among the most popular custom wood furniture
              pieces in Jaipur homes. A hydraulic storage bed in sheesham or
              engineered wood gives you 40–60% more storage underneath — ideal
              for compact bedrooms where space is at a premium. Box beds with
              side drawers are another option for heavier storage needs like
              linens and seasonal clothes.
            </p>
            <ul style={ulStyle}>
              <li>Hydraulic lift mechanism — best for bulky storage</li>
              <li>Drawer-based box beds — better for daily access items</li>
              <li>
                Panelled headboards can be built into the same unit to save wall
                space
              </li>
            </ul>

            <h3 style={h3Style}>Wardrobes</h3>
            <p style={bodyStyle}>
              Custom wardrobes are one of the strongest arguments for going the
              custom route in Jaipur. Floor-to-ceiling wardrobes make use of
              every inch of height, and you can specify exact compartment widths
              for your own clothing habits — long hang space, folding shelves,
              or deep drawers for heavy items.
            </p>
            <ul style={ulStyle}>
              <li>Sliding doors save 12–18 inches of room depth vs. hinged</li>
              <li>Mirrors on wardrobe doors double as dressing mirrors</li>
              <li>
                Loft units above standard wardrobes add significant storage for
                rarely-used items
              </li>
            </ul>

            <h3 style={h3Style}>Side Tables</h3>
            <p style={bodyStyle}>
              Custom bedside tables let you match exact bed height and
              incorporate charging points, small drawers, or open shelves. Often
              the most affordable custom piece to start with — a good entry
              point if you're testing a local craftsman for the first time.
            </p>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 2: Living Room ── */}
        <FadeSection>
          <section>
            <SectionImage
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt="Indian living room with wooden furniture"
            />
            <h2 style={h2Style}>2. Living Room Furniture</h2>
            <p style={bodyStyle}>
              Living rooms in Jaipur homes vary widely — from narrow rectangular
              rooms in older construction to open-plan layouts in newer
              apartments. Custom wood furniture lets you design around your
              specific layout rather than arranging around a standard-sized
              piece.
            </p>

            <h3 style={h3Style}>TV Units</h3>
            <p style={bodyStyle}>
              A wall-length TV unit in sheesham or engineered wood is one of the
              most requested custom pieces in Jaipur. You can integrate cable
              management, speaker cutouts, and display shelves alongside closed
              cabinets — far more functional than a standard unit.
            </p>
            <ul style={ulStyle}>
              <li>
                Floating units (wall-mounted) make small rooms feel larger
              </li>
              <li>
                Floor-to-ceiling designs with closed storage and open display
                shelving work well in larger rooms
              </li>
              <li>
                Match finish to other wooden elements in the room for a cohesive
                look
              </li>
            </ul>

            <h3 style={h3Style}>Coffee Tables</h3>
            <p style={bodyStyle}>
              Custom coffee tables are straightforward pieces that make a strong
              visual impression. Solid sheesham with a natural finish is a
              popular choice in Jaipur — the wood's grain pattern adds character
              without requiring elaborate design work.
            </p>

            <h3 style={h3Style}>Sofa Frames</h3>
            <p style={bodyStyle}>
              Many furniture makers in Jaipur offer custom solid wood sofa
              frames with removable cushions. This is a smart long-term
              investment — the frame lasts decades and cushion fabric can be
              replaced as trends change, without replacing the whole sofa.
            </p>

            <HighlightBox>
              <strong>Practical tip:</strong> Before ordering a living room set,
              sketch the room layout to scale. Include door swings and traffic
              paths — a beautiful TV unit that blocks natural movement defeats
              the purpose.
            </HighlightBox>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 3: Modular ── */}
        <FadeSection>
          <section>
            <SectionImage
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Modular wooden furniture in Indian home"
            />
            <h2 style={h2Style}>3. Modular & Space-Saving Furniture</h2>
            <p style={bodyStyle}>
              Compact apartments in areas like Vaishali Nagar, Pratap Nagar, and
              Raja Park have driven strong demand for modular and space-saving
              custom wood furniture in Jaipur. The goal is maximum utility from
              every square foot.
            </p>

            <h3 style={h3Style}>Modular Storage</h3>
            <p style={bodyStyle}>
              Modular wooden shelving systems — designed around your exact wall
              dimensions — work in living rooms, bedrooms, and home offices.
              Unlike flat-pack alternatives, custom modular units can account
              for beams, switchboards, and irregular walls.
            </p>

            <h3 style={h3Style}>Study Units</h3>
            <p style={bodyStyle}>
              With more people working or studying from home, compact study
              units built into an alcove or corner are a growing request. A
              well-designed study unit in engineered wood can fit a workstation,
              bookshelves, file drawers, and cable management into a 5×4 ft
              footprint.
            </p>
            <ul style={ulStyle}>
              <li>Wall-mounted fold-down desks work in very tight spaces</li>
              <li>Overhead shelving above the desk maximises vertical space</li>
              <li>
                Built-in lighting slots can be integrated into the unit frame
              </li>
            </ul>

            <h3 style={h3Style}>Multi-Functional Furniture</h3>
            <p style={bodyStyle}>
              Diwan beds that convert between seating and sleeping, ottomans
              with internal storage, and benches with lift-up seats are all
              pieces that skilled craftsmen in Jaipur can build to order at
              reasonable cost compared to branded alternatives.
            </p>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 4: Dining ── */}
        <FadeSection>
          <section>
            <SectionImage
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
              alt="Wooden dining table in Indian home"
            />
            <h2 style={h2Style}>4. Dining & Kitchen Furniture</h2>

            <h3 style={h3Style}>Dining Tables</h3>
            <p style={bodyStyle}>
              A custom solid wood dining table in Jaipur can be sized to your
              exact dining space — whether that's a 4-seater for a compact
              dining area or a 10-seater for a joint family home. Sheesham and
              teak are the most popular wood choices for dining tables, given
              their resistance to moisture and heat from hot utensils placed
              nearby.
            </p>
            <ul style={ulStyle}>
              <li>Extendable dining tables are available in custom sizes</li>
              <li>
                Bench seating instead of chairs saves space and works well for
                family dining
              </li>
              <li>
                Thick tops (2–2.5 inches) add visual weight and durability
              </li>
            </ul>

            <h3 style={h3Style}>Kitchen Cabinets</h3>
            <p style={bodyStyle}>
              Custom kitchen cabinets in Jaipur are most commonly built in
              engineered wood (BWP-grade ply) with a hardwood or laminate
              finish. This combination balances moisture resistance, durability,
              and cost. Solid wood is occasionally used for visible shutters and
              frames where aesthetics matter more than budget.
            </p>

            <h3 style={h3Style}>Space-Saving Dining</h3>
            <p style={bodyStyle}>
              For kitchens and dining areas under 80 sq ft, a wall-mounted
              folding table with fold-flat chairs stored nearby is an
              increasingly popular custom solution. When folded, the table takes
              up under 6 inches of wall space.
            </p>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 5: Wood Options ── */}
        <FadeSection>
          <section>
            <h2 style={h2Style}>5. Best Wood Options for Jaipur Homes</h2>
            <p style={bodyStyle}>
              Choosing the right wood matters more than most people realise.
              Jaipur's dry climate means wood dries and contracts less than in
              humid cities, which is actually an advantage — solid wood
              furniture performs very well here. Here are the three most
              relevant options.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
                marginTop: "24px",
                marginBottom: "24px",
              }}
            >
              <WoodCard
                name="Sheesham"
                hindi="(Rosewood / Dalbergia sissoo)"
                pros={[
                  "Dense and durable",
                  "Beautiful natural grain",
                  "Handles Jaipur's dry climate well",
                  "Widely available locally",
                ]}
                cons={[
                  "Heavier than engineered options",
                  "Higher cost than MDF",
                ]}
                best="Beds, dining tables, TV units"
              />
              <WoodCard
                name="Teak"
                hindi="(Sagwan)"
                pros={[
                  "Extremely durable",
                  "Natural oils resist moisture",
                  "Ages beautifully",
                  "Premium appearance",
                ]}
                cons={[
                  "Most expensive solid wood option",
                  "Harder to source sustainably",
                ]}
                best="Dining tables, outdoor-facing pieces, premium builds"
              />
              <WoodCard
                name="Engineered Wood"
                hindi="(BWP Ply / MDF)"
                pros={[
                  "Consistent quality",
                  "Highly customisable finishes",
                  "More affordable",
                  "Moisture-resistant (BWP grade)",
                ]}
                cons={[
                  "Less character than solid wood",
                  "Lower resale or heirloom value",
                ]}
                best="Wardrobes, kitchen cabinets, study units, modular"
              />
            </div>

            <h3 style={h3Style}>Sheesham</h3>
            <p style={bodyStyle}>
              Sheesham (Indian Rosewood) is the default choice for most custom
              wood furniture in Jaipur. It's locally sourced, reasonably priced
              compared to teak, and has a rich warm grain that looks good
              without elaborate finishing. Most skilled craftsmen in Jaipur work
              with sheesham regularly.
            </p>

            <h3 style={h3Style}>Teak</h3>
            <p style={bodyStyle}>
              Teak is the premium choice — longer-lasting, more resistant to
              insects and moisture, and it develops a lovely patina over
              decades. The price is 40–60% higher than sheesham for comparable
              pieces, which makes it most suitable for investment pieces like a
              family dining table or a bed frame you intend to keep for 20+
              years.
            </p>

            <h3 style={h3Style}>Engineered Wood</h3>
            <p style={bodyStyle}>
              For functional pieces like wardrobes, kitchen cabinets, and study
              units, good-quality BWP-grade plywood with a laminate or veneer
              finish is often the smarter choice. It's consistent, takes
              precision cuts well, and when properly sealed at edges, holds up
              well in Indian conditions. Choose a minimum of 18mm thickness for
              structural components.
            </p>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 6: Pricing ── */}
        <FadeSection>
          <section>
            <h2 style={h2Style}>6. Pricing Overview</h2>
            <p style={bodyStyle}>
              Custom wood furniture in Jaipur is priced by the running foot (for
              linear pieces like wardrobes and kitchen cabinets) or by piece
              (for beds, tables, and chairs). Prices vary based on wood type,
              finish, hardware quality, and the craftsman's skill level. Here is
              a practical breakdown.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
                margin: "24px 0",
              }}
            >
              <PriceCard
                tier="Budget Range"
                range="₹800 – ₹1,400 / sq ft"
                material="Engineered wood (MDF/ply), basic laminate finish"
                items={[
                  "Wardrobes from ₹18,000",
                  "TV units from ₹12,000",
                  "Study units from ₹15,000",
                ]}
                color="#fef3c7"
                borderColor="#f59e0b"
              />
              <PriceCard
                tier="Mid Range"
                range="₹1,400 – ₹2,500 / sq ft"
                material="Sheesham solid wood or premium ply with PU finish"
                items={[
                  "Wardrobes from ₹35,000",
                  "Beds from ₹25,000",
                  "Dining tables from ₹22,000",
                ]}
                color="#dbeafe"
                borderColor="#3b82f6"
              />
              <PriceCard
                tier="Premium Range"
                range="₹2,500 – ₹5,000+ / sq ft"
                material="Teak or premium sheesham, hand-carved or designer finish"
                items={[
                  "Beds from ₹55,000",
                  "Dining tables from ₹45,000",
                  "Full bedroom sets from ₹1.5L",
                ]}
                color="#d1fae5"
                borderColor="#10b981"
              />
            </div>

            <HighlightBox>
              <strong>Important:</strong> Always ask for a written quote that
              breaks down wood type, ply grade, hardware brand, and finish type
              separately. Vague quotes like "sheesham wood wardrobe for ₹20,000"
              often hide compromises on ply thickness, hardware quality, or
              finish durability.
            </HighlightBox>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 7: How to Choose ── */}
        <FadeSection>
          <section>
            <h2 style={h2Style}>7. How to Choose the Right Furniture</h2>

            <h3 style={h3Style}>Space Planning</h3>
            <p style={bodyStyle}>
              Measure your room twice before ordering anything. Note door and
              window positions, electrical points, and any structural columns or
              beams. A common mistake is ordering a wardrobe that blocks natural
              ventilation or a bed that makes the room feel cramped when other
              furniture is added. A simple hand-drawn floor plan to scale takes
              15 minutes and prevents expensive mistakes.
            </p>
            <ul style={ulStyle}>
              <li>
                Leave at least 36 inches of clearance around beds for
                comfortable movement
              </li>
              <li>
                Wardrobes with sliding doors need zero door-swing clearance —
                ideal for tight rooms
              </li>
              <li>
                In dining rooms, allow 24 inches minimum between table edge and
                wall for chair pull-out
              </li>
            </ul>

            <h3 style={h3Style}>Material Selection</h3>
            <p style={bodyStyle}>
              Match material to function. Solid wood for pieces that bear
              weight, face heavy daily use, or need to last decades. Engineered
              wood for large-surface pieces where precision cuts and consistent
              finish matter more than grain character. Don't spend solid-wood
              budget on interior shelves inside a wardrobe — use good ply there
              and invest in solid wood for the visible frame.
            </p>

            <h3 style={h3Style}>Function vs Design</h3>
            <p style={bodyStyle}>
              It's easy to be drawn to elaborate carved designs when visiting
              Jaipur's furniture market. But intricate carvings collect dust,
              are harder to clean, and add cost without adding function. A
              well-proportioned piece in plain sheesham with a clean PU finish
              will look good for decades and age better than a heavily carved
              alternative. Reserve decorative detailing for one focal piece per
              room — a headboard or a dining table — rather than applying it
              everywhere.
            </p>
          </section>
        </FadeSection>

        <Divider />

        {/* ── Section 8: Why Custom in Jaipur ── */}
        <FadeSection>
          <section>
            <SectionImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Custom wood furniture craftsmanship in Jaipur"
            />
            <h2 style={h2Style}>8. Why Custom Furniture Works in Jaipur</h2>

            <h3 style={h3Style}>Local Layouts</h3>
            <p style={bodyStyle}>
              Jaipur's residential architecture — particularly in older areas
              like Bapu Nagar, Shastri Nagar, and Civil Lines — features
              non-standard room dimensions, thick walls, and deep window sills
              that make standard-sized furniture look awkward or waste space.
              Custom furniture built to exact dimensions integrates cleanly with
              these layouts in a way that off-the-shelf products simply can't.
            </p>

            <h3 style={h3Style}>Craftsmanship</h3>
            <p style={bodyStyle}>
              Jaipur has a long tradition of skilled wood craftsmanship. The
              city's artisans are experienced with both traditional carving
              techniques and modern furniture construction methods. This means
              you can get furniture that combines modern functionality with
              traditional detailing — a combination that is genuinely difficult
              to find from large national furniture brands.
            </p>

            <h3 style={h3Style}>Value for Money</h3>
            <p style={bodyStyle}>
              Compared to Mumbai, Delhi, or Bangalore, custom wood furniture in
              Jaipur typically costs 20–35% less for equivalent quality,
              primarily because of lower labour costs and proximity to wood
              suppliers in Rajasthan and Gujarat. This makes Jaipur one of the
              best cities in India to invest in custom solid wood furniture,
              particularly for teak and sheesham pieces.
            </p>
          </section>
        </FadeSection>

        <Divider />

        {/* ── CTA ── */}
        <FadeSection>
          <section
            style={{
              background: "#2d1a0e",
              borderRadius: "16px",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c9a87a",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Custom Furniture Jaipur
            </p>
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                color: "#faf0e0",
                lineHeight: 1.3,
              }}
            >
              Get Your Custom Furniture Designed in Jaipur
            </h2>
            <p
              style={{
                margin: "0 0 32px",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#c9a87a",
                maxWidth: "480px",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Tell us your room dimensions and requirements. We'll design and
              deliver custom wood furniture built precisely for your home.
            </p>
            <a
              href="https://wa.me/919782545485?text=Hi%20MG%20Furniture,%20I%20am%20interested%20in%20your%20custom%20wood%20furniture.
"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#c9a87a",
                color: "#1a0f00",
                padding: "14px 36px",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e8c896")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c9a87a")
              }
            >
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#1a0f00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/custom-wood-furniture"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#c9a87a",
                color: "#1a0f00",
                padding: "14px 36px",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "system-ui, sans-serif",
                transition: "background 0.2s",
                margin: "5px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e8c896")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#c9a87a")
              }
            >
              Check the Shop
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#1a0f00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </section>
        </FadeSection>
      </main>
    </div>
  );
}

// ── Shared style objects ──────────────────────────────────────
const h2Style = {
  margin: "0 0 16px",
  fontSize: "clamp(20px, 3vw, 26px)",
  fontWeight: 700,
  color: "#1a0f00",
  lineHeight: 1.3,
  paddingTop: "8px",
};

const h3Style = {
  margin: "28px 0 10px",
  fontSize: "18px",
  fontWeight: 700,
  color: "#2d1a0e",
  lineHeight: 1.4,
};

const bodyStyle = {
  margin: "0 0 16px",
  fontSize: "16px",
  lineHeight: 1.85,
  color: "#3d2a1a",
  fontFamily: "system-ui, sans-serif",
};

const ulStyle = {
  margin: "0 0 16px",
  paddingLeft: "20px",
  fontSize: "15px",
  lineHeight: 2,
  color: "#3d2a1a",
  fontFamily: "system-ui, sans-serif",
};

// ── Helper components ─────────────────────────────────────────
function Divider() {
  return (
    <div style={{ height: "1px", background: "#e8dfd0", margin: "48px 0" }} />
  );
}

function SectionImage({ src, alt }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "28px",
        height: "280px",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loading="lazy"
      />
    </div>
  );
}

function HighlightBox({ children }) {
  return (
    <div
      style={{
        background: "#fff8ee",
        border: "1px solid #f0d89a",
        borderLeft: "4px solid #c9a87a",
        borderRadius: "8px",
        padding: "16px 20px",
        margin: "24px 0",
        fontSize: "15px",
        lineHeight: 1.75,
        color: "#3d2a1a",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}

function WoodCard({ name, hindi, pros, cons, best }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e8dfd0",
        borderRadius: "12px",
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p
        style={{
          margin: "0 0 4px",
          fontWeight: 700,
          fontSize: "16px",
          color: "#1a0f00",
        }}
      >
        {name}
      </p>
      <p style={{ margin: "0 0 14px", fontSize: "12px", color: "#a0856b" }}>
        {hindi}
      </p>
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#8B4513",
        }}
      >
        Pros
      </p>
      <ul
        style={{
          margin: "0 0 10px",
          paddingLeft: "16px",
          fontSize: "13px",
          lineHeight: 1.9,
          color: "#3d2a1a",
        }}
      >
        {pros.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#888",
        }}
      >
        Cons
      </p>
      <ul
        style={{
          margin: "0 0 10px",
          paddingLeft: "16px",
          fontSize: "13px",
          lineHeight: 1.9,
          color: "#5a4030",
        }}
      >
        {cons.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p
        style={{
          margin: "0",
          fontSize: "12px",
          fontWeight: 600,
          color: "#8B4513",
        }}
      >
        Best for:{" "}
        <span style={{ fontWeight: 400, color: "#3d2a1a" }}>{best}</span>
      </p>
    </div>
  );
}

function PriceCard({ tier, range, material, items, color, borderColor }) {
  return (
    <div
      style={{
        background: color,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontWeight: 700,
          fontSize: "15px",
          color: "#1a0f00",
        }}
      >
        {tier}
      </p>
      <p
        style={{
          margin: "0 0 10px",
          fontSize: "14px",
          fontWeight: 700,
          color: "#2d1a0e",
        }}
      >
        {range}
      </p>
      <p
        style={{
          margin: "0 0 10px",
          fontSize: "13px",
          lineHeight: 1.65,
          color: "#3d2a1a",
        }}
      >
        {material}
      </p>
      <ul
        style={{
          margin: 0,
          paddingLeft: "16px",
          fontSize: "13px",
          lineHeight: 2,
          color: "#2d1a0e",
        }}
      >
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
