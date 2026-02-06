import React from "react";
import { Wrench, Hammer, ClipboardCheck, Zap } from "lucide-react";

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
      <div className="flex flex-wrap items-center justify-center mt-2 py-2 lg:w-full bg-[#343E4C] lg:flex lg:gap-5 lg:mt-1 lg:pl-5">
        {Headitem.map((item) => (
          <p className="text-lg font-normal pl-5 py-1 text-white">{item}</p>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:mx-auto lg:w-full lg:gap-20 lg:flex">
        <div className="order-2 lg:order-1 flex flex-wrap gap-x-10 gap-y-10 lg:w-[47%] lg:grid lg:grid-cols-2 lg:pt-5 lg:gap-y-5 lg:gap-x-1 ">
          <div className="w-[355px] h-96 ml-5 lg:ml-0 lg:w-[42vh] lg:h-[46vh] lg:rounded-tl-xl overflow-hidden ">
            <img
              src="./image_collection/services_image/service hero image 1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[355px] h-96  lg:w-[42vh] lg:h-[40vh] lg:rounded-tr-xl overflow-hidden">
            <img
              src="./image_collection/services_image/service heroimage 2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[355px] h-96 ml-5 lg:ml-0 lg:w-[42vh] lg:h-[46vh] lg:rounded-tl-xl overflow-hidden">
            <img
              src="./image_collection/services_image/service hero image3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[355px] h-96  lg:w-[42vh] lg:h-[52vh] lg:rounded-tr-xl overflow-hidden lg:-mt-11">
            <img
              src="./image_collection/services_image/service hero image4.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 w-full lg:order-2 lg:mr-5 lg:w-[50%]">
          <p className="text-4xl font-semibold font-serif my-10 lg:mb-1 lg:mt-10">
            # Services at your doorstep
          </p>
          <div className="w-full pt-5">
            <img
              src="./image_collection/services_image/MG service herso section.png"
              alt=""
              className="scale-110 object-cover"
            />
          </div>
          <div className="my-10 ml-40 lg:ml-1">
            <a
              href="tel:917878658974"
              className="bg-orange-400 text-white inline-flex items-center gap-3 border-2 mr-10 lg:mr-3 border-black p-4 px-9 rounded-full lg:text-lg font-medium leading-loose lg:bg-white lg:text-black lg:hover:bg-orange-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.18a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62a2 2 0 0 1 1.72 2z" />
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-white lg:bg-white lg:text-black inline-flex items-center gap-3 border-2 border-black p-4 px-9 rounded-full text-lg font-medium leading-loose hover:bg-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M16.001 2.003c-7.732 0-14.001 6.268-14.001 13.999 0 2.468.646 4.882 1.872 7.015L2 30l7.174-1.853c2.042 1.115 4.341 1.702 6.827 1.702 7.731 0 14-6.268 14-13.999S23.732 2.003 16.001 2.003zm0 25.848c-2.262 0-4.483-.609-6.423-1.761l-.46-.273-4.253 1.1 1.134-4.14-.299-.479c-1.171-1.882-1.79-4.052-1.79-6.297 0-6.55 5.34-11.889 11.89-11.889 6.549 0 11.889 5.339 11.889 11.889 0 6.549-5.34 11.89-11.889 11.89zm6.535-8.438c-.356-.178-2.106-1.04-2.432-1.16-.326-.118-.563-.178-.801.178-.237.356-.92 1.16-1.129 1.398-.207.237-.415.267-.771.089-.356-.178-1.504-.555-2.864-1.771-1.058-.945-1.772-2.113-1.979-2.469-.207-.356-.022-.548.156-.726.16-.159.356-.415.533-.623.178-.207.237-.356.356-.593.118-.237.059-.445-.03-.623-.089-.178-.801-1.929-1.098-2.646-.289-.694-.582-.6-.801-.611-.207-.01-.445-.012-.683-.012-.237 0-.623.089-.949.445-.326.356-1.247 1.218-1.247 2.97 0 1.751 1.277 3.444 1.455 3.682.178.237 2.513 3.837 6.092 5.381.852.367 1.518.586 2.036.75.855.272 1.633.234 2.248.142.685-.102 2.106-.861 2.402-1.692.297-.831.297-1.543.207-1.692-.089-.148-.326-.237-.683-.415z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
          <div className="hidden lg:flex text-slate-400 hover:text-black lg:gap-3 lg:mt-11">
            <Wrench size={30} strokeWidth={1.5} color="#D6D6B5" />
            <p className="text-lg">Service</p>
            <Hammer size={30} strokeWidth={1.5} color="#D6D6B5" />
            <p className="text-lg">Repair</p>
            <ClipboardCheck size={30} strokeWidth={1.5} color="#D6D6B5" />
            <p className="text-lg">Fitting</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
