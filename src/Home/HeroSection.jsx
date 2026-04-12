import React, { useEffect, useState } from "react";
import home_hero_image from "../assets/images/home/home_hero_image.webp";

const HeroSection = () => {
  return (
    <section
      className="
        bg-[#a7a8a3] w-full font-inter relative
        h-auto
        lg:h-[90vh]
        overflow-hidden
        mt-2
      "
    >
      <div
        className="
          w-[90%] mx-auto mt-1
          lg:w-[70%]
        "
      >
        <div className="flex gap-5 justify-center ">
          <a href="/shop">
            <u>Shop</u>
          </a>
          <a href="services">
            <u>Services</u>
          </a>
          <a href="contracting">
            <u>Contracting</u>
          </a>
        </div>
        {/* TEXT CONTENT */}
        <div
          className="
            pt-10 text-base font-medium
            lg:pt-24 lg:text-lg
          "
        >
          <h1
            className="
              text-3xl font-serif leading-tight
              lg:text-[56px] lg:font-normal lg:leading-[1.1] lg:tracking-[-0.5px]
              relative z-10
            "
          >
            Custom Furniture on Order in Jaipur
          </h1>

          <h2
            className="
              text-lg font-light py-4
              lg:text-2xl lg:py-7
            "
          >
            Furniture Made for Your Space.
            <br /> designed, built, and installed without hassle.
          </h2>

          <p>
            Explore Furniture Designed <br /> for Real Spaces
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div
          className="
            mt-8 rounded-2xl overflow-hidden
            w-full h-96
            lg:h-[19rem] lg:w-[35rem] lg:mt-[-30px]
          "
        >
          <img
            src={home_hero_image}
            alt="Founder of MG Furniture Jaipur"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CTA BUTTON */}
        <div
          className="
            mt-6 flex justify-center
            lg:absolute lg:right-[60vh] lg:top-[65vh]
          "
        >
          <a
            href="https://wa.me/919782545485"
            className="
              border-2 border-black
              px-6 py-3 mb-2 rounded-full text-base font-medium
              lg:p-4 lg:px-9 lg:text-lg lg:leading-loose
            "
          >
            Book a Free Site Visit
          </a>
        </div>
      </div>
    </section>
  );
};

const items = [
  { type: "Beds", number: 19 },
  { type: "Chairs", number: 25 },
  { type: "Wardrobe", number: 14 },
  { type: "Sofas", number: 72 },
  { type: "Modular Kitchen", number: 20 },
  { type: "Dinning Table", number: 16 },
];

function Counter({ target }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setNumber(current);
      if (current === target) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return <>{number}</>;
}

const HeroSection2 = () => {
  return (
    <section
      className="
        bg-[#cfd8aa]
        h-auto
        lg:h-48
        
      "
    >
      <div
        className="
          w-[90%] mx-auto
          lg:w-[70%]
        "
      >
        <div
          className="
            grid grid-cols-2 gap-10 py-10
            lg:flex lg:items-center lg:gap-36 lg:py-16
          "
        >
          {items.map((item) => (
            <div key={item.type} className="font-medium relative text-center">
              <div
                className="
                  absolute inset-0 flex items-center justify-center
                  text-5xl font-bold
                  lg:text-7xl
                  z-0 text-hollow
                "
              >
                <Counter target={item.number} />
              </div>

              <div
                className="
                  relative z-10 font-serif font-medium
                  text-xl
                  lg:text-3xl
                "
              >
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection2 };
export default HeroSection;
