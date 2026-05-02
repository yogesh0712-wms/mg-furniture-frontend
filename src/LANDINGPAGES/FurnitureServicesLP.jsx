import { useEffect, useState, useRef } from "react";
import Header, { Footer } from "../Header";

// ─── SEO Meta injected into <head> via useEffect ───────────────────────────
function useSEOMeta() {
  useEffect(() => {
    document.title =
      "Furniture Repair Services in Jaipur | Home Visit Furniture Installation & Fixing Experts";
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
      "Book expert furniture repair services in Jaipur with home visit support. We handle installation, fixing, and maintenance for homes, offices, and showrooms.",
    );
    setMeta(
      "keywords",
      "furniture repair Jaipur, furniture installation Jaipur, sofa repair Jaipur, bed repair Jaipur, carpenter near me Jaipur, home visit furniture service",
    );
    setMeta("robots", "index, follow");
    setMeta(
      "og:title",
      "Furniture Repair Services in Jaipur | Home Visit Experts",
      true,
    );
    setMeta(
      "og:description",
      "Expert furniture repair & installation with home visit. Serving Vaishali Nagar, Mansarovar, Malviya Nagar and all of Jaipur.",
      true,
    );
    setMeta("og:type", "website", true);
  }, []);
}

// ─── Reusable fade-in hook ──────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Pexels image URLs (Indian carpenter / furniture / Jaipur themed) ───────
const IMAGES = {
  hero: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1400",
  trust1:
    "https://images.pexels.com/photos/5691594/pexels-photo-5691594.jpeg?auto=compress&cs=tinysrgb&w=600",
  trust2:
    "https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=600",
  trust3:
    "https://images.pexels.com/photos/4792489/pexels-photo-4792489.jpeg?auto=compress&cs=tinysrgb&w=600",
  trust4:
    "https://images.pexels.com/photos/5691632/pexels-photo-5691632.jpeg?auto=compress&cs=tinysrgb&w=600",
  cityPalace:
    "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200",
  before:
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
  after:
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
};

// ─── CSS Variables & Global Styles ─────────────────────────────────────────
const GLOBAL_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Hind:wght@400;500;600&display=swap');

  :root {
    --brown-dark: #3d1f0a;
    --brown-mid: #7a3b1e;
    --brown-light: #c87941;
    --beige: #f5ede0;
    --beige-dark: #e8d5bb;
    --cream: #fdf8f2;
    --gold: #d4a843;
    --text-dark: #1c0f05;
    --text-mid: #4a2c14;
    --text-light: #7a5c3e;
    --white: #ffffff;
    --shadow: 0 4px 24px rgba(61,31,10,0.13);
    --shadow-lg: 0 12px 48px rgba(61,31,10,0.18);
    --radius: 12px;
    --radius-lg: 20px;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Hind', sans-serif; background: var(--cream); color: var(--text-dark); }

  .fade-up {
    opacity: 0;
    transform: translateY(36px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  @keyframes heroFadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,67,0.5); }
    50%       { box-shadow: 0 0 0 10px rgba(212,168,67,0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-6px); }
  }

  a { color: inherit; text-decoration: none; }

  section { padding: 72px 20px; }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    color: var(--brown-dark);
    margin-bottom: 12px;
    line-height: 1.2;
  }
  .section-sub {
    font-size: 1.05rem;
    color: var(--text-light);
    max-width: 560px;
    line-height: 1.7;
  }
  .gold-line {
    width: 56px; height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--brown-light));
    border-radius: 4px;
    margin: 14px 0 24px;
  }

  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, var(--brown-mid), var(--brown-dark));
    color: var(--white);
    font-family: 'Hind', sans-serif; font-weight: 600; font-size: 1rem;
    padding: 14px 30px; border-radius: 50px; border: none; cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 16px rgba(122,59,30,0.35);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(122,59,30,0.45); }

  .btn-whatsapp {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, #25d366, #128c3e);
    color: var(--white);
    font-family: 'Hind', sans-serif; font-weight: 600; font-size: 1rem;
    padding: 14px 30px; border-radius: 50px; border: none; cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 16px rgba(37,211,102,0.35);
    animation: pulse 2.2s infinite;
  }
  .btn-whatsapp:hover { transform: translateY(-2px); animation: none; box-shadow: 0 8px 24px rgba(37,211,102,0.45); }

  @media (max-width: 768px) {
    section { padding: 52px 16px; }
    .btn-primary, .btn-whatsapp { width: 100%; justify-content: center; }
  }
`;

// ─── Section Components (all inline, no extraction) ────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(29,12,2,0.88) 0%, rgba(61,31,10,0.65) 55%, rgba(61,31,10,0.15) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 680,
          animation: "heroFadeIn 1s ease both",
        }}
      >
        {/* Badge */}
        <span
          style={{
            display: "inline-block",
            background: "rgba(212,168,67,0.18)",
            border: "1px solid rgba(212,168,67,0.6)",
            color: "#f0c96a",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            padding: "6px 16px",
            borderRadius: 50,
            marginBottom: 24,
            textTransform: "uppercase",
          }}
        >
          🔧 Trusted Carpenter Services — Jaipur
        </span>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            lineHeight: 1.18,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Furniture Repair Services in Jaipur –{" "}
          <span style={{ color: "#f0c96a" }}>Home Visit Experts</span>
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.75,
            marginBottom: 36,
            maxWidth: 580,
          }}
        >
          Quick and reliable furniture repair, installation, and fixing services
          for homes, offices, and showrooms across Jaipur. We come to you — same
          day, doorstep service.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="tel:+919782545485" className="btn-primary">
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919782545485?text=Hi%2C%20I%20need%20furniture%20repair%20service%20in%20Jaipur"
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Now
          </a>
        </div>

        {/* Stats strip */}
        <div
          style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}
        >
          {[
            ["100+", "Happy Clients"],
            ["5+ Yrs", "Experience"],
            ["Same Day", "Service"],
            ["All Jaipur", "Coverage"],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  color: "#f0c96a",
                  fontWeight: 700,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const ref = useFadeIn();
  const testimonials = [
    {
      name: "Ramesh Sharma, Vaishali Nagar",
      text: "Bahut accha kaam kiya. Sofa ekdum tight ho gaya. Aane mein bhi time pe the aur kaam saaf tha. Definitely recommend karenge.",
      stars: 5,
    },
    {
      name: "Priya Agarwal, Malviya Nagar",
      text: "Office furniture install karwai thi. Team professional thi aur 3 ghante mein poora kaam finish ho gaya. Price bhi reasonable tha.",
      stars: 5,
    },
  ];

  return (
    <section style={{ background: "var(--beige)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="section-title">
            Trusted by Jaipur Families & Businesses
          </h2>
          <div className="gold-line" style={{ margin: "14px auto 24px" }} />
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Real carpenters. Real work. Real results — right at your doorstep.
          </p>
        </div>

        {/* Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {[IMAGES.trust1, IMAGES.trust2, IMAGES.trust3, IMAGES.trust4].map(
            (src, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow)",
                  aspectRatio: "4/3",
                  animation: `float ${2.4 + i * 0.3}s ease-in-out infinite`,
                }}
              >
                <img
                  src={src}
                  alt={`Indian carpenter working on furniture repair — scene ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            ),
          )}
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "28px 32px",
                boxShadow: "var(--shadow)",
                borderLeft: "4px solid var(--gold)",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  color: "#f0a500",
                  marginBottom: 10,
                }}
              >
                {"★".repeat(t.stars)}
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 16,
                }}
              >
                "{t.text}"
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--brown-dark)",
                }}
              >
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useFadeIn();
  const services = [
    {
      icon: "🛋️",
      title: "Furniture Repair",
      desc: "Beds, sofas, dining tables, wardrobes, chairs — we fix joints, broken frames, loose hinges, damaged surfaces, and more. No job too small.",
    },
    {
      icon: "🏢",
      title: "Installation Services",
      desc: "Complete furniture assembly and installation for offices, showrooms, and homes. From workstations to display shelves — we set it up right.",
    },
    {
      icon: "🔩",
      title: "On-site Fixing & Maintenance",
      desc: "Squeaky doors? Wobbling table? Drawer that won't close? Our team visits your site and fixes it on the spot — no need to dismantle anything.",
    },
    {
      icon: "✂️",
      title: "Custom Adjustments",
      desc: "Need furniture modified to fit your space? We do size adjustments, re-upholstery prep, custom fittings, and design changes as per your need.",
    },
  ];

  return (
    <section style={{ background: "var(--cream)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <h2 className="section-title">Our Services</h2>
        <div className="gold-line" />
        <p className="section-sub" style={{ marginBottom: 44 }}>
          Everything your furniture needs — one call away. We handle it all,
          on-site, at your convenience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 28px",
                boxShadow: "var(--shadow)",
                borderTop: "4px solid var(--brown-light)",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
            >
              <div style={{ fontSize: "2.4rem", marginBottom: 14 }}>
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "var(--brown-dark)",
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.97rem",
                  color: "var(--text-light)",
                  lineHeight: 1.7,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSEOSection() {
  const ref = useFadeIn();
  const areas = [
    "Vaishali Nagar",
    "Mansarovar",
    "Malviya Nagar",
    "Jagatpura",
    "Tonk Road",
    "Sitapura",
    "Sodala",
    "Ajmer Road",
    "Civil Lines",
    "C-Scheme",
    "Pratap Nagar",
    "Sanganer",
  ];

  return (
    <section style={{ background: "var(--beige-dark)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <h2 className="section-title">Furniture Repair Near You in Jaipur</h2>
        <div className="gold-line" />
        <p className="section-sub" style={{ marginBottom: 36 }}>
          We are available near you — covering all major localities across
          Jaipur. Call once and we'll be at your door.
        </p>

        {/* Area tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {areas.map((area) => (
            <span
              key={area}
              style={{
                background: "var(--white)",
                color: "var(--brown-mid)",
                padding: "8px 18px",
                borderRadius: 50,
                fontSize: "0.92rem",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(61,31,10,0.1)",
                border: "1px solid var(--beige)",
              }}
            >
              📍 {area}
            </span>
          ))}
        </div>

        {/* Google Map embed */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            border: "3px solid var(--beige)",
          }}
        >
          <iframe
            title="Furniture Repair Service Location in Jaipur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973011552!2d75.62174!3d26.88514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const ref = useFadeIn();
  const steps = [
    {
      step: "01",
      icon: "📞",
      title: "Call / Book Service",
      desc: "Call us or WhatsApp to tell us your furniture issue and location in Jaipur.",
    },
    {
      step: "02",
      icon: "🏠",
      title: "Home Visit & Inspection",
      desc: "Our expert visits your home or office to assess the repair or installation needed.",
    },
    {
      step: "03",
      icon: "🔧",
      title: "Repair / Installation",
      desc: "We carry all tools and parts. The work is done on-site, efficiently and cleanly.",
    },
    {
      step: "04",
      icon: "✅",
      title: "Final Check & Handover",
      desc: "We inspect the finished work with you, ensure your satisfaction, and leave no mess behind.",
    },
  ];

  return (
    <section style={{ background: "var(--brown-dark)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <h2 className="section-title" style={{ color: "#fff" }}>
          How It Works
        </h2>
        <div className="gold-line" />
        <p
          className="section-sub"
          style={{ color: "rgba(255,255,255,0.7)", marginBottom: 48 }}
        >
          Simple 4-step process. No hassle, no guesswork — just reliable service
          at your door.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    display: "none", // hidden on mobile, shown via grid layout
                  }}
                />
              )}
              <div
                style={{
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 24px",
                  border: "1px solid rgba(212,168,67,0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--gold), var(--brown-light))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "1rem",
                    marginBottom: 16,
                  }}
                >
                  {s.step}
                </div>
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    color: "#fff",
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.93rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JaipurConnectionSection() {
  const ref = useFadeIn();
  return (
    <section style={{ background: "var(--cream)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            position: "relative",
          }}
        >
          <img
            src={IMAGES.cityPalace}
            alt="furniture repair services in Jaipur inspired by local craftsmanship and heritage"
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              background: "rgba(29,12,2,0.72)",
              borderRadius: 10,
              padding: "12px 18px",
              backdropFilter: "blur(6px)",
            }}
          >
            <p
              style={{
                color: "#f0c96a",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
              }}
            >
              City Palace — The Pink City's Timeless Craftsmanship
            </p>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="section-title">Rooted in Jaipur's Craft Heritage</h2>
          <div className="gold-line" />
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-mid)",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            <a
              href="https://en.wikipedia.org/wiki/Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--brown-mid)",
                fontWeight: 700,
                textDecoration: "underline",
                textDecorationColor: "var(--gold)",
              }}
            >
              Jaipur
            </a>{" "}
            has been a city of legendary craftsmen for centuries. The intricate
            woodwork in the City Palace, the carved lattices of Hawa Mahal, the
            joinery in old havelis — all speak of a tradition where quality is
            not a choice but a standard. Every joint is made to last. Every
            surface is finished with care.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-mid)",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            We carry that same spirit into every repair we do. Whether it's
            fixing a warped sofa frame or installing a 50-piece office setup —
            we treat your furniture with the same attention to detail that
            Jaipur's artisans have always been known for.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-mid)",
              lineHeight: 1.8,
            }}
          >
            Local knowledge, local pride, and work you can count on.
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #jaipur-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function LocalProofSection() {
  const ref = useFadeIn();
  return (
    <section style={{ background: "var(--beige)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Banner */}
        <div
          style={{
            background:
              "linear-gradient(135deg, var(--brown-dark), var(--brown-mid))",
            borderRadius: "var(--radius-lg)",
            padding: "36px 48px",
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 52,
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div style={{ fontSize: "3.5rem" }}>🏡</div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Serving 100+ Homes & Offices in Jaipur
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1rem",
                marginTop: 6,
              }}
            >
              Trusted by families in Vaishali Nagar, Mansarovar, Malviya Nagar
              and beyond.
            </p>
          </div>
        </div>

        {/* Before / After */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem",
            color: "var(--brown-dark)",
            marginBottom: 8,
          }}
        >
          Before & After
        </h3>
        <div className="gold-line" />
        <p style={{ color: "var(--text-light)", marginBottom: 28 }}>
          See the difference our repair work makes.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
        >
          {[
            {
              src: IMAGES.before,
              label: "Before Repair",
              color: "#c0392b",
              alt: "Old worn-out furniture before repair",
            },
            {
              src: IMAGES.after,
              label: "After Repair",
              color: "#27ae60",
              alt: "Furniture restored and looking new after repair service",
            },
          ].map(({ src, label, color, alt }) => (
            <div
              key={label}
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow)",
                position: "relative",
              }}
            >
              <img
                src={src}
                alt={alt}
                style={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  background: color,
                  color: "#fff",
                  borderRadius: 50,
                  padding: "6px 18px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useFadeIn();
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "Do you provide furniture repair near me in Jaipur?",
      a: "Yes! We cover all major areas of Jaipur including Vaishali Nagar, Mansarovar, Malviya Nagar, Jagatpura, Tonk Road, C-Scheme, Sodala, Sanganer, and more. Call us to confirm availability in your area.",
    },
    {
      q: "Do you offer home visit services?",
      a: "Absolutely. All our furniture repair and installation work is done on-site at your home or office. You don't need to move your furniture anywhere — we come to you with all tools and materials.",
    },
    {
      q: "What types of furniture do you repair?",
      a: "We repair beds, sofas, chairs, dining tables, wardrobes, office desks, TV units, dressers, bookshelves, and more. We handle both wooden and metal furniture. If you're unsure, just give us a call and describe the issue.",
    },
    {
      q: "How quickly can you provide service?",
      a: "For most standard repairs, we can schedule a same-day or next-day home visit depending on your location in Jaipur and our team's availability. Emergency and urgent repairs are also available — just let us know.",
    },
  ];

  return (
    <section style={{ background: "var(--cream)" }}>
      <div
        ref={ref}
        className="fade-up"
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="gold-line" />
        <p className="section-sub" style={{ marginBottom: 40 }}>
          Everything you need to know before booking.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow)",
                overflow: "hidden",
                border:
                  open === i
                    ? "1px solid var(--gold)"
                    : "1px solid transparent",
                transition: "border 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--brown-dark)",
                    paddingRight: 16,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    color: "var(--gold)",
                    flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.25s",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    fontSize: "0.97rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.75,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const ref = useFadeIn();
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, var(--brown-dark) 0%, #5c2a0e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(212,168,67,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(212,168,67,0.06)",
        }}
      />

      <div
        ref={ref}
        className="fade-up"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: 16 }}>🛠️</div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Book Your Furniture Repair Service Today
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            marginBottom: 36,
          }}
        >
          Don't let broken furniture slow you down. Our Jaipur-based team is
          ready to visit your home or office — today. Fast, reliable, and
          affordable.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+919782545485"
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, var(--gold), #b8861c)",
            }}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919782545485?text=Hi%2C%20I%20need%20furniture%20repair%20service%20in%20Jaipur"
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Now
          </a>
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.85rem",
            marginTop: 24,
          }}
        >
          Available 7 days a week · All areas of Jaipur · No advance payment
        </p>
      </div>
    </section>
  );
}

function Foooter() {
  return (
    <footer
      style={{
        background: "#1a0904",
        padding: "32px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.88rem",
          lineHeight: 1.7,
        }}
      >
        © 2025 Furniture Repair Services Jaipur · All Rights Reserved
        <br />
        <span style={{ color: "rgba(255,255,255,0.3)" }}>
          Serving Vaishali Nagar · Mansarovar · Malviya Nagar · Jagatpura · Tonk
          Road · All of Jaipur
        </span>
      </p>
    </footer>
  );
}

// ─── Sticky WhatsApp Button ─────────────────────────────────────────────────
function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/919782545485?text=Hi%2C%20I%20need%20furniture%20repair%20in%20Jaipur"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 28,
        right: 24,
        zIndex: 9999,
        background: "linear-gradient(135deg, #25d366, #128c3e)",
        color: "#fff",
        borderRadius: "50%",
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.7rem",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        animation: "pulse 2s infinite",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      title="WhatsApp for Furniture Repair in Jaipur"
    >
      💬
    </a>
  );
}

// ─── Root Component ─────────────────────────────────────────────────────────
export default function FurnitureRepairJaipur() {
  useSEOMeta();

  return (
    <>
      <style>{GLOBAL_STYLE}</style>

      {/* Sticky top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(29,12,2,0.96)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          borderBottom: "1px solid rgba(212,168,67,0.25)",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 700,
          }}
        >
          🛠️ <span style={{ color: "#f0c96a" }}>FurniCraft</span> Jaipur
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href="tel:+919782545485"
            className="btn-primary"
            style={{ padding: "9px 20px", fontSize: "0.88rem" }}
          >
            📞 Call
          </a>
          <a
            href="https://wa.me/919782545485"
            className="btn-whatsapp"
            style={{ padding: "9px 20px", fontSize: "0.88rem" }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <main>
        <Header />
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <LocalSEOSection />
        <ProcessSection />
        <JaipurConnectionSection />
        <LocalProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Foooter />
      <StickyWhatsApp />
      <Footer />
    </>
  );
}
