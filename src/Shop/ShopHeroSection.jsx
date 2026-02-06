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
      <div className="flex flex-wrap items-center justify-center mt-2 py-2 lg:w-full bg-[#343E4C] lg:flex lg:gap-5 lg:mt-1 lg:pl-5">
        {Headitem.map((item) => (
          <p className="text-lg font-normal pl-5 py-1 text-white">{item}</p>
        ))}
      </div>
      <div className="w-full h-[300px] lg:w-full lg:h-[400px] -z-50 bg-[url('https://www.astra.it/foto/living/660ffbdf963c3202404051525519.webp')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-6xl font-serif text-white font-light pl-[47%] pt-28 pb-3">
          Shop
        </h1>
        <div className="pl-10 ">
          <NavLink
            to="/"
            className=" text-white flex text-xl items-center justify-center"
          >
            Home
            <ArrowUp
              size={20}
              strokeWidth={3}
              color="#FFFFFF"
              className="rotate-90  "
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ShopHeroSection;
