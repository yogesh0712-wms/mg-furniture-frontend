import { useEffect, useRef, useState } from "react";
import Header, { Footer } from "../Header";

// ─── SEO Meta via react-helmet alternative (injected manually) ───────────────
function SEOMeta() {
  useEffect(() => {
    document.title =
      "Custom Wood Furniture in Jaipur | Handcrafted Premium Wooden Interiors Jaipur";
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
      "Get custom wood furniture in Jaipur designed as per your style, size, and budget. Premium craftsmanship for homes, offices, and interiors across Jaipur.",
    );
    setMeta(
      "keywords",
      "custom wood furniture Jaipur, handcrafted wooden furniture Jaipur, furniture manufacturer Jaipur, wooden interiors Jaipur",
    );
    setMeta(
      "og:title",
      "Custom Wood Furniture in Jaipur | Handcrafted Premium Wooden Interiors",
      "property",
    );
    setMeta(
      "og:description",
      "Premium custom wooden furniture crafted in Jaipur. Beds, wardrobes, sofas, dining tables & office furniture made to order.",
      "property",
    );
  }, []);
  return null;
}

// ─── Fade-in hook using IntersectionObserver ─────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Inline CSS tokens ────────────────────────────────────────────────────────
const C = {
  cream: "#FAF5ED",
  sand: "#EFE3C8",
  oak: "#C49A5A",
  teak: "#8B5E2A",
  walnut: "#5C3317",
  charcoal: "#2C2018",
  white: "#FFFDF8",
  green: "#2D6A4F",
};

const fadeBase = {
  opacity: 0,
  transform: "translateY(32px)",
  transition: "opacity 0.7s ease, transform 0.7s ease",
};

// ─── Reusable section wrapper ─────────────────────────────────────────────────
function Section({ children, bg, style = {} }) {
  return (
    <section
      style={{ background: bg || C.white, padding: "80px 20px", ...style }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

// ─── Heading helper ───────────────────────────────────────────────────────────
function Heading({ children, sub, center }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: C.walnut,
          margin: 0,
          lineHeight: 1.25,
        }}
      >
        {children}
      </h2>
      {sub && (
        <p
          style={{
            color: C.teak,
            marginTop: 10,
            fontSize: "1.05rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {sub}
        </p>
      )}
      <div
        style={{
          width: 60,
          height: 3,
          background: C.oak,
          marginTop: 14,
          ...(center ? { margin: "14px auto 0" } : {}),
        }}
      />
    </div>
  );
}

// ─── CTA Buttons ─────────────────────────────────────────────────────────────
function CTAButtons({ size = "md" }) {
  const pad = size === "lg" ? "16px 36px" : "12px 28px";
  const fs = size === "lg" ? "1.1rem" : "0.95rem";
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <a
        href="tel:+919782545485"
        style={{
          background: C.teak,
          color: C.white,
          padding: pad,
          borderRadius: 6,
          textDecoration: "none",
          fontFamily: "Georgia, serif",
          fontSize: fs,
          fontWeight: "bold",
          letterSpacing: "0.03em",
          boxShadow: "0 4px 16px rgba(92,51,23,0.25)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.background = C.walnut)}
        onMouseLeave={(e) => (e.target.style.background = C.teak)}
      >
        📞 Call Now
      </a>
      <a
        href="https://wa.me/919782545485?text=Hi%2C%20I%20want%20custom%20wood%20furniture%20in%20Jaipur"
        target="_blank"
        rel="noreferrer"
        style={{
          background: C.green,
          color: C.white,
          padding: pad,
          borderRadius: 6,
          textDecoration: "none",
          fontFamily: "Georgia, serif",
          fontSize: fs,
          fontWeight: "bold",
          letterSpacing: "0.03em",
          boxShadow: "0 4px 16px rgba(45,106,79,0.3)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#1b4332")}
        onMouseLeave={(e) => (e.target.style.background = C.green)}
      >
        💬 WhatsApp Now
      </a>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function JaipurFurnitureLanding() {
  const [faqOpen, setFaqOpen] = useState(null);

  const heroRef = useRef(null);
  const trustRef = useFadeIn();
  const servRef = useFadeIn();
  const localRef = useFadeIn();
  const processRef = useFadeIn();
  const heritageRef = useFadeIn();
  const proofRef = useFadeIn();
  const faqRef = useFadeIn();
  const ctaRef = useFadeIn();

  // Hero fade in on mount
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  const services = [
    {
      icon: "🛏️",
      title: "Custom Beds",
      desc: "Hand-built bed frames and headboards in sheesham, teak, or mango wood — sized exactly for your room, finished to your taste.",
    },
    {
      icon: "🪞",
      title: "Wardrobes",
      desc: "Floor-to-ceiling or walk-in wardrobes with internal fittings, soft-close hinges, and lacquer or natural finishes.",
    },
    {
      icon: "🛋️",
      title: "Sofas & Seating",
      desc: "Solid wood frames with premium upholstery — from Rajasthani carved daybeds to contemporary sectionals.",
    },
    {
      icon: "🍽️",
      title: "Dining Tables",
      desc: "Live-edge slabs, inlay work, or clean modern silhouettes. Made to seat 4 to 12 — built to last generations.",
    },
    {
      icon: "💼",
      title: "Office Furniture",
      desc: "Desks, bookshelves, and conference tables that combine professional form with the warmth of real wood.",
    },
    {
      icon: "🪟",
      title: "Storage & TV Units",
      desc: "Built-in wall units, display cabinets, and TV consoles designed around your exact wall dimensions.",
    },
  ];

  const faqs = [
    {
      q: "Do you provide custom wood furniture near me in Jaipur?",
      a: "Yes! We serve all areas of Jaipur including Vaishali Nagar, Mansarovar, Malviya Nagar, Jagatpura, C-Scheme, Bani Park, and more. We offer free home visits for measurement and consultation.",
    },
    {
      q: "How long does custom furniture take to manufacture?",
      a: "Typical lead time is 3–5 weeks depending on the complexity of the piece, wood type, and finish. We keep you updated at every stage.",
    },
    {
      q: "Can I choose my own design and finish?",
      a: "Absolutely. You can bring reference images, sketch your idea, or work with our designer. We finalise everything — dimensions, wood grain, colour, hardware — before production begins.",
    },
    {
      q: "What wood types do you use?",
      a: "We work with solid sheesham (Indian rosewood), teak, mango wood, walnut, and oak veneer. Each wood is kiln-dried and seasoned to prevent warping in Rajasthan's climate.",
    },
  ];

  const areas = [
    "Vaishali Nagar",
    "Mansarovar",
    "Malviya Nagar",
    "Jagatpura",
    "C-Scheme",
    "Bani Park",
    "Tonk Road",
    "Sanganer",
    "Sitapura",
    "Sodala",
    "Ajmer Road",
    "Raja Park",
  ];

  const steps = [
    {
      n: "01",
      title: "Free Consultation",
      desc: "We visit your home or office in Jaipur to understand your space, style, and budget.",
    },
    {
      n: "02",
      title: "Design & Measurement",
      desc: "Our designer creates detailed drawings and 3D previews so you know exactly what you'll receive.",
    },
    {
      n: "03",
      title: "Expert Manufacturing",
      desc: "Skilled Jaipuri craftsmen build your piece in solid wood at our in-city workshop.",
    },
    {
      n: "04",
      title: "Delivery & Installation",
      desc: "White-glove delivery, assembly, and placement — your furniture is ready to use the day we arrive.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        background: C.cream,
        color: C.charcoal,
        overflowX: "hidden",
      }}
    >
      <Header />
      <SEOMeta />

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.cream}; }
        ::selection { background: ${C.oak}; color: white; }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
          alt="luxury wooden furniture workshop Jaipur"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Warm overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(110deg, rgba(44,32,24,0.82) 0%, rgba(92,51,23,0.55) 60%, rgba(196,154,90,0.25) 100%)",
          }}
        />

        <div
          ref={heroRef}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 680,
            padding: "60px 40px",
            ...fadeBase,
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <p
            style={{
              color: C.oak,
              letterSpacing: "0.18em",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Handcrafted in Jaipur · Made to Order
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              color: C.white,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Custom Wood Furniture in Jaipur – Made to Order for Your Space
          </h1>
          <p
            style={{
              color: C.sand,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            We design and build premium wooden furniture based on your style,
            size, and budget with expert craftsmanship handed down through
            generations.
          </p>
          <CTAButtons size="lg" />
          <p
            style={{
              color: C.oak,
              marginTop: 24,
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
            }}
          >
            Free home visit · No advance · 5-year warranty
          </p>
        </div>
      </section>

      {/* ── TRUST / GALLERY + TESTIMONIALS ──────────────────────────────────── */}
      <Section bg={C.sand}>
        <div ref={trustRef} style={fadeBase}>
          <Heading
            center
            sub="Real furniture, real homes, real Jaipur families."
          >
            Our Work Speaks for Itself
          </Heading>
          {/* Image grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=600&q=80",
                alt: "solid sheesham wood bed frame Jaipur",
              },
              {
                src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
                alt: "custom teak wardrobe Jaipur home",
              },
              {
                src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
                alt: "handcrafted wooden dining table Jaipur",
              },
              {
                src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
                alt: "luxury wooden sofa set Indian interior Jaipur",
              },
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 6px 24px rgba(92,51,23,0.18)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 230,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
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
                name: "Radhika Sharma",
                area: "Vaishali Nagar, Jaipur",
                text: "Hum ne apne naye ghar ke liye pura bedroom set karwaya. Quality aur finishing ne sab mehman ko impress kiya. Jaipur mein itna acha custom furniture koi nahi deta!",
              },
              {
                name: "Vikram Choudhary",
                area: "Malviya Nagar, Jaipur",
                text: "Got a full home-office setup done — bookshelf, desk, and cabinet. The team measured everything on-site and delivered exactly what was shown in the design. Will definitely order again.",
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  borderRadius: 12,
                  padding: 28,
                  borderLeft: `4px solid ${C.oak}`,
                  boxShadow: "0 4px 16px rgba(92,51,23,0.10)",
                }}
              >
                <p
                  style={{
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    color: C.charcoal,
                    marginBottom: 16,
                  }}
                >
                  "{t.text}"
                </p>
                <p style={{ fontWeight: "bold", color: C.teak }}>{t.name}</p>
                <p style={{ fontSize: "0.82rem", color: C.oak }}>{t.area}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <Section id="services" bg={C.white}>
        <div ref={servRef} style={fadeBase}>
          <Heading
            center
            sub="Every piece built from scratch — your dimensions, your wood, your finish."
          >
            What We Build for You
          </Heading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                style={{
                  background: C.cream,
                  borderRadius: 12,
                  padding: "28px 24px",
                  border: `1px solid ${C.sand}`,
                  boxShadow: "0 2px 12px rgba(92,51,23,0.07)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(92,51,23,0.18)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(92,51,23,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: C.walnut,
                    marginBottom: 10,
                    fontSize: "1.2rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "#6B4F35",
                    lineHeight: 1.65,
                    fontSize: "0.93rem",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LOCAL SEO SECTION ────────────────────────────────────────────────── */}
      <Section bg={C.sand}>
        <div ref={localRef} style={fadeBase}>
          <Heading
            center
            sub="Serving all major localities across the Pink City."
          >
            We Deliver Across All of Jaipur
          </Heading>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 48,
              justifyContent: "center",
            }}
          >
            {areas.map((area) => (
              <span
                key={area}
                style={{
                  background: C.white,
                  color: C.teak,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: `1px solid ${C.oak}`,
                  fontSize: "0.88rem",
                  letterSpacing: "0.02em",
                }}
              >
                📍 {area}
              </span>
            ))}
          </div>
          {/* Dummy Google Map Embed */}
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 6px 24px rgba(92,51,23,0.18)",
              border: `2px solid ${C.oak}`,
            }}
          >
            <iframe
              title="WoodCraft Jaipur location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228131.46803!2d75.71792!3d26.88514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="380"
              style={{ display: "block", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* ── PROCESS ─────────────────────────────────────────────────────────── */}
      <Section id="process" bg={C.white}>
        <div ref={processRef} style={fadeBase}>
          <Heading
            center
            sub="Simple, transparent, and stress-free from day one."
          >
            How It Works
          </Heading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                style={{ textAlign: "center", padding: "32px 20px" }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.oak}, ${C.teak})`,
                    color: C.white,
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 16px rgba(196,154,90,0.4)",
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: C.walnut,
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "#6B4F35",
                    lineHeight: 1.65,
                    fontSize: "0.92rem",
                  }}
                >
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      marginTop: 20,
                      fontSize: "1.5rem",
                      color: C.oak,
                      display: "none",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── JAIPUR HERITAGE CONNECTION ──────────────────────────────────────── */}
      <Section bg={C.cream}>
        <div
          ref={heritageRef}
          style={{
            ...fadeBase,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
              alt="custom wood furniture in Jaipur inspired by local heritage craftsmanship"
              loading="lazy"
              style={{
                width: "100%",
                borderRadius: 14,
                boxShadow: "0 8px 32px rgba(92,51,23,0.22)",
              }}
            />
          </div>
          <div>
            <Heading sub="Rooted in centuries of artisanal tradition.">
              The Spirit of Jaipur in Every Joint
            </Heading>
            <p
              style={{
                lineHeight: 1.85,
                color: "#5A3E2B",
                fontSize: "1.02rem",
                marginBottom: 18,
              }}
            >
              <a
                href="https://en.wikipedia.org/wiki/Jaipur"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: C.teak,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Jaipur
              </a>{" "}
              has been a city of extraordinary craftsmen for over three
              centuries. The same precision that went into carving the latticed
              windows of Hawa Mahal, inlaying marble in Amer Fort, and crafting
              the city's legendary jewellery lives on in our workshop today.
            </p>
            <p
              style={{
                lineHeight: 1.85,
                color: "#5A3E2B",
                fontSize: "1.02rem",
                marginBottom: 18,
              }}
            >
              We carry that heritage into every dovetail joint, every
              hand-applied finish, and every piece of solid wood we select. Our
              craftsmen — many of whom come from multi-generational woodworking
              families — bring both traditional joinery techniques and modern
              precision to your home.
            </p>
            <p
              style={{
                lineHeight: 1.85,
                color: "#5A3E2B",
                fontSize: "1.02rem",
              }}
            >
              When you order a piece from us, you're not just buying furniture.
              You're bringing a small piece of Jaipur's living craftsmanship
              tradition into your space.
            </p>
          </div>
        </div>
      </Section>

      {/* ── PROOF SECTION ───────────────────────────────────────────────────── */}
      <Section bg={C.sand}>
        <div ref={proofRef} style={{ ...fadeBase, textAlign: "center" }}>
          <Heading center>100+ Homes Furnished in Jaipur</Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            {[
              ["100+", "Homes Furnished"],
              ["500+", "Pieces Delivered"],
              ["5★", "Average Rating"],
              ["5 Yr", "Warranty"],
            ].map(([n, l]) => (
              <div key={l} style={{ minWidth: 120 }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2.6rem",
                    color: C.teak,
                    fontWeight: 700,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    color: "#7A5B3C",
                    fontSize: "0.88rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Before / After image placeholders */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                label: "BEFORE",
                src: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=700&q=70",
                alt: "empty room before custom furniture Jaipur",
                badge: "#999",
              },
              {
                label: "AFTER",
                src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=700&q=80",
                alt: "luxury custom wood furniture installed Jaipur home",
                badge: C.green,
              },
            ].map(({ label, src, alt, badge }) => (
              <div
                key={label}
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 6px 28px rgba(92,51,23,0.2)",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 280,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: badge,
                    color: "#fff",
                    padding: "4px 14px",
                    borderRadius: 999,
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <Section id="faq" bg={C.white}>
        <div ref={faqRef} style={fadeBase}>
          <Heading center sub="Everything you want to know before ordering.">
            Frequently Asked Questions
          </Heading>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: `1px solid ${C.sand}`,
                  marginBottom: 4,
                }}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "20px 4px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.05rem",
                    color: C.walnut,
                    fontWeight: 600,
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      fontSize: "1.4rem",
                      color: C.oak,
                      transition: "transform 0.25s",
                      transform: faqOpen === i ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                {faqOpen === i && (
                  <p
                    style={{
                      padding: "0 4px 20px",
                      color: "#6B4F35",
                      lineHeight: 1.75,
                      fontSize: "0.96rem",
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTENT / LOCAL SEO PARAGRAPH ──────────────────────────────────── */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ lineHeight: 1.9, color: "#5C3D20", fontSize: "1rem" }}>
            Looking for reliable custom wood furniture in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Jaipur"
              target="_blank"
              rel="noreferrer"
              style={{
                color: C.teak,
                fontWeight: "bold",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Jaipur
            </a>
            ? We are a local manufacturer offering fully bespoke wooden
            furniture — beds, wardrobes, sofas, dining tables, TV units, and
            office setups — designed and built to your exact specifications.
            From measuring your space to final installation, our end-to-end
            service ensures every piece fits perfectly and lasts for decades. We
            serve homeowners, interior designers, builders, and commercial
            clients across all neighbourhoods of Jaipur, including Mansarovar,
            Vaishali Nagar, Malviya Nagar, Jagatpura, and C-Scheme. Our workshop
            uses responsibly sourced solid woods and non-toxic finishes
            certified safe for homes with children. Reach out today for a free
            consultation.
          </p>
        </div>
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.walnut} 0%, ${C.teak} 60%, ${C.oak} 100%)`,
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div ref={ctaRef} style={fadeBase}>
          <p
            style={{
              color: C.oak,
              letterSpacing: "0.16em",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Limited Slots This Month
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: C.white,
              marginBottom: 16,
              maxWidth: 680,
              margin: "0 auto 16px",
            }}
          >
            Get Your Custom Furniture Designed Today
          </h2>
          <p
            style={{
              color: C.sand,
              marginBottom: 36,
              fontSize: "1.05rem",
              maxWidth: 540,
              margin: "0 auto 36px",
            }}
          >
            Free home visit · No commitment to order · Detailed design drawing
            included
          </p>
          <CTAButtons size="lg" />
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: C.charcoal,
          color: C.sand,
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.1rem",
            marginBottom: 8,
          }}
        >
          🪵 WoodCraft Jaipur
        </p>
        <p style={{ fontSize: "0.82rem", color: "#9C7F5A" }}>
          Custom Wood Furniture · Handcrafted in Jaipur, Rajasthan · ©{" "}
          {new Date().getFullYear()}
        </p>
        <p style={{ fontSize: "0.8rem", color: "#7A6040", marginTop: 8 }}>
          Serving Vaishali Nagar · Mansarovar · Malviya Nagar · Jagatpura ·
          C-Scheme · Bani Park & all of Jaipur
        </p>
      </footer>
      <Footer />
    </div>
  );
}
