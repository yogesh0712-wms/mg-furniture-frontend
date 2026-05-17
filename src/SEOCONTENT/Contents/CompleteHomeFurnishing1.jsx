import { useState, useEffect } from "react";
import Header, { Footer } from "../../Header";

// ============================================================
// COLOR GUIDE (warm, earthy, Indian home feel)
// bg-[#FAF7F2] = soft off-white background
// text-[#2C2018] = dark charcoal text
// bg-[#8B5E3C] = warm brown (buttons, accents)
// bg-[#F0E8DC] = light beige (section backgrounds)
// ============================================================

// --- DATA ARRAYS (edit these to change page content) ---

const trustItems = [
  "Custom Furniture",
  "Space Optimization",
  "Modular Setups",
  "Delivery & Installation",
  "Jaipur Craftsmanship",
];

const steps = [
  {
    icon: "📐",
    title: "Space Consultation",
    desc: "We visit your home, measure every corner, and understand how your family actually lives.",
  },
  {
    icon: "✏️",
    title: "Furniture Planning",
    desc: "Our designers create a layout that fits your space, your style, and your budget.",
  },
  {
    icon: "🪚",
    title: "Handcrafted Production",
    desc: "Skilled Jaipur craftsmen build every piece with quality wood and careful attention.",
  },
  {
    icon: "🚚",
    title: "Delivery & Installation",
    desc: "We deliver, assemble, and install everything. You just walk in and enjoy your home.",
  },
];

const rooms = [
  {
    title: "Living Room",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    desc: "Your living room is where your family gathers. We design sofas, TV units, and storage that make the space feel warm and organized.",
    points: [
      "Custom sofa sets",
      "TV & entertainment units",
      "Storage cabinets",
      "Center tables",
    ],
  },
  {
    title: "Bedroom",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80",
    desc: "A bedroom should feel calm and personal. We design beds, wardrobes, and study areas that fit your room perfectly.",
    points: [
      "Custom beds with storage",
      "Built-in wardrobes",
      "Dressing units",
      "Study tables",
    ],
  },
  {
    title: "Modular Kitchen",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    desc: "Indian kitchens need smart storage. We plan every shelf and drawer so cooking feels easy and organized.",
    points: [
      "L-shaped & parallel layouts",
      "Tall units & pantry",
      "Chimney & appliance fit",
      "Easy-clean surfaces",
    ],
  },
  {
    title: "Kids Room",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80",
    desc: "Safe, fun, and practical. We design kids' rooms that grow with your child, with storage for toys, books, and more.",
    points: [
      "Bunk beds with storage",
      "Study & hobby areas",
      "Colorful wardrobe options",
      "Safe rounded edges",
    ],
  },
  {
    title: "Home Office",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80",
    desc: "Work from home comfortably with a dedicated workspace that keeps you focused and organized.",
    points: [
      "Custom desks",
      "Overhead shelves",
      "Cable management",
      "Ergonomic setup planning",
    ],
  },
];

const spaceSaving = [
  {
    icon: "🛏️",
    title: "Beds with Drawers",
    desc: "Use the space under your bed for extra storage.",
  },
  {
    icon: "📚",
    title: "Wall-Mounted Shelves",
    desc: "Keep floors clear with shelves on every wall.",
  },
  {
    icon: "🚪",
    title: "Sliding Wardrobes",
    desc: "Save swing space in compact bedrooms.",
  },
  {
    icon: "🍽️",
    title: "Foldable Dining",
    desc: "Dining tables that fold away when not needed.",
  },
  {
    icon: "📦",
    title: "Hidden Storage",
    desc: "Ottoman seats and stair drawers for extra space.",
  },
  {
    icon: "🪑",
    title: "Multi-Use Furniture",
    desc: "One piece that serves two or three purposes.",
  },
];

const whyUs = [
  {
    icon: "📏",
    point: "Built Around Your Space",
    desc: "Every piece is measured and made for your exact room.",
  },
  {
    icon: "📦",
    point: "Better Storage Planning",
    desc: "We think about storage from the very first step.",
  },
  {
    icon: "🏗️",
    point: "Long-Term Durability",
    desc: "Quality materials that last 10+ years without problems.",
  },
  {
    icon: "👷",
    point: "One Team, Start to Finish",
    desc: "Same team handles design, production, and installation.",
  },
  {
    icon: "🎨",
    point: "Personalized Furniture",
    desc: "Color, finish, size — everything is your choice.",
  },
  {
    icon: "📍",
    point: "Local Jaipur Expertise",
    desc: "We know Jaipur homes, apartments, and builders well.",
  },
];

const faqs = [
  {
    q: "What is included in complete home furnishing?",
    a: "We cover everything — living room, bedroom, kitchen, kids room, and home office. From design to delivery and installation, it's all handled by us.",
  },
  {
    q: "Do you provide modular furniture in Jaipur?",
    a: "Yes! We specialize in modular wardrobes, kitchens, TV units, and storage systems designed for Jaipur homes.",
  },
  {
    q: "Can you furnish compact apartments?",
    a: "Absolutely. We have extensive experience with compact flats in Jaipur. Space-saving and multi-use furniture is one of our strengths.",
  },
  {
    q: "Do you offer custom wardrobes and TV units?",
    a: "Yes, all our wardrobes and TV units are fully custom — designed for your wall size, storage needs, and style preference.",
  },
  {
    q: "Is installation included?",
    a: "Yes. Delivery, assembly, and installation are included in every project. We also do a final walkthrough before we leave.",
  },
];

// --- SMALL REUSABLE COMPONENTS ---

// Simple animated card on hover
function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-[#EDE4D8] transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

// FAQ item (open/close on click)
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EDE4D8] py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <span className="font-semibold text-[#2C2018] text-base">{q}</span>
        <span className="text-[#8B5E3C] text-xl flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="mt-3 text-[#5C4A38] text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---

export default function CompleteHomeFurnishing1() {
  useEffect(() => {
    document.title =
      "Complete Home Furnishing Services in Jaipur | Custom Furniture Experts";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Transform your home with custom home furnishing services in Jaipur. From modular furniture and space-saving solutions to complete room furnishing, get furniture designed around your lifestyle.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Transform your home with custom home furnishing services in Jaipur. From modular furniture and space-saving solutions to complete room furnishing, get furniture designed around your lifestyle.";
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-[#FAF7F2] text-[#2C2018] font-sans">
        {/* ===== SEO META (for reference — add in HTML head in real project) =====
        Title: Complete Home Furnishing Services in Jaipur | Custom Furniture Experts
        Description: Transform your home with custom home furnishing services in Jaipur.
        Slug: /complete-home-furnishing-jaipur
      */}

        {/* ===== 1. HERO SECTION ===== */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center gap-10 px-6 py-20 max-w-6xl mx-auto">
          {/* Left: Text */}
          <div className="flex-1 space-y-6">
            {/* Small badge */}
            <span className="inline-block bg-[#F0E8DC] text-[#8B5E3C] text-sm font-medium px-4 py-1.5 rounded-full">
              🏡 Jaipur's Home Furnishing
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#2C2018]">
              Furniture Designed Around{" "}
              <span className="text-[#8B5E3C]">Real Homes</span> in Jaipur
            </h1>

            <p className="text-[#5C4A38] text-lg leading-relaxed max-w-lg">
              Custom home furnishing solutions crafted for modern families,
              compact apartments, growing homes, and beautifully organized
              interiors.
            </p>

            <a
              href="https://wa.me/919?text=Hello%20MG%20Furniture%2C%20I%20am%20interested%20in%20complete%20home%20furnishing%20services%20in%20Jaipur.%20Please%20share%20details."
              className="inline-block bg-[#8B5E3C] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#6F4A2F] transition-colors duration-200"
            >
              Book Home Furnishing Consultation in Jaipur
            </a>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                "500+ Homes Furnished",
                "12+ Years Experience",
                "Jaipur Based",
              ].map((stat) => (
                <div
                  key={stat}
                  className="flex items-center gap-2 text-sm text-[#5C4A38]"
                >
                  <span className="w-2 h-2 bg-[#8B5E3C] rounded-full"></span>
                  {stat}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Beautiful Indian living room with custom furniture in Jaipur"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              loading="lazy"
            />
          </div>
        </section>

        {/* ===== 2. TRUST STRIP ===== */}
        <section className="bg-[#8B5E3C] py-6 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
            {trustItems.map((item) => (
              <span
                key={item}
                className="text-white font-medium text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-[#F0E8DC] rounded-full"></span>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ===== 3. ABOUT / STORY SECTION ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80"
                alt="Indian family in a well-furnished Jaipur home"
                className="w-full h-[400px] object-cover rounded-3xl shadow-md"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="flex-1 space-y-5">
              <span className="text-[#8B5E3C] text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Ready-Made Furniture Doesn't Fit Jaipur Homes
              </h2>
              <p className="text-[#5C4A38] leading-relaxed">
                Most Jaipur apartments have awkward corners, low ceilings, and
                unusual room sizes. Ready-made furniture from showrooms rarely
                fits well — leaving wasted space, cluttered rooms, and homes
                that never feel quite right.
              </p>
              <p className="text-[#5C4A38] leading-relaxed">
                We started our studio because we saw this problem in hundreds of
                homes. Families spending lakhs on furniture that didn't actually
                solve their storage problems or match their space. We believe
                furniture should be built around your life — not the other way
                around.
              </p>
              <p className="text-[#5C4A38] leading-relaxed">
                Every project we take starts with a home visit. We measure, we
                listen, we understand. Then we build.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 4. PROCESS SECTION ===== */}
        <section className="bg-[#F0E8DC] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#8B5E3C] text-sm font-semibold uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Simple Process, Beautiful Results
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <Card key={i}>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-xs font-semibold text-[#8B5E3C] mb-1">
                    Step {i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2C2018]">
                    {step.title}
                  </h3>
                  <p className="text-[#5C4A38] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. ROOM-WISE FURNISHING ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-3">
            <span className="text-[#8B5E3C] text-sm font-semibold uppercase tracking-wider">
              Room by Room
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Furnishing Every Corner of Your Home
            </h2>
          </div>

          {rooms.map((room, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src={room.img}
                  alt={`${room.title} custom furniture Jaipur`}
                  className="w-full h-[320px] object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#2C2018]">
                  {room.title}
                </h3>
                <p className="text-[#5C4A38] leading-relaxed">{room.desc}</p>
                <ul className="space-y-2">
                  {room.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-[#5C4A38] text-sm"
                    >
                      <span className="w-2 h-2 bg-[#8B5E3C] rounded-full flex-shrink-0"></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* ===== 6. SPACE SAVING SECTION ===== */}
        <section className="bg-[#F0E8DC] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#8B5E3C] text-sm font-semibold uppercase tracking-wider">
                For Compact Homes
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Making Small Spaces Feel Bigger
              </h2>
              <p className="text-[#5C4A38] max-w-xl mx-auto">
                Many Jaipur apartments are compact. We use smart design to
                double your storage and open up your floor space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaceSaving.map((item, i) => (
                <Card key={i}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-base mb-1 text-[#2C2018]">
                    {item.title}
                  </h3>
                  <p className="text-[#5C4A38] text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. MODULAR FURNITURE SECTION ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[#8B5E3C] text-sm font-semibold uppercase tracking-wider">
              Modular Furniture
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Flexible Furniture for Modern Homes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚪",
                title: "Modular Wardrobes",
                desc: "Floor-to-ceiling wardrobes with custom compartments for clothes, shoes, and accessories.",
              },
              {
                icon: "📺",
                title: "TV Units",
                desc: "Wall-mounted or floor TV units with built-in storage and cable management.",
              },
              {
                icon: "📦",
                title: "Storage Systems",
                desc: "Dedicated storage units for every room — hallway, bedroom, kitchen, or study.",
              },
              {
                icon: "🔄",
                title: "Expandable Furniture",
                desc: "Furniture that grows with your family — extendable tables, convertible beds, and more.",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-[#5C4A38] text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== 8. LOCAL CRAFTSMANSHIP SECTION ===== */}
        <section className="bg-[#2C2018] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-5">
              <span className="text-[#D4A97A] text-sm font-semibold uppercase tracking-wider">
                Made in Jaipur
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Handcrafted by Jaipur's Skilled Craftsmen
              </h2>
              <p className="text-[#C8B8A8] leading-relaxed">
                Jaipur has a deep tradition of fine craftsmanship. Our furniture
                is built by experienced local artisans who have been working
                with wood for generations. Every joint, every finish, every edge
                is done with care.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  "Premium Wood Selection",
                  "Custom Finishing",
                  "Precise Measurements",
                  "Quality Hardware",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[#D4A97A] text-sm"
                  >
                    <span>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Handcrafted wooden furniture Jaipur craftsman"
                className="w-full h-[360px] object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ===== 9. WHY CHOOSE US ===== */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[#8B5E3C] text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              The Difference of Custom Furniture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <Card key={i}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-base mb-1 text-[#2C2018]">
                  {item.point}
                </h3>
                <p className="text-[#5C4A38] text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== 10. FINAL CTA BANNER ===== */}
        <section
          id="contact"
          className="bg-[#8B5E3C] text-white py-20 px-6 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Let Your Home Feel Designed for Your Life
            </h2>
            <p className="text-[#F0E8DC] text-lg leading-relaxed">
              Furniture should make everyday living easier, warmer, and more
              organized. Create a home that truly fits your lifestyle.
            </p>
            <a
              href="https://wa.me/919?text=Hello%20MG%20Furniture%2C%20I%20am%20interested%20in%20complete%20home%20furnishing%20services%20in%20Jaipur.%20Please%20share%20details."
              className="inline-block bg-white text-[#8B5E3C] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#F0E8DC] transition-colors duration-200"
            >
              Book Home Furnishing Consultation in Jaipur
            </a>
          </div>
        </section>

        {/* ===== 11. FAQ SECTION ===== */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-[#5C4A38]">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EDE4D8]">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ===== 12. FOOTER CTA STRIP ===== */}
        <footer className="bg-[#2C2018] text-[#C8B8A8] text-center py-6 px-6 text-sm">
          Custom Furniture & Home Furnishing Services Across Jaipur
        </footer>
      </div>
      <Footer />
    </div>
  );
}
