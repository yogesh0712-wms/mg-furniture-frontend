import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ContrractingType = [
  {
    image:
      "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/simple-living-room-interior-2021-08-26-15-45-30-utc-e1666835136843.jpg",
    type: "Interior Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore",
    to: "/contracting/interior-design",
  },
  {
    image:
      "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/luxurious-kitchen-with-white-furniture-2022-03-02-19-12-55-utc-e1666836611328.jpg",
    type: "Home Living Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore",
    to: "/contracting/home-living-design",
  },
  {
    image:
      "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/poster-above-green-bench-between-lamp-and-yellow-a-2021-08-26-15-45-35-utc-e1666836542450.jpg",
    type: "Office Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore",
    to: "/contracting/office-design",
  },
  {
    image:
      "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/3d-office-design-interior-2021-12-09-02-43-06-utc-e1666836581658.jpg",
    type: "Furniture Reparation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore",
    to: "/contracting/furniture-reparation",
  },
  {
    image:
      "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/wedding-ceremony-area-2022-03-15-18-06-27-utc-e1666836404468.jpg",
    type: "Wedding Furniture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore",
    to: "/contracting/wedding-furniture",
  },
  {
    image:
      "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/green-armchair-on-patterned-carpet-in-bright-livin-2021-08-26-15-45-36-utc-e1666836488485.jpg",
    type: "Design Consultation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore",
    to: "/contracting/design-consultation",
  },
];
const ContractingSection = () => {
  return (
    <div>
      <section>
        {/* HEADER TEXT */}
        <div className="mx-auto w-[90%] lg:w-[45%] text-center mt-16 lg:mt-40">
          <p className="font-poppins text-xl lg:text-2xl font-medium text-[#83857d] pb-4 lg:pb-5">
            Our Services
          </p>
          <p className="font-poppins text-3xl lg:text-4xl font-semibold pb-3">
            The Best Furniture Design
          </p>
          <p className="font-poppins text-3xl lg:text-4xl font-semibold pb-6 lg:pb-10">
            Start From Here
          </p>
          <p className="text-slate-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARDS */}
        <div className="mx-auto w-[95%] lg:w-[86%] mt-10 lg:pl-10 flex flex-col lg:flex-row lg:flex-wrap">
          {ContrractingType.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-[53vh] lg:mr-8 pt-12 lg:pt-20"
            >
              <div className="h-40 lg:h-32 w-full lg:w-[53vh] rounded-t-3xl overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-poppins text-2xl lg:text-3xl font-semibold pt-5">
                {item.type}
              </p>

              <p className="text-slate-500 pt-5 pb-4 text-base">
                {item.description}
              </p>

              <Link to={item.to} className="font-poppins text-lg font-medium">
                Learn More
              </Link>

              <hr className="border-[1px] w-[100px] border-gray-600 mt-2" />
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="mt-20 lg:mt-32 mb-14 lg:mb-24">
        <div className="text-center mx-auto w-[90%] lg:w-[45%]">
          <p className="font-poppins font-semibold text-xl lg:text-xl text-[#83857d]">
            Experience
          </p>
          <p className="text-3xl lg:text-4xl mt-4 font-bold">
            Trust The Process We Do
          </p>
          <p className="text-base lg:text-base mt-8 lg:mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mx-auto w-[95%] lg:w-[85%] mt-12 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="h-auto lg:h-[308px] w-full lg:w-[308px] p-6 border"
            >
              <p className="text-4xl lg:text-5xl text-hollow-black font-bold">
                0{num}.
              </p>

              <p className="text-xl lg:text-2xl font-bold mt-3">
                Brainstorming
              </p>

              <p className="pt-6 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {num !== 4 && (
                <ArrowUp size={40} strokeWidth={3} className="rotate-90 mt-6" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContractingSection;
