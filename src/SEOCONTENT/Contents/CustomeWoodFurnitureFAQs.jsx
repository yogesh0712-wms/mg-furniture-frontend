import { useState, useEffect, useRef } from "react";
import Header, { Footer } from "../../Header";

const faqs = [
  {
    section: "Cost & Pricing Questions",
    id: "cost",
    items: [
      {
        q: "How much does custom wood furniture cost in Jaipur?",
        a: "Custom wood furniture in Jaipur typically ranges from ₹15,000 for simple pieces like stools or side tables to ₹2,00,000+ for large wardrobes or full dining sets. The price depends on wood type, design complexity, size, and finish. Sheesham (rosewood) and teak tend to cost more, while engineered wood options are budget-friendly. Always ask for an itemised quote.",
      },
      {
        q: "Is custom furniture more expensive than readymade?",
        a: "Initially, yes — custom wood furniture can cost 20–40% more than mass-produced alternatives. However, it's built to your exact dimensions, uses better joinery, and lasts significantly longer. Over a 10–15 year span, custom furniture almost always provides better value.",
      },
      {
        q: "Are there hidden costs I should watch out for?",
        a: "Common hidden costs include delivery & installation charges (₹500–₹3,000), hardware upgrades (soft-close hinges, premium handles), polishing and finishing extras, and design revision fees. Always confirm what's included in your quote before signing off.",
      },
      {
        q: "Do Jaipur furniture makers offer EMI or payment plans?",
        a: "Many established workshops in Jaipur offer a 40–60 advance/balance payment structure — 40% on order confirmation, 60% on delivery. Some larger studios now partner with Bajaj Finserv or similar to offer no-cost EMI options. Ask upfront if this matters to you.",
      },
    ],
  },
  {
    section: "Material & Quality Questions",
    id: "material",
    items: [
      {
        q: "Which wood is best for custom furniture in Jaipur's climate?",
        a: "Sheesham (Indian Rosewood) and Teak are the gold standard for Jaipur's hot, dry climate. They resist warping and cracking well. Mango wood is a cost-effective local alternative. Avoid pine or MDF for outdoor-adjacent spaces — they don't handle humidity swings well.",
      },
      {
        q: "What's the difference between solid wood and engineered wood?",
        a: "Solid wood is cut directly from timber — it's stronger, repairable, and ages beautifully. Engineered wood (MDF, plywood, particle board) is manufactured from wood fibres and is cheaper and more uniform, but less durable over time. For long-term custom wood furniture in Jaipur, solid wood is almost always worth the premium.",
      },
      {
        q: "How do I verify the quality of wood before ordering?",
        a: "Ask to see the raw wood slab before production begins. Good solid wood has visible grain patterns, feels heavy for its size, and produces a dull thud when knocked (hollow sounds indicate poor quality). Request FSC-certified wood if sustainability matters to you.",
      },
      {
        q: "What finish options are available and which is most durable?",
        a: "Common finishes in Jaipur workshops include PU (polyurethane) lacquer, melamine, natural oil/wax, and NC (nitrocellulose) polish. PU finish is the most durable and scratch-resistant for daily-use furniture. Natural oil finishes look beautiful but need annual reapplication.",
      },
    ],
  },
  {
    section: "Process & Timeline Questions",
    id: "process",
    items: [
      {
        q: "How long does it take to get custom furniture made in Jaipur?",
        a: "A typical custom furniture order in Jaipur takes 3–6 weeks from design approval to delivery. Complex pieces like a full bedroom set or a custom library unit can take 8–10 weeks. Always confirm your timeline in writing and add a 1-week buffer for unexpected delays.",
      },
      {
        q: "What does the order process look like step by step?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Initial consultation & measurement visit (free with most makers)
            </li>
            <li>Design sketch or CAD drawing approval</li>
            <li>Material and finish selection</li>
            <li>Advance payment & production start</li>
            <li>Progress updates (ask for photos at midpoint)</li>
            <li>Final quality check at workshop</li>
            <li>Delivery and installation</li>
          </ul>
        ),
      },
      {
        q: "Can I visit the workshop during production?",
        a: "Absolutely — and you should. Reputable makers in Jaipur welcome site visits. Visiting midway through production lets you catch any issues (wrong dimensions, grain direction, colour mismatch) before they become expensive problems. Schedule one visit after the basic frame is ready.",
      },
      {
        q: "What if I need to make changes after production has started?",
        a: "Minor changes (handle style, paint shade) are usually accommodated with no cost. Structural changes after wood cutting begin can incur a revision charge of ₹1,000–₹5,000 depending on the extent. This is why design approval in writing before production is critical.",
      },
    ],
  },
  {
    section: "Usage & Practical Questions",
    id: "usage",
    items: [
      {
        q: "How do I maintain custom wood furniture in Jaipur's heat?",
        a: "Keep wooden furniture away from direct AC vents and windows with harsh afternoon sun — rapid temperature shifts cause wood to crack. Dust weekly with a soft dry cloth. Apply beeswax polish or furniture oil every 6 months. Place felt pads under decorative items to prevent surface scratches.",
      },
      {
        q: "Will the wood shrink or expand with seasonal changes?",
        a: "Yes — all solid wood moves with humidity. Rajasthan's dry summers and slightly humid monsoons do cause minor expansion and contraction. A good carpenter accounts for this with proper joinery gaps and seasoned wood. If drawers suddenly stick in July, that's normal wood movement, not a defect.",
      },
      {
        q: "Is custom wood furniture suitable for small Jaipur apartments?",
        a: "Custom is actually ideal for small spaces. Unlike standard sizes, custom furniture can be built to use every centimetre — floor-to-ceiling shelves, corner units, wall-mounted pieces. Many Jaipur makers specialise in space-saving designs for 1BHK and 2BHK apartments.",
      },
    ],
  },
  {
    section: "Decision & Buying Questions",
    id: "decision",
    items: [
      {
        q: "How do I find reliable custom wood furniture makers in Jaipur?",
        a: "Search for 'custom wood furniture in Jaipur' and shortlist 3–4 makers. Check Google reviews (look for 4.2+ ratings with photo reviews). Ask for a portfolio of past work. Visit the workshop in person — the cleanliness and organisation of a workshop reflects the quality of its output.",
      },
      {
        q: "What questions should I ask before placing an order?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>What wood species are you using and is it seasoned?</li>
            <li>Do you offer a warranty, and what does it cover?</li>
            <li>Who handles installation — your team or a third party?</li>
            <li>Can I see a similar completed project?</li>
            <li>What's included in the quoted price?</li>
          </ul>
        ),
      },
      {
        q: "Should I get multiple quotes before choosing a maker?",
        a: "Yes — always get at least 3 quotes. Significant price differences (more than 30%) usually indicate differences in wood quality or joinery methods, not just margins. The cheapest quote rarely reflects the best value. Compare quotes on wood species, finish, hardware, and warranty terms, not just the final number.",
      },
      {
        q: "What warranty should I expect on custom wood furniture?",
        a: "A reputable Jaipur furniture maker should offer 1–2 years warranty covering structural defects (loose joints, warping beyond normal seasonal movement, finish peeling). Hardware like hinges and drawer runners often carry a separate 1-year warranty. Get the warranty terms in writing.",
      },
    ],
  },
];

function useScrollFade(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  });

  return { ref, visible };
}

function FadeSection({ children, delay = 0 }) {
  const { ref, visible } = useScrollFade();
  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      {children}
    </div>
  );
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-stone-50 transition-colors"
        aria-expanded={open}
      >
        <h3 className="text-base font-semibold text-stone-800 leading-snug">
          {q}
        </h3>
        <span
          className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-lg font-light transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "600px" : "0",
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
      >
        <div className="px-5 pb-5 pt-1 text-stone-600 text-sm leading-relaxed border-t border-stone-100">
          {typeof a === "string" ? <p>{a}</p> : a}
        </div>
      </div>
    </div>
  );
}

export default function CustomWoodFurnitureFAQs() {
  useEffect(() => {
    document.title = "Custom Wood Furniture in Jaipur – FAQs for Jaipur Buyers";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Find answers to common questions about custom wood furniture in Jaipur. Learn about cost, materials, timeline, and installation before you order.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Find answers to common questions about custom wood furniture in Jaipur. Learn about cost, materials, timeline, and installation before you order.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <Header />
      <main
        className="min-h-screen py-14 px-4"
        style={{ backgroundColor: "#faf8f4", fontFamily: "'Georgia', serif" }}
      >
        <div className="max-w-[800px] mx-auto space-y-14">
          {/* ── Hero ── */}
          <FadeSection>
            <header className="space-y-4">
              <p className="text-xs font-sans tracking-widest uppercase text-amber-600 font-semibold">
                Jaipur Buyer's Guide
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Custom Wood Furniture in Jaipur –
                <br className="hidden sm:block" /> FAQs for Jaipur Buyers
              </h1>
              <p className="text-stone-500 text-base font-sans leading-relaxed max-w-xl">
                Everything you need to know before ordering custom wood
                furniture in Jaipur — costs, materials, timelines, and how to
                avoid common mistakes.
              </p>
            </header>
          </FadeSection>

          {/* ── Hero Image ── */}
          <FadeSection delay={80}>
            <figure className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Custom wooden furniture in an Indian home interior"
                className="w-full h-56 sm:h-72 object-cover"
                loading="eager"
              />
              <figcaption className="text-xs text-stone-400 font-sans px-1 pt-2 pb-1">
                Handcrafted wood furniture for Indian homes
              </figcaption>
            </figure>
          </FadeSection>

          {/* ── Highlight Tip Box ── */}
          <FadeSection delay={100}>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl px-5 py-4 font-sans">
              <p className="text-sm text-amber-900">
                <strong>Pro tip:</strong> Always visit the workshop before
                placing your order. A clean, organised workshop almost always
                produces cleaner, better-quality furniture.
              </p>
            </div>
          </FadeSection>

          {/* ── FAQ Sections ── */}
          {faqs.map((section, si) => (
            <FadeSection key={section.id} delay={si * 60}>
              <section
                aria-labelledby={`section-${section.id}`}
                className="space-y-4"
              >
                <h2
                  id={`section-${section.id}`}
                  className="text-xl font-bold text-stone-800 font-sans border-b border-stone-200 pb-3"
                >
                  {section.section}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <AccordionItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </section>
            </FadeSection>
          ))}

          {/* ── Second Image ── */}
          <FadeSection>
            <figure className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Indian carpenter crafting wooden furniture in a workshop"
                className="w-full h-52 sm:h-64 object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs text-stone-400 font-sans px-1 pt-2 pb-1">
                Skilled craftsmen at work in a Jaipur furniture workshop
              </figcaption>
            </figure>
          </FadeSection>

          {/* ── Final Advice Section ── */}
          <FadeSection>
            <section aria-labelledby="final-advice" className="space-y-4">
              <h2
                id="final-advice"
                className="text-xl font-bold text-stone-800 font-sans border-b border-stone-200 pb-3"
              >
                Final Advice
              </h2>
              <div className="space-y-4 font-sans text-stone-600 text-sm leading-relaxed">
                <p>
                  Finding the right maker for custom wood furniture in Jaipur
                  comes down to three things:{" "}
                  <strong className="text-stone-800">
                    trust, transparency, and craftsmanship
                  </strong>
                  . Don't rush the selection process — a well-made piece of
                  furniture will outlast most appliances in your home.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Always get the design, materials, timeline, and warranty in
                    writing.
                  </li>
                  <li>Visit the workshop at least once during production.</li>
                  <li>
                    Don't choose based on price alone — compare wood species and
                    joinery quality.
                  </li>
                  <li>
                    Pay in structured instalments, never full payment upfront.
                  </li>
                  <li>
                    Ask for references from past customers in Jaipur if ordering
                    a large project.
                  </li>
                </ul>
                <div className="bg-stone-100 rounded-xl px-5 py-4 mt-2">
                  <p className="text-stone-700">
                    <strong>Bottom line:</strong> Custom furniture is an
                    investment. Done right, it fits your space perfectly,
                    reflects your taste, and improves with age. Jaipur has some
                    of India's finest wood craftsmen — you just need to find the
                    right one.
                  </p>
                </div>
              </div>
            </section>
          </FadeSection>

          {/* ── CTA ── */}
          <FadeSection>
            <section
              aria-label="Get a free quote"
              className="rounded-2xl px-8 py-10 text-center space-y-5"
              style={{ backgroundColor: "#2c2420" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Get Your Custom Furniture
                <br className="hidden sm:block" /> Designed in Jaipur
              </h2>
              <p className="text-stone-300 font-sans text-sm max-w-sm mx-auto">
                Share your dimensions and ideas. We'll get back with a detailed
                quote within 24 hours — no obligation.
              </p>
              <a
                href="https://wa.me/919782545485?"
                className="inline-block bg-amber-500 hover:bg-amber-400 transition-colors text-white font-semibold font-sans text-sm px-8 py-3 rounded-full shadow-lg"
              >
                Get Free Quote
              </a>
            </section>
          </FadeSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
