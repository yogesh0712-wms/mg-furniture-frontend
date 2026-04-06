import React from "react";

const ContractingSinglePageContntSection = ({ products }) => {
  const {
    image1,
    heading2,
    Descrip1,
    Grp4img1,
    Grp4img2,
    Grp4img3,
    Grp4img4,
    Descrip2,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
  } = products;
  return (
    <div>
      <div className="-mt-20  overflow-hidden md:mt-5 px-4 md:ml-10 flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/919782545485?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center border-2 bg-[#FF7A00] border-black px-6 py-3 rounded-full text-sm md:text-lg"
        >
          👉 Get Custom Quote
        </a>
      </div>
      <div className="mx-auto w-[95%] lg:w-[80%] mt-10 lg:mb-40">
        <div className="h-[40vh] lg:h-[60vh] w-full rounded-md overflow-hidden">
          <img src={image1} alt="" className="w-full h-full " />
        </div>
        <div className="mt-10">
          <p className="text-2xl font-bold font-poppins">{heading2}</p>
          <p className="mt-5 lg:mt-10 text-slate-600 text-xl lg:text-lg leading-relaxed">
            {Descrip1}
          </p>
        </div>
        <div className="mt-10 lg:mt-28">
          <p className="text-2xl font-bold font-poppins">Photo Details</p>
          <div className="flex flex-wrap mt-16">
            <div className="w-[65vh] lg:w-[78vh] lg:mr-14 mb-5">
              <img
                src={Grp4img1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[65vh] lg:w-[78vh] mb-5">
              <img
                src={Grp4img2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[65vh] lg:w-[78vh] lg:mr-14 mb-5">
              <img
                src={Grp4img3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[65vh] lg:w-[78vh]  mb-10">
              <img
                src={Grp4img4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 text-xl leading-relaxed lg:text-lg">
                {Descrip2}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 p-2">
          <h2 className="text-[#3b3b39] text-2xl py-2">What the Include?</h2>
          <p>
            <p className="text-lg">{p1}</p>
            <p className="text-lg">{p2}</p>
            <p className="text-lg">{p3}</p>
            <p className="text-lg">{p4}</p>
            <p className="text-lg">{p5}</p>
            <p className="text-lg">{p6}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContractingSinglePageContntSection;
