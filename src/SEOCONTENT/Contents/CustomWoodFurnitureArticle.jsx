import { motion, useScroll, useSpring } from "framer-motion";
import Header, { Footer } from "../../Header";

// ─── Fade-up animation wrapper ───────────────────────────────────────────────
const FadeUp = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

// ─── Estimated reading time ───────────────────────────────────────────────────
const WORD_COUNT = 980;
const READ_TIME = Math.ceil(WORD_COUNT / 200);

// ─── Related articles ─────────────────────────────────────────────────────────

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CustomWoodFurnitureArticle() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* ── Helmet-equivalent meta (inline for portability) ── */}
      {/* In a real Next.js/Remix project, replace with <Head> or <Helmet> */}
      <Header />
      {/* ── Sticky Scroll Progress Bar ── */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-amber-700 z-50 origin-left"
      />

      <div className="bg-[#faf8f5] text-[#2c2c2c] font-serif min-h-screen">
        {/* ════════════════════════════════════════════════
            A) HERO SECTION
        ════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-end overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=85"
              alt="Indian wooden interior Jaipur home"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/85 via-[#1a1008]/40 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 pt-40">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-amber-700 text-white text-xs tracking-[0.18em] uppercase font-sans px-3 py-1 rounded-sm mb-6"
            >
              Furniture Trends 2026
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.01em",
              }}
            >
              Why Custom Wood Furniture is Trending in Jaipur Homes in 2026
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-sans font-light"
            >
              From Rajasthan's centuries-old craft workshops to sleek modern
              apartments, handcrafted wooden furniture is reshaping how Jaipur
              families furnish their spaces — one bespoke piece at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-5 mt-8 text-white/60 text-sm font-sans"
            >
              <span>June 10, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{READ_TIME} min read</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>By Editorial Team</span>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            B) QUICK INTRO SECTION
        ════════════════════════════════════════════════ */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <FadeUp>
            <p
              className="text-xl md:text-2xl text-[#3d3530] leading-relaxed border-l-4 border-amber-700 pl-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              In 2026, Jaipur homeowners are increasingly turning away from
              mass-produced, flat-pack furniture toward something more
              meaningful — custom-built wooden pieces crafted by local artisans,
              tailored to their exact space, taste, and story.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-[#5a5048] leading-8 font-sans text-base">
              This shift isn't just aesthetic. It's practical, cultural, and
              deeply personal. As apartments grow smaller and design aspirations
              grow larger, custom wood furniture offers what showroom shelves
              cannot: a perfect fit, a personal touch, and a piece built to last
              generations. Here's why this trend is accelerating across Jaipur's
              homes in 2026.
            </p>
          </FadeUp>
        </section>

        {/* ════════════════════════════════════════════════
            C) MAIN ARTICLE CONTENT
        ════════════════════════════════════════════════ */}
        <article className="max-w-3xl mx-auto px-6 pb-20 space-y-20">
          {/* ── Section 1: Growing Demand ── */}
          <FadeUp>
            <div>
              <SectionLabel>01 — Growing Demand</SectionLabel>
              <h2 className="article-h2">
                Growing Demand for Custom Wood Furniture in Jaipur
              </h2>

              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Modern Indian apartment interior with wooden furniture"
                className="w-full rounded-lg my-8 object-cover h-72 md:h-96 hover:scale-[1.015] transition-transform duration-500"
                loading="lazy"
              />

              <h3 className="article-h3">
                Personalised Interiors Are the New Status Symbol
              </h3>
              <p className="article-p">
                Jaipur's growing upper-middle class isn't content with
                cookie-cutter furniture anymore. Homeowners want their living
                rooms to reflect their identity — their family's history, their
                color preferences, the exact dimensions of their walls. A custom
                wooden dining table or a carved bookshelf becomes a statement
                piece that no showroom can replicate.
              </p>

              <h3 className="article-h3">Solid Wood Beats Engineered Wood</h3>
              <p className="article-p">
                After years of settling for MDF and particle board that warps in
                Rajasthan's dry climate, homeowners are waking up to the
                durability of solid Sheesham, Mango, and Teak wood. Custom
                furniture workshops in Jaipur let buyers choose their wood
                grade, finish, and hardware — ensuring pieces that survive
                decades, not years.
              </p>

              <h3 className="article-h3">The Home Renovation Boom Post-2023</h3>
              <p className="article-p">
                Jaipur's real estate sector saw a significant uptick in
                apartment purchases between 2023–2025. New homeowners, unwilling
                to rehash old furniture into new layouts, commissioned
                made-to-order wooden wardrobes, modular kitchens, and
                entertainment units — fuelling a wave of demand for skilled
                local carpenters and furniture makers.
              </p>
            </div>
          </FadeUp>

          {/* ── Section 2: Interior Design Trends ── */}
          <FadeUp>
            <div>
              <SectionLabel>02 — Design Trends</SectionLabel>
              <h2 className="article-h2">
                Interior Design Trends Driving Wooden Furniture Demand
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
                  alt="Rajasthani wooden interior with carved panels"
                  className="w-full rounded-lg object-cover h-56 hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                  alt="Indian living room with warm wooden accents"
                  className="w-full rounded-lg object-cover h-56 hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <h3 className="article-h3">Minimal + Traditional Fusion</h3>
              <p className="article-p">
                Jaipur's design-forward homeowners are blending Rajasthani craft
                heritage with contemporary minimalism. Think clean lines with
                subtle jali carvings, or a sleek wooden bed frame with a
                hand-carved headboard. Custom craftsmen are the only ones who
                can bridge these two worlds with precision.
              </p>

              <h3 className="article-h3">The Natural Materials Movement</h3>
              <p className="article-p">
                As wellness culture grows, so does the desire for natural
                materials in the home. Wood, jute, clay, and stone are replacing
                synthetic laminates and glossy lacquers. Custom wooden furniture
                — unsealed or finished with natural oils — adds warmth and
                texture that no laminate sheet can match.
              </p>

              <h3 className="article-h3">Modular Furniture for Indian Homes</h3>
              <p className="article-p">
                Unlike western modularity that ignores Indian wall proportions
                and lifestyle, local craftsmen understand the Indian way of
                living — a pooja corner inside a wardrobe, a cot with drawer
                storage underneath, or a dining table that folds into the wall.
                Modular wooden furniture, made locally and made to measure, is
                this decade's defining interior trend.
              </p>
            </div>
          </FadeUp>

          {/* ── Section 3: Small Space Optimization ── */}
          <FadeUp>
            <div>
              <SectionLabel>03 — Space Optimisation</SectionLabel>
              <h2 className="article-h2">
                Small Space Optimisation Is Changing Furniture Choices
              </h2>

              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
                alt="Custom wooden storage solutions in compact Indian apartment"
                className="w-full rounded-lg my-8 object-cover h-72 hover:scale-[1.015] transition-transform duration-500"
                loading="lazy"
              />

              <h3 className="article-h3">Compact Apartment Solutions</h3>
              <p className="article-p">
                New Jaipur apartments in Vaishali Nagar, Jagatpura, and
                Mansarovar often range from 850 to 1,400 sq ft. Every inch
                matters. Custom furniture makers offer floor-to-ceiling
                wardrobes, under-staircase cabinets, and wall-mounted desks that
                maximise every centimetre — something impossible with standard
                showroom sizes.
              </p>

              <h3 className="article-h3">Smart Storage Furniture</h3>
              <p className="article-p">
                Ottomans with hidden storage, beds with hydraulic lift systems,
                TV units with concealed cable management — custom wooden
                furniture workshops in Jaipur now build intelligent pieces that
                solve real storage problems, all crafted from solid wood that
                lasts.
              </p>

              <h3 className="article-h3">Work-from-Home Setups</h3>
              <p className="article-p">
                The hybrid work culture has created strong demand for home
                offices. Jaipur residents are commissioning custom wooden study
                tables, ergonomic wooden shelving, and acoustic wooden panels
                for their home offices — pieces that feel premium, functional,
                and deeply personal.
              </p>
            </div>
          </FadeUp>

          {/* ── Section 4: Rise of Local Craftsmen ── */}
          <FadeUp>
            <div>
              <SectionLabel>04 — Local Craft Revival</SectionLabel>
              <h2 className="article-h2">
                Rise of Local Craftsmen and Jaipur Furniture Workshops
              </h2>

              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=80"
                alt="Indian carpenter craftsman working on custom wooden furniture"
                className="w-full rounded-lg my-8 object-cover h-72 hover:scale-[1.015] transition-transform duration-500"
                loading="lazy"
              />

              <h3 className="article-h3">Jaipur's Craftsmanship Revival</h3>
              <p className="article-p">
                Jaipur has always been a city of craft — block printing, blue
                pottery, gem cutting. Now, its master carpenters are getting
                their moment in the spotlight. Third-generation woodworkers from
                Sanganer, Bagru, and the old city are finding new clients among
                modern homeowners who value quality and authenticity over brand
                labels.
              </p>

              <h3 className="article-h3">Local Workshop Demand Soaring</h3>
              <p className="article-p">
                Google searches for "custom wooden furniture Jaipur" and
                "carpenter near me Jaipur" have grown steadily through
                2024–2026. Instagram and WhatsApp have enabled small workshops
                to showcase their work directly to homeowners, bypassing
                expensive retail middlemen and passing savings to the buyer.
              </p>

              <h3 className="article-h3">Made-to-Order Is the New Standard</h3>
              <p className="article-p">
                The made-to-order model aligns perfectly with how Jaipur
                families think about their homes. A new wardrobe isn't just
                storage — it's an investment, often budgeted for months or
                passed down through generations. Custom furniture workshops
                honour this sentiment, offering consultations, home visits, and
                3D visualisations before a single nail is driven.
              </p>
            </div>
          </FadeUp>
        </article>

        {/* ════════════════════════════════════════════════
            D) FEATURED QUOTE SECTION
        ════════════════════════════════════════════════ */}
        <FadeUp>
          <section className="bg-[#2c1f14] text-white py-20 px-6 my-10">
            <div className="max-w-3xl mx-auto text-center">
              <svg
                className="w-10 h-10 text-amber-600 mx-auto mb-6 opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote
                className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 italic"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                "A custom wooden piece tells the story of the family it was made
                for. Every joint, every grain, every finish is a conversation
                between the craftsman and the home."
              </blockquote>
              <p className="mt-6 text-amber-400 text-sm tracking-widest uppercase font-sans">
                — Rajesh Sharma, Master Carpenter, Jaipur
              </p>
            </div>
          </section>
        </FadeUp>

        {/* ════════════════════════════════════════════════
            E) CONCLUSION SECTION
        ════════════════════════════════════════════════ */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <FadeUp>
            <SectionLabel>Conclusion</SectionLabel>
            <h2 className="article-h2">
              The Future of Furniture in Jaipur is Handcrafted
            </h2>
            <p className="article-p">
              The custom wood furniture trend in Jaipur in 2026 is not a passing
              fad — it is a return to something essential. A preference for
              quality over quantity, for local over generic, and for pieces that
              grow more beautiful with age. As Jaipur continues to grow as a
              design-forward city, its craftsmen, workshops, and discerning
              homeowners are creating a new chapter in India's furniture story.
            </p>
            <p className="article-p mt-4">
              Whether you're furnishing a new flat in Malviya Nagar or
              renovating a heritage haveli in the old city, custom wooden
              furniture offers something no catalogue ever can: a home that is
              unmistakably, beautifully yours.
            </p>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.15}>
            <div className="mt-12 bg-[#f5ede2] rounded-xl p-8 border border-amber-200/60">
              <h3
                className="text-xl font-semibold text-[#2c1f14] mb-2"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Ready to furnish your Jaipur home with custom wood?
              </h3>
              <p className="text-[#5a4a3a] text-sm font-sans mb-5">
                Explore handcrafted wooden furniture built by Jaipur's finest
                craftsmen, delivered to your doorstep.
              </p>
              <a
                href="https://wa.me/919782545485"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-sm tracking-wide font-sans px-6 py-3 rounded transition-colors duration-200"
              >
                Get a Free Consultation →
              </a>
            </div>
          </FadeUp>
        </section>

        {/* ════════════════════════════════════════════════
            F) RELATED ARTICLES SECTION
        ════════════════════════════════════════════════ */}

        {/* ════════════════════════════════════════════════
            FOOTER
        ════════════════════════════════════════════════ */}
        <footer className="bg-[#2c1f14] text-white/60 text-center py-10 px-6 font-sans text-sm">
          <p
            className="text-white/80 font-medium mb-1"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Jaipur Wood Craft
          </p>
          <p>© 2026 · Handcrafted furniture made with love in Rajasthan</p>
        </footer>
      </div>
      <Footer />

      {/* ── Global styles injected inline ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        body { font-family: 'DM Sans', sans-serif; }

        .article-h2 {
          font-family: 'Lora', serif;
          font-size: clamp(1.4rem, 3vw, 1.85rem);
          font-weight: 600;
          color: #2c1f14;
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }
        .article-h3 {
          font-family: 'Lora', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #3d2e20;
          margin-top: 1.75rem;
          margin-bottom: 0.6rem;
        }
        .article-p {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          line-height: 1.9;
          color: #5a4a3a;
        }
      `}</style>
    </>
  );
}

// ─── Small section label helper ──────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p className="text-[10px] tracking-[0.22em] text-amber-700 uppercase font-sans mb-2">
      {children}
    </p>
  );
}
