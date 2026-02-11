import React from "react";

const servicesTypes = [
  {
    img: "/image_collection/services_image/sofa cleaning.png",
    type: "Sofa & upholstery cleaning",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/mettress cleaning.png",
    type: "Mattress cleaning",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/carpet cleaning.png",
    type: "Carpet cleaning",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/furniture polishing.png",
    type: "Furniture polishing",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/wooden surface.png",
    type: "Wooden surface treatment",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/modular kitchen cleaning.png",
    type: "Modular kitchen cleaning",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/wadobe serivce.png",
    type: "Wardrobe servicing",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/cabinet service.png",
    type: "Cabinet servicing",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
];
const repairsTypes = [
  {
    img: "/image_collection/services_image/bed repair.png",
    type: "Bed repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/chair repair.png",
    type: "Chair repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/table repair.png",
    type: "Table repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/sofa repair.png",
    type: "Sofa frame repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/door repair.png",
    type: "Door repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/window repair.png",
    type: "Window Repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/shelf repair.png",
    type: "Shelf repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/wall unit repair.png",
    type: "Wall unit repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/curtain rod repair.png",
    type: "Curtain rod repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/mirror fixing repair.png",
    type: "Mirror fixing repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
];
const fittingTypes = [
  {
    img: "/image_collection/services_image/modular fitting.png",
    type: "Modular kitchen installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/warddrobe fitting.png",
    type: "Wardrobe installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/cabinet fitting.png",
    type: "Cabinet installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/beds and sofa fitting.png",
    type: "Bed & Sofa setup",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/shelves and wall unit fitting.png",
    type: "Shelves & wall units",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/windon fitting.png",
    type: "Doors & Windows",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/cloth hanger fitting.png",
    type: "Clothes hanger installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/locan handles fitting.png",
    type: "Locks & handles installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
];

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
