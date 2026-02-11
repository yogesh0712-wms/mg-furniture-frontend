import React from "react";

const FurnitureServices = () => {
  return (
    <div className="bg-slate-500 mt-10 pt-5 overflow-x-hidden">
      {/* DESKTOP ONLY TITLE */}
      <p className="hidden lg:block text-3xl font-poppins font-medium mt-10 ml-40">
        Everything Your Furniture Needs, in One Place
      </p>

      {/* DESKTOP IMAGE STRIP */}
      <div className="hidden lg:flex lg:mx-auto lg:w-[80%] gap-10 mt-10 mb-10">
        {[
          "furniture service image.png",
          "furniture repair image.png",
          "furniture fitting image.png",
        ].map((img, i) => (
          <div
            key={i}
            className="lg:w-96 lg:h-[60vh] rounded-lg overflow-hidden"
          >
            <img
              src={`./image_collection/${img}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="bg-[#EAEAC9] mt-5 pb-10">
        {/* SECTION TITLE */}
        <p className="text-2xl text-center ml-1 lg:text-3xl lg:ml-28 pt-10 font-poppins">
          Complete Furniture Care & Services
        </p>

        {/* SERVICES GRID */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 lg:grid lg:grid-cols-5 lg:w-[90%] lg:mx-auto">
          {servicesTypes.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[90%] h-56 lg:w-60 lg:h-60 rounded-3xl overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg font-poppins pt-3 text-center">
                {item.type}
              </p>

              <div className="border-2 border-black p-3 mt-3 w-[220px] rounded-full text-center">
                <a
                  href="tel:917878658974"
                  className="mr-2 text-lg font-poppins"
                >
                  Call
                </a>
                /
                <a href={item.WhatsAppMsg} className="ml-2 text-lg font-inter">
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* REPAIR SECTION */}
        <p className="text-2xl text-center ml-1 lg:text-3xl lg:ml-40 pt-12 font-poppins">
          Furniture Repair Services
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8 lg:grid lg:grid-cols-5 lg:w-[90%] lg:mx-auto">
          {repairsTypes.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[90%] h-56 lg:w-60 lg:h-60 rounded-3xl overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg font-poppins pt-3 ">{item.type}</p>

              <div className="border-2 border-black p-3 mt-3 w-[220px] rounded-full ">
                <a
                  href="tel:917878658974"
                  className="mr-2 text-lg font-poppins"
                >
                  Call
                </a>
                /
                <a href={item.WhatsAppMsg} className="ml-2 text-lg font-inter">
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FITTING SECTION */}
        <p className="text-2xl text-center ml-1 lg:text-3xl lg:ml-40 pt-12 font-poppins">
          Furniture Fitting Services
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8 lg:grid lg:grid-cols-5 lg:w-[90%] lg:mx-auto">
          {fittingTypes.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[90%] h-56 lg:w-60 lg:h-60 rounded-3xl overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg font-poppins pt-3 text-center">
                {item.type}
              </p>

              <div className="border-2 border-black p-3 mt-3 w-[220px] rounded-full text-center">
                <a
                  href="tel:917878658974"
                  className="mr-2 text-lg font-poppins"
                >
                  Call
                </a>
                /
                <a href={item.WhatsAppMsg} className="ml-2 text-lg font-inter">
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureServices;
