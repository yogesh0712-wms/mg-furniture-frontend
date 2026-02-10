import React from "react";
import { Wrench, Hammer, ClipboardCheck } from "lucide-react";

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

const ServiceHeroSection = () => {
  return (
    <div>
      {/* CATEGORY STRIP */}
      <div
        className="
          flex flex-wrap items-center justify-center
          gap-x-4 gap-y-2 px-3 py-3
          bg-[#343E4C]
          lg:flex lg:gap-5 lg:mt-1 lg:pl-5
        "
      >
        {Headitem.map((item, index) => (
          <p
            key={index}
            className="
              text-sm text-white
              lg:text-lg lg:pl-5 lg:py-1
            "
          >
            {item}
          </p>
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="grid grid-cols-1 lg:mx-auto lg:w-full lg:gap-20 lg:flex">
        {/* IMAGE GRID */}
        <div
          className="
            order-2 flex flex-wrap justify-center
            gap-6 mt-6
            lg:order-1 lg:w-[47%]
            lg:grid lg:grid-cols-2 lg:pt-5 lg:gap-y-5 lg:gap-x-1
          "
        >
          {[
            "service hero image 1.png",
            "service heroimage 2.png",
            "service hero image3.png",
            "service hero image4.png",
          ].map((img, i) => (
            <div
              key={i}
              className="
                w-[90%] h-72 overflow-hidden
                lg:w-[42vh] lg:h-[46vh]
                lg:rounded-tl-xl lg:rounded-tr-xl
                lg:ml-0 lg:mt-0
              "
            >
              <img
                src={`./image_collection/services_image/${img}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* TEXT + CTA */}
        <div className="order-1 w-full lg:order-2 lg:mr-5 lg:w-[50%]">
          <p
            className="
              text-2xl text-center font-semibold font-serif my-6
              lg:text-4xl lg:text-left lg:mb-1 lg:mt-10
            "
          >
            # Services at your doorstep
          </p>

          <div className="w-full pt-4 overflow-hidden">
            <img
              src="./image_collection/services_image/MG service herso section.png"
              alt=""
              className="w-full object-cover lg:scale-110"
            />
          </div>

          {/* CTA BUTTONS */}
          <div
            className="
              my-8 flex flex-col items-center gap-4
              lg:ml-1 lg:flex-row
            "
          >
            <a
              href="tel:917878658974"
              className="
                bg-orange-400 text-white
                inline-flex items-center gap-3
                border-2 border-black
                px-8 py-4 rounded-full
                lg:bg-white lg:text-black lg:hover:bg-orange-400
              "
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917878658974"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-green-400 text-white
                inline-flex items-center gap-3
                border-2 border-black
                px-8 py-4 rounded-full
                lg:bg-white lg:text-black lg:hover:bg-green-400
              "
            >
              WhatsApp Us
            </a>
          </div>

          {/* ICON ROW (DESKTOP ONLY) */}
          <div className="hidden lg:flex text-slate-400 hover:text-black lg:gap-3 lg:mt-11">
            <Wrench size={30} strokeWidth={1.5} color="#D6D6B5" />
            <p className="text-lg">Service</p>
            <Hammer size={30} strokeWidth={1.5} color="#D6D6B5" />
            <p className="text-lg">Repair</p>
            <ClipboardCheck size={30} strokeWidth={1.5} color="#D6D6B5" />
            <p className="text-lg">Fitting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
