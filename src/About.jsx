import React from "react";
import Header, { Footer } from "./Header";
import ContractingHeroSection from "./Contracting/ContractingHeroSection";
import { ArrowUp } from "lucide-react";
import FAQSection from "./FAQSection";

const contractFAQs = [
  {
    question: "What does a complete furniture contract include?",
    answer:
      "It covers design, manufacturing, delivery, and installation of all furniture as per the agreed scope.",
  },
  {
    question: "Do you handle end-to-end execution for full projects?",
    answer:
      "Yes, we manage everything from measurements and design to final installation and finishing.",
  },
  {
    question: "Can you take up large-scale residential or commercial projects?",
    answer:
      "Yes, we undertake full furnishing contracts for homes, offices, showrooms, and commercial spaces.",
  },
  {
    question: "Do you coordinate with interior designers or architects?",
    answer:
      "Yes, we work closely with designers and architects to ensure the furniture aligns perfectly with the overall plan.",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <ContractingHeroSection
        hollowTitle="Our Services"
        line1="The Best Service For"
        line2="Your Home Living"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />
      <div className="mx-auto w-[95%] lg:w-[80%] mt-40 flex gap-10 ">
        <div className="w-[35%] lg:w-[37%]">
          <p className="text-5xl font-bold leading-relaxed">
            Welcome To The MG Furnture
          </p>
          <p className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco .
            <p className="pt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <ul className="pt-10">
                <li className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
              </ul>
            </div>
          </p>
        </div>
        <div className="w-[470px] lg:w-72 h-[80vh] overflow-hidden">
          <img
            src="./image_collection/aboutus image 1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-96 h-[80vh] overflow-hidden hidden">
          <img
            src="./image_collection/about us image 2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-[#83857d] h-[80vh] lg:h-[100vh] mt-20">
        <div className="mx-auto w-[95%] lg:w-[80%] flex gap-20 lg:gap-40 relative">
          <div className="w-[50%] lg:w-[60%] pt-20">
            <p className="text-3xl lg:text-2xl font-semibold text-white pb-5">
              Experience
            </p>
            <p className="text-4xl font-bold text-white pb-5 leading-normal">
              Trusted To Give The Best Interior Design
            </p>
            <p className="text-xl lg:text-lg text-white pb-5 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco .
            </p>
          </div>

          <div className="mt-20">
            <div className="h-24 w-[350px] lg:w-[60vh] bg-white rounded-r-full p-6 flex gap-3 mb-8">
              <p className="text-4xl text-[#6b6b6b] font-bold pl-5">557+</p>
              <p className="text-xl font-bold pt-2 text-[#6b6b6b]">
                Clients Belive Us
              </p>
            </div>

            <div className="h-24 w-[350px] lg:w-[60vh] bg-white rounded-r-full p-6 flex gap-3 mb-8">
              <p className="text-4xl text-[#6b6b6b] font-bold pl-5">557+</p>
              <p className="text-xl font-bold pt-2 text-[#6b6b6b]">
                Projects Done
              </p>
            </div>

            <div className="h-24 w-[390px] lg:w-[66vh] border-white border-2 rounded-r-full p-5 flex gap-3 mb-8 -ml-4">
              <p className="text-4xl text-white font-bold pl-5">1808 +</p>
              <p className="text-xl font-bold pt-2 text-white">
                Orders All Delivered
              </p>
            </div>

            <div className="h-24 w-[350px] lg:w-[60vh] bg-white rounded-r-full p-5 flex gap-3 mb-8">
              <p className="text-4xl text-[#6b6b6b] font-bold pl-5">355 +</p>
              <p className="text-xl font-bold pt-2 text-[#6b6b6b]">
                Reward Received
              </p>
            </div>
          </div>
        </div>
        <div className="lg:h-[60vh] lg:w-[80vh] -mt-14 lg:ml-56 obsolute">
          <img
            src="./image_collection/aboutus sofa image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="mt-40 lg:mb-24">
        <div className="text-center mx-auto w-[45%]">
          <p className="font-poppins font-semibold text-xl text-[#83857d]">
            Experience
          </p>
          <p className="text-4xl mt-4 font-bold">Trust The Process We Do</p>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mx-auto w-[85%] mt-20 grid grid-cols-2 lg:flex">
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

      <FAQSection title="Common Questions" faqs={contractFAQs} />
      <Footer />
    </div>
  );
};

export default About;
