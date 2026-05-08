import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import Header, { Footer } from "../../Header";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Scroll-Triggered Section Wrapper ─────────────────────────────────────────
function FadeSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Checklist Card (hover lift) ──────────────────────────────────────────────
function CheckCard({ icon, title, items, accent = "#8B5E3C" }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(139,94,60,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-white rounded-2xl p-6 border border-[#EDE0D4] shadow-md flex flex-col gap-3"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: `${accent}18` }}
      >
        {icon}
      </div>
      <h3 className="font-bold text-[#2C1A0E] text-lg leading-snug">{title}</h3>
      <ul className="space-y-1.5 mt-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#5C4033]">
            <span className="mt-0.5 text-[#8B5E3C] flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Tip Box ──────────────────────────────────────────────────────────────────
function TipBox({ children }) {
  return (
    <div className="my-6 rounded-xl border-l-4 border-[#C49A6C] bg-[#FDF6EE] px-5 py-4 text-[#5C3D1E] text-sm leading-relaxed flex gap-3">
      <span className="text-xl">💡</span>
      <p>{children}</p>
    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-8">
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C49A6C] mb-2">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C1A0E] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#7A5C4A] text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Main Page Component ───────────────────────────────────────────────────────
export default function CustomFurnitureCheckList() {
  // Reading progress bar state
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(
        docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0,
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Checklist Data ─────────────────────────────────────────────────────────
  const checklistCards = [
    {
      icon: "🌲",
      title: "Wood Quality",
      items: [
        "Identify wood species (Sheesham, Teak, Mango)",
        "Ask for seasoned/kiln-dried wood",
        "Check for cracks, knots, or uneven grain",
      ],
    },
    {
      icon: "🎨",
      title: "Finish & Polish",
      items: [
        "Choose polish type (PU, NC, Wax)",
        "Check finish uniformity on sample",
        "Ask about scratch and water resistance",
      ],
    },
    {
      icon: "📐",
      title: "Measurements",
      items: [
        "Confirm exact dimensions in writing",
        "Account for wall clearances",
        "Verify door/staircase passage width",
      ],
    },
    {
      icon: "🛡️",
      title: "Warranty",
      items: [
        "Minimum 1-year structural warranty",
        "Clarify what is/isn't covered",
        "Get warranty terms in writing",
      ],
    },
    {
      icon: "🚚",
      title: "Delivery Timeline",
      items: [
        "Confirm production + delivery days",
        "Request milestone update schedule",
        "Add 7-10 day buffer in planning",
      ],
    },
    {
      icon: "🔧",
      title: "Installation",
      items: [
        "Confirm installation is included",
        "Ask about assembly team experience",
        "Ensure on-site damage protection",
      ],
    },
    {
      icon: "💰",
      title: "Budget",
      items: [
        "Get itemized written quote",
        "Ask what triggers extra charges",
        "Leave 10–15% contingency buffer",
      ],
    },
  ];

  // ── Final Summary Checklist ────────────────────────────────────────────────
  const summaryItems = [
    { icon: "🌲", text: "Verified wood species and drying method" },
    { icon: "🎨", text: "Selected and approved finish on a sample piece" },
    { icon: "📐", text: "Cross-checked all measurements with your floor plan" },
    { icon: "🛡️", text: "Read the warranty document before signing" },
    { icon: "🚚", text: "Got a written delivery date with milestones" },
    { icon: "🔧", text: "Confirmed installation is part of the package" },
    { icon: "💰", text: "Received a complete itemized price breakup" },
    { icon: "📝", text: "Signed a clear contract with all details" },
    { icon: "📸", text: "Took photos of the workshop and samples" },
    { icon: "🤝", text: "Met the craftsman or production lead personally" },
  ];

  return (
    <>
      {/* ── SEO Meta Tags ──────────────────────────────────────────────────── */}
      <Helmet>
        <title>
          Custom Wood Furniture Buying Checklist Before Ordering in Jaipur
        </title>
        <meta
          name="description"
          content="Planning to order custom wood furniture in Jaipur? Use this practical checklist to check wood quality, finish, measurements, warranty, delivery timeline, installation, and budget before you buy."
        />
        <meta
          property="og:title"
          content="Custom Wood Furniture Buying Checklist Before Ordering in Jaipur"
        />
        <meta
          property="og:description"
          content="A complete buyer's guide for ordering custom wooden furniture in Jaipur — from wood quality to final delivery."
        />
        {/* Replace with your actual OG image */}
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
        />
        <meta property="og:type" content="article" />
        <link
          rel="canonical"
          href="https://yourwebsite.com/blogs/custom-wood-furniture-buying-checklist-jaipur"
        />
      </Helmet>
      <Header />

      {/* ── Reading Progress Bar ────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 z-50 w-full h-1 bg-[#EDE0D4]">
        <div
          className="h-full bg-gradient-to-r from-[#8B5E3C] to-[#C49A6C] transition-all duration-100"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-[#FAF6F1] font-sans text-[#2C1A0E]">
        {/* ================================================================== */}
        {/* SECTION 1 — HERO                                                    */}
        {/* ================================================================== */}
        <section className="relative min-h-[88vh] flex items-end pb-16 overflow-hidden">
          {/* Hero Background Image — replace with high-res Jaipur furniture workshop image */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85"
            alt="Jaipur wood furniture workshop with craftsman working on teak wood"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark warm overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A02]/90 via-[#2C1A0E]/60 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C49A6C]/25 border border-[#C49A6C]/60 text-[#F5DEB3] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49A6C] animate-pulse" />
              Jaipur Furniture Buying Guide
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
            >
              Custom Wood Furniture{" "}
              <span className="text-[#E8C89A]">Buying Checklist:</span> What to
              Check Before You Order in Jaipur
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[#D4B896] text-base md:text-xl max-w-2xl leading-relaxed mb-8"
            >
              Before you place your order for custom wooden furniture in Jaipur,
              use this practical checklist — from wood grade to warranty — so
              you never get surprised after delivery.
            </motion.p>

            {/* Author + Meta Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 text-sm text-[#C4A882]"
            ></motion.div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 2 — QUICK CHECKLIST CARDS                                   */}
        {/* ================================================================== */}
        <section className="bg-[#F5EDE3] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <FadeSection>
              <SectionHeading
                label="At a Glance"
                title="Your Pre-Order Checklist"
                subtitle="Seven things every buyer in Jaipur must check before signing on any custom furniture order."
              />
            </FadeSection>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-2"
            >
              {checklistCards.map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <CheckCard {...card} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* MAIN CONTENT AREA                                                   */}
        {/* ================================================================== */}
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-16 space-y-20">
          {/* ── WHY A CHECKLIST MATTERS ─────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="The Foundation"
                title="Why a Checklist Matters"
                subtitle="Most furniture regrets are avoidable — if only you'd asked the right questions upfront."
              />

              <p className="text-[#5C4033] leading-relaxed text-base md:text-lg mb-5">
                Jaipur is one of India's finest destinations for handcrafted
                wooden furniture. Skilled artisans, generations of woodworking
                heritage, and a competitive local market mean you can get
                stunning custom pieces at reasonable prices —{" "}
                <em>if you do your homework.</em>
              </p>
              <p className="text-[#5C4033] leading-relaxed text-base md:text-lg mb-5">
                But buyers who skip the verification stage often end up with
                furniture that warps within months, finishes that chip,
                measurements that don't fit through the door, or delivery delays
                that stretch from four weeks to four months.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3 mt-8">
                The Cost of Not Checking
              </h3>
              <ul className="space-y-2 text-[#5C4033] text-base">
                {[
                  "Furniture made from undried wood warps, cracks, and loses structural integrity within 6–12 months.",
                  "Wrong finish choices mean costly re-polishing jobs within a year.",
                  "Poor measurements lead to expensive returns, refits, or scrapped pieces.",
                  "Vague contracts leave you with no recourse when timelines slip.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-[#C49A6C] font-bold text-lg leading-none">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <TipBox>
                A five-minute conversation at the workshop — asking the right
                questions — saves you from months of regret. This checklist is
                exactly that: a script for a smarter conversation with your
                furniture maker.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── WOOD QUALITY ──────────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 1"
                title="Check the Wood Quality First"
              />

              {/* Image — replace with actual wood quality/workshop image */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1000&q=80"
                  alt="Indian craftsman inspecting sheesham wood grain in Jaipur workshop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-[#5C4033] leading-relaxed mb-5">
                Wood quality is the single most important factor in any custom
                furniture order. The species you choose, and how well it has
                been prepared, determines how long your furniture lasts.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Best Wood Species Available in Jaipur
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    name: "Sheesham (Rosewood)",
                    note: "Most popular, durable, beautiful grain — ideal for beds, wardrobes, dining tables.",
                  },
                  {
                    name: "Teak (Sagwan)",
                    note: "Premium choice, natural oils make it termite-resistant. Best for outdoor and high-use furniture.",
                  },
                  {
                    name: "Mango Wood",
                    note: "Eco-friendly and budget-friendly. Great for cabinets and side tables.",
                  },
                ].map((wood, i) => (
                  <div
                    key={i}
                    className="bg-[#FDF6EE] border border-[#EDE0D4] rounded-xl p-4"
                  >
                    <p className="font-semibold text-[#2C1A0E] text-sm mb-1">
                      {wood.name}
                    </p>
                    <p className="text-xs text-[#7A5C4A] leading-relaxed">
                      {wood.note}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Kiln-Dried vs. Air-Dried Wood
              </h3>
              <p className="text-[#5C4033] leading-relaxed mb-3">
                Always ask if the wood is <strong>kiln-dried</strong>{" "}
                (oven-dried to under 12% moisture). Furniture made from green or
                undried wood will shrink, crack, and warp as the wood dries
                after delivery — especially during Rajasthan's dry winters.
              </p>

              <ul className="space-y-2 text-[#5C4033] text-sm mb-5">
                {[
                  "Ask to see the moisture meter reading — target under 12% moisture content",
                  "Request to inspect raw wood before production begins",
                  "Look for straight grain, no visible cracks, uniform color",
                  "Avoid wood with large, loose knots in structural joints",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <TipBox>
                Ask the maker to show you a cross-section of a finished piece.
                Properly dried, seasoned wood has consistent color throughout.
                Greenish tones near the centre mean it's still raw.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── FINISH ─────────────────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 2"
                title="Never Ignore the Furniture Finish"
              />
              <p className="text-[#5C4033] leading-relaxed mb-5">
                The finish is what you see, touch, and live with every day. It
                protects the wood and defines the furniture's look — glossy vs.
                matte, natural vs. coloured, polished vs. raw. Getting this
                wrong is an expensive mistake.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Types of Finish Available
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-[#2C1A0E] text-[#F5DEB3]">
                      <th className="px-4 py-3 rounded-tl-lg font-semibold">
                        Finish Type
                      </th>
                      <th className="px-4 py-3 font-semibold">Look</th>
                      <th className="px-4 py-3 rounded-tr-lg font-semibold">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "PU (Polyurethane)",
                        "High gloss, plastic-like sheen",
                        "Modular, modern furniture",
                      ],
                      [
                        "NC (Nitrocellulose)",
                        "Semi-gloss, natural feel",
                        "Classic & transitional pieces",
                      ],
                      [
                        "Wax / Oil",
                        "Matte, raw, organic",
                        "Rustic, farmhouse, minimal",
                      ],
                      [
                        "Duco / Paint",
                        "Solid colour, premium lacquer",
                        "Accent furniture, kids' rooms",
                      ],
                    ].map(([type, look, use], i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#FDF6EE]"}
                      >
                        <td className="px-4 py-3 font-medium text-[#2C1A0E] border-b border-[#EDE0D4]">
                          {type}
                        </td>
                        <td className="px-4 py-3 text-[#5C4033] border-b border-[#EDE0D4]">
                          {look}
                        </td>
                        <td className="px-4 py-3 text-[#5C4033] border-b border-[#EDE0D4]">
                          {use}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                How to Approve a Finish
              </h3>
              <ul className="space-y-2 text-[#5C4033] text-sm mb-5">
                {[
                  "Always approve finish on a same-wood sample piece — not a photo",
                  "Check finish in both natural daylight and artificial room lighting",
                  "Run your palm across it — feel for even smoothness, no rough patches",
                  "Ask how many coats are applied and whether sanding happens between coats",
                  "Test scratch resistance gently on the sample with your fingernail",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <TipBox>
                In Jaipur's dry climate, oil-based wax finishes can dry out and
                crack faster. For long-lasting results in Rajasthan, PU or NC
                finishes with a UV-resistant topcoat hold up far better across
                seasons.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── MEASUREMENTS ──────────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 3"
                title="Double-Check All Measurements"
              />
              <p className="text-[#5C4033] leading-relaxed mb-5">
                Measurement errors are one of the top reasons custom furniture
                gets returned or requires expensive on-site modifications. A
                beautiful wardrobe that doesn't fit into your bedroom or can't
                come through your front door is a nightmare.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Measurement Checklist
              </h3>
              <ul className="space-y-2.5 text-[#5C4033] text-sm mb-6">
                {[
                  "Measure the installation space at three heights (top, middle, bottom) — walls aren't always straight",
                  "Measure the doorway width, staircase width, and any tight corridors the piece must pass through",
                  "Confirm whether stated dimensions are outer or inner measurements",
                  "Leave at least 1–2 inches clearance on all sides for ventilation and ease of use",
                  "Get the final approved dimensions in a written document with your signature",
                  "If ordering a dining table, verify chair height compatibility in advance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <TipBox>
                Share a hand-drawn floor plan sketch with your furniture maker —
                even a rough one. It helps them visualise the space and flag
                potential issues before production starts.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── WARRANTY ──────────────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 4"
                title="Understand the Warranty Clearly"
              />

              {/* Image — replace with Indian couple reviewing furniture contract with craftsman */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80"
                  alt="Indian couple reviewing furniture contract with Jaipur artisan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-[#5C4033] leading-relaxed mb-5">
                Most small workshops in Jaipur offer informal verbal assurances.
                That is not enough. A real warranty must be in writing, clearly
                stating what is covered, for how long, and how claims are
                processed.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                What Good Warranty Coverage Looks Like
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "✅",
                    title: "Structural warranty",
                    text: "Minimum 1 year against joints loosening, frame warping, or panels splitting",
                  },
                  {
                    icon: "✅",
                    title: "Finish warranty",
                    text: "6 months against peeling, blistering, or yellowing under normal use",
                  },
                  {
                    icon: "🚫",
                    title: "Not covered (usually)",
                    text: "Damage from water exposure, misuse, or scratches from normal wear",
                  },
                  {
                    icon: "📋",
                    title: "Written document",
                    text: "Always get warranty terms in a signed document — not a WhatsApp message",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#EDE0D4] rounded-xl p-4 flex gap-3"
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[#2C1A0E] text-sm mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#7A5C4A] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <TipBox>
                Ask the maker directly: "If a joint becomes loose in eight
                months, will you fix it for free, and how quickly?" Their answer
                — and their hesitation — tells you everything.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── DELIVERY TIMELINE ─────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 5"
                title="Confirm the Delivery Timeline"
              />
              <p className="text-[#5C4033] leading-relaxed mb-5">
                Custom furniture takes time — and that's fine. What's not fine
                is a vague promise of "three to four weeks" that turns into
                three months. Get clarity before you pay anything.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Typical Production Timeline in Jaipur
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    phase: "Material sourcing & drying",
                    days: "3–7 days",
                    bar: 15,
                  },
                  { phase: "Carpentry & joinery", days: "7–18 days", bar: 40 },
                  { phase: "Finishing & polishing", days: "4–7 days", bar: 70 },
                  {
                    phase: "Quality check & curing",
                    days: "2–4 days",
                    bar: 85,
                  },
                  {
                    phase: "Delivery & installation",
                    days: "1–3 days",
                    bar: 100,
                  },
                ].map((phase, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-[#EDE0D4] px-4 py-3"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-[#2C1A0E]">
                        {phase.phase}
                      </span>
                      <span className="text-xs text-[#C49A6C] font-semibold">
                        {phase.days}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#F0E6D9] rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8B5E3C] to-[#C49A6C]"
                        style={{ width: `${phase.bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 text-[#5C4033] text-sm mb-5">
                {[
                  "Ask for a written production schedule with phase-wise dates",
                  "Confirm whether the delivery date is calendar days or working days",
                  "Add 7–10 buffer days when planning your home move or renovation",
                  "Request WhatsApp photo updates at each major production milestone",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <TipBox>
                Peak season in Jaipur (October–January, wedding/festival season)
                sees major delays. If you're ordering during this period, add an
                extra two to three weeks to any quoted timeline.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── INSTALLATION ──────────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 6"
                title="Installation Should Be Included"
              />
              <p className="text-[#5C4033] leading-relaxed mb-5">
                Delivery and installation are not the same thing. Many buyers
                assume they're included together — they often aren't. Clarify
                this before you pay the advance.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Questions to Ask About Installation
              </h3>
              <ul className="space-y-2.5 text-[#5C4033] text-sm mb-6">
                {[
                  "Is on-site assembly included in the quoted price?",
                  "Will the same workshop team install, or do they outsource to third-party labourers?",
                  "How will they protect your walls and floors during assembly?",
                  "Will they take away packaging material and sawdust after installation?",
                  "Is a final inspection included — and who signs off on it?",
                  "What happens if a panel gets damaged during delivery or assembly?",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <TipBox>
                Be present during installation. It's the best time to spot
                issues — loose joints, uneven legs, misaligned doors — when the
                team is still on-site and can fix them immediately at no extra
                charge.
              </TipBox>
            </article>
          </FadeSection>

          {/* ── BUDGET ────────────────────────────────────────────────────────── */}
          <FadeSection>
            <article>
              <SectionHeading
                label="Step 7"
                title="Set a Budget Without Compromising Quality"
              />

              {/* Image — replace with beautiful Indian living room with custom wood furniture */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
                  alt="Elegant Indian living room with custom Jaipur sheesham wood furniture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="text-[#5C4033] leading-relaxed mb-5">
                Price in custom furniture is not just what the piece costs —
                it's what the piece costs you over the next 10 years. The
                cheapest quote often becomes the most expensive decision.
              </p>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Budget Checklist
              </h3>
              <ul className="space-y-2.5 text-[#5C4033] text-sm mb-6">
                {[
                  "Request a fully itemised quote: wood, labour, hardware, finish, delivery, installation",
                  "Ask what's not included in the base price (glass, mirror, upholstery, soft-close hardware)",
                  "Clarify payment schedule: avoid paying more than 40–50% as advance before production starts",
                  "Ask what triggers extra charges mid-project — design changes, material upgrades, extra visits",
                  "Keep a 10–15% contingency in your personal budget for last-minute additions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8B5E3C] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#2C1A0E] mb-3">
                Rough Price Benchmarks (Jaipur, 2025–26)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#2C1A0E] text-[#F5DEB3]">
                      <th className="px-4 py-3 text-left rounded-tl-lg font-semibold">
                        Furniture Piece
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Budget Range
                      </th>
                      <th className="px-4 py-3 text-left rounded-tr-lg font-semibold">
                        Premium Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Queen Bed (Sheesham)",
                        "₹22,000–₹35,000",
                        "₹45,000–₹80,000",
                      ],
                      [
                        "4-door Wardrobe",
                        "₹28,000–₹45,000",
                        "₹60,000–₹1,20,000",
                      ],
                      [
                        "Dining Table (6-seater)",
                        "₹18,000–₹30,000",
                        "₹45,000–₹85,000",
                      ],
                      [
                        "TV Unit / Console",
                        "₹12,000–₹22,000",
                        "₹30,000–₹60,000",
                      ],
                      [
                        "Study Table + Chair",
                        "₹8,000–₹15,000",
                        "₹20,000–₹40,000",
                      ],
                    ].map(([piece, budget, premium], i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#FDF6EE]"}
                      >
                        <td className="px-4 py-3 font-medium text-[#2C1A0E] border-b border-[#EDE0D4]">
                          {piece}
                        </td>
                        <td className="px-4 py-3 text-[#5C4033] border-b border-[#EDE0D4]">
                          {budget}
                        </td>
                        <td className="px-4 py-3 text-[#8B5E3C] font-semibold border-b border-[#EDE0D4]">
                          {premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <TipBox>
                A lower price from a lesser-known workshop is fine — only if
                they can show you finished sample pieces, a workshop you can
                visit, and a written contract. Never order from photos alone,
                regardless of how affordable the price seems.
              </TipBox>
            </article>
          </FadeSection>
        </div>

        {/* ================================================================== */}
        {/* SECTION — QUICK SAVE-WORTHY CHECKLIST                              */}
        {/* ================================================================== */}
        <section className="bg-[#2C1A0E] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-5 md:px-10">
            <FadeSection>
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C49A6C] mb-3">
                  Save This
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  Complete Pre-Order Checklist
                </h2>
                <p className="mt-3 text-[#A88B6E] max-w-xl mx-auto">
                  Screenshot this, share it, or print it. Run through every item
                  before you sign any furniture contract in Jaipur.
                </p>
              </div>
            </FadeSection>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {summaryItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-[#E8D5BC] text-sm leading-relaxed">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION — FINAL THOUGHTS                                            */}
        {/* ================================================================== */}
        <section className="bg-[#FAF6F1] py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-5 md:px-10">
            <FadeSection>
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C49A6C] mb-3">
                  Final Thoughts
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C1A0E] leading-tight">
                  Buy Smart. Live Beautiful.
                </h2>
              </div>
            </FadeSection>

            <FadeSection>
              <div className="space-y-5 text-[#5C4033] text-base md:text-lg leading-relaxed">
                <p>
                  Jaipur's furniture market is extraordinary. Nowhere else in
                  India can you get the same combination of traditional
                  craftsmanship, design variety, and value. But like any market,
                  it rewards prepared buyers — and punishes those who rush.
                </p>
                <p>
                  The best custom furniture isn't the most expensive or the most
                  Instagram-worthy. It's the piece that fits your space, suits
                  your lifestyle, lasts a decade, and came with no surprises
                  after delivery. That's only possible when you ask the right
                  questions before the order — not after.
                </p>
                <p>
                  Use this checklist every single time. Share it with a friend
                  who's about to order furniture. It takes ten minutes to go
                  through, and it can save you tens of thousands of rupees — and
                  months of frustration.
                </p>
              </div>
            </FadeSection>

            {/* Final CTA card */}
            <FadeSection className="mt-12">
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-gradient-to-br from-[#8B5E3C] to-[#5C3D1E] rounded-2xl p-8 md:p-10 text-center shadow-2xl"
              >
                {/* Replace with an actual interior/room image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-5 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80"
                    alt="Beautiful custom wood furniture in a warm Indian home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Ready to Order Custom Furniture in Jaipur?
                </h3>
                <p className="text-[#D4B896] mb-6 max-w-md mx-auto text-sm">
                  You now have everything you need to walk into any furniture
                  maker in Jaipur with confidence. Take this checklist. Ask
                  these questions. Make the right call.
                </p>
                {/* Replace with your actual CTA link */}
                <a
                  href="/custom-wood-furniture"
                  className="inline-block bg-white text-[#5C3D1E] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#F5DEB3] transition-colors shadow-lg"
                >
                  Explore Our Custom Furniture Range →
                </a>
                <a
                  href="/contact"
                  className="inline-block mt-5 bg-white text-[#5C3D1E] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#F5DEB3] transition-colors shadow-lg"
                >
                  WhatsApp Us to Order your Wood Furniture →
                </a>
              </motion.div>
            </FadeSection>
          </div>
        </section>

        {/* ── Footer Minimal ─────────────────────────────────────────────────── */}
        <footer className="bg-[#442516] py-8 text-center text-white text-xs">
          <p>
            © {new Date().getFullYear()} Your Furniture Brand · Jaipur,
            Rajasthan
          </p>
          <p className="mt-1">
            <a href="/blogs" className="hover:text-[#C49A6C] transition-colors">
              ← Back to Blog
            </a>
          </p>
        </footer>
        <Footer />
      </div>
    </>
  );
}
