import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Headitem = [
  "Chairs",
  "Sofas",
  "Doors",
  "Windows",
  "Beds",
  "Doors ",
  "Almiras ",
  "Dining tables",
  "Shooe racks ",
  "Study tables",
  "Complete Kitchen work",
  "Wooden Ceiling",
];

const ShopHeroSection = () => {
  return (
    <div>
      {/* CATEGORY STRIP */}
      <div
        className="
          flex flex-wrap items-center justify-center
          gap-x-4 gap-y-2
          px-3 py-3
          bg-[#343E4C]
          lg:flex lg:gap-5 lg:mt-1 lg:pl-5
        "
      >
        {Headitem.map((item, index) => (
          <p
            key={index}
            className="
              text-sm font-normal text-white
              lg:text-lg lg:pl-5 lg:py-1
            "
          >
            {item}
          </p>
        ))}
      </div>

      {/* HERO IMAGE */}
      <div
        className="
          w-full h-[260px]
          lg:h-[400px]
          bg-[url('https://www.astra.it/foto/living/660ffbdf963c3202404051525519.webp')]
          bg-cover bg-center bg-no-repeat
          relative
        "
      >
        {/* TITLE */}
        <h1
          className="
            text-3xl font-serif text-white font-light
            text-center pt-24
            lg:text-6xl lg:pl-[47%] lg:pt-28 lg:text-left
          "
        >
          Shop
        </h1>

        {/* BREADCRUMB */}
        <div
          className="
            mt-4 flex justify-center
            lg:pl-10 lg:justify-start
          "
        >
          <NavLink
            to="/"
            className="text-white flex text-base lg:text-xl items-center"
          >
            Home
            <ArrowUp
              size={18}
              strokeWidth={3}
              color="#FFFFFF"
              className="rotate-90 ml-1"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ShopHeroSection;
