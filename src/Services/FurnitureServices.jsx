import React from "react";

const servicesTypes = [
  {
    img: "/image_collection/services_image/wadobe serivce.png",
    type: "Wardrobe servicing",
    url: "/services/wardrobe-servicing",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/cabinet service.png",
    type: "Cabinet servicing",
    url: "/services/cabinet-service",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/bed repair.png",
    type: "Bed repair",
    url: "/services/bed-repair",
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
    url: "/services/table-repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/sofa repair.png",
    type: "Sofa frame repair",
    url: "/services/sofa-frame-repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/door repair.png",
    type: "Door & Window repair",
    url: "/services/door-repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },

  {
    img: "/image_collection/services_image/shelf repair.png",
    type: "Shelves repair",
    url: "/services/shelves-wallunit-repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/wall unit repair.png",
    type: "Wall unit repair",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
];

const fittingTypes = [
  {
    img: "/image_collection/services_image/modular fitting.png",
    type: "Modular kitchen installation",
    url: "/services/modular-kitchen-installation",
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
    url: "/services/cabinet-installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/beds and sofa fitting.png",
    type: "Bed & Sofa setup",
    url: "/services/bed-sofa-installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/shelves and wall unit fitting.png",
    type: "Shelves & wall units",
    url: "/services/shelves-wallunit-installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/windon fitting.png",
    type: "Doors & Windows",
    url: "/services/door-window-installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/cloth hanger fitting.png",
    type: "Clothes hanger installation",
    url: "/services/cloth-hanger-installation",
    WhatsAppMsg:
      "https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order",
  },
  {
    img: "/image_collection/services_image/locan handles fitting.png",
    type: "Locks & handles installation",
    url: "/services/lock-handle-installation",
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
          Complete Furniture Services & Repair
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
                <a href={item.url} className="mr-2 text-lg font-poppins">
                  Book Serivce
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FITTING SECTION */}
        <p className="text-2xl text-center ml-1 lg:text-3xl lg:ml-40 pt-12 font-poppins">
          Furniture Installation Services
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
                <a href={item.url} className="mr-2 text-lg font-poppins">
                  Book Service
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
