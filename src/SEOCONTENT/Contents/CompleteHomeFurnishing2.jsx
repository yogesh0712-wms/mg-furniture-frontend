/**
 * Page: A Practical Guide to Complete Home Furnishing in Jaipur
 * Slug: complete-home-furnishing-guide-jaipur
 * Meta Title: A Practical Guide to Complete Home Furnishing in Jaipur
 * Meta Description: Planning to furnish your home in Jaipur? Learn practical furniture planning,
 *   budgeting, wood selection, furnishing order, and mistakes to avoid while creating a
 *   comfortable and functional home.
 */

import { useEffect, useRef, useState } from "react";
import Header, { Footer } from "../../Header";

// ─── Helpers ────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Image placeholders ──────────────────────────────────────────────────────
// Replace src="" values with actual image URLs.
// All images should show Indian/Jaipur interiors, warm tones, natural light.

const IMG = {
  // Hero: warm Jaipur living room — arched doorway, wooden furniture, warm afternoon light
  hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80",
  // Intro: Indian apartment interior — typical 2BHK with mixed furniture
  intro:
    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=80",
  // Small homes: compact Indian bedroom with storage bed
  smallHome:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
  // Emotional final: family in warm Indian home, evening light
  emotional:
    "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1400&q=80",
  // Wood cards — replace with actual material/texture images
  sheesham:
    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
  teak: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
  engineered:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  modular:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const furnishingOrder = [
  {
    icon: "🗄️",
    step: "01",
    title: "Start With Storage",
    desc: "Before any sofa or bed frame, plan your storage. Wardrobes, kitchen cabinets, and overhead units must come first. Storage defines how liveable a home feels from day one.",
  },
  {
    icon: "🛏️",
    step: "02",
    title: "Bedroom Essentials",
    desc: "A good bed with a storage base, a wardrobe that fits your wall, and a side table. Nothing more until the basics are comfortable. Sleep quality shapes everything else.",
  },
  {
    icon: "🛋️",
    step: "03",
    title: "Living Room After Essentials",
    desc: "Once bedrooms are sorted, move to the living room. A sofa that fits the room size — not the showroom — a TV unit, and functional seating for guests.",
  },
  {
    icon: "🍽️",
    step: "04",
    title: "Dining & Social Spaces",
    desc: "A dining table that fits your family and your floor area. In Jaipur homes, 4-seater extendable tables work beautifully for daily use and weekend gatherings alike.",
  },
];

const budgetRooms = [
  {
    room: "Bedroom",
    range: "₹45,000 – ₹1,10,000",
    items: "Bed, wardrobe, side tables, dressing unit",
  },
  {
    room: "Living Room",
    range: "₹40,000 – ₹90,000",
    items: "Sofa, TV unit, centre table, storage unit",
  },
  {
    room: "Kitchen",
    range: "₹60,000 – ₹1,50,000",
    items: "Modular cabinets, countertop, overhead storage",
  },
  {
    room: "Dining Area",
    range: "₹20,000 – ₹55,000",
    items: "Dining table, chairs, crockery unit",
  },
  {
    room: "Kids Room",
    range: "₹25,000 – ₹60,000",
    items: "Bed with storage, study table, wardrobe",
  },
];

const woodTypes = [
  {
    name: "Sheesham Wood",
    hindi: "शीशम",
    tag: "Most Popular in Jaipur",
    desc: "Dense, durable, and naturally beautiful. Sheesham (Indian Rosewood) is the backbone of Rajasthan furniture. It handles humidity, resists warping, and ages gracefully.",
    pros: [
      "Extremely durable",
      "Natural grain patterns",
      "Termite resistant",
      "Repairable",
    ],
    img: IMG.sheesham,
  },
  {
    name: "Teak Wood",
    hindi: "सागवान",
    tag: "Premium Choice",
    desc: "Teak is the gold standard for longevity. It's oily by nature, which makes it water and pest resistant. Ideal for dining tables and bedroom sets that last generations.",
    pros: [
      "Highest durability",
      "Water resistant",
      "Classic look",
      "Long lifespan",
    ],
    img: IMG.teak,
  },
  {
    name: "Engineered Wood",
    hindi: "MDF / Plywood",
    tag: "Budget Friendly",
    desc: "Modern engineered wood (MDF, HDF, BWR plywood) offers clean finishes at accessible prices. Best for modular kitchens, wardrobes, and TV units when quality grade is chosen carefully.",
    pros: [
      "Cost effective",
      "Smooth finish",
      "Easy to customise",
      "Widely available",
    ],
    img: IMG.engineered,
  },
  {
    name: "Modular Systems",
    hindi: "मॉड्यूलर",
    tag: "Flexible Living",
    desc: "Modular furniture lets small Jaipur homes breathe. Reconfigurable units, flat-pack designs, and mix-and-match systems give you flexibility as your family and needs change.",
    pros: [
      "Space efficient",
      "Easy to move",
      "Upgradeable",
      "Modern aesthetic",
    ],
    img: IMG.modular,
  },
];

const mistakes = [
  {
    num: "01",
    title: "Buying Without Measuring",
    desc: "The most common and costly mistake. A sofa that looked perfect in the showroom blocks the door at home. Always carry room dimensions — length, width, doorway size — before you shop.",
  },
  {
    num: "02",
    title: "Ignoring Storage Needs",
    desc: "Indian homes store more than furniture showrooms suggest. Seasonal clothes, festival items, kitchen provisions. If storage isn't planned, every room becomes cluttered within months.",
  },
  {
    num: "03",
    title: "Rushing the Process",
    desc: "Furnishing a home in one weekend leads to regret. Take it room by room. Living with an empty room for two weeks is far better than living with wrong furniture for ten years.",
  },
  {
    num: "04",
    title: "Choosing Looks Over Durability",
    desc: "A glossy finish fades. A solid wood joint doesn't. Prioritise build quality and material honesty. Furniture that feels good at home beats furniture that photographs well.",
  },
  {
    num: "05",
    title: "Skipping a Layout Plan",
    desc: "Without a rough floor plan, furniture ends up placed by convenience, not design. Even a hand-drawn sketch helps you understand traffic flow, natural light, and spacing.",
  },
  {
    num: "06",
    title: "Buying Everything at Once",
    desc: "Bulk buying from one source limits your options. Mix solid wood pieces for longevity, modular units for flexibility, and local craft pieces for character. Diversity makes a home.",
  },
];

const smallHomeTips = [
  {
    icon: "🛏️",
    tip: "Storage beds",
    detail:
      "Hydraulic lift beds store bedding, seasonal clothes, and more below the mattress — perfect for 1BHK and 2BHK homes.",
  },
  {
    icon: "🚪",
    tip: "Sliding wardrobes",
    detail:
      "Sliding doors need zero swing space. In rooms under 10×10 ft, they reclaim critical floor area compared to hinged wardrobes.",
  },
  {
    icon: "📦",
    tip: "Modular shelving",
    detail:
      "Wall-mounted modular shelves use vertical space that's usually wasted. Books, plants, decor — all up, off the floor.",
  },
  {
    icon: "🪑",
    tip: "Extendable dining tables",
    detail:
      "A 4-seater that extends to 6. Daily meals feel intimate; family gatherings feel hosted. One piece, two lives.",
  },
  {
    icon: "🛋️",
    tip: "Sofa cum beds",
    detail:
      "For studio apartments and multipurpose rooms, a well-built sofa cum bed means guests always have a comfortable place to sleep.",
  },
  {
    icon: "🔲",
    tip: "Ottomans with storage",
    detail:
      "An ottoman in your living room doubles as seating, a footrest, and a storage box. Zero wasted function.",
  },
];

// ─── Sections ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-amber-50">
      {/* Background image */}
      {/* IMAGE: warm Jaipur living room interior — wooden furniture, arched doorway, afternoon light */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-amber-900/40 to-transparent" />
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-0">
        <p
          className="text-amber-300 font-medium tracking-widest text-xs md:text-sm uppercase mb-6"
          style={{
            fontFamily: "'Georgia', serif",
            animation: "fadeUp 0.8s ease 0.1s both",
          }}
        >
          A Practical Guide · Jaipur Homes
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl"
          style={{
            fontFamily: "'Georgia', serif",
            animation: "fadeUp 0.8s ease 0.25s both",
          }}
        >
          Furniture Should Fit{" "}
          <span className="text-amber-300">Your Life,</span> Not Just Your Rooms
        </h1>
        <p
          className="text-amber-100/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.8s ease 0.4s both" }}
        >
          A complete, honest guide to furnishing your Jaipur home — room by
          room, budget by budget, without the overwhelm.
        </p>
        <div style={{ animation: "fadeUp 0.8s ease 0.55s both" }}>
          <a
            href="#guide"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Read the Guide ↓
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-12 bg-amber-300 animate-pulse" />
        <span className="text-amber-300 text-xs tracking-widest uppercase">
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function Introduction() {
  return (
    <section id="guide" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <FadeUp>
          {/* IMAGE: Indian 2BHK apartment interior — typical layout, mixed furniture, realistic */}
          <div className="rounded-2xl overflow-hidden shadow-md group">
            <img
              src={IMG.intro}
              alt="A typical Jaipur apartment interior"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-4">
            The Real Problem
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Why Furnishing a Home Feels So Overwhelming
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Most people in Jaipur move into a new flat with a rough budget and
              a long wishlist — only to discover that the sofa they liked online
              doesn't fit through the door, the wardrobe blocks the window, and
              three months later the bedroom still has no storage.
            </p>
            <p>
              The problem isn't taste. It's sequence. Furnishing without a plan
              turns a joyful process into a series of expensive corrections.
            </p>
            <p>
              Jaipur apartments have specific constraints — modest room sizes,
              limited natural light in inner rooms, dust from the city, and the
              need for furniture that handles both summer heat and monsoon
              humidity. Generic furniture advice doesn't account for any of
              this.
            </p>
            <p className="font-medium text-stone-700 border-l-4 border-amber-400 pl-4">
              This guide is built around how homes in Jaipur actually work — not
              how they look in catalogues.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function FurnishingOrder() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Step by Step
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              The Right Order to Furnish Your Home
            </h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              Order matters more than budget. Furnishing in the right sequence
              saves money, prevents regret, and makes your home feel complete
              faster.
            </p>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {furnishingOrder.map((item, i) => (
            <FadeUp key={item.step} delay={i * 0.1}>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-amber-400 text-xs font-bold tracking-widest mb-1">
                  {item.step}
                </div>
                <h3
                  className="text-stone-800 font-semibold text-lg mb-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function BudgetPlanning() {
  return (
    <section className="py-20 md:py-28 bg-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Budget Planning
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What Does Furnishing a Home Actually Cost?
            </h2>
            <p className="text-stone-400 mt-3 max-w-xl mx-auto">
              Real numbers for Jaipur homes. These ranges account for both local
              market and mid-range branded furniture.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {budgetRooms.map((item, i) => (
            <FadeUp key={item.room} delay={i * 0.08}>
              <div className="bg-stone-700/60 border border-stone-600 rounded-xl p-5 hover:bg-stone-700 transition-colors duration-200">
                <h3 className="text-amber-300 font-semibold text-lg mb-1">
                  {item.room}
                </h3>
                <p className="text-white font-bold text-xl mb-2">
                  {item.range}
                </p>
                <p className="text-stone-400 text-sm">{item.items}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Solid Wood vs Modular comparison */}
        <FadeUp delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-900/30 border border-amber-700/40 rounded-2xl p-6">
              <div className="text-2xl mb-3">🌳</div>
              <h3 className="text-amber-300 font-bold text-lg mb-2">
                Solid Wood Furniture
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Higher upfront cost (₹15,000–₹35,000 for a single piece), but
                lasts 20–30 years with basic maintenance. Sheesham and teak hold
                value, can be repaired, and improves aesthetically over time.
              </p>
              <p className="text-amber-400 text-sm font-medium">
                Best for: Beds, dining tables, wardrobes, bookshelves
              </p>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-2xl p-6">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="text-blue-300 font-bold text-lg mb-2">
                Modular / Engineered Furniture
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Lower upfront cost (₹8,000–₹20,000 per unit), flexible, and easy
                to install. Quality varies widely — always check board thickness
                and laminates. Lifespan is 8–12 years with good care.
              </p>
              <p className="text-blue-400 text-sm font-medium">
                Best for: Kitchens, TV units, study tables, modular shelving
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function WoodSelection() {
  return (
    <section className="py-20 md:py-28 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Material Guide
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Which Wood Should You Choose?
            </h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              Not all wood is equal. Here's an honest breakdown of what works in
              Jaipur's climate and housing conditions.
            </p>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {woodTypes.map((wood, i) => (
            <FadeUp key={wood.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
                {/* IMAGE: texture/furniture image for each wood type */}
                <div className="h-44 overflow-hidden group">
                  <img
                    src={wood.img}
                    alt={`${wood.name} furniture`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className="text-stone-800 font-bold text-lg"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {wood.name}
                      </h3>
                      <p className="text-stone-400 text-sm">{wood.hindi}</p>
                    </div>
                    <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                      {wood.tag}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {wood.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {wood.pros.map((pro) => (
                      <span
                        key={pro}
                        className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full"
                      >
                        ✓ {pro}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommonMistakes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Learn From Others
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              6 Mistakes That Cost Jaipur Homeowners Dearly
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-0">
          {mistakes.map((m, i) => (
            <FadeUp key={m.num} delay={i * 0.07}>
              <div
                className={`flex gap-6 py-7 border-b border-stone-100 items-start ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center">
                  <span className="text-stone-400 font-bold text-sm">
                    {m.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-stone-800 font-semibold text-xl mb-2"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {m.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmallHomeSolutions() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Small Spaces
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800 mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Making Compact Jaipur Homes Work Beautifully
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              The average flat in Jaipur — whether in Vaishali Nagar,
              Mansarovar, or Jagatpura — runs between 650 and 1100 sq ft. Every
              piece of furniture has to earn its place.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {smallHomeTips.map((tip, i) => (
                <FadeUp key={tip.tip} delay={i * 0.07}>
                  <div className="bg-white border border-stone-100 rounded-xl p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                    <div className="text-2xl mb-2">{tip.icon}</div>
                    <p className="text-stone-700 font-semibold text-sm mb-1">
                      {tip.tip}
                    </p>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      {tip.detail}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            {/* IMAGE: compact Indian bedroom — storage bed, sliding wardrobe, practical layout */}
            <div className="rounded-2xl overflow-hidden shadow-md group">
              <img
                src={IMG.smallHome}
                alt="A smart small-home bedroom layout in Jaipur"
                className="w-full h-96 md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function EmotionalSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* IMAGE: family in warm Indian home — evening light, lived-in, emotional */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.emotional})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/65 via-stone-900/50 to-stone-950/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Why It All Matters
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Furniture Becomes Part of Who You Are at Home
          </h2>
          <div className="space-y-5 text-stone-200 text-lg leading-relaxed">
            <p>
              The dining table where your family gathers every Sunday. The bed
              where you start and end every day. The chair where your parent
              sits in the evening light.
            </p>
            <p>
              Furniture isn't decoration. It's the structure of daily life. It
              holds routines, absorbs memories, and quietly shapes the comfort
              and identity of every home.
            </p>
            <p className="text-amber-200 font-medium text-xl">
              When you choose furniture thoughtfully, you're not just filling a
              room. You're building the place your family comes home to.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-amber-50 border-t border-amber-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="text-5xl mb-6">🏡</div>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Plan Furniture Around Your Life, Not Just Your Rooms
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed mb-8">
            Take your time. Measure everything. Start with storage. Buy for
            durability. And let your home become exactly what your family needs
            it to be — one room at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#guide"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5"
            >
              Read the Full Guide ↑
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-stone-300 text-stone-600 hover:border-amber-400 hover:text-amber-600 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Talk to a Furniture Expert
            </a>
          </div>
          <p className="text-stone-400 text-sm mt-8">
            No pressure. No sales pitch. Just honest guidance for your Jaipur
            home.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-10 px-6 text-center text-sm">
      <p className="mb-1 text-stone-300 font-medium">
        Furniture for Jaipur Homes
      </p>
      <p>Handcrafted guidance for real homes, real families, real lives.</p>
      <p className="mt-4 text-stone-600 text-xs">
        © {new Date().getFullYear()} · complete-home-furnishing-guide-jaipur
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CompleteHomeFurnishing2() {
  // Meta tags injected into document head
  useEffect(() => {
    document.title = "A Practical Guide to Complete Home Furnishing in Jaipur";
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Planning to furnish your home in Jaipur? Learn practical furniture planning, budgeting, wood selection, furnishing order, and mistakes to avoid while creating a comfortable and functional home.",
    );
    setMeta(
      "og:title",
      "A Practical Guide to Complete Home Furnishing in Jaipur",
      true,
    );
    setMeta(
      "og:description",
      "A complete, honest guide to furnishing your Jaipur home — room by room, budget by budget, without the overwhelm.",
      true,
    );
  }, []);

  return (
    <div
      className="font-sans antialiased text-stone-700"
      style={{ fontFamily: "'Lato', 'Segoe UI', sans-serif" }}
    >
      <Header />
      <Hero />
      <Introduction />
      <FurnishingOrder />
      <BudgetPlanning />
      <WoodSelection />
      <CommonMistakes />
      <SmallHomeSolutions />
      <EmotionalSection />
      <CTASection />
      <footer />
      <Footer />
    </div>
  );
}
