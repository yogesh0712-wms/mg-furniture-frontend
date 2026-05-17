import Header from "../Header";
import { Footer } from "../Header";
import { useState, useEffect } from "react";

const pillars = [
  {
    id: 1,
    title: "Custom Wood Furniture in Jaipur",
    description:
      "Everything you need to know about getting bespoke wooden furniture crafted locally — from teak to sheesham.",
    badge: "Complete Guide",
    badgeColor: "bg-amber-100 text-amber-800",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    slug: "/blogs/custom-wood-furniture-in-jaipur",
  },
  {
    id: 2,
    title: "Furniture Repair & Restoration in Jaipur",
    description:
      "Breathe new life into old, damaged, or worn-out furniture with expert repair services available across Jaipur.",
    badge: "Local Guide",
    badgeColor: "bg-green-100 text-green-800",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    slug: "/blogs/complete-home-furnishing-in-jaipur",
  },
  {
    id: 3,
    title: "Modular Furniture Solutions Jaipur",
    description:
      "Flexible, space-saving modular systems for modern homes and apartments — designed and installed in Jaipur.",
    badge: "Buying Guide",
    badgeColor: "bg-blue-100 text-blue-800",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    slug: "#modular-furniture",
  },
  {
    id: 4,
    title: "Office Furniture Solutions for Jaipur Businesses",
    description:
      "Ergonomic desks, workstations, and storage systems tailored for startups and corporate offices in Jaipur.",
    badge: "Guide",
    badgeColor: "bg-purple-100 text-purple-800",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    slug: "#office-furniture",
  },
  {
    id: 5,
    title: "Bedroom Furniture Design in Jaipur",
    description:
      "From king-size beds to fitted wardrobes — explore custom bedroom furniture options crafted locally.",
    badge: "Buying Guide",
    badgeColor: "bg-pink-100 text-pink-800",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
    slug: "#bedroom-furniture",
  },
  {
    id: 6,
    title: "Furniture Installation Services Jaipur",
    description:
      "Professional, on-time installation of modular kitchens, wardrobes, and office setups across all Jaipur areas.",
    badge: "Service Guide",
    badgeColor: "bg-teal-100 text-teal-800",
    image:
      "https://images.unsplash.com/photo-1416339698674-4f118dd3388b?w=600&q=80",
    slug: "#installation-services",
  },
];

const allPosts = [
  {
    id: 1,
    category: "Guides",
    title:
      "How to Order Custom Wood Furniture Near You in Jaipur (Step-by-Step Guide)",
    description:
      "Learn how to order custom wood furniture near you in Jaipur step by step. From measuring space to choosing materials, pricing, and delivery—complete practical guide.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    slug: "http://localhost:3001/blogs/custom-wood-furniture-in-jaipur/custom-wood-furniture-guide",
  },
  {
    id: 2,
    category: "Tutorials",
    title: "DIY Furniture Touch-Up: Fix Scratches & Dents at Home",
    description:
      "Simple, budget-friendly techniques to restore minor damage to wooden furniture without calling a professional.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    slug: "#diy-touchup",
  },
  {
    id: 3,
    category: "Case Studies",
    title: "How We Furnished a 3BHK Apartment in Vaishali Nagar, Jaipur",
    description:
      "A full project walkthrough — from concept to delivery — for a modern apartment in one of Jaipur's busiest residential zones.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    slug: "#case-study-vaishali",
  },
  {
    id: 4,
    category: "FAQs",
    title: "10 Most Common Questions About Custom Furniture Orders in Jaipur",
    description:
      "Timeline, pricing, wood quality, warranty — we answer the questions our Jaipur customers ask most often.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    slug: "#faqs",
  },
  {
    id: 5,
    category: "Checklists",
    title: "The Ultimate Checklist Before Ordering Modular Kitchen Furniture",
    description:
      "Measurements, material specs, layout planning, and vendor questions — everything you need before you sign.",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    slug: "#kitchen-checklist",
  },
  {
    id: 6,
    category: "Guides",
    title: "Vastu-Friendly Furniture Placement for Jaipur Homes",
    description:
      "Align your furniture layout with Vastu Shastra principles — a practical guide for homes across Jaipur.",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80",
    slug: "#vastu-furniture",
  },
  {
    id: 7,
    category: "Tutorials",
    title: "How to Measure Your Room for Custom Furniture: Step-by-Step",
    description:
      "Never order the wrong size again. A visual, step-by-step guide to accurate room measurement before placing a furniture order.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    slug: "#measure-room",
  },
  {
    id: 8,
    category: "Case Studies",
    title: "Office Makeover: A Jaipur Startup's Ergonomic Furniture Journey",
    description:
      "How a growing tech startup in Malviya Nagar, Jaipur upgraded to ergonomic workstations and improved productivity.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    slug: "#office-case-study",
  },
];

const CATEGORIES = [
  "All",
  "Guides",
  "Tutorials",
  "Case Studies",
  "FAQs",
  "Checklists",
];

const internalLinks = [
  {
    label: "Custom Wood Furniture in Jaipur",
    href: "/blogs/custom-wood-furniture-in-jaipur",
  },
  { label: "Furniture Repair & Restoration Jaipur", href: "#repair" },
  { label: "Modular Kitchen Furniture Jaipur", href: "#modular-kitchen" },
  { label: "Office Furniture Solutions Jaipur", href: "#office" },
  { label: "Bedroom Furniture Design Jaipur", href: "#bedroom" },
  { label: "Furniture Installation Services Jaipur", href: "#installation" },
  { label: "Wardrobe & Storage Solutions Jaipur", href: "#wardrobe" },
  { label: "Living Room Furniture Jaipur", href: "#living-room" },
];

const areas = [
  "Vaishali Nagar",
  "Mansarovar",
  "Jagatpura",
  "Malviya Nagar",
  "C-Scheme",
  "Bani Park",
  "Adarsh Nagar",
  "Tonk Road",
  "Sitapura",
  "Sanganer",
];
const BlogPage = () => {
  useEffect(() => {
    // Set title
    document.title =
      "How to Order Custom Wood Furniture Near You in Jaipur (Step-by-Step Guide)";

    // Get or create meta description
    let meta = document.querySelector("meta[name='description']");

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    // Set content
    meta.setAttribute(
      "content",
      "Learn how to order custom wood furniture in Jaipur step by step. From measuring space to pricing, materials, and delivery—complete practical guide.",
    );
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const categoryColors = {
    Guides: "bg-amber-100 text-amber-800",
    Tutorials: "bg-blue-100 text-blue-800",
    "Case Studies": "bg-purple-100 text-purple-800",
    FAQs: "bg-green-100 text-green-800",
    Checklists: "bg-teal-100 text-teal-800",
  };
  return (
    <div>
      <Header />

      <div>
        <main className="bg-stone-50 font-sans text-stone-800">
          {/* ── 1. BLOG HERO ── */}
          <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex items-center gap-2 text-sm text-stone-500">
                  <li>
                    <a
                      href="/"
                      className="hover:text-amber-700 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li className="text-stone-300">/</li>
                  <li className="text-amber-700 font-medium">Blog</li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  Resources &amp; Guides
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-5">
                  Blog &amp; Resources for{" "}
                  <span className="text-amber-700">Custom Furniture</span> in
                  Jaipur
                </h1>
                <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
                  Your go-to knowledge hub for everything related to{" "}
                  <strong className="text-stone-800">
                    custom wood furniture in Jaipur
                  </strong>{" "}
                  — from buying guides and repair tips to case studies,
                  checklists, and local area insights. Explore pillar topics or
                  browse by category below.
                </p>
              </div>
            </div>
          </section>

          {/* ── 2. FEATURED PILLAR SECTION ── */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Explore Pillar Topics
              </h2>
              <p className="text-stone-500 text-base max-w-xl">
                Deep-dive guides covering every major furniture topic relevant
                to Jaipur homeowners and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="pillar-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={pillar.image}
                      alt={`${pillar.title} — custom furniture in Jaipur`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${pillar.badgeColor}`}
                    >
                      {pillar.badge}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-4 line-clamp-2">
                      {pillar.description}
                    </p>
                    <a
                      href={pillar.slug}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
                      aria-label={`Explore topic: ${pillar.title}`}
                    >
                      Explore Topic
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── 3. CONTENT CATEGORIES + CARD GRID ── */}
          <section className="bg-white border-y border-stone-200 py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  Browse All Articles
                </h2>
                <p className="text-stone-500 text-base max-w-xl">
                  Filter by content type to find exactly what you need — guides,
                  tutorials, FAQs, and more.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div
                className="flex flex-wrap gap-2 mb-10"
                role="tablist"
                aria-label="Content categories"
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                        : "bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-400 hover:text-amber-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Content Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative overflow-hidden h-44">
                      <img
                        src={post.image}
                        alt={`${post.title} — furniture tips for Jaipur`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span
                        className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          categoryColors[post.category] ||
                          "bg-stone-100 text-stone-700"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-bold text-stone-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed flex-1 mb-3 line-clamp-3">
                        {post.description}
                      </p>
                      <a
                        href={post.slug}
                        className="text-xs font-semibold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 transition-colors"
                        aria-label={`Read more: ${post.title}`}
                      >
                        Read More
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <p className="text-center text-stone-400 py-10">
                  No articles found in this category yet.
                </p>
              )}
            </div>
          </section>

          {/* ── 4. INTERNAL LINKING SECTION ── */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="bg-stone-900 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Explore All Topics
              </h2>
              <p className="text-stone-400 text-sm mb-8 max-w-lg">
                Navigate our complete furniture knowledge base — each link takes
                you to an in-depth pillar page covering that subject in full.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {internalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2.5 bg-stone-800 hover:bg-amber-600 rounded-xl px-4 py-3 text-sm text-stone-300 hover:text-white font-medium transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:bg-white flex-shrink-0 transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── 5. LOCAL SEO BLOCK ── */}
          <section className="bg-amber-50 border-y border-amber-100 py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Proudly Local — Jaipur Based
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                    Serving Jaipur &amp; All Nearby Areas
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    We are Jaipur's trusted name for{" "}
                    <strong>custom wood furniture</strong>, modular solutions,
                    and professional furniture installation. Whether you're in
                    the heart of Jaipur or in a growing residential colony, our
                    craftsmen bring your vision to life — on time and within
                    budget.
                  </p>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    From compact apartments in <strong>Vaishali Nagar</strong>{" "}
                    to spacious villas in <strong>Bani Park</strong>, and from
                    commercial offices in <strong>C-Scheme</strong> to new
                    developments in <strong>Jagatpura</strong> and{" "}
                    <strong>Sitapura</strong> — our furniture solutions are
                    built for Jaipur life.
                  </p>
                  <p className="text-sm text-stone-500">
                    We also serve homeowners and businesses in{" "}
                    <strong>Mansarovar</strong>, <strong>Malviya Nagar</strong>,{" "}
                    <strong>Adarsh Nagar</strong>, <strong>Tonk Road</strong>,{" "}
                    <strong>Sanganer</strong>, and all surrounding localities
                    across the Pink City.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">
                    Areas We Cover in Jaipur
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {areas.map((area) => (
                      <span
                        key={area}
                        className="bg-white border border-amber-200 text-amber-800 text-sm px-3 py-1.5 rounded-full font-medium hover:bg-amber-600 hover:text-white hover:border-amber-600 cursor-default transition-all duration-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 bg-white rounded-2xl border border-amber-200 p-5">
                    <p className="text-sm text-stone-600 leading-relaxed">
                      <strong className="text-stone-900">
                        Jaipur-made, Jaipur-delivered.
                      </strong>{" "}
                      All our furniture is crafted locally by skilled Jaipur
                      artisans using sustainably sourced wood. We take pride in
                      supporting the city's rich woodworking heritage while
                      delivering modern, functional furniture design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 6. CTA SECTION ── */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl overflow-hidden">
              <div className="relative px-8 md:px-14 py-14 text-center">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                  Let's Build Something Great
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Need Custom Furniture in Jaipur?
                </h2>
                <p className="text-amber-100 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  From single pieces to full home interiors — our Jaipur-based
                  craftsmen are ready to turn your ideas into handcrafted
                  reality. Get a free consultation today.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {/* Call Now */}
                  <a
                    href="tel:+919999999999"
                    className="inline-flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    aria-label="Call us now"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>

                  {/* Get Quote */}
                  <a
                    href="#get-quote"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                    aria-label="Get a free quote for custom furniture in Jaipur"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
