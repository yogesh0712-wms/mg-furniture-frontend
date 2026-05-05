import { useState, useEffect, useRef } from "react";
import Header, { Footer } from "../Header";

// ─── SEO Meta Tags (injected into document head) ───────────────────────────
function useMeta() {
  useEffect(() => {
    document.title =
      "Complete Furnishing Work in Jaipur | Full Home, Office & Showroom Interior Solutions";
    const setMeta = (name, content, prop = "name") => {
      let el = document.querySelector(`meta[${prop}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(prop, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Get complete furnishing work in Jaipur for homes, offices, shops, and showrooms. End-to-end furniture, design, and setup services tailored to your space and budget.",
    );
    setMeta(
      "keywords",
      "complete furnishing work Jaipur, home furnishing Jaipur, office furnishing Jaipur, showroom setup Jaipur, interior furnishing Jaipur",
    );
    setMeta(
      "og:title",
      "Complete Furnishing Work in Jaipur | Full Home, Office & Showroom Interior Solutions",
      "property",
    );
    setMeta(
      "og:description",
      "End-to-end furniture, design, and setup services tailored to your space and budget across Jaipur.",
      "property",
    );
    setMeta("og:type", "website", "property");
  }, []);
}

// ─── Scroll-triggered fade-in hook ──────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── Reusable fade wrapper ───────────────────────────────────────────────────
function Fade({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Color tokens ────────────────────────────────────────────────────────────
const C = {
  brown: "#6B3F1F",
  brownDark: "#3E2108",
  brownMid: "#8B5A2B",
  cream: "#FAF3E8",
  creamDark: "#F0E4CC",
  gold: "#C89B3C",
  goldLight: "#E8C875",
  text: "#2C1A0E",
  textMid: "#5A3A1E",
  white: "#FFFFFF",
  shadow: "rgba(62,33,8,0.12)",
};

// ─── Utility styles ──────────────────────────────────────────────────────────
const sectionPad = { padding: "80px 24px" };
const maxW = { maxWidth: 1100, margin: "0 auto" };
const tag = {
  display: "inline-block",
  background: C.gold,
  color: C.white,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: "uppercase",
  padding: "5px 14px",
  borderRadius: 30,
  marginBottom: 14,
  fontFamily: "'Cormorant Garamond', serif",
};
const heading = {
  fontFamily: "'Cormorant Garamond', serif",
  color: C.brownDark,
  fontSize: "clamp(28px, 4vw, 44px)",
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: 16,
};
const sub = {
  fontFamily: "'Lato', sans-serif",
  color: C.textMid,
  fontSize: 17,
  lineHeight: 1.7,
  marginBottom: 24,
};
const btnPrimary = {
  display: "inline-block",
  background: C.gold,
  color: C.white,
  padding: "14px 32px",
  borderRadius: 6,
  fontWeight: 700,
  fontSize: 15,
  textDecoration: "none",
  fontFamily: "'Lato', sans-serif",
  letterSpacing: 0.5,
  cursor: "pointer",
  border: "none",
  boxShadow: `0 4px 18px rgba(200,155,60,0.35)`,
  transition: "background 0.25s, transform 0.2s",
};

// ─── Unsplash image helpers ──────────────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1600&q=80",
  trust1:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  trust2:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  trust3:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  amer: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
  before:
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
  after:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
};

// ════════════════════════════════════════════════════════════════════════════
export default function FurnishingJaipur() {
  useMeta();

  // Google font loader
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@400;700&display=swap";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.background = C.cream;
  }, []);

  const [hovCTA, setHovCTA] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const phone = "tel:+919782545485";
  const wa =
    "https://wa.me/919782545485?text=Hi%2C%20I%20need%20complete%20furnishing%20work%20in%20Jaipur";

  const faqs = [
    {
      q: "Do you provide complete furnishing near me in Jaipur?",
      a: "Yes! We serve all major localities in Jaipur including Vaishali Nagar, Mansarovar, Malviya Nagar, Jagatpura, Tonk Road, and more. Contact us for a free site visit.",
    },
    {
      q: "Do you handle both furniture and setup?",
      a: "Absolutely. We are an end-to-end solution — we handle design planning, manufacturing, delivery, and final installation so you don't have to coordinate with multiple vendors.",
    },
    {
      q: "Can you furnish offices and showrooms?",
      a: "Yes. We specialize in office workstations, cabins, reception areas, retail display units, counter setups, and complete showroom interiors tailored to your brand.",
    },
    {
      q: "How long does full furnishing take?",
      a: "A typical residential project takes 3–5 weeks from consultation to delivery. Office and showroom projects may vary based on scale. We provide a clear timeline after the initial site visit.",
    },
  ];

  const offers = [
    {
      icon: "🏠",
      title: "Full Home Furnishing",
      desc: "Bedrooms, living rooms, kitchen support — we plan, design, and set up every room with cohesive furniture and finishes that feel like home from day one.",
    },
    {
      icon: "🏢",
      title: "Office Furnishing",
      desc: "Productive workstations, executive cabins, storage systems, and reception areas designed for focus, comfort, and professional impression.",
    },
    {
      icon: "🏪",
      title: "Shop & Showroom Setup",
      desc: "Display units, wall panelling, billing counters, and signage support — we build retail spaces that sell by design.",
    },
    {
      icon: "🪑",
      title: "Custom Furniture & Installation",
      desc: "All furniture is manufactured to your exact dimensions and style. We handle delivery, assembly, and precise installation with zero hassle.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Consultation & Requirements",
      desc: "We listen first. A dedicated designer meets you, understands your space, style, and budget before a single sketch is drawn.",
    },
    {
      n: "02",
      title: "Design Planning & Site Visit",
      desc: "Our team visits your site, takes precise measurements, and presents a detailed layout and material proposal for your approval.",
    },
    {
      n: "03",
      title: "Manufacturing & Coordination",
      desc: "Your furniture is crafted in our workshop with quality materials. Progress updates keep you informed at every stage.",
    },
    {
      n: "04",
      title: "Final Delivery & Finishing",
      desc: "We deliver, install, and fine-tune every element until the space looks exactly as designed. Spotless handover guaranteed.",
    },
  ];

  const areas = [
    "Vaishali Nagar",
    "Mansarovar",
    "Malviya Nagar",
    "Jagatpura",
    "Tonk Road",
    "Sitapura",
    "Pratap Nagar",
    "C-Scheme",
    "Sanganer",
    "Bapu Nagar",
  ];

  return (
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        color: C.text,
        background: C.cream,
        overflowX: "hidden",
      }}
    >
      <Header />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${IMG.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.38)",
          }}
        />
        {/* gold bar overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: `linear-gradient(90deg, ${C.gold}, ${C.brownMid}, ${C.gold})`,
          }}
        />
        <div
          style={{
            ...maxW,
            position: "relative",
            zIndex: 1,
            padding: "80px 24px",
            animation: "heroFadeIn 1s ease forwards",
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <span style={{ ...tag, background: C.gold }}>
              Jaipur's Trusted Furnishing Partner
            </span>
            <h1
              style={{
                ...heading,
                color: C.white,
                fontSize: "clamp(30px, 5vw, 56px)",
                marginBottom: 20,
              }}
            >
              Complete Furnishing Work in Jaipur –<br />
              <span style={{ color: C.goldLight }}>
                End-to-End Interior Setup
              </span>
            </h1>
            <p
              style={{ ...sub, color: "rgba(255,255,255,0.85)", fontSize: 18 }}
            >
              We handle everything from design to final setup for homes,
              offices, shops, and showrooms across Jaipur.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 10,
              }}
            >
              <a
                href={phone}
                style={{
                  ...btnPrimary,
                  background: C.gold,
                  transform: hovCTA === "c" ? "scale(1.04)" : "scale(1)",
                }}
                onMouseEnter={() => setHovCTA("c")}
                onMouseLeave={() => setHovCTA("")}
              >
                📞 Call Now
              </a>
              <a
                href={wa}
                style={{
                  ...btnPrimary,
                  background: "#25D366",
                  transform: hovCTA === "w" ? "scale(1.04)" : "scale(1)",
                }}
                onMouseEnter={() => setHovCTA("w")}
                onMouseLeave={() => setHovCTA("")}
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
        <style>{`@keyframes heroFadeIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}</style>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────────────── */}
      <div style={{ background: C.brownDark, padding: "22px 24px" }}>
        <div
          style={{
            ...maxW,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 16,
            textAlign: "center",
          }}
        >
          {[
            ["100+", "Projects Delivered"],
            ["8+", "Years Experience"],
            ["50+", "Areas in Jaipur"],
            ["100%", "End-to-End Service"],
          ].map(([n, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: C.goldLight,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TRUST SECTION ──────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.creamDark }}>
        <div style={maxW}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={tag}>Real Results</span>
              <h2 style={heading}>Spaces We've Transformed</h2>
              <p style={{ ...sub, maxWidth: 560, margin: "0 auto" }}>
                From cozy apartments to sprawling showrooms — every project
                reflects our commitment to craft and detail.
              </p>
            </div>
          </Fade>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 48,
            }}
          >
            {[IMG.trust1, IMG.trust2, IMG.trust3].map((src, i) => (
              <Fade key={i} delay={i * 0.12}>
                <div
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: `0 8px 32px ${C.shadow}`,
                    aspectRatio: "4/3",
                  }}
                >
                  <img
                    src={src}
                    alt={`Furnished interior Jaipur ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s",
                      display: "block",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.06)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>
              </Fade>
            ))}
          </div>
          {/* Testimonials */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                name: "Priya Sharma",
                loc: "Vaishali Nagar, Jaipur",
                text: "We handed over our flat keys and they delivered a completely furnished home in just 4 weeks. Quality of wood, finishing — absolutely premium. No follow-ups needed.",
              },
              {
                name: "Rajat Agarwal",
                loc: "Malviya Nagar, Jaipur",
                text: "Our office setup in Tonk Road was handled professionally from start to finish. The team understood our brand, and the final workspace looks truly impressive.",
              },
            ].map((t, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: C.white,
                    borderRadius: 12,
                    padding: "28px 28px 24px",
                    boxShadow: `0 4px 20px ${C.shadow}`,
                    borderLeft: `4px solid ${C.gold}`,
                  }}
                >
                  <p
                    style={{
                      fontStyle: "italic",
                      color: C.textMid,
                      lineHeight: 1.75,
                      marginBottom: 20,
                      fontSize: 15,
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div
                    style={{
                      fontWeight: 700,
                      color: C.brownDark,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: C.gold,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {t.loc}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ──────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.cream }}>
        <div style={maxW}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={tag}>Our Services</span>
              <h2 style={heading}>
                Complete Furnishing — One Vendor, Zero Headaches
              </h2>
              <p style={{ ...sub, maxWidth: 580, margin: "0 auto" }}>
                Every service under one roof so your project stays on time, on
                budget, and exactly as you imagined.
              </p>
            </div>
          </Fade>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {offers.map((o, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: C.white,
                    borderRadius: 14,
                    padding: "32px 26px",
                    boxShadow: `0 4px 24px ${C.shadow}`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = `0 12px 36px ${C.shadow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 4px 24px ${C.shadow}`;
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{o.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 21,
                      fontWeight: 700,
                      color: C.brownDark,
                      marginBottom: 10,
                    }}
                  >
                    {o.title}
                  </div>
                  <p
                    style={{
                      color: C.textMid,
                      lineHeight: 1.7,
                      fontSize: 15,
                      margin: 0,
                    }}
                  >
                    {o.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO / MAP SECTION ─────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.brownDark }}>
        <div style={maxW}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span
                style={{ ...tag, background: C.goldLight, color: C.brownDark }}
              >
                Service Areas
              </span>
              <h2 style={{ ...heading, color: C.white }}>
                Furnishing Work Near You in Jaipur
              </h2>
              <p
                style={{
                  ...sub,
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 580,
                  margin: "0 auto",
                }}
              >
                We serve residential and commercial clients across all major
                localities in{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: C.goldLight,
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  Jaipur
                </a>{" "}
                — wherever you are, we come to you.
              </p>
            </div>
          </Fade>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginBottom: 44,
            }}
          >
            {areas.map((a) => (
              <span
                key={a}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: `1px solid ${C.gold}`,
                  color: C.goldLight,
                  padding: "7px 16px",
                  borderRadius: 30,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                📍 {a}
              </span>
            ))}
          </div>
          <Fade delay={0.15}>
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: `0 8px 40px rgba(0,0,0,0.4)`,
                border: `3px solid ${C.gold}`,
              }}
            >
              <iframe
                title="Jaipur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114633.72226789267!2d75.71304!3d26.88514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="340"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Fade>
        </div>
      </section>

      {/* ── PROCESS SECTION ────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.creamDark }}>
        <div style={maxW}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={tag}>How It Works</span>
              <h2 style={heading}>Our Simple 4-Step Process</h2>
              <p style={{ ...sub, maxWidth: 520, margin: "0 auto" }}>
                Clear milestones, transparent communication, and no surprises —
                from first call to final handover.
              </p>
            </div>
          </Fade>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            {steps.map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: C.white,
                    borderRadius: 14,
                    padding: "32px 24px",
                    boxShadow: `0 4px 20px ${C.shadow}`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 72,
                      fontWeight: 700,
                      color: C.creamDark,
                      position: "absolute",
                      top: -10,
                      right: 14,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: C.gold,
                      color: C.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 17,
                      marginBottom: 16,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 19,
                      fontWeight: 700,
                      color: C.brownDark,
                      marginBottom: 10,
                    }}
                  >
                    Step {s.n.replace("0", "")}: {s.title}
                  </div>
                  <p
                    style={{
                      color: C.textMid,
                      lineHeight: 1.7,
                      fontSize: 14,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── JAIPUR HERITAGE CONNECTION ─────────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.cream }}>
        <div style={maxW}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            <Fade>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: `0 12px 48px ${C.shadow}`,
                  border: `4px solid ${C.gold}`,
                }}
              >
                <img
                  src={IMG.amer}
                  alt="complete furnishing work in Jaipur inspired by royal craftsmanship and architectural precision"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </Fade>
            <Fade delay={0.15}>
              <div>
                <span style={tag}>Our Inspiration</span>
                <h2 style={heading}>
                  Rooted in Jaipur's Royal Craft Tradition
                </h2>
                <p style={{ ...sub }}>
                  Jaipur has always been a city where architecture speaks. From
                  the symmetry of Amer Fort to the latticed windows of Hawa
                  Mahal, every structure in this city reflects a culture of
                  precision, patience, and enduring beauty. That same philosophy
                  guides our work.
                </p>
                <p style={{ ...sub, marginBottom: 0 }}>
                  When we approach a furnishing project, we bring Jaipur's
                  craftsman mindset to modern spaces — measuring twice,
                  designing with intent, and delivering interiors that are built
                  to last a lifetime. We believe your home or office deserves
                  the same level of care that went into building this city's
                  timeless landmarks.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── LOCAL PROOF / BEFORE & AFTER ───────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.brownDark }}>
        <div style={maxW}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <span
                style={{ ...tag, background: C.goldLight, color: C.brownDark }}
              >
                Proven Track Record
              </span>
              <h2 style={{ ...heading, color: C.white }}>
                100+ Homes, Offices & Showrooms
                <br />
                Furnished in Jaipur
              </h2>
              <p
                style={{
                  ...sub,
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 540,
                  margin: "0 auto",
                }}
              >
                From a single room to a complete commercial space — every
                project in our portfolio is a story of transformation.
              </p>
            </div>
          </Fade>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {[
              { label: "Before", src: IMG.before },
              { label: "After", src: IMG.after },
            ].map((b, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
                  }}
                >
                  <img
                    src={b.src}
                    alt={`${b.label} furnishing Jaipur`}
                    style={{
                      width: "100%",
                      aspectRatio: "4/3",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: i === 1 ? C.gold : "rgba(0,0,0,0.55)",
                      color: C.white,
                      padding: "5px 14px",
                      borderRadius: 30,
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    {b.label}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────────────── */}
      <section style={{ ...sectionPad, background: C.creamDark }}>
        <div style={{ ...maxW, maxWidth: 780 }}>
          <Fade>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={tag}>FAQ</span>
              <h2 style={heading}>Frequently Asked Questions</h2>
            </div>
          </Fade>
          {faqs.map((f, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div
                style={{
                  background: C.white,
                  borderRadius: 10,
                  marginBottom: 14,
                  boxShadow: `0 2px 12px ${C.shadow}`,
                  overflow: "hidden",
                  border:
                    openFaq === i
                      ? `2px solid ${C.gold}`
                      : `2px solid transparent`,
                  transition: "border 0.25s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: C.brownDark,
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      color: C.gold,
                      fontSize: 22,
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 0.3s",
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    style={{
                      color: C.textMid,
                      lineHeight: 1.75,
                      fontSize: 15,
                      padding: "0 24px 20px",
                      margin: 0,
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.brownDark} 0%, ${C.brown} 60%, ${C.brownMid} 100%)`,
          padding: "90px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, rgba(200,155,60,0.15), transparent 60%)",
          }}
        />
        <Fade>
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ ...tag, background: C.gold }}>
              Get Started Today
            </span>
            <h2
              style={{
                ...heading,
                color: C.white,
                fontSize: "clamp(28px, 4vw, 46px)",
                maxWidth: 660,
                margin: "0 auto 20px",
              }}
            >
              Start Your Complete Furnishing Project Today
            </h2>
            <p
              style={{
                ...sub,
                color: "rgba(255,255,255,0.8)",
                maxWidth: 500,
                margin: "0 auto 36px",
                fontSize: 17,
              }}
            >
              One call is all it takes. Let's design and deliver a space you're
              proud to call yours.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
              }}
            >
              <a
                href={phone}
                style={{ ...btnPrimary, fontSize: 17, padding: "16px 38px" }}
              >
                📞 Call Now
              </a>
              <a
                href={wa}
                style={{
                  ...btnPrimary,
                  background: "#25D366",
                  fontSize: 17,
                  padding: "16px 38px",
                }}
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </Fade>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "#1A0D05",
          padding: "36px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontWeight: 700,
            color: C.goldLight,
            marginBottom: 8,
          }}
        >
          MG FURNITURE Jaipur
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 13,
            margin: "0 0 8px",
          }}
        >
          Complete Furnishing Work in Jaipur — Homes, Offices, Shops & Showrooms
        </p>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} MG FURNITURE. All rights reserved. |{" "}
          Serving all areas across{" "}
          <a
            href="https://en.wikipedia.org/wiki/Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: C.goldLight }}
          >
            Jaipur, Rajasthan
          </a>
        </p>
      </footer>
      <Footer />
    </div>
  );
}
