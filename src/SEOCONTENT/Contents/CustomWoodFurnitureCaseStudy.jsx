import { useEffect, useRef } from "react";

const BEFORE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Empty room in Indian apartment",
    label: "Master Bedroom – Before",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    alt: "Bare walls and unfinished floor",
    label: "Living Area – Before",
  },
];

const AFTER_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    alt: "Indian bedroom with luxury wooden furniture",
    label: "Master Bedroom – After",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    alt: "Elegant wooden living room setup",
    label: "Living Area – After",
  },
];

const CARPENTER_IMAGE =
  "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=80";

function useFadeInOnScroll() {
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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }) {
  const ref = useFadeInOnScroll();
  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="flex-1 h-px bg-amber-200" />
      <div className="w-2 h-2 rounded-full bg-amber-400" />
      <div className="flex-1 h-px bg-amber-200" />
    </div>
  );
}

function HighlightBox({ children }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-6 py-5 my-6">
      <p className="text-amber-900 text-base leading-relaxed">{children}</p>
    </div>
  );
}

function ImageGrid({ images, label }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative group overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 rounded-b-2xl">
              <p className="text-white text-sm font-medium">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineStep({ phase, duration, details }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
        <div className="w-px flex-1 bg-amber-200 mt-1" />
      </div>
      <div className="pb-8">
        <p className="font-semibold text-stone-800 text-base">{phase}</p>
        <p className="text-amber-700 text-sm mb-1">{duration}</p>
        <p className="text-stone-600 text-sm leading-relaxed">{details}</p>
      </div>
    </div>
  );
}

export default function CustomWoodFurnitureCaseStudy() {
  useEffect(() => {
    document.title =
      "From Empty Room to Luxury Setup: Custom Wood Furniture Project in Jaipur";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "See how a Jaipur home was transformed with custom wood furniture. Real case study with materials, timeline, and before-after transformation.",
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "See how a Jaipur home was transformed with custom wood furniture. Real case study with materials, timeline, and before-after transformation.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "#faf8f4", fontFamily: "'Georgia', serif" }}
    >
      <div className="max-w-[900px] mx-auto space-y-12">
        {/* HERO */}
        <header className="text-center" style={{ opacity: 1 }}>
          <p className="text-amber-600 text-xs font-sans font-semibold uppercase tracking-widest mb-4">
            Case Study · Jaipur, Rajasthan
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
            From Empty Room to Luxury Setup:
            <br className="hidden md:block" />
            <span className="text-amber-700"> Custom Wood Furniture</span>{" "}
            Project in Jaipur
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            How we transformed a bare 3BHK in Vaishali Nagar with bespoke
            Sheesham furniture — designed, built, and installed in under 6
            weeks.
          </p>
          <div className="mt-8 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={CARPENTER_IMAGE}
              alt="Indian carpenter working on wood"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </header>

        <Divider />

        {/* CLIENT PROBLEM */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Client Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Empty space with no direction",
                body: "The client had recently moved into a newly constructed flat in Vaishali Nagar, Jaipur. Three rooms sat completely bare — no furniture, no storage, no warmth. The space felt clinical and intimidating.",
              },
              {
                title: "Why ready-made furniture failed",
                body: "The client visited multiple furniture showrooms in Jaipur. Nothing fit — either the dimensions were off for the irregularly shaped rooms, or the quality didn't justify the price. Flat-pack MDF units were ruled out immediately.",
              },
              {
                title: "Budget vs quality challenge",
                body: "With a budget of ₹2.8 lakh for three rooms, they needed smart allocation — luxury feel without overshooting. Factory-finished furniture at this budget meant compromise on wood quality and longevity.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100"
              >
                <h3 className="font-semibold text-stone-800 text-base mb-2 font-sans">
                  {card.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-sans">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </FadeSection>

        <Divider />

        {/* BEFORE CONDITION */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Space Condition (Before)
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 font-sans">
              <div>
                <h3 className="font-semibold text-stone-700 mb-1">
                  Room condition
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Raw plastered walls, unpolished marble flooring, and no
                  ceiling fixtures. The master bedroom (14×12 ft) and the
                  study-cum-guest room (10×10 ft) had awkward alcoves that made
                  standard furniture placement impossible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700 mb-1">
                  Layout challenges
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  A load-bearing column in the living room broke the natural
                  wall line. A mid-wall window in the bedroom eliminated the
                  obvious headboard wall. Every room had at least one constraint
                  that off-the-shelf furniture couldn't handle.
                </p>
              </div>
            </div>
            <ImageGrid images={BEFORE_IMAGES} label="Before" />
          </div>
        </FadeSection>

        <Divider />

        {/* CLIENT REQUIREMENTS */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Client Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-5 font-sans">
            {[
              {
                title: "Functional needs",
                points: [
                  "King-size bed with under-bed drawers",
                  "Wardrobe with loft storage (floor-to-ceiling)",
                  "TV unit with concealed wiring",
                  "Study table with bookshelf",
                  "Shoe rack + entryway console",
                ],
              },
              {
                title: "Design expectations",
                points: [
                  "Warm, natural wood tones",
                  "Clean lines — no ornate carvings",
                  "Cohesive look across all rooms",
                  "Handles in matte black or brass",
                  "No laminate or veneer surfaces",
                ],
              },
              {
                title: "Material preference",
                points: [
                  "Solid wood only — no MDF core",
                  "Preferred Sheesham (Indian Rosewood)",
                  "Natural oil or wax finish",
                  "Dovetail joints for drawers",
                  "Hardware sourced from Johari Bazaar",
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm"
              >
                <h3 className="font-semibold text-stone-800 mb-3">
                  {col.title}
                </h3>
                <ul className="space-y-1.5">
                  {col.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-stone-500 text-sm">
                      <span className="text-amber-500 mt-0.5">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeSection>

        <Divider />

        {/* OUR SOLUTION */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Our Solution
          </h2>
          <div className="space-y-6 font-sans">
            <div>
              <h3 className="font-semibold text-stone-700 mb-2">
                Custom planning
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                We conducted a full site survey and produced hand-drawn
                elevation plans for each wall. Rather than working from
                catalogue templates, our designer mapped every alcove, column,
                and window to build furniture that filled the space exactly —
                treating architectural quirks as opportunities rather than
                obstacles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-700 mb-2">
                Space optimization
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                The load-bearing column in the living room was wrapped in
                Sheesham panelling and transformed into an integrated TV unit
                with flanking shelves on both sides. The mid-wall bedroom window
                became a design feature — the headboard was split into two side
                panels with floating nightstands that left the window clear.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-700 mb-2">
                Design decisions
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                All pieces were designed with a consistent language: flat-panel
                doors, 18mm solid Sheesham slabs, concealed hinges, and matte
                black iron hardware. A warm natural oil finish was chosen over
                lacquer to preserve the grain and allow easy re-oiling in future
                years.
              </p>
            </div>
          </div>
          <HighlightBox>
            Every piece of custom wood furniture in Jaipur we build begins with
            a site visit — because a room is never just a set of measurements.
            It has personality, light, and constraints that only become visible
            in person.
          </HighlightBox>
        </FadeSection>

        <Divider />

        {/* MATERIALS */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Materials Used
          </h2>
          <div className="grid md:grid-cols-3 gap-5 font-sans">
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">
                Primary wood — Sheesham
              </h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                Grade-A Sheesham (Dalbergia sissoo) sourced from certified
                suppliers near Sanganer. Density: 770–880 kg/m³. Naturally
                resistant to termites. Air-dried for 8 weeks before cutting to
                ensure dimensional stability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
              <h3 className="font-semibold text-stone-700 mb-2">
                Additional materials
              </h3>
              <ul className="text-stone-500 text-sm space-y-1.5">
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> 12mm ply backing
                  panels
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> Soft-close drawer
                  slides (Hettich)
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> Concealed hinges
                  (Grass Austria)
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> 6mm toughened glass
                  shelves
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
              <h3 className="font-semibold text-stone-700 mb-2">
                Finish and hardware
              </h3>
              <ul className="text-stone-500 text-sm space-y-1.5">
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> Danish oil (2 coats)
                  + wax topcoat
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> Matte black iron
                  pulls — Johari Bazaar
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> Brass knobs for
                  wardrobe
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500">▸</span> LED strip lighting
                  inside cabinets
                </li>
              </ul>
            </div>
          </div>
        </FadeSection>

        <Divider />

        {/* TIMELINE */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-8">Timeline</h2>
          <div className="max-w-xl font-sans">
            <TimelineStep
              phase="Design phase"
              duration="Week 1 — Site survey, drawings, client approval"
              details="Site visit, detailed measurements, hand-drawn elevations, 2D plan shared with client via WhatsApp. One revision round. Final approval by Day 7."
            />
            <TimelineStep
              phase="Production phase"
              duration="Weeks 2–5 — Wood cutting, assembly, finishing"
              details="Sheesham planks air-dried, then machine-cut at our Sanganer workshop. Mortise-and-tenon joinery for main frames, dovetails for all drawers. Danish oil finish applied in two coats with 48-hour drying between coats."
            />
            <TimelineStep
              phase="Delivery and installation"
              duration="Week 6 — Transport, fitting, final touch-up"
              details="All pieces delivered in blanket-wrapped panels and assembled on-site. Wall-mounted units anchored with masonry plugs into RCC beams. Punch-list snagging resolved within 48 hours of installation."
            />
          </div>
        </FadeSection>

        <Divider />

        {/* FINAL RESULT */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            Final Result
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 font-sans">
              <div>
                <h3 className="font-semibold text-stone-700 mb-1">
                  Transformation summary
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Three bare rooms became a cohesive, warm home in under six
                  weeks. The Sheesham grain brought natural character that no
                  factory finish can replicate. The client described it as
                  "finally feeling like home" at the handover walkthrough.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700 mb-1">
                  Functional improvement
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Under-bed storage alone created 14 cubic feet of new space.
                  The floor-to-ceiling wardrobe eliminated the need for an
                  additional chest of drawers. The integrated TV unit hid all
                  wiring and added 8 open shelves for display.
                </p>
              </div>
            </div>
            <ImageGrid images={AFTER_IMAGES} label="After" />
          </div>

          {/* Before/After comparison row */}
          <div className="mt-8 grid grid-cols-2 gap-4 font-sans">
            <div className="rounded-2xl overflow-hidden border-2 border-stone-200 relative">
              <img
                src={BEFORE_IMAGES[0].src}
                alt="Before transformation"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-stone-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                BEFORE
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-amber-400 relative">
              <img
                src={AFTER_IMAGES[0].src}
                alt="After transformation"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                AFTER
              </div>
            </div>
          </div>
        </FadeSection>

        <Divider />

        {/* KEY TAKEAWAYS */}
        <FadeSection>
          <h2 className="text-2xl font-bold text-stone-800 mb-5">
            Key Takeaways
          </h2>
          <ul className="space-y-4 font-sans">
            {[
              "Custom doesn't always mean expensive — smart material choices and a detailed brief can deliver luxury results within a mid-range budget.",
              "Site constraints are design opportunities. The column, the awkward window, the irregular alcove — each became a feature rather than a problem.",
              "Sheesham (Indian Rosewood) remains the best value proposition for solid wood furniture in Jaipur: durable, beautiful, locally available, and termite-resistant.",
              "The design-to-installation timeline matters. Six weeks is achievable with clear approvals and dedicated workshop capacity — no cutting corners on drying or finishing time.",
              "Custom wood furniture in Jaipur built to site dimensions will outlast ready-made pieces by 15–20 years, making it the more economical long-term choice.",
            ].map((pt, i) => (
              <li
                key={i}
                className="flex gap-4 bg-white rounded-xl px-5 py-4 border border-amber-100 shadow-sm"
              >
                <span className="text-amber-500 font-bold text-base mt-0.5 flex-shrink-0">
                  0{i + 1}
                </span>
                <p className="text-stone-600 text-sm leading-relaxed">{pt}</p>
              </li>
            ))}
          </ul>
        </FadeSection>

        {/* CTA */}
        <FadeSection>
          <div className="bg-stone-900 rounded-3xl px-8 py-14 text-center">
            <p className="text-amber-400 text-xs font-sans font-semibold uppercase tracking-widest mb-4">
              Ready to start?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
              Get Your Custom Furniture
              <br />
              Designed in Jaipur
            </h2>
            <p className="text-stone-300 text-base max-w-lg mx-auto mb-8 font-sans leading-relaxed">
              We visit your site, understand your space, and deliver furniture
              built exactly for your home — in solid Sheesham wood, on time,
              within budget. No catalogue. No compromises.
            </p>
            <a
              href="https://wa.me/919782545485?
"
              className="inline-block bg-amber-500 hover:bg-amber-400 transition-colors text-stone-900 font-bold font-sans text-base px-10 py-4 rounded-full shadow-lg"
            >
              Get Free Quote
            </a>
            <p className="text-stone-500 text-xs mt-4 font-sans">
              Free site visit · No obligation · Jaipur & NCR
            </p>
          </div>
        </FadeSection>
      </div>
    </div>
  );
}
