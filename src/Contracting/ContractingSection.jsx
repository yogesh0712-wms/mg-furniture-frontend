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
        <div className="mx-auto w-[45%] text-center mt-40">
          <p className="font-poppins text-2xl font-medium text-[#83857d] pb-5">
            Our Services
          </p>
          <p className="font-poppins text-4xl font-semibold pb-5">
            The Best Furniture Design
          </p>
          <p className="font-poppins text-4xl font-semibold pb-10">
            Start From Here
          </p>
          <p className="text-slate-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,.
          </p>
        </div>
        <div className="h-[100vh] mx-auto w-[86%] pl-10 flex flex-wrap">
          {ContrractingType.map((item) => (
            <div className="w-[53vh] mr-8 pt-20">
              <div className="h-40 lg:h-32 w-[53vh] rounded-t-3xl overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-poppins text-3xl font-semibold pt-7">
                {item.type}
              </p>
              <p className="text-slate-500 pt-7 pb-4">{item.description}</p>
              <Link to={item.to} className="font-poppins text-lg font-medium ">
                Learn More
              </Link>
              <hr className="border-[1px] w-[100px] border-gray-600" />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[1460px] lg:mt-32 mb-14 lg:mb-24">
        <div className="text-center mx-auto w-[45%]">
          <p className="font-poppins font-semibold text-2xl lg:text-xl text-[#83857d]">
            Experience
          </p>
          <p className="text-4xl mt-4 font-bold">Trust The Process We Do</p>
          <p className="text-lg lg:text-base mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mx-auto h-full w-[85%] mt-20 grid grid-cols-2 lg:flex">
          <div className=" h-[308px] w-[308px] mr-5">
            <p className="text-5xl text-hollow-black font-bold pt-8 pl-6">
              01.
            </p>
            <p className="text-2xl font-bold mt-3 pl-6">Brainstroming</p>
            <p className="pl-6 pt-8 w-[80%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ArrowUp
              size={50}
              strokeWidth={3}
              color="#000000"
              className="rotate-90 relative ml-56 -mt-[240px]"
            />
          </div>
          <div className=" h-[308px] w-[308px] mr-5">
            <p className="text-5xl text-hollow-black font-bold pt-8 pl-6">
              02.
            </p>
            <p className="text-2xl font-bold mt-3 pl-6">Brainstroming</p>
            <p className="pl-6 pt-8 w-[80%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ArrowUp
              size={50}
              strokeWidth={3}
              color="#000000"
              className="rotate-90 relative ml-56 -mt-[240px]"
            />
          </div>
          <div className="bg-[#83857d] h-[308px] w-[308px] mr-5">
            <p className="text-5xl text-hollow font-bold pt-8 pl-6">03.</p>
            <p className="text-2xl font-bold text-white mt-3 pl-6">
              Brainstroming
            </p>
            <p className="pl-6 pt-8 w-[80%] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ArrowUp
              size={50}
              strokeWidth={3}
              color="#FFFFFF"
              className="rotate-90 relative ml-56 -mt-[240px]"
            />
          </div>
          <div className=" h-[308px] w-[308px]">
            <p className="text-5xl text-hollow-black font-bold pt-8 pl-6">
              04.
            </p>
            <p className="text-2xl font-bold  mt-3 pl-6">Brainstroming</p>
            <p className="pl-6 pt-8 w-[80%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractingSection;
