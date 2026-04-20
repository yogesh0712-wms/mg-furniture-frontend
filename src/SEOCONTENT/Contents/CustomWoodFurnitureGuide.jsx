import { useEffect, useRef } from "react";
import Header, { Footer } from "../../Header";

const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  meaning:
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80",
  beds: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
  wardrobes:
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80",
  modular:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
  office:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
  pricing:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  maker:
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=80",
};

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-section ${className}`}>
      {children}
    </div>
  );
}

function SectionImage({ src, alt }) {
  return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-sm">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-stone-700 leading-relaxed"
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightBox({ children }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl px-5 py-4 my-6">
      <p className="text-amber-900 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-stone-800 mb-3">{title}</h3>
      {children}
    </div>
  );
}

export default function CustomFurnitureGuide() {
  useEffect(() => {
    document.title =
      "How to Order Custom Wood Furniture Near You in Jaipur (Step-by-Step Guide)";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Learn how to order custom wood furniture near you in Jaipur step by step. From measuring space to choosing materials, pricing, and delivery—complete practical guide.",
    );
  }, []);

  return (
    <>
      <Header />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Serif+4:wght@400;600&display=swap');

        body { background-color: #faf9f6; }

        .fade-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-reading { font-family: 'Source Serif 4', Georgia, serif; }
      `}</style>

      <div className="min-h-screen bg-[#faf9f6] font-reading">
        {/* Hero */}
        <div className="relative h-[520px] overflow-hidden">
          <img
            src={UNSPLASH.hero}
            alt="Custom wooden furniture in a beautifully decorated Indian living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-4xl mx-auto w-full left-0 right-0">
            <FadeSection>
              <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
                2026 Edition · Jaipur
              </span>
              <h1 className="font-display text-white text-4xl md:text-5xl leading-tight font-extrabold mb-4 max-w-2xl">
                Complete Guide to Custom Wood Furniture in Jaipur
              </h1>
              <p className="text-stone-200 text-lg max-w-xl leading-relaxed">
                Everything you need to know before ordering custom wood
                furniture near you — from materials and pricing to choosing the
                right maker.
              </p>
            </FadeSection>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-5 py-16 space-y-20">
          {/* Section 1 — What It Means */}
          <FadeSection>
            <section aria-labelledby="what-it-means">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 01
              </p>
              <h2
                id="what-it-means"
                className="font-display text-3xl font-bold text-stone-900 mb-5"
              >
                What "Custom Wood Furniture" Actually Means
              </h2>
              <p className="text-stone-600 leading-relaxed">
                When you search for{" "}
                <strong className="text-stone-800">
                  custom wood furniture near me in Jaipur
                </strong>
                , you're not just looking for a piece that fits in a corner.
                You're looking for something built around your space, your
                needs, and your taste. Here's exactly what that means.
              </p>

              <SectionImage
                src={UNSPLASH.meaning}
                alt="Indian craftsman working on solid wood furniture in a workshop"
              />

              <SubSection title="Made-to-Order, Not Ready Stock">
                <p className="text-stone-600 leading-relaxed">
                  Custom furniture is built only after you place an order. There
                  is no pre-made inventory sitting in a warehouse. Your size,
                  your design, your material — all decided before a single nail
                  is hammered.
                </p>
              </SubSection>

              <SubSection title="Built Around Your Space and Needs">
                <p className="text-stone-600 leading-relaxed">
                  Every piece is designed around your room dimensions, storage
                  requirements, and daily usage. This is especially useful in
                  Jaipur homes, where layouts vary widely and standard furniture
                  rarely fits properly.
                </p>
              </SubSection>

              <SubSection title="Material Selection Is Part of the Process">
                <p className="text-stone-600 leading-relaxed mb-2">
                  You choose the wood before production begins. Common materials
                  used by Jaipur furniture makers:
                </p>
                <BulletList
                  items={[
                    "Sheesham (Indian Rosewood) — strong, durable, resistant to Rajasthan's dry climate",
                    "Teak wood — premium choice, long-lasting, more expensive",
                    "Engineered wood — budget-friendly option, though less durable long-term",
                  ]}
                />
              </SubSection>
            </section>
          </FadeSection>

          {/* Section 2 — Ready-Made vs Custom */}
          <FadeSection>
            <section aria-labelledby="comparison">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 02
              </p>
              <h2
                id="comparison"
                className="font-display text-3xl font-bold text-stone-900 mb-5"
              >
                Ready-Made vs Custom Furniture
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Most buyers don't realize how different these two categories are
                until it's too late. Here's a direct comparison.
              </p>

              {/* Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                    <h3 className="font-bold text-stone-700 text-lg">
                      Ready-Made Furniture
                    </h3>
                  </div>
                  <BulletList
                    items={[
                      "Fixed sizes, limited designs",
                      "Available for immediate purchase",
                      "Materials often unclear (MDF, veneer, etc.)",
                      "Mass-produced, less control over quality",
                    ]}
                  />
                </div>
                <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Recommended
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <h3 className="font-bold text-stone-800 text-lg">
                      Custom Wood Furniture
                    </h3>
                  </div>
                  <BulletList
                    items={[
                      "Flexible dimensions designed for your room",
                      "Built after order — 2–4 week lead time",
                      "You choose and verify the wood quality",
                      "Better durability, better long-term value",
                    ]}
                  />
                </div>
              </div>

              <HighlightBox>
                Custom furniture may take a little longer, but solid wood lasts
                decades — not years. In the long run, it's almost always the
                smarter investment.
              </HighlightBox>
            </section>
          </FadeSection>

          {/* Section 3 — Types */}
          <FadeSection>
            <section aria-labelledby="types">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 03
              </p>
              <h2
                id="types"
                className="font-display text-3xl font-bold text-stone-900 mb-5"
              >
                Types of Custom Wood Furniture You Can Order
              </h2>

              {/* Beds */}
              <SubSection title="Beds">
                <SectionImage
                  src={UNSPLASH.beds}
                  alt="Indian bedroom with solid Sheesham wood bed and warm interiors"
                />
                <p className="text-stone-600 leading-relaxed">
                  Custom beds are among the most popular orders in Jaipur.
                  Sheesham is the go-to material for its strength and
                  load-bearing capacity. Options include storage beds, hydraulic
                  lift beds, and platform-style low beds.
                </p>
              </SubSection>

              {/* Wardrobes */}
              <SubSection title="Wardrobes">
                <SectionImage
                  src={UNSPLASH.wardrobes}
                  alt="Custom wooden wardrobe in an Indian home bedroom"
                />
                <p className="text-stone-600 leading-relaxed">
                  Wardrobes built to your exact wall dimensions can dramatically
                  increase storage in compact Jaipur apartments. Choose from
                  sliding, hinged, or floor-to-ceiling configurations.
                </p>
              </SubSection>

              {/* Modular */}
              <SubSection title="Modular Furniture">
                <SectionImage
                  src={UNSPLASH.modular}
                  alt="Modular kitchen furniture in a modern Indian home"
                />
                <p className="text-stone-600 leading-relaxed">
                  Modular furniture combines factory precision with some level
                  of customization. TV units, modular kitchens, and wardrobe
                  systems fall in this category. They're flexible and deliver
                  faster, though with less design freedom than fully custom
                  pieces.
                </p>
              </SubSection>

              {/* Office */}
              <SubSection title="Office Furniture">
                <SectionImage
                  src={UNSPLASH.office}
                  alt="Custom wooden office desk and workstation in an Indian workspace"
                />
                <p className="text-stone-600 leading-relaxed">
                  Custom office desks, workstations, and reception counters are
                  increasingly popular in Jaipur's growing commercial spaces.
                  Good office furniture improves both functionality and the
                  overall impression of your business.
                </p>
              </SubSection>
            </section>
          </FadeSection>

          {/* Section 4 — Pricing */}
          <FadeSection>
            <section aria-labelledby="pricing">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 04
              </p>
              <h2
                id="pricing"
                className="font-display text-3xl font-bold text-stone-900 mb-5"
              >
                How Pricing Works in Jaipur
              </h2>

              <SectionImage
                src={UNSPLASH.pricing}
                alt="Jaipur furniture workshop with wood planks and carpentry tools"
              />

              <SubSection title="Material Is the Biggest Cost Factor">
                <p className="text-stone-600 leading-relaxed">
                  The type of wood chosen directly determines the price of the
                  piece. Teak commands a premium; Sheesham is the value-leader
                  for solid wood. Engineered wood costs significantly less but
                  won't last as long.
                </p>
              </SubSection>

              <SubSection title="Typical Price Ranges (Jaipur Market)">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[
                    { item: "Beds", range: "₹10,000 – ₹60,000" },
                    { item: "Dining Tables", range: "₹12,000 – ₹70,000" },
                    { item: "Wardrobes", range: "₹5,000 – ₹40,000" },
                  ].map((r) => (
                    <div
                      key={r.item}
                      className="bg-white border border-stone-200 rounded-xl p-4 text-center shadow-sm"
                    >
                      <p className="text-xs text-stone-400 font-semibold uppercase tracking-wide mb-1">
                        {r.item}
                      </p>
                      <p className="text-stone-800 font-bold text-sm leading-snug">
                        {r.range}
                      </p>
                    </div>
                  ))}
                </div>
              </SubSection>

              <SubSection title="Other Cost Factors">
                <BulletList
                  items={[
                    "Labor and craftsmanship complexity",
                    "Type of polish and surface finish",
                    "Hardware quality (hinges, channels, handles)",
                    "Delivery distance and on-site installation",
                  ]}
                />
              </SubSection>
            </section>
          </FadeSection>

          {/* Section 5 — Timeline */}
          <FadeSection>
            <section aria-labelledby="timeline">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 05
              </p>
              <h2
                id="timeline"
                className="font-display text-3xl font-bold text-stone-900 mb-6"
              >
                Timeline: Design → Production → Delivery
              </h2>

              <div className="space-y-0">
                {[
                  {
                    step: "01",
                    title: "Design Phase",
                    desc: "Share your reference images, room measurements, and budget. Finalize dimensions, material, and design. Approve before production begins.",
                    duration: "2–3 days",
                    color: "bg-amber-100 border-amber-300",
                  },
                  {
                    step: "02",
                    title: "Production Phase",
                    desc: "Furniture is built after design approval. Skilled carpenters cut, join, and finish each piece from scratch to your specifications.",
                    duration: "2–4 weeks",
                    color: "bg-stone-100 border-stone-300",
                  },
                  {
                    step: "03",
                    title: "Delivery & Installation",
                    desc: "Your furniture is delivered to your Jaipur address and installed on-site with final adjustments made to ensure perfect fit.",
                    duration: "1–2 days",
                    color: "bg-green-50 border-green-200",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex gap-0">
                    <div className="flex flex-col items-center mr-5">
                      <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {s.step}
                      </div>
                      {i < 2 && (
                        <div className="w-0.5 h-full bg-amber-200 my-1" />
                      )}
                    </div>
                    <div
                      className={`mb-6 flex-1 border rounded-xl p-5 ${s.color}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-stone-800 text-lg">
                          {s.title}
                        </h3>
                        <span className="text-xs font-semibold text-stone-500 bg-white/70 px-2 py-0.5 rounded-full border border-stone-200">
                          {s.duration}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeSection>

          {/* Section 6 — Choosing a Maker */}
          <FadeSection>
            <section aria-labelledby="choosing">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 06 · Important
              </p>
              <h2
                id="choosing"
                className="font-display text-3xl font-bold text-stone-900 mb-5"
              >
                How to Choose a Furniture Maker
              </h2>

              <SectionImage
                src={UNSPLASH.maker}
                alt="Indian carpenter craftsman finishing a wooden furniture piece in Jaipur"
              />

              <HighlightBox>
                This is arguably the most important decision in the entire
                process. The wrong maker can cost you time, money, and a piece
                that doesn't last.
              </HighlightBox>

              <SubSection title="Check Previous Work">
                <p className="text-stone-600 leading-relaxed">
                  Always ask for real project photos, not stock images. Ask to
                  see past client work — ideally pieces that have been in use
                  for a year or more. This is the most reliable way to verify
                  actual quality.
                </p>
              </SubSection>

              <SubSection title="Verify Material and Build Quality">
                <BulletList
                  items={[
                    "Confirm solid wood vs engineered wood upfront",
                    "Check joint strength — dovetail or mortise-tenon joints are a good sign",
                    "Inspect surface finish for smoothness and even polish",
                  ]}
                />
              </SubSection>

              <SubSection title="Demand Process Transparency">
                <p className="text-stone-600 leading-relaxed">
                  A reliable furniture maker will clearly explain material
                  sourcing, give a detailed pricing breakdown, and set a
                  realistic timeline. Anyone who gives vague answers or rushed
                  estimates is a red flag.
                </p>
                <p className="text-stone-600 leading-relaxed mt-3">
                  Also confirm after-sales support — good makers stand behind
                  their work with repair and adjustment services after delivery.
                </p>
              </SubSection>
            </section>
          </FadeSection>

          {/* Section 7 — Common Mistakes */}
          <FadeSection>
            <section aria-labelledby="mistakes">
              <p className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2">
                Section 07
              </p>
              <h2
                id="mistakes"
                className="font-display text-3xl font-bold text-stone-900 mb-6"
              >
                Common Mistakes Buyers Make
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "₹",
                    title: "Choosing only on price",
                    desc: "The lowest quote almost always means poor material and weak construction. You'll end up replacing it in 2–3 years.",
                  },
                  {
                    icon: "?",
                    title: "Not understanding materials",
                    desc: "Many buyers confuse solid wood, veneer, and engineered wood. This leads to paying solid-wood prices for inferior products.",
                  },
                  {
                    icon: "✗",
                    title: "Skipping design approval",
                    desc: "Without confirming the design before production starts, the final piece may not match your expectations at all.",
                  },
                  {
                    icon: "⏱",
                    title: "Expecting instant delivery",
                    desc: "True custom furniture takes 2–4 weeks. If a maker promises delivery in 3 days, it's likely not custom-built for you.",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="bg-white border border-red-100 rounded-xl p-5 flex gap-4 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-500 font-bold text-lg flex-shrink-0">
                      {m.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-1">
                        {m.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeSection>
        </main>

        {/* CTA Section */}
        <FadeSection>
          <section
            className="bg-stone-900 py-20 px-6 text-center"
            aria-labelledby="cta-heading"
          >
            <div className="max-w-2xl mx-auto">
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
                Jaipur · Custom Orders Open
              </p>
              <h2
                id="cta-heading"
                className="font-display text-white text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
              >
                Get Your Custom Furniture Designed in Jaipur
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                Share your measurements, reference images, and budget. We'll
                design a piece built exactly for your space — from solid
                Sheesham or teak, crafted by skilled Jaipur artisans.
              </p>
              <button className="inline-block bg-amber-500 hover:bg-amber-400 active:scale-95 transition-all text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg cursor-pointer">
                Get Free Quote
              </button>
              <p className="text-stone-600 text-xs mt-4">
                No commitment · Reply within 24 hours
              </p>
            </div>
          </section>
        </FadeSection>
      </div>
      <Footer />
    </>
  );
}
