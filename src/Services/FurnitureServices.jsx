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
    <div className="bg-slate-500 mt-10 pt-5">
      <p className="text-4xl lg:text-3xl font-poppins font-medium mt-10 ml-5 lg:ml-40">
        Everything Your Furniture Needs, in One Place
      </p>
      <div className="lg:mx-auto lg:w-[80%] lg:flex gap-10 mt-10 mb-10">
        <div className="h-[900px] mb-2 lg:mb-0 lg:w-96 lg:h-[60vh] rounded-lg overflow-hidden">
          <img
            src="./image_collection/furniture service image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" h-[900px] mb-2 lg:mb-0 lg:w-96 lg:h-[60vh] rounded-lg overflow-hidden">
          <img
            src="./image_collection/furniture repair image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" h-[900px] lg:w-96 lg:h-[60vh] rounded-lg overflow-hidden">
          <img
            src="./image_collection/furniture fitting image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-[#EAEAC9] mt-5 pb-10">
        <div>
          <p className="text-4xl lg:text-3xl ml-16 lg:ml-28 pt-10 font-poppins  ">
            Complete Furniture Care & Services
          </p>
          <div className="w-95% mx-auto flex flex-wrap gap-4 lg:mx-auto lg:w-[90%] lg:mr-10 mt-8 lg:grid lg:grid-cols-5 lg:gap-3">
            {servicesTypes.map((item) => (
              <div className="mt-5 ml-4 lg:ml-0 ">
                <div className="w-[355px] h-56 lg:w-60 lg:h-60 rounded-3xl overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl lg:text-lg font-poppins ml-14 lg:ml-0 pt-3 ">
                  {item.type}
                </p>
                <div className="border-2 border-black p-3 mt-3 ml-14 lg:ml-2 w-[230px] rounded-l-full rounded-r-full">
                  <a
                    href="tel:917878658974"
                    className="mr-2 ml-2  text-lg font-poppins"
                  >
                    Call
                  </a>
                  /
                  <a
                    href={item.WhatsAppMsg}
                    className="ml-3 text-lg font-inter"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-4xl lg:text-3xl ml-40 pt-10 font-poppins">
            Furniture Repair Services
          </p>
          <div className="w-95% mx-auto flex flex-wrap gap-4 lg:mx-auto lg:w-[90%] lg:mr-10 mt-8 lg:grid lg:grid-cols-5 lg:gap-3">
            {repairsTypes.map((item) => (
              <div className="mt-5 ml-4 lg:ml-0">
                <div className=" w-[355px] h-56 lg:w-60 lg:h-60 rounded-3xl overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl lg:text-lg font-poppins ml-20 lg:ml-0 pt-3">
                  {item.type}
                </p>
                <div className="border-2 border-black p-3 mt-3 ml-10 lg:ml-2 w-[230px] rounded-l-full rounded-r-full">
                  <a
                    href="tel:917878658974"
                    className="mr-3 ml-4 text-lg font-poppins"
                  >
                    Call
                  </a>
                  /
                  <a
                    href={item.WhatsAppMsg}
                    className="ml-3 text-lg font-inter"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-4xl lg:text-3xl ml-40 pt-10 font-poppinss">
            Furniture Fitting Services
          </p>
          <div className="w-95% mx-auto flex flex-wrap gap-4 lg:mx-auto lg:w-[90%] lg:mr-10 mt-8 lg:grid lg:grid-cols-5 lg:gap-3">
            {fittingTypes.map((item) => (
              <div className="mt-5 ml-4 lg:ml-0">
                <div className=" w-[355px] h-56 lg:w-60 lg:h-60 rounded-3xl overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl lg:text-lg font-poppins ml-20 lg:ml-0 pt-3 ">
                  {item.type}
                </p>
                <div className="border-2 border-black p-3 mt-3 ml-10 lg:ml-2 w-[230px] rounded-l-full rounded-r-full">
                  <a
                    href="tel:917878658974"
                    className="mr-3 ml-4 text-lg font-poppins"
                  >
                    Call
                  </a>
                  /
                  <a
                    href={item.WhatsAppMsg}
                    className="ml-3 text-lg font-inter"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureServices;
