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
      "Yes, we work closely with designers and architects to ensure alignment with the overall plan.",
  },
];

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <ContractingHeroSection
        hollowTitle="Our Services"
        line1="The Best Service For"
        line2="Your Home Living"
        description="Lorem ipsum dolor sit amet..."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />

      {/* Welcome Section */}
      <div className="mx-auto w-[90%] lg:w-[80%] mt-20 lg:mt-40 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[37%]">
          <p className="text-4xl lg:text-5xl font-bold leading-relaxed">
            Welcome To The MG Furniture
          </p>

          <p className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="pt-10 space-y-4">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

        <div className="w-full lg:w-72 h-72 lg:h-[80vh] overflow-hidden">
          <img
            src="./image_collection/aboutus image 1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Experience Stats Section */}
      <div className="bg-[#83857d] py-16 lg:py-24 mt-20">
        <div className="mx-auto w-[90%] lg:w-[80%] flex flex-col lg:flex-row gap-12 lg:gap-40">
          <div className="w-full lg:w-[60%]">
            <p className="text-2xl font-semibold text-white pb-5">Experience</p>

            <p className="text-3xl lg:text-4xl font-bold text-white pb-5">
              Trusted To Give The Best Interior Design
            </p>

            <p className="text-lg text-white pb-5">
              Lorem ipsum dolor sit amet...
            </p>
          </div>

          <div className="w-full">
            {[
              "Clients Believe Us",
              "Projects Done",
              "Orders All Delivered",
              "Reward Received",
            ].map((text, index) => (
              <div
                key={index}
                className="h-20 w-full lg:w-[60vh] bg-white rounded-r-full p-5 flex items-center gap-4 mb-6"
              >
                <p className="text-3xl font-bold text-[#6b6b6b]">557+</p>
                <p className="text-lg font-bold text-[#6b6b6b]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-[90%] lg:w-[80%] mt-10">
          <img
            src="./image_collection/aboutus sofa image.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Process Section */}
      <section className="mt-20 lg:mt-40 mb-14 lg:mb-24">
        <div className="text-center mx-auto w-[90%] lg:w-[45%]">
          <p className="font-poppins font-semibold text-xl text-[#83857d]">
            Experience
          </p>
          <p className="text-4xl mt-4 font-bold">Trust The Process We Do</p>
          <p className="mt-8">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="mx-auto w-[90%] mt-16 grid grid-cols-1 md:grid-cols-2 lg:flex gap-8 justify-center">
          {[1, 2, 3, 4].map((num, index) => (
            <div key={index} className="relative h-[308px] w-full md:w-[308px]">
              <p className="text-5xl font-bold pt-8 pl-6">0{num}.</p>

              <p className="text-2xl font-bold mt-3 pl-6">Brainstorming</p>

              <p className="pl-6 pt-8 w-[80%]">Lorem ipsum dolor sit amet...</p>

              {num !== 4 && (
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

      <FAQSection title="Common Questions" faqs={contractFAQs} />

      <Footer />
    </div>
  );
};

export default About;
