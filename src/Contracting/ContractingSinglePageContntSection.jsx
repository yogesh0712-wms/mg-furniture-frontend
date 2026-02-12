import React from "react";

const ContractingSinglePageContntSection = ({ products }) => {
  const { image1, Descrip1, Grp4img1, Grp4img2, Grp4img3, Grp4img4, Descrip2 } =
    products;
  return (
    <div>
      <div className="mx-auto w-[95%] lg:w-[80%] mt-40 lg:mb-40">
        <div className="h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <img src={image1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="mt-10">
          <p className="text-4xl font-bold font-poppins">About The Project</p>
          <p className="mt-10 lg:mt-14 text-slate-600 text-xl lg:text-lg leading-relaxed">
            {Descrip1}
          </p>
        </div>
        <div className="mt-20 lg:mt-28">
          <p className="text-4xl font-bold font-poppins">Photo Details</p>
          <div className="flex flex-wrap mt-16">
            <div className="w-[65vh] lg:w-[78vh] lg:mr-14 mb-14">
              <img
                src={Grp4img1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[65vh] lg:w-[78vh] mb-14">
              <img
                src={Grp4img2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[65vh] lg:w-[78vh] lg:mr-14 mb-14">
              <img
                src={Grp4img3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[65vh] lg:w-[78vh]  mb-14">
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
      </div>
    </div>
  );
};

export default ContractingSinglePageContntSection;
