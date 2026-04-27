import { useEffect } from "react";
import Header, { Footer } from "../../Header";

export default function CustomWoodFurnitureSuccessStory() {
  useEffect(() => {
    document.title =
      "How a Jaipur Family Transformed Their Home with Custom Wood Furniture";
    const desc = document.querySelector("meta[name='description']");
    if (desc) {
      desc.setAttribute(
        "content",
        "See how a Jaipur family solved space and furniture problems with custom wood furniture. A real story of better design, comfort, and long-term value.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "See how a Jaipur family solved space and furniture problems with custom wood furniture. A real story of better design, comfort, and long-term value.";
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: "#faf8f4", fontFamily: "'Georgia', serif" }}
        className="min-h-screen"
      >
        <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        h1, h2, h3 {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        p, li {
          font-family: 'Georgia', serif;
          line-height: 1.85;
        }
      `}</style>

        {/* Hero */}
        <section className="w-full">
          <div className="relative w-full" style={{ height: "520px" }}>
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80"
              alt="Warm Indian home living room"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.72)" }}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end px-6 pb-12"
              style={{
                background:
                  "linear-gradient(to top, rgba(30,20,10,0.72) 40%, transparent 100%)",
              }}
            >
              <div className="max-w-3xl mx-auto w-full">
                <p
                  className="text-amber-300 text-sm tracking-widest uppercase mb-3 fade-up visible"
                  style={{ fontFamily: "sans-serif" }}
                >
                  A Real Story from Jaipur
                </p>
                <h1
                  className="text-white text-3xl md:text-4xl font-bold leading-snug fade-up visible delay-1"
                  style={{ maxWidth: "680px" }}
                >
                  How a Jaipur Family Transformed Their Home with Custom Wood
                  Furniture
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <main className="max-w-3xl mx-auto px-5 md:px-6 py-16 space-y-16">
          {/* Intro */}
          <div className="fade-up space-y-4">
            <p className="text-lg" style={{ color: "#4a3728" }}>
              Meera and Rajesh had been living in their Jaipur home for six
              years. The house looked fine from the outside — painted,
              well-kept, and filled with furniture bought over time from various
              stores. But every time they walked in, something felt off. The
              home never truly felt like theirs.
            </p>
            <p style={{ color: "#6b5344" }}>
              This is the story of how they discovered the difference that{" "}
              <strong>custom wood furniture in Jaipur</strong> can make — not
              just to a room, but to the feeling of coming home.
            </p>
          </div>

          {/* Divider */}
          <div className="fade-up flex items-center gap-4">
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "#d9c9b8" }}
            ></div>
            <span style={{ color: "#b09070", fontSize: "1.2rem" }}>✦</span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "#d9c9b8" }}
            ></div>
          </div>

          {/* H2: The Problem */}
          <section className="space-y-10">
            <h2
              className="fade-up text-2xl md:text-3xl font-bold"
              style={{ color: "#2c1a0e" }}
            >
              The Problem
            </h2>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Home looked complete but didn't feel right
              </h3>
              <p style={{ color: "#5c4535" }}>
                Every piece of furniture was purchased with good intentions. A
                TV unit from one brand, a bed frame from another, a wardrobe
                that didn't quite match the wall colour. On paper, everything
                was there. In reality, nothing spoke to each other. The home
                felt assembled, not designed.
              </p>
              <p style={{ color: "#5c4535" }}>
                Guests would walk in and say it looked "nice." But Meera knew
                something was missing. A warmth. A coherence. A sense of
                intention.
              </p>
            </div>

            {/* Before image */}
            <div className="fade-up">
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80"
                alt="Cluttered or mismatched Indian apartment room"
                className="w-full rounded-xl object-cover"
                style={{ height: "340px", filter: "saturate(0.85)" }}
              />
              <p
                className="mt-3 text-sm text-center"
                style={{ color: "#9c7c60", fontFamily: "sans-serif" }}
              >
                Before — functional, but never fully theirs
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Space issues and poor storage
              </h3>
              <p style={{ color: "#5c4535" }}>
                Their bedroom had two wardrobes that took up far too much floor
                space, leaving barely room to walk on one side. In the living
                room, a corner sat completely wasted — too awkward for standard
                furniture, too visible to ignore.
              </p>
              <p style={{ color: "#5c4535" }}>
                Storage was always a problem. Clothes piled up. Books had no
                home. The kitchen felt cramped despite having enough square
                footage. It was a space management problem that standard
                furniture could never solve.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Furniture durability problems
              </h3>
              <p style={{ color: "#5c4535" }}>
                Within three years, the wardrobe hinges had loosened. The TV
                cabinet's laminate had started peeling at the edges. A chair
                wobbled. A drawer wouldn't shut properly. These weren't luxury
                purchases, but they weren't cheap either — yet they felt
                disposable.
              </p>
              <p style={{ color: "#5c4535" }}>
                Replacing things every few years, Rajesh realized, was costing
                them more than they thought.
              </p>
            </div>
          </section>

          {/* Quote block */}
          <blockquote
            className="fade-up rounded-2xl px-8 py-7 relative"
            style={{
              backgroundColor: "#f0e8dc",
              borderLeft: "4px solid #b8845a",
            }}
          >
            <p
              className="text-xl italic leading-relaxed"
              style={{ color: "#4a2e18" }}
            >
              "We didn't want furniture that looked good in the store. We wanted
              furniture that felt right in our home, our rooms, our life."
            </p>
            <footer
              className="mt-3 text-sm"
              style={{ color: "#9c7060", fontFamily: "sans-serif" }}
            >
              — Meera, Jaipur
            </footer>
          </blockquote>

          {/* H2: The Turning Point */}
          <section className="space-y-10">
            <h2
              className="fade-up text-2xl md:text-3xl font-bold"
              style={{ color: "#2c1a0e" }}
            >
              The Turning Point
            </h2>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Realization after repeated issues
              </h3>
              <p style={{ color: "#5c4535" }}>
                The breaking point came when their son's study table — barely
                two years old — collapsed at one side during exams. That was the
                moment Meera sat down and said: "We are done buying furniture
                that doesn't last."
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Why ready-made furniture failed
              </h3>
              <p style={{ color: "#5c4535" }}>
                Ready-made furniture is built for average spaces and average
                needs. But no home is average. Meera's bedroom had a slanted
                ceiling on one side. Rajesh's study had an awkward pillar in the
                middle. Standard sizes simply didn't work. Ready-made furniture
                forced them to adjust their lives around it — instead of the
                other way around.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Decision to go custom
              </h3>
              <p style={{ color: "#5c4535" }}>
                A neighbour mentioned a carpenter who did custom work — solid
                wood, no MDF shortcuts, and built to the exact dimensions of
                your space. The price was higher upfront. But Rajesh did the
                math. In ten years, replacing cheap furniture three times over
                cost far more. They decided to invest once, and invest well.
              </p>
            </div>
          </section>

          {/* H2: The Experience */}
          <section className="space-y-10">
            <h2
              className="fade-up text-2xl md:text-3xl font-bold"
              style={{ color: "#2c1a0e" }}
            >
              The Experience
            </h2>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Understanding their needs
              </h3>
              <p style={{ color: "#5c4535" }}>
                The first meeting wasn't about wood types or finishes. It was
                about how the family lived. Where did they spend evenings? How
                many people slept in each room? Did the children need study
                space inside the bedroom? What did they wish they had more of —
                storage, seating, surfaces?
              </p>
              <p style={{ color: "#5c4535" }}>
                It felt less like hiring a carpenter and more like talking to
                someone who genuinely wanted the home to work.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Design planning
              </h3>
              <p style={{ color: "#5c4535" }}>
                Sketches were made, room by room. The awkward corner in the
                living room became a custom L-shaped bookshelf that doubled as a
                display unit. The bedroom wardrobe was designed to reach the
                ceiling — eliminating the dust-collecting space on top that
                Meera had always disliked. Their son got a study table with a
                hutch, drawers, and a corkboard panel built in.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Material and build decisions
              </h3>
              <p style={{ color: "#5c4535" }}>
                Sheesham wood was chosen for the main pieces — dense, beautiful,
                and well-suited to Jaipur's dry climate. For the kitchen,
                marine-grade plywood with a teak veneer. Every joint was
                hand-fitted. No hollow panels. No plastic fittings where wood
                could do the job better.
              </p>
            </div>
          </section>

          {/* H2: The Transformation */}
          <section className="space-y-10">
            <h2
              className="fade-up text-2xl md:text-3xl font-bold"
              style={{ color: "#2c1a0e" }}
            >
              The Transformation
            </h2>

            {/* After image */}
            <div className="fade-up">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
                alt="Beautiful Indian home interior with wooden furniture"
                className="w-full rounded-xl object-cover"
                style={{ height: "380px" }}
              />
              <p
                className="mt-3 text-sm text-center"
                style={{ color: "#9c7c60", fontFamily: "sans-serif" }}
              >
                After — every corner considered, every piece purposeful
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Space utilization improvement
              </h3>
              <p style={{ color: "#5c4535" }}>
                The bedroom felt 30% larger — not because it grew, but because
                the furniture finally belonged there. The wardrobe tucked
                against the wall perfectly. The study table fit into the alcove
                as if it was always meant to be there. The wasted corner in the
                living room became the most-commented-on feature whenever guests
                visited.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Daily comfort changes
              </h3>
              <p style={{ color: "#5c4535" }}>
                Small things made large differences. Drawers that opened
                smoothly. A wardrobe shelf at exactly the right height. A
                bedside unit with just enough space for a book, a glass of
                water, and a phone — nothing more cluttered, nothing missing.
                The home started working with them instead of against them.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Visual and design upgrade
              </h3>
              <p style={{ color: "#5c4535" }}>
                Sheesham wood has a natural warmth that no laminate can
                replicate. The grain, the texture, the slight variation from
                piece to piece — it made the home feel alive. Meera chose a
                matte walnut finish that complemented the terracotta walls.
                Suddenly, the home had a point of view. A style. A soul.
              </p>
            </div>
          </section>

          {/* Second quote */}
          <blockquote
            className="fade-up rounded-2xl px-8 py-7"
            style={{
              backgroundColor: "#ede0d0",
              borderLeft: "4px solid #8c5e38",
            }}
          >
            <p
              className="text-xl italic leading-relaxed"
              style={{ color: "#3d2010" }}
            >
              "The first evening after everything was set up, we just sat
              quietly in the living room. Nobody said anything. We just looked
              around and smiled."
            </p>
            <footer
              className="mt-3 text-sm"
              style={{ color: "#9c7060", fontFamily: "sans-serif" }}
            >
              — Rajesh, Jaipur
            </footer>
          </blockquote>

          {/* H2: The Result */}
          <section className="space-y-10">
            <h2
              className="fade-up text-2xl md:text-3xl font-bold"
              style={{ color: "#2c1a0e" }}
            >
              The Result
            </h2>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Peace of mind
              </h3>
              <p style={{ color: "#5c4535" }}>
                Two years later, nothing has wobbled. No hinge has come loose.
                No surface has peeled. Meera says she has stopped thinking about
                furniture entirely — which is exactly how it should be. Good
                furniture disappears into your life. You stop noticing it and
                start living with it.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Long-term satisfaction
              </h3>
              <p style={{ color: "#5c4535" }}>
                The upfront investment was around twice what they had previously
                spent. But Rajesh estimates they won't need to replace anything
                for fifteen to twenty years. Per year, it works out to far less
                — and without the frustration, the dust, the disposal, and the
                starting-over.
              </p>
            </div>

            <div className="fade-up space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#3d2410" }}
              >
                Emotional impact — home feeling
              </h3>
              <p style={{ color: "#5c4535" }}>
                This is the part that's hardest to quantify but easiest to feel.
                Their home now has a personality. It reflects who they are — a
                family that values quality, warmth, and thoughtfulness. Their
                son's friends ask whose house it is when they visit. Relatives
                remember it. And every evening, when the family sits together,
                the space holds them the way a home should.
              </p>
            </div>
          </section>

          {/* H2: Final Thoughts */}
          <section className="fade-up space-y-6">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "#2c1a0e" }}
            >
              Final Thoughts
            </h2>
            <p style={{ color: "#5c4535" }}>
              Meera and Rajesh's story isn't unusual. Many families in Jaipur
              are navigating the same frustrations — homes that look okay but
              never feel fully right. If any part of this resonates, here's what
              their experience teaches:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Custom wood furniture isn't a luxury — it's a long-term investment that pays back in daily comfort and durability.",
                "Your home is unique. The furniture should be too. Standard sizes will always leave something wasted.",
                "The emotional value of a space that feels genuinely yours is real, and it compounds over time.",
                "Choosing custom wood furniture in Jaipur means working with craftspeople who understand local homes, climates, and living styles.",
              ].map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span
                    className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: "#d4a97a",
                      color: "#fff",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: "#5c4535" }}>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="fade-up flex items-center gap-4">
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "#d9c9b8" }}
            ></div>
            <span style={{ color: "#b09070", fontSize: "1.2rem" }}>✦</span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "#d9c9b8" }}
            ></div>
          </div>

          {/* CTA */}
          <section
            className="fade-up rounded-2xl px-8 py-12 text-center space-y-5"
            style={{ backgroundColor: "#2c1a0e" }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "#f5e6d0" }}
            >
              Get Your Custom Furniture Designed in Jaipur
            </h2>
            <p
              className="text-base leading-relaxed mx-auto"
              style={{
                color: "#c9a882",
                maxWidth: "520px",
                fontFamily: "sans-serif",
              }}
            >
              Every home is different. Tell us about yours — your rooms, your
              needs, your vision. We'll help you design furniture that fits
              perfectly and lasts for years.
            </p>
            <a
              href="https://wa.me/919782545485
"
              className="inline-block px-8 py-3 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: "#d4874a",
                color: "#fff",
                fontFamily: "sans-serif",
                textDecoration: "none",
              }}
            >
              Get Free Quote
            </a>
          </section>
        </main>

        {/* Footer gap */}
        <div className="h-16" style={{ backgroundColor: "#faf8f4" }}></div>
      </div>
      <Footer />
    </div>
  );
}
