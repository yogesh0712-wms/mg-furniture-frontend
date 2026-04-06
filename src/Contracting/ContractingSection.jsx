import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import homefurnishing from "../assets/images/contracting/contracting-home-furnishing.webp";
import officefurnishing from "../assets/images/contracting/office-furnishing.webp";
import weddingfurnishing from "../assets/images/contracting/contracting-wedding-set.webp";

const processData = [
  {
    title: "Planning & Understanding",
    desc: "We start by understanding your space, requirements, and budget to plan the right furniture solution.",
  },
  {
    title: "Design & Customization",
    desc: "Based on your needs, we create designs that match your style, space, and functionality.",
  },
  {
    title: "Manufacturing",
    desc: "All furniture is crafted with quality materials and proper finishing for long-term durability.",
  },
  {
    title: "Delivery & Installation",
    desc: "We handle delivery and complete setup at your location to ensure everything fits perfectly.",
  },
];

const ContrractingType = [
  {
    image: homefurnishing,
    type: "Complete Home Furnishing",
    description:
      "Complete home furnishing solutions designed for comfort, style, and long-term durability in your space.",
    to: "/contracting/home-living-design",
  },
  {
    image: officefurnishing,
    type: "Corporate Office Furniture",
    description:
      "Complete office furnishing solutions designed for productivity, efficiency, and long-term durability in modern workspaces",
    to: "/contracting/office-design",
  },

  {
    image: weddingfurnishing,
    type: "Wedding Furniture",
    description:
      "Complete wedding furniture sets designed for gifting, combining style, practicality, and long-lasting quality for your home.",
    to: "/contracting/wedding-furniture",
  },
];

const ContractingSection = () => {
  return (
    <div className="overflow-x-hidden">
      <section>
        {/* Title Section */}
        <div className="mx-auto w-[90%] lg:w-[45%] text-center mt-20 lg:mt-40">
          <p className="font-poppins text-2xl font-medium text-[#83857d] pb-5">
            Our Services
          </p>
          <p className="font-poppins text-4xl font-semibold pb-5">
            The Best Furniture Design
          </p>
          <p className="font-poppins text-4xl font-semibold pb-10">
            Start From Here
          </p>
          <p className="text-slate-500">
            Discover furniture designs that combine clean aesthetics, smart
            functionality, and premium finishes for modern living.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto w-[90%] lg:w-[86%] px-4 lg:px-0 flex flex-wrap justify-center">
          {ContrractingType.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-[53vh] lg:mr-8 pt-5 lg:pt-20"
            >
              <div className="h-40 lg:h-32 w-full rounded-t-3xl overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-poppins text-2xl lg:text-3xl font-semibold pt-7">
                {item.type}
              </p>
              <p className="text-slate-500 pt-7 pb-4">{item.description}</p>
              <Link to={item.to} className="font-poppins text-lg font-medium">
                Learn More
              </Link>
              <hr className="border-[1px] w-[100px] border-gray-600" />
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-20 lg:mt-32 mb-14 lg:mb-24">
        <div className="text-center mx-auto w-[90%] lg:w-[45%]">
          <p className="font-poppins font-semibold text-2xl text-[#83857d]">
            Experience
          </p>
          <p className="text-4xl mt-4 font-bold">Trust The Process We Do</p>
          <p className="text-lg mt-8">
            From idea to final setup, we follow a clear process to deliver
            quality furniture that fits your space perfectly.
          </p>
        </div>

        <div className="mx-auto w-[90%] mt-5 grid grid-cols-1  justify-center">
          {processData.map((item, index) => (
            <div key={index} className="relative h-[308px] w-full md:w-[308px]">
              <p className="text-5xl text-hollow-black font-bold pt-8 pl-6">
                0{index + 1}.
              </p>

              <p className="text-2xl font-bold mt-3 pl-6">{item.title}</p>

              <p className="pl-6 pt-4 w-[80%]">{item.desc}</p>

              {index !== processData.length - 1 && (
                <ArrowUp
                  size={40}
                  strokeWidth={3}
                  className="rotate-90 absolute right-6 top-10"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContractingSection;
