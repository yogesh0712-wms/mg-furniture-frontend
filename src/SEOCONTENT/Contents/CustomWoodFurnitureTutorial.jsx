import { useEffect, useRef } from "react";
import Header, { Footer } from "../../Header";

const steps = [
  {
    number: "01",
    title: "Measure Your Space",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    imageAlt: "Indian wooden furniture in a living room",
    subsections: [
      {
        heading: "Why measurement matters",
        content:
          "The most common reason custom furniture fails to fit is incorrect measurement. A sofa that's 10cm too wide can block a doorway. A wardrobe too tall can clash with the ceiling fan. Getting dimensions right is the foundation of every successful custom order.",
      },
      {
        heading: "How to measure correctly",
        content: null,
        list: [
          "Use a steel measuring tape — cloth tapes can stretch and give wrong readings",
          "Measure the length, width, and height of the available space",
          "Note the doorway width — furniture must pass through it during delivery",
          "Check ceiling height if ordering tall units like wardrobes or bookshelves",
          "Measure at least twice, note it down clearly",
        ],
      },
      {
        heading: "Pro tips",
        highlight:
          "Always leave at least 2–3 inches of clearance on each side. Tight fits look cramped and restrict airflow. If your room is 10 feet wide, plan furniture no wider than 9 feet 4 inches.",
      },
    ],
  },
  {
    number: "02",
    title: "Choose Wood Type",
    image:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
    imageAlt: "Indian carpenter working with wood in workshop",
    subsections: [
      {
        heading: "Sheesham vs Teak vs Engineered",
        content: null,
        list: [
          "Sheesham (Rosewood): Most popular in Jaipur. Strong, beautiful grain, moderate price. Best for beds, dining tables, cabinets",
          "Teak: Premium and durable. Naturally oil-resistant, ideal for long-term use. Higher cost but worth it",
          "Engineered Wood (Plywood/MDF): Budget-friendly, consistent finish, great for modular wardrobes and TV units",
        ],
      },
      {
        heading: "Which one to choose",
        content:
          "For bedrooms and living room furniture, Sheesham is the most practical choice in Jaipur — it's locally available, affordable, and holds polish beautifully. Teak is better if you want heirloom-quality pieces. Engineered wood works well for kitchen cabinets and storage.",
      },
      {
        heading: "Budget tip",
        highlight:
          "Don't mix wood types in the same room — it looks inconsistent. Stick to one primary wood and use the budget saved on better finishing and hardware.",
      },
    ],
  },
  {
    number: "03",
    title: "Share Reference Design",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    imageAlt: "Indian interior with wooden furniture design",
    subsections: [
      {
        heading: "Why reference matters",
        content:
          "Verbal descriptions like 'simple wardrobe with mirrors' mean different things to different carpenters. A reference photo removes ambiguity completely. It saves back-and-forth conversations and reduces revision costs significantly.",
      },
      {
        heading: "Where to find designs",
        content: null,
        list: [
          "Pinterest — search 'Indian bedroom wardrobe design' or 'Rajasthani wooden furniture'",
          "Instagram — follow local Jaipur furniture makers and interior designers",
          "Houzz and UrbanLadder — good for modern Indian home styles",
          "Simply photograph furniture you like at a showroom",
        ],
      },
      {
        heading: "What to share",
        content: null,
        list: [
          "2–3 reference images minimum",
          "Highlight specific features you like: handles, shelf spacing, finish color",
          "Mention what you don't want (e.g., 'no mirror on top section')",
          "Share your room photo so the carpenter understands the setting",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Get Quotation",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    imageAlt: "Wooden furniture in Indian home interior",
    subsections: [
      {
        heading: "How pricing works",
        content:
          "Custom furniture is priced based on wood type, dimensions, design complexity, finishing (polish/paint/lacquer), and hardware (handles, hinges, channels). Labor is charged separately by most Jaipur workshops. Always ask for an itemized quote.",
      },
      {
        heading: "Jaipur price ranges",
        content: null,
        list: [
          "Double bed (Sheesham, basic): ₹18,000 – ₹35,000",
          "4-door wardrobe (Sheesham, with mirror): ₹25,000 – ₹50,000",
          "Dining table with 6 chairs: ₹30,000 – ₹65,000",
          "TV unit (engineered wood): ₹12,000 – ₹22,000",
          "Modular kitchen per running foot: ₹1,500 – ₹3,500",
        ],
      },
      {
        heading: "Negotiation tips",
        highlight:
          "Get quotes from at least 3 vendors before deciding. For orders above ₹50,000, most Jaipur carpenters offer 5–10% discount. Bundling multiple pieces in one order is the best way to reduce per-item cost.",
      },
    ],
  },
  {
    number: "05",
    title: "Finalize Design",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    imageAlt: "Indian wooden bedroom furniture setup",
    subsections: [
      {
        heading: "Why this step is critical",
        content:
          "Once production starts, design changes are expensive and often impossible without remaking parts. This is your last chance to review and confirm every detail before wood is cut.",
      },
      {
        heading: "What to confirm",
        content: null,
        list: [
          "Final dimensions (double-check your measurements)",
          "Wood type and grade selected",
          "Finish color — ask for a physical sample chip, not just a photo",
          "Number of shelves, drawers, and their dimensions",
          "Hardware: handle style, hinge type, soft-close channels if needed",
          "Payment terms and delivery date in writing",
        ],
      },
      {
        heading: "3D design / preview",
        content:
          "Many furniture makers in Jaipur now offer basic 3D previews using SketchUp or simple CAD tools. If your order is above ₹40,000, ask for a 3D preview before finalizing. It's much easier to change a design on screen than in wood.",
      },
    ],
  },
  {
    number: "06",
    title: "Production & Delivery",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    imageAlt: "Indian carpenter finishing wooden furniture",
    subsections: [
      {
        heading: "Production workflow",
        content: null,
        list: [
          "Wood selection and drying (2–5 days depending on wood moisture)",
          "Cutting and shaping according to approved dimensions",
          "Joining, sanding, and assembly",
          "Finishing — primer, base coat, final polish or paint",
          "Quality check before dispatch",
        ],
      },
      {
        heading: "Timeline (2–4 weeks)",
        content:
          "Standard custom furniture in Jaipur takes 2–3 weeks for single pieces and up to 4–6 weeks for full room sets. Festive season (Oct–Nov) adds 1–2 weeks due to high demand. Always confirm a delivery date in writing before paying advance.",
      },
      {
        heading: "Delivery & installation tips",
        highlight:
          "Clear the room before delivery day — assembling furniture in cluttered spaces causes damage. Ask if installation is included in the quote. Most Jaipur vendors include basic installation but charge extra for wall mounting and polish touch-ups on-site.",
      },
    ],
  },
];

const mistakes = [
  {
    icon: "📐",
    title: "Skipping measurements",
    desc: "Ordering without accurate room dimensions leads to furniture that doesn't fit — a costly mistake with custom pieces.",
  },
  {
    icon: "💰",
    title: "Choosing only on price",
    desc: "The cheapest quote often means low-grade wood, poor joinery, or shortcuts on finishing. Always ask for sample work.",
  },
  {
    icon: "🗂️",
    title: "No written agreement",
    desc: "Verbal deals lead to disputes. Always get dimensions, material, price, and delivery date confirmed in writing.",
  },
  {
    icon: "🎨",
    title: "Changing design mid-production",
    desc: "Design changes after work starts can double your cost and delay delivery by weeks. Finalize before advance payment.",
  },
];

function useScrollFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
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
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

function StepSection({ step, index }) {
  return (
    <FadeSection>
      <section className="mb-16">
        <div className="flex items-start gap-4 mb-6">
          <span
            className="text-5xl font-bold leading-none"
            style={{
              color: "#c8a96e",
              opacity: 0.35,
              fontFamily: "Georgia, serif",
            }}
          >
            {step.number}
          </span>
          <h2
            className="text-2xl font-bold text-gray-800 mt-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Step {parseInt(step.number, 10)}: {step.title}
          </h2>
        </div>

        <img
          src={step.image}
          alt={step.imageAlt}
          className="w-full rounded-xl mb-8 object-cover"
          style={{ height: "260px" }}
          loading="lazy"
        />

        <div className="space-y-6">
          {step.subsections.map((sub, i) => (
            <div key={i}>
              <h3
                className="text-base font-semibold text-gray-700 mb-2 uppercase tracking-wide"
                style={{ fontSize: "0.8rem", letterSpacing: "0.08em" }}
              >
                {sub.heading}
              </h3>
              {sub.content && (
                <p className="text-gray-600 leading-relaxed text-base">
                  {sub.content}
                </p>
              )}
              {sub.list && (
                <ul className="space-y-2 mt-2">
                  {sub.list.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-600 text-base"
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#c8a96e" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {sub.highlight && (
                <div
                  className="mt-3 rounded-lg px-5 py-4 text-sm leading-relaxed"
                  style={{
                    background: "#fef3e2",
                    borderLeft: "3px solid #c8a96e",
                    color: "#7a5c2e",
                  }}
                >
                  <span className="font-semibold mr-1">💡 Tip:</span>
                  {sub.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </FadeSection>
  );
}

export default function CustomWoodFurnitureTutorial() {
  useEffect(() => {
    document.title =
      "How to Order Custom Wood Furniture Near You in Jaipur (Step-by-Step Guide)";

    let meta = document.querySelector("meta[name='description']");

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Learn how to order custom wood furniture in Jaipur step by step. From measuring space to pricing, materials, and delivery—complete practical guide.",
    );
  }, []);

  return (
    <>
      <Header />

      <main
        className="min-h-screen py-12 px-4"
        style={{
          background: "#faf8f4",
          fontFamily: "'Source Serif 4', Georgia, serif",
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <FadeSection>
            <header className="mb-14 text-center">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#c8a96e" }}
              >
                Custom Wood Furniture Guide · Jaipur
              </p>
              <h1
                className="text-4xl font-bold text-gray-900 leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                How to Order Custom Wood Furniture Near You in Jaipur
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
                A practical, step-by-step guide for homeowners looking for
                custom wood furniture near me in Jaipur — from first measurement
                to final delivery.
              </p>
              <div
                className="mt-8 w-16 mx-auto"
                style={{
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, #c8a96e, transparent)",
                }}
              />
            </header>
          </FadeSection>

          {/* Steps */}
          {steps.map((step, index) => (
            <StepSection key={step.number} step={step} index={index} />
          ))}

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Common Mistakes */}
          <FadeSection>
            <section className="mb-16">
              <h2
                className="text-2xl font-bold text-gray-800 mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Common Mistakes to Avoid
              </h2>
              <p className="text-gray-500 mb-8 text-base">
                These are the four mistakes that cost Jaipur homeowners the most
                time, money, and frustration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {mistakes.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5"
                    style={{ background: "#fff", border: "1px solid #ede8df" }}
                  >
                    <div className="text-2xl mb-3" style={{ fontSize: "22px" }}>
                      {m.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-base">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeSection>

          {/* CTA */}
          <FadeSection>
            <section
              className="rounded-2xl px-8 py-12 text-center"
              style={{ background: "#2c1f0e" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#c8a96e" }}
              >
                Ready to Start?
              </p>
              <h2
                className="text-2xl font-bold text-white mb-4 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Get Your Custom Furniture
                <br />
                Designed in Jaipur
              </h2>
              <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-sm mx-auto">
                Share your requirements and get a detailed quote from expert
                Jaipur woodworkers — no obligation, no pressure.
              </p>
              <a
                href="https://wa.me/919782545485
"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#c8a96e", color: "#2c1f0e" }}
              >
                Get Free Quote
              </a>
            </section>
          </FadeSection>

          <footer className="mt-12 text-center text-xs text-gray-400 pb-6">
            © 2025 Custom Wood Furniture Jaipur · All rights reserved
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
