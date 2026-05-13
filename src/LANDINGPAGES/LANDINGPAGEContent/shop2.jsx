import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header, { Footer } from "../../Header";

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const PUBLISH_DATE = "June 18, 2026";
const READ_TIME = 7;

const TOC = [
  { id: "rising-demand", label: "Rising Demand Across Jaipur" },
  { id: "vaishali-nagar", label: "Vaishali Nagar" },
  { id: "mansarovar", label: "Mansarovar" },
  { id: "infrastructure", label: "Infrastructure Growth" },
  { id: "trends-2026", label: "Furniture Trends 2026" },
  { id: "conclusion", label: "Conclusion" },
];

const STATS = [
  {
    value: "68%",
    label:
      "of new Jaipur homeowners prefer custom-built furniture over readymade",
  },
  {
    value: "3×",
    label: "growth in bespoke furniture workshops in Jaipur since 2022",
  },
  {
    value: "₹1.2L",
    label: "average spend on custom wooden furniture per household in 2026",
  },
];

/* ─────────────────────────────────────────────
   FADE-UP WRAPPER
───────────────────────────────────────────── */
const FadeUp = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

/* ─────────────────────────────────────────────
   SECTION ANCHOR WRAPPER
───────────────────────────────────────────── */
const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`scroll-mt-20 ${className}`}>
    {children}
  </section>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function TopAreasJaipurFurniture() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  /* Active TOC tracking */
  const [activeId, setActiveId] = useState(TOC[0].id);
  useEffect(() => {
    const handler = () => {
      for (const item of [...TOC].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveId(item.id);
          return;
        }
      }
      setActiveId(TOC[0].id);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Header />
      {/* ── Progress bar ── */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-amber-700"
      />

      <div
        className="bg-[#f9f6f1] text-[#2a2016]"
        style={{ fontFamily: "'Crimson Pro', Georgia, serif" }}
      >
        {/* ══════════════════════════════════════
            A) HERO
        ══════════════════════════════════════ */}
        <div className="relative min-h-[88vh] flex items-end overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85"
            alt="Modern Indian home interior Jaipur"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* layered gradient: bottom-heavy dark + subtle warm tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#160e06]/90 via-[#160e06]/45 to-[#160e06]/10" />
          {/* thin warm horizontal rule at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-700/60" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-16 pt-36">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="bg-amber-700 text-white text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-[5px] rounded-sm">
                Jaipur Furniture Trends
              </span>
              <span className="text-white/50 text-sm font-sans">·</span>
              <span className="text-white/50 text-sm font-sans">
                {READ_TIME} min read
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.12] max-w-4xl mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              Top Areas in Jaipur Where Custom Furniture Demand Is Growing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed font-sans font-light"
            >
              From Vaishali Nagar's luxury villas to Mansarovar's dense
              residential colonies, bespoke wooden furniture is becoming the
              defining interior choice for Jaipur's fast-growing neighbourhoods.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mt-7 text-white/45 text-sm font-sans"
            >
              <span>Published {PUBLISH_DATE}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>By Editorial Team · Jaipur Wood Craft</span>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BODY: sidebar TOC + article
        ══════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 flex gap-12 items-start">
          {/* ── Sticky Table of Contents (desktop only) ── */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24">
            <p className="text-[10px] tracking-[0.22em] text-amber-700 uppercase font-sans mb-4">
              In This Article
            </p>
            <nav className="space-y-1">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-sm font-sans py-1 pl-3 border-l-2 transition-all duration-200 ${
                    activeId === item.id
                      ? "border-amber-700 text-amber-800 font-medium"
                      : "border-transparent text-[#8a7060] hover:text-[#4a3020] hover:border-amber-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mini CTA */}
            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-xs text-[#6a4a2a] font-sans leading-relaxed mb-3">
                Get a free design consultation for your Jaipur home.
              </p>
              <a
                href="https://wa.me/919782545485"
                className="block text-center bg-amber-700 hover:bg-amber-800 text-white text-xs font-sans tracking-wide px-4 py-2 rounded transition-colors"
              >
                Talk to Us →
              </a>
            </div>
          </aside>

          {/* ── Main article ── */}
          <div className="flex-1 min-w-0 max-w-2xl">
            {/* B) Quick Intro */}
            <FadeUp>
              <p
                className="text-xl md:text-2xl text-[#3d2e1a] leading-relaxed border-l-4 border-amber-700 pl-5 mb-8"
                style={{ fontStyle: "italic" }}
              >
                Jaipur's real estate landscape is transforming rapidly. As new
                apartment complexes and villa projects reshape the city's
                skyline, a quiet but powerful shift is happening inside these
                homes — a rising demand for custom, made-to-measure wooden
                furniture.
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="body-p mb-12">
                Unlike readymade furniture that compromises on fit, finish, or
                character, custom wooden pieces are built to the exact
                dimensions, wood type, and design sensibility of the homeowner.
                This guide explores the specific Jaipur neighbourhoods where
                this demand is growing fastest — and why.
              </p>
            </FadeUp>

            {/* ── 1. Rising Demand ── */}
            <Section id="rising-demand">
              <FadeUp>
                <Label>01</Label>
                <H2>Why Custom Furniture Demand Is Rising Across Jaipur</H2>

                <img
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80"
                  alt="Indian wooden living room interior"
                  className="article-img"
                  loading="lazy"
                />

                <H3>Personalised Interiors Are No Longer a Luxury</H3>
                <p className="body-p">
                  Jaipur's expanding middle and upper-middle class increasingly
                  views the home as an expression of identity, not just shelter.
                  Standard showroom furniture — same sizes, same finishes, same
                  designs seen in thousands of homes — simply doesn't satisfy
                  this aspiration anymore. Custom furniture lets homeowners
                  dictate every detail: the curve of a wardrobe handle, the
                  exact warm honey tone of a dining table finish, the precise
                  depth of a bookshelf that fits a specific wall.
                </p>

                <H3>Apartment Living Demands Space Intelligence</H3>
                <p className="body-p">
                  Jaipur's new-build apartments range from compact 2BHKs to
                  large 4BHK units, but wall dimensions, ceiling heights, and
                  room proportions vary dramatically between projects.
                  Off-the-shelf furniture inevitably leaves dead corners,
                  awkward gaps, or wasted overhead space. Custom furniture
                  workshops eliminate this waste entirely — every centimetre is
                  accounted for by a craftsman who visits the site before
                  building.
                </p>

                <H3>Real Estate Growth Is Fuelling Interior Investment</H3>
                <p className="body-p">
                  New residential projects in Tonk Road, Ajmer Road, and the
                  Ring Road corridor have added tens of thousands of homes to
                  Jaipur's stock since 2022. New homeowners, often purchasing a
                  flat for the first time, are investing significantly in
                  interiors — and custom wooden furniture is consistently the
                  highest-priority purchase after construction.
                </p>
              </FadeUp>
            </Section>

            {/* ── 2. Vaishali Nagar ── */}
            <Section id="vaishali-nagar" className="mt-16">
              <FadeUp>
                <Label>02</Label>
                <H2>Vaishali Nagar Is Becoming a Major Custom Furniture Hub</H2>

                <div className="grid grid-cols-2 gap-3 my-7">
                  <img
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
                    alt="Premium Indian wooden interior"
                    className="w-full h-48 object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                    alt="Indian living room with wooden furniture"
                    className="w-full h-48 object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <H3>Premium Homes and Independent Villas</H3>
                <p className="body-p">
                  Vaishali Nagar is one of Jaipur's most established and premium
                  residential localities. Its wide roads, planned layouts, and
                  high land values attract affluent buyers who purchase large
                  independent houses and villas. These homes have spacious
                  rooms, high ceilings, and distinctive architectural features
                  that demand equally distinctive furniture — the kind that only
                  custom makers can provide.
                </p>

                <H3>Luxury Wooden Interiors as a Status Statement</H3>
                <p className="body-p">
                  In Vaishali Nagar homes, custom wooden furniture has evolved
                  beyond utility into status. A carved Sheesham wood mantelpiece
                  in the living room, a solid walnut-finish master bedroom
                  suite, or a built-in library wall in the study — these are
                  investments that homeowners display with pride and discuss at
                  length with visiting family and friends.
                </p>

                <H3>Active Renovation Culture</H3>
                <p className="body-p">
                  Beyond new buyers, Vaishali Nagar has a strong culture of home
                  renovation. Established families who have lived here for 15–20
                  years are upgrading their interiors, replacing factory-made
                  furniture from the 2000s with bespoke pieces. Local carpenters
                  report that referral-based renovation projects from this
                  locality account for some of their highest-value commissions.
                </p>
              </FadeUp>
            </Section>

            {/* ── 3. Mansarovar ── */}
            <Section id="mansarovar" className="mt-16">
              <FadeUp>
                <Label>03</Label>
                <H2>
                  Mansarovar Is Emerging as a High-Demand Furniture Market
                </H2>

                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
                  alt="Indian apartment furniture setup"
                  className="article-img"
                  loading="lazy"
                />

                <H3>Dense Residential Demand</H3>
                <p className="body-p">
                  Mansarovar is one of Jaipur's most densely populated planned
                  neighbourhoods. With thousands of apartments across Mansarovar
                  Extension, Mansarovar Phase 1 and Phase 2, the sheer volume of
                  homes creates extraordinary demand for furniture — and custom
                  makers have noticed. Several furniture workshops have
                  established their operations in or near Mansarovar
                  specifically to serve this captive market.
                </p>

                <H3>Smart Furniture Solutions for Compact Apartments</H3>
                <p className="body-p">
                  Many Mansarovar apartments sit in the 850–1,100 sq ft range —
                  large enough for a family but tight enough that every
                  furniture decision matters. Custom wooden beds with hydraulic
                  storage, wall-mounted foldable dining tables, and
                  corner-filling wardrobe units are particularly popular here.
                  These aren't products you find in showrooms; they exist only
                  through custom order.
                </p>

                <H3>Growth of Local Furniture Businesses</H3>
                <p className="body-p">
                  Mansarovar's commercial strips have seen a noticeable increase
                  in furniture showrooms and carpenter workshops since 2023.
                  What began as a few small outlets has grown into a modest
                  furniture district, with makers offering everything from free
                  home visits and 3D renders to EMI-based payment plans — making
                  custom furniture accessible to a broader income bracket.
                </p>
              </FadeUp>
            </Section>

            {/* ── 4. Infrastructure ── */}
            <Section id="infrastructure" className="mt-16">
              <FadeUp>
                <Label>04</Label>
                <H2>
                  Infrastructure Growth Is Supporting Furniture Businesses
                </H2>

                <H3>Better Connectivity Across Jaipur</H3>
                <p className="body-p">
                  Jaipur's expanding metro network, Ring Road improvements, and
                  new flyover projects are reducing travel times across the
                  city. For furniture businesses, this means carpenters can more
                  easily conduct home visits across multiple localities,
                  delivery logistics are faster, and clients are more willing to
                  travel to workshops for material selection consultations.
                </p>

                <H3>Rising Property Investment Drives Interior Spending</H3>
                <p className="body-p">
                  New areas like Jagatpura, Pratap Nagar, and the Ajmer Road
                  corridor are seeing sustained property investment. When
                  families purchase a home in these growth zones — often at
                  prices of ₹60–90 lakh — they routinely allocate 8–12% of the
                  property value to interior furnishing. At these budgets,
                  custom wooden furniture is not just viable; it is the
                  preferred choice.
                </p>

                <H3>Commercial Expansion Creating New Buyers</H3>
                <p className="body-p">
                  Jaipur's growth as a commercial hub — with expanding IT parks,
                  retail complexes, and hospitality venues — is creating a new
                  class of professionals relocating to the city. These buyers,
                  often 28–40 years old and design-aware, arrive with strong
                  interior preferences and healthy budgets. They represent the
                  fastest-growing segment for custom furniture businesses in the
                  city.
                </p>
              </FadeUp>
            </Section>

            {/* ── 5. Trends 2026 ── */}
            <Section id="trends-2026" className="mt-16">
              <FadeUp>
                <Label>05</Label>
                <H2>Custom Furniture Trends Shaping Jaipur Homes in 2026</H2>

                <img
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=80"
                  alt="Indian craftsman working on wooden furniture"
                  className="article-img"
                  loading="lazy"
                />

                <H3>Modular Furniture Built for Indian Life</H3>
                <p className="body-p">
                  The modular furniture trend has arrived in Jaipur — but
                  filtered through the lens of Indian domestic life. Jaipur
                  carpenters are building modular wardrobes with a dedicated
                  pooja shelf, modular kitchen units with space for a heavy
                  chakki, and modular entertainment walls that accommodate both
                  the television and a framed family portrait above it. This is
                  Indian modularity — and it cannot come from a flat-pack box.
                </p>

                <H3>Traditional Craftsmanship Revival</H3>
                <p className="body-p">
                  Jaipur's heritage of wood carving and inlay work is finding
                  new expression in contemporary interiors. Homeowners are
                  requesting geometric jali patterns on cabinet doors,
                  hand-carved floral motifs on bedheads, and traditional bracket
                  details on wall shelves — paired with clean, minimal
                  surrounding design. This fusion has become a signature Jaipur
                  aesthetic for 2026.
                </p>

                <H3>Complete Furnishing Services from a Single Workshop</H3>
                <p className="body-p">
                  The most successful Jaipur furniture workshops in 2026 are not
                  just making single pieces — they are offering end-to-end
                  furnishing services. From initial site measurement and 3D
                  visualisation to wood sourcing, production, delivery, and
                  installation, clients want a single trusted partner for their
                  entire home. This full-service model is now the competitive
                  standard for premium local workshops.
                </p>
              </FadeUp>
            </Section>

            {/* D) Stats Section */}
            <FadeUp className="mt-16">
              <div className="bg-[#2a1a0a] rounded-2xl overflow-hidden">
                <div className="px-8 pt-8 pb-4">
                  <p className="text-[10px] tracking-[0.22em] text-amber-500 uppercase font-sans mb-1">
                    By the Numbers
                  </p>
                  <h3
                    className="text-white text-xl font-semibold"
                    style={{ fontFamily: "Crimson Pro, Georgia, serif" }}
                  >
                    Custom Furniture in Jaipur — 2026 Snapshot
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {STATS.map((s) => (
                    <div key={s.value} className="px-8 py-7">
                      <p
                        className="text-4xl font-bold text-amber-400"
                        style={{ fontFamily: "Crimson Pro, Georgia, serif" }}
                      >
                        {s.value}
                      </p>
                      <p className="mt-2 text-white/60 text-sm font-sans leading-relaxed">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* E) Conclusion */}
            <Section id="conclusion" className="mt-16">
              <FadeUp>
                <Label>Conclusion</Label>
                <H2>Jaipur's Furniture Story Is Being Written Locally</H2>
                <p className="body-p">
                  The areas driving Jaipur's custom furniture demand — Vaishali
                  Nagar, Mansarovar, Jagatpura, Pratap Nagar, and the Ring Road
                  corridor — share a common thread: ambitious homeowners who
                  want homes that reflect their tastes precisely, built by
                  craftsmen who understand the city's climate, culture, and
                  spatial realities.
                </p>
                <p className="body-p mt-4">
                  For furniture businesses and carpenters operating in Jaipur,
                  the opportunity is enormous. For homeowners, the message is
                  clear: the best furniture for your Jaipur home will not come
                  off a showroom floor. It will be built for you, by someone who
                  measures your walls, understands your family, and signs their
                  work in grain and joinery.
                </p>
              </FadeUp>

              {/* CTA block */}
              <FadeUp delay={0.12} className="mt-10">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-7">
                  <h3
                    className="text-lg font-semibold text-[#2a1a0a] mb-2"
                    style={{ fontFamily: "Crimson Pro, Georgia, serif" }}
                  >
                    Looking for custom furniture in Jaipur?
                  </h3>
                  <p className="text-[#6a5040] text-sm font-sans mb-5 leading-relaxed">
                    Our craftsmen serve Vaishali Nagar, Mansarovar, Jagatpura,
                    and all major Jaipur localities. Free home visit and 3D
                    design included.
                  </p>
                  <a
                    href="https://wa.me/919782545485"
                    className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm font-sans tracking-wide px-6 py-3 rounded transition-colors duration-200"
                  >
                    Book a Free Consultation →
                  </a>
                </div>
              </FadeUp>
            </Section>
          </div>
          {/* end article */}
        </div>
        {/* end body grid */}

        <div className="bg-[#f0ebe2] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <p className="text-[10px] tracking-[0.22em] text-amber-700 uppercase font-sans mb-2">
                Keep Reading
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold text-[#2a1a0a] mb-10"
                style={{ fontFamily: "Crimson Pro, Georgia, serif" }}
              >
                Related Articles
              </h2>
            </FadeUp>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-[#2a1a0a] py-10 px-6 text-center">
          <p
            className="text-white/80 text-base font-semibold mb-1"
            style={{ fontFamily: "Crimson Pro, Georgia, serif" }}
          >
            Jaipur Wood Craft
          </p>
          <p className="text-white/40 text-sm font-sans">
            © 2026 · Handcrafted furniture made with love in Rajasthan
          </p>
        </footer>
      </div>
      <Footer />

      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500&display=swap');

        body { font-family: 'Outfit', sans-serif; }

        .body-p {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          line-height: 1.9;
          color: #5a4535;
        }

        .article-img {
          width: 100%;
          border-radius: 0.75rem;
          object-fit: cover;
          height: 17rem;
          margin-top: 1.75rem;
          margin-bottom: 1.75rem;
          transition: transform 0.5s ease;
        }
        .article-img:hover { transform: scale(1.012); }
      `}</style>
    </>
  );
}

/* ── Sub-components ── */
function Label({ children }) {
  return (
    <p className="text-[10px] tracking-[0.24em] text-amber-700 uppercase font-sans mb-2">
      {children}
    </p>
  );
}
function H2({ children }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-bold text-[#2a1a0a] leading-snug mb-4"
      style={{
        fontFamily: "Crimson Pro, Georgia, serif",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}
function H3({ children }) {
  return (
    <h3
      className="text-lg font-semibold text-[#3d2a14] mt-7 mb-2"
      style={{ fontFamily: "Crimson Pro, Georgia, serif" }}
    >
      {children}
    </h3>
  );
}
