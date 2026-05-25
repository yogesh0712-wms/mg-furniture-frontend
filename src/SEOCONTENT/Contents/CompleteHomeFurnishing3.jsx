import { useEffect, useRef } from "react";
import Header, { Footer } from "../../Header";

import { motion, useInView } from "framer-motion";

// ─── Design Tokens ───────────────────────────────────────────────────────────
// Warm Indian-modern palette: off-white, sandalwood, walnut brown, charcoal
const palette = {
  offWhite: "#F9F5F0",
  sand: "#EDE4D7",
  walnut: "#8B5E3C",
  warmBrown: "#6B4226",
  honey: "#C98B44",
  charcoal: "#2C2420",
  muted: "#7A6A5F",
  accent: "#D4A96A",
};

// ─── Utility: Fade-up animation variant ──────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// ─── Hook: trigger animation when element enters view ────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return [ref, inView];
}

// ─── Image Placeholder ───────────────────────────────────────────────────────
function ImgPlaceholder({ label, aspect = "aspect-[4/3]", className = "" }) {
  return (
    <div
      className={`${aspect} ${className} rounded-2xl overflow-hidden flex items-end`}
      style={{
        background:
          "linear-gradient(135deg,#C9A87C 0%,#8B5E3C 60%,#4A2E1A 100%)",
      }}
    >
      <span
        className="w-full text-center text-xs py-2 px-3"
        style={{
          background: "rgba(0,0,0,0.35)",
          color: "#F9F5F0",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Space-Saving Cards Data ──────────────────────────────────────────────────
const spaceSavingItems = [
  {
    icon: "🛏️",
    title: "Storage Beds",
    desc: "Hydraulic lift beds with deep under-mattress storage — the most underused space in any bedroom, finally put to work.",
  },
  {
    icon: "🚪",
    title: "Compact Wardrobes",
    desc: "Custom widths that fit walls others call 'too narrow'. Every centimetre becomes organised closet space.",
  },
  {
    icon: "📐",
    title: "Corner Furniture",
    desc: "L-shaped desks, corner cabinets, nook shelving — dead corners become the most useful spots in the room.",
  },
  {
    icon: "🔄",
    title: "Multifunction Pieces",
    desc: "A study unit that folds into a guest bed. A bench that opens for shoes. Furniture that does double duty.",
  },
  {
    icon: "📦",
    title: "Modular Shelving",
    desc: "Add, remove, or reconfigure shelves as your family's needs change. Built once, adapted forever.",
  },
  {
    icon: "🪑",
    title: "Wall-Mounted Units",
    desc: "Floating TV panels, wall-hung bedside tables, and suspended shelves keep floors clear and rooms feeling larger.",
  },
];

// ─── Wardrobe Features ───────────────────────────────────────────────────────
const wardrobeFeatures = [
  {
    label: "Sliding Door Wardrobes",
    detail:
      "No swing clearance needed — ideal for bedrooms where every inch counts.",
  },
  {
    label: "Floor-to-Ceiling Designs",
    detail: "Maximise vertical space with storage that reaches the ceiling.",
  },
  {
    label: "Hidden Compartments",
    detail:
      "Jewellery drawers, document trays, and pull-out organisers tucked inside.",
  },
  {
    label: "Modular Interior Layouts",
    detail:
      "Choose the exact mix of hanging, folding, and shelf space for your wardrobe.",
  },
];

// ─── TV Unit Features ────────────────────────────────────────────────────────
const tvFeatures = [
  {
    icon: "📺",
    title: "Floating TV Panels",
    desc: "Wall-mounted units with a clean shadow gap create a gallery-wall effect in the living room.",
  },
  {
    icon: "🔌",
    title: "Hidden Cable Management",
    desc: "Routed channels behind panels keep cords completely out of sight for a clutter-free look.",
  },
  {
    icon: "🪵",
    title: "Warm Wood Panelling",
    desc: "Walnut, teak, or matte-finish veneers that age beautifully and complement any paint colour.",
  },
  {
    icon: "📚",
    title: "Integrated Shelving",
    desc: "Open shelves flanking the TV unit hold books, décor, and plants without looking busy.",
  },
];

// ─── SECTION 1: Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg,#2C1A0E 0%,#4A2E1A 40%,#6B4226 100%)",
      }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
        }}
      />
      {/* Decorative circle */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: palette.honey }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-sm font-medium uppercase tracking-widest mb-5"
            style={{
              color: palette.accent,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Custom Wooden Interiors · Jaipur
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{
              color: "#F9F5F0",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.1,
            }}
          >
            Modern Home Furnishing Ideas for Jaipur Homes
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-lg leading-relaxed mb-10"
            style={{
              color: "rgba(249,245,240,0.72)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Furniture should do more than fill a room. In modern Jaipur homes,
            every piece should create comfort, save space, and make daily living
            feel easier and more organised.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.mgfurniture.in/contracting/home-living-design"
              className="inline-block px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200"
              style={{
                background: palette.honey,
                color: palette.charcoal,
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.background = palette.accent)}
              onMouseLeave={(e) => (e.target.style.background = palette.honey)}
            >
              Explore Furnishing Ideas
            </a>
            <a
              href="https://wa.me/919782545485"
              className="inline-block px-7 py-3.5 rounded-full font-medium text-sm border transition-all duration-200"
              style={{
                borderColor: "rgba(249,245,240,0.4)",
                color: "#F9F5F0",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#F9F5F0")}
              onMouseLeave={(e) =>
                (e.target.style.borderColor = "rgba(249,245,240,0.4)")
              }
            >
              Book Design Consultation
            </a>
          </motion.div>
        </div>
        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
            style={{
              background: "linear-gradient(145deg,#C9A87C,#6B4226,#2C1A0E)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div
                className="w-16 h-16 rounded-full mb-4 opacity-60"
                style={{ background: palette.honey }}
              />
              <p
                className="text-sm opacity-60"
                style={{
                  color: "#F9F5F0",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Modern Jaipur apartment interior —<br />
                warm tones, wooden accents, natural light
              </p>
            </div>
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-5 -left-5 px-5 py-3.5 rounded-2xl shadow-lg"
            style={{ background: "#F9F5F0" }}
          >
            <p
              className="text-xs font-medium"
              style={{
                color: palette.muted,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Handcrafted in Jaipur
            </p>
            <p
              className="text-lg font-bold"
              style={{
                color: palette.charcoal,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              200+ Happy Homes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION 2: Intro ─────────────────────────────────────────────────────────
function IntroSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="ideas"
      ref={ref}
      className="py-24 px-6"
      style={{ background: palette.offWhite }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-sm font-medium uppercase tracking-widest mb-4"
          style={{ color: palette.walnut, fontFamily: "'DM Sans', sans-serif" }}
        >
          The Real Challenge
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.12}
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{
            color: palette.charcoal,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.15,
          }}
        >
          Modern Jaipur Homes Need Smarter Furniture
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.24}
          className="space-y-5 text-left"
        >
          {[
            "Most apartments in Jaipur today — whether in Mansarovar, Vaishali Nagar, or Jagatpura — are thoughtfully designed but come with one persistent challenge: the furniture that fills them wasn't made for them.",
            "You buy a wardrobe from a showroom. It's too wide by three inches. The bed frame doesn't allow the door to fully open. The TV unit sits awkwardly in a corner it was never meant for. The room feels smaller, heavier, and cluttered — even before you've really moved in.",
            "This isn't a taste problem. It's a measurement problem. Ready-made furniture is built for generic rooms. But your home isn't generic — it has its own corners, its own light, its own rhythm of daily life.",
            "What Jaipur families need is furniture that was imagined and built specifically for their space: a storage bed that uses the exact depth under the frame, a wardrobe that reaches the ceiling without leaving a dust-gathering gap, a TV unit that fits the wall and hides every wire.",
          ].map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.24 + i * 0.1}
              className="text-base leading-relaxed"
              style={{
                color: palette.muted,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION 3: Space Saving ─────────────────────────────────────────────────
function SpaceSavingSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="space-saving"
      ref={ref}
      className="py-24 px-6"
      style={{ background: palette.sand }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{
              color: palette.walnut,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Smart Solutions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: palette.charcoal,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Space-Saving Furniture for
            <br />
            Compact Jaipur Apartments
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaceSavingItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1 + i * 0.08}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 48px rgba(107,66,38,0.14)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-7 rounded-2xl cursor-default"
              style={{ background: palette.offWhite }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: palette.charcoal,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: palette.muted,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4: Modern Wooden Finishes ───────────────────────────────────────
function WoodFinishesSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="finishes"
      ref={ref}
      className="py-24 px-6"
      style={{ background: palette.offWhite }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="order-2 md:order-1"
        >
          <ImgPlaceholder
            label="Close-up of handcrafted walnut-finish wooden cabinet — Indian woodwork, warm grain texture"
            aspect="aspect-[3/4]"
          />
        </motion.div>
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.15}
          className="order-1 md:order-2"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{
              color: palette.walnut,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Materials & Finishes
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: palette.charcoal,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Modern Wooden Finishes That Feel Warm & Timeless
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Walnut & Teak Veneers",
                detail:
                  "Deep grain patterns that bring natural warmth to every wall they touch.",
              },
              {
                label: "Matte Lacquer Textures",
                detail:
                  "Smooth, fingerprint-resistant surfaces that stay beautiful after years of daily use.",
              },
              {
                label: "Minimalist Detailing",
                detail:
                  "No ornate carvings — just clean lines, shadow gaps, and hardware that disappears.",
              },
              {
                label: "Local Craftsmanship",
                detail:
                  "Made by Jaipur craftsmen who understand both the material and the climate it lives in.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.25 + i * 0.08}
                className="flex gap-4 items-start"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: palette.walnut }}
                />
                <div>
                  <p
                    className="font-semibold text-base mb-0.5"
                    style={{
                      color: palette.charcoal,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: palette.muted,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION 5: Wardrobes ────────────────────────────────────────────────────
function WardrobeSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="wardrobes"
      ref={ref}
      className="py-24 px-6"
      style={{ background: palette.sand }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{
              color: palette.walnut,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Wardrobes
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: palette.charcoal,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Minimalist Wardrobes Designed Around Real Life
          </h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{
              color: palette.muted,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            A wardrobe is where every morning begins. When it's disorganised or
            poorly sized, that chaos sets the tone for the whole day. When it's
            calm, considered, and built exactly for your belongings — everything
            changes.
          </p>
          <div className="space-y-4">
            {wardrobeFeatures.map((feat, i) => (
              <motion.div
                key={feat.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.15 + i * 0.1}
                className="p-5 rounded-xl"
                style={{ background: palette.offWhite }}
              >
                <p
                  className="font-semibold mb-1"
                  style={{
                    color: palette.charcoal,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {feat.label}
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: palette.muted,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {feat.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
        >
          <ImgPlaceholder
            label="Floor-to-ceiling sliding wardrobe in a modern Jaipur bedroom — matte finish, warm wood interior"
            aspect="aspect-[3/4]"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION 6: TV Units ─────────────────────────────────────────────────────
function TVUnitSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="tv-units"
      ref={ref}
      className="py-24 px-6"
      style={{ background: palette.offWhite }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{
              color: palette.walnut,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Living Room
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: palette.charcoal,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Modern Modular TV Units
            <br />
            for Jaipur Living Rooms
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.15}
          >
            <ImgPlaceholder
              label="Floating walnut TV unit with wooden wall panelling in a bright Indian living room — clean, minimal, warm"
              aspect="aspect-video"
              className="w-full"
            />
          </motion.div>
          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tvFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.2 + i * 0.08}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl"
                style={{ background: palette.sand }}
              >
                <div className="text-2xl mb-3">{feat.icon}</div>
                <h3
                  className="font-semibold mb-1.5"
                  style={{
                    color: palette.charcoal,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: palette.muted,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7: Craftsmanship ────────────────────────────────────────────────
function CraftsmanshipSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="craftsmanship"
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg,#2C1A0E 0%,#4A2E1A 100%)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-sm font-medium uppercase tracking-widest mb-4"
          style={{ color: palette.honey, fontFamily: "'DM Sans', sans-serif" }}
        >
          Our Promise
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{
            color: "#F9F5F0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.15,
          }}
        >
          Furniture Built Around Real Homes
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
          className="text-lg leading-relaxed mb-16 max-w-2xl mx-auto"
          style={{
            color: "rgba(249,245,240,0.7)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Every piece starts with a site visit, not a catalogue. We measure your
          room, understand how your family moves through it, and then design
          furniture that makes sense for that specific space.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: "Site Visit", sub: "before every design" },
            { stat: "±2mm", sub: "measurement accuracy" },
            { stat: "ISI Grade", sub: "materials only" },
            { stat: "5 Year", sub: "structural warranty" },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.25 + i * 0.08}
              className="p-6 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(212,169,106,0.2)",
              }}
            >
              <p
                className="text-2xl font-bold mb-1"
                style={{
                  color: palette.honey,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.stat}
              </p>
              <p
                className="text-xs"
                style={{
                  color: "rgba(249,245,240,0.55)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 8: Transformation ───────────────────────────────────────────────
function TransformationSection() {
  const [ref, inView] = useReveal();
  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{ background: palette.sand }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          <ImgPlaceholder
            label="Indian family relaxing in a beautifully organised living room — calm wooden interiors, natural light, Jaipur home"
            aspect="aspect-square"
          />
        </motion.div>
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.15}
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{
              color: palette.walnut,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            The Difference
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: palette.charcoal,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.15,
            }}
          >
            Furniture That Makes Everyday Living Easier
          </h2>
          <div className="space-y-5">
            {[
              "When furniture fits perfectly, the whole home feels calmer. You stop working around things. You stop looking for places to put things. Everything has a home.",
              "Children study at desks that were built for them. Clothes are actually hung because there's room to hang them. The living room feels like a place to rest, not a space to navigate.",
              "That's what furniture can do when it's designed for your home instead of for a showroom floor. It doesn't just fill space — it quietly improves how you live in it.",
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.2 + i * 0.1}
                className="text-base leading-relaxed"
                style={{
                  color: palette.muted,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SECTION 9: CTA Banner ───────────────────────────────────────────────────
function CTASection() {
  const [ref, inView] = useReveal();
  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6"
      style={{ background: palette.offWhite }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="max-w-3xl mx-auto text-center rounded-3xl px-10 py-16"
        style={{
          background: "linear-gradient(135deg,#4A2E1A 0%,#8B5E3C 100%)",
        }}
      >
        <p
          className="text-sm font-medium uppercase tracking-widest mb-4"
          style={{ color: palette.honey, fontFamily: "'DM Sans', sans-serif" }}
        >
          Get Started
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-5"
          style={{
            color: "#F9F5F0",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.2,
          }}
        >
          Design Furniture Around Your Home,
          <br />
          Not the Other Way Around
        </h2>
        <p
          className="text-base mb-10 opacity-70"
          style={{ color: "#F9F5F0", fontFamily: "'DM Sans', sans-serif" }}
        >
          Share your space, your needs, and your vision. We'll come to you with
          ideas, measurements, and a clear plan.
        </p>
        <motion.a
          href="https://wa.me/919782545485"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 rounded-full font-semibold text-base"
          style={{
            background: palette.honey,
            color: palette.charcoal,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Book a Free Consultation
        </motion.a>
        <p
          className="mt-5 text-xs opacity-50"
          style={{ color: "#F9F5F0", fontFamily: "'DM Sans', sans-serif" }}
        >
          No obligation · Home visit included · Jaipur only
        </p>
      </motion.div>
    </section>
  );
}

// ─── SECTION 10: Footer ──────────────────────────────────────────────────────

// ─── ROOT PAGE COMPONENT ─────────────────────────────────────────────────────
export default function FurnitureLandingPage() {
  // Google Fonts loaded via @import style tag
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {/* SEO Meta Tags (rendered to document head in a real Next.js app) */}
      {/* 
        <title>Modern Home Furnishing Ideas for Jaipur Homes | Smart Wooden Interiors</title>
        <meta name="description" content="Discover modern home furnishing ideas for Jaipur homes with space-saving furniture, minimalist wardrobes, modular TV units, and custom wooden interiors designed for compact apartments and modern family living." />
        <link rel="canonical" href="https://woodkraftjaipur.com/modern-home-furnishing-jaipur" />
      */}
      <div style={{ background: palette.offWhite }}>
        <Header />

        <HeroSection />
        <IntroSection />
        <SpaceSavingSection />
        <WoodFinishesSection />
        <WardrobeSection />
        <TVUnitSection />
        <CraftsmanshipSection />
        <TransformationSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
