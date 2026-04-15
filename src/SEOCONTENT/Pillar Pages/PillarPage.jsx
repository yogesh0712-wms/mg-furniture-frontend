import { useState } from "react";
import { Link } from "react-router-dom";

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, className = "w-6 h-6" }) => {
  const paths = {
    ruler: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 12h18M3 17h18"
        />
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    wood: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 10h16M4 14h10"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 14l2 2-2 2" />
      </>
    ),
    home: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
    office: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </>
    ),
    wrench: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
    ),
    truck: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.5.5M13 16H9m4 0h5.5l.5-4-3-3H13V6"
        />
      </>
    ),
    star: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    ),
    clock: (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </>
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    price: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    chat: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    pencil: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    ),
    check: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    ),
    location: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    doc: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
    arrow: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    ),
    whatsapp: null,
  };
  if (name === "whatsapp")
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      {paths[name]}
    </svg>
  );
};

// ─── CONTENT CARD ─────────────────────────────────────────────────────────────
const categoryColors = {
  Guide: "bg-amber-100 text-amber-800",
  Tutorial: "bg-blue-100 text-blue-800",
  "Case Study": "bg-purple-100 text-purple-800",
  FAQ: "bg-green-100 text-green-800",
  Checklist: "bg-teal-100 text-teal-800",
};

const ContentCard = ({ image, category, title, description, link }) => (
  <article className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col">
    <div className="relative overflow-hidden h-44">
      <img
        src={image}
        alt={`${title} — furniture guide Jaipur`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <span
        className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[category] || "bg-stone-100 text-stone-700"}`}
      >
        {category}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-sm font-bold text-stone-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="text-xs text-stone-500 leading-relaxed flex-1 mb-4 line-clamp-3">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors"
      >
        Read More <Icon name="arrow" className="w-3.5 h-3.5" />
      </Link>
    </div>
  </article>
);

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-amber-300 bg-amber-50/40" : "border-stone-200 bg-white"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-stone-900">{question}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${open ? "bg-amber-600 border-amber-600 text-white rotate-45" : "border-stone-300 text-stone-400"}`}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-stone-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// ─── MAIN PILLAR PAGE COMPONENT ───────────────────────────────────────────────
export default function PillarPage({
  title,
  keyword,
  introParagraph,
  benefits,
  services,
  processSteps,
  contentCards,
  trustPoints,
  faqs,
  areas,
  ctaPhone,
  ctaWhatsApp,
}) {
  return (
    <main className="bg-stone-50 text-stone-800 font-sans">
      {/* ── 1. INTRO SECTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Jaipur's Trusted Experts
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-5">
              {title}
            </h1>
            <p className="text-base text-stone-600 leading-relaxed mb-7">
              {introParagraph}
            </p>
            <ul className="space-y-2.5">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-stone-700"
                >
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <Icon name="check" className="w-3 h-3 text-amber-700" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-amber-100/40 rounded-3xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt={`${keyword} — custom furniture crafted in Jaipur`}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl border border-stone-200 shadow-lg px-5 py-4">
              <p className="text-2xl font-bold text-amber-700">500+</p>
              <p className="text-xs text-stone-500 font-medium">
                Happy clients across Jaipur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES / SOLUTIONS ── */}
      <section className="bg-white border-y border-stone-200 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Our {keyword} Services
            </h2>
            <p className="text-stone-500 text-sm max-w-xl mx-auto">
              End-to-end solutions crafted for Jaipur homes, offices, and
              commercial spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Icon name={s.icon} className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS SECTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
            How It Works
          </h2>
          <p className="text-stone-500 text-sm max-w-xl mx-auto">
            Our streamlined process ensures you get the perfect{" "}
            {keyword.toLowerCase()} — on time, every time.
          </p>
        </div>
        <div className="relative">
          {/* connector line – desktop */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-amber-200 z-0"
            style={{ margin: "0 calc(100%/(2*" + processSteps.length + "))" }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-amber-300 flex flex-col items-center justify-center mb-4 shadow-sm group-hover:border-amber-500 group-hover:bg-amber-50 transition-all duration-300">
                  <span className="text-xs font-semibold text-amber-500 leading-none">
                    Step
                  </span>
                  <span className="text-2xl font-bold text-amber-700 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONTENT HUB ── */}
      <section className="bg-stone-900 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                Knowledge Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Guides, Tips &amp; Case Studies
              </h2>
              <p className="text-stone-400 text-sm mt-1 max-w-lg">
                Expert resources to help you make smarter decisions about{" "}
                {keyword.toLowerCase()} in Jaipur.
              </p>
            </div>
            <a
              href="/blog"
              className="flex-shrink-0 text-sm font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
            >
              View All Articles <Icon name="arrow" className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contentCards.map((card, i) => (
              <ContentCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TRUST / WHY US ── */}
      <section className="bg-white border-y border-stone-200 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              Why Jaipur Chooses Us
            </h2>
            <p className="text-stone-500 text-sm max-w-lg mx-auto">
              Thousands of Jaipur families and businesses trust us for quality,
              reliability, and craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {trustPoints.map((tp, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-amber-200 hover:bg-amber-50/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-3 group-hover:bg-amber-200 transition-colors">
                  <Icon name={tp.icon} className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-sm font-bold text-stone-900 mb-1">
                  {tp.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {tp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ SECTION ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-500 text-sm max-w-lg mx-auto">
            Common questions about {keyword.toLowerCase()} — answered by our
            Jaipur team.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* ── 7. LOCAL SEO SECTION ── */}
      <section className="bg-amber-50 border-y border-amber-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="location" className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                  Locally Rooted
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                Serving Jaipur &amp; All Nearby Areas
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                We are Jaipur's homegrown {keyword.toLowerCase()} experts —
                proudly serving homeowners, architects, and businesses across
                the Pink City. Whether you're redecorating a flat in{" "}
                <strong>Vaishali Nagar</strong> or furnishing a new office in{" "}
                <strong>Malviya Nagar</strong>, our team delivers quality
                craftsmanship with Jaipur's famous artisan tradition at its
                heart.
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">
                From the established colonies of <strong>Mansarovar</strong> and{" "}
                <strong>Bani Park</strong> to the growing developments in{" "}
                <strong>Jagatpura</strong>, <strong>Sitapura</strong>, and{" "}
                <strong>Sanganer</strong> — we are Jaipur's most trusted
                furniture partner.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                Areas We Serve in Jaipur
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area, i) => (
                  <span
                    key={i}
                    className="bg-white border border-amber-200 text-amber-800 text-sm px-3 py-1.5 rounded-full font-medium hover:bg-amber-600 hover:text-white hover:border-amber-600 cursor-default transition-all duration-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl overflow-hidden">
          <div className="relative px-8 md:px-14 py-14 text-center">
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Ready to Start?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Get Your {keyword} in Jaipur
            </h2>
            <p className="text-amber-100 text-base max-w-lg mx-auto mb-10 leading-relaxed">
              From concept to delivery — our Jaipur craftsmen handle everything.
              Get a free consultation and quote today, no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${ctaPhone}`}
                className="inline-flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon name="phone" className="w-4 h-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/${ctaWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="#get-quote"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon name="doc" className="w-4 h-4" /> Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function CustomWoodFurniturePage() {}
