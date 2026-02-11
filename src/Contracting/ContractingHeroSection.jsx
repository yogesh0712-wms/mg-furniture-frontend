import React from "react";

const ContractingHeroSection = ({
  Headitem,
  hollowTitle,
  line1,
  line2,
  description,
  imageSrc,
}) => {
  return (
    <div>
      {/* TOP STRIP */}
      {Headitem && Headitem.length > 0 && (
        <div className="flex flex-wrap items-center justify-center mt-2 py-2 bg-[#343E4C] lg:w-full lg:gap-5 lg:mt-1 lg:pl-5">
          {Headitem.map((item, index) => (
            <p
              key={index}
              className="text-sm lg:text-lg font-normal px-3 py-1 text-white"
            >
              {item}
            </p>
          ))}
        </div>
      )}

      {/* HERO AREA */}
      <div className="w-full mt-2 lg:mt-0 bg-[#83857d] h-auto lg:h-[68vh]">
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-start lg:mx-auto lg:w-[80%]">
          {/* TEXT SECTION */}
          <div className="pt-12 px-6 lg:px-0 lg:pt-20 lg:w-[45%] text-center lg:text-left">
            <p className="text-3xl lg:text-6xl text-hollow font-poppins font-semibold">
              {hollowTitle}
            </p>

            <p className="font-poppins text-3xl lg:text-5xl font-semibold text-white pt-3 lg:pl-7">
              {line1}
            </p>

            <p className="font-poppins text-3xl lg:text-5xl font-semibold text-white pt-4 lg:pl-8">
              {line2}
            </p>

            <p className="text-white text-base lg:text-lg pt-8 lg:pl-8 max-w-md mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          {/* IMAGE + SHAPE */}
          <div className="relative mt-10 lg:mt-0 flex flex-col items-center">
            {/* Shape */}
            <div className="relative w-[260px] h-[350px] lg:w-[300px] lg:h-[400px] bg-[#D6D6B5] rounded-t-[150px] overflow-hidden border-b-4 lg:mr-40">
              {/* Horizontal lines */}
              <div className="absolute top-7 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-24 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-48 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-56 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-72 left-0 w-full h-[2px] bg-white"></div>

              {/* Vertical lines (desktop preserved) */}
              <div className="hidden lg:block absolute ml-[28px] top-10 w-[800px] h-[2px] bg-white -translate-x-1/2 rotate-90"></div>
              <div className="hidden lg:block absolute ml-[96px] top-10 w-[800px] h-[2px] bg-white -translate-x-1/2 rotate-90"></div>
              <div className="hidden lg:block absolute ml-[130px] top-10 w-[800px] h-[2px] bg-white -translate-x-1/2 rotate-90"></div>
              <div className="hidden lg:block absolute ml-[190px] top-10 w-[800px] h-[2px] bg-white -translate-x-1/2 rotate-90"></div>
              <div className="hidden lg:block absolute ml-[260px] top-10 w-[800px] h-[2px] bg-white -translate-x-1/2 rotate-90"></div>
            </div>

            {/* Image */}
            <img
              src={imageSrc}
              alt=""
              className="relative h-60 lg:h-96 -top-40 lg:-top-[237px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractingHeroSection;
