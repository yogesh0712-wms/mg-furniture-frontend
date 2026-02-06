import React from "react";

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
      {Headitem && Headitem.length > 0 && (
        <div className="flex flex-wrap items-center justify-center mt-2 py-2 lg:w-full bg-[#343E4C] lg:flex lg:gap-5 lg:mt-1 lg:pl-5A">
          {Headitem.map((item, index) => (
            <p key={index} className="text-lg font-normal pl-5 py-1 text-white">
              {item}
            </p>
          ))}
        </div>
      )}

      <div className="w-full mt-2 lg:mt-0 h-[500px] lg:h-[68vh] bg-[#83857d]">
        <div className=" lg:mx-auto lg:w-[80%] flex justify-between">
          <div className="pt-20 lg:w-[45%]">
            <p className="text-4xl lg:text-6xl text-hollow font-poppins font-semibold">
              {hollowTitle}
            </p>

            <p className="font-poppins text-4xl lg:text-5xl font-semibold text-white pl-7 pt-3">
              {line1}
            </p>

            <p className="font-poppins text-4xl lg:text-5xl font-semibold text-white pl-8 pt-5">
              {line2}
            </p>

            <p className="text-white text-lg pl-8 pt-12">{description}</p>
          </div>

          <div>
            <div className="relative w-[300px] h-[400px] bg-[#D6D6B5] rounded-t-[150px] overflow-hidden border-b-4 mt-14 mr-5 lg:mr-40">
              <div className="absolute top-7 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-24 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-48 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-56 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-72 left-0 w-full h-[2px] bg-white"></div>
              <div className="absolute top-[46vh] left-0 w-full h-[2px] bg-white"></div>

              <div className="absolute ml-[28px] top-10 w-[800px] h-[2px] bg-white transform -translate-x-1/2 rotate-90"></div>
              <div className="absolute ml-[96px] top-10 w-[800px] h-[2px] bg-white transform -translate-x-1/2 rotate-90"></div>
              <div className="absolute ml-[130px] top-10 w-[800px] h-[2px] bg-white transform -translate-x-1/2 rotate-90"></div>
              <div className="absolute ml-[190px] top-10 w-[800px] h-[2px] bg-white transform -translate-x-1/2 rotate-90"></div>
              <div className="absolute ml-[28px] top-10 w-[800px] h-[2px] bg-white transform -translate-x-1/2 rotate-90"></div>
              <div className="absolute ml-[260px] top-10 w-[800px] h-[2px] bg-white transform -translate-x-1/2 rotate-90"></div>
            </div>

            <div>
              <img
                src={imageSrc}
                alt=""
                className="relative h-72 lg:h-96 -top-[237px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractingHeroSection;
