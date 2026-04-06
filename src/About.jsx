import React from "react";
import Header, { Footer } from "./Header";
import ContractingHeroSection from "./Contracting/ContractingHeroSection";
import { ArrowUp } from "lucide-react";
import FAQSection from "./FAQSection";
import { useEffect } from "react";

const statsData = [
  { number: "557+", text: "Clients Believe Us" },
  { number: "250+", text: "Projects Done" },
  { number: "560+", text: "Orders All Delivered" },
  { number: "15+", text: "Reward Received" },
];

const contractFAQs = [
  {
    question: "What does MG Furniture do?",
    answer:
      "We provide custom furniture, complete home and office furnishing, and furniture repair and installation services in Jaipur.",
  },
  {
    question: "Do you make furniture on order?",
    answer:
      "Yes, all furniture is made based on your space, requirements, and budget. We do not focus on ready-made products.",
  },
  {
    question: "Do you handle complete furnishing projects?",
    answer:
      "Yes, we take full furnishing contracts for homes, offices, and other spaces, including design, manufacturing, and installation.",
  },
  {
    question: "Do you provide repair and installation services?",
    answer:
      "Yes, we offer on-demand services like furniture repair, installation, and servicing across Jaipur.",
  },
  {
    question: "Is the furniture customizable?",
    answer:
      "Yes, every piece is customized based on your needs, space, and design preference.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "You can contact us directly through call or WhatsApp, and we will guide you based on your requirement.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Yes, we offer on-demand services like furniture repair, installation, and servicing across Jaipur.",
  },
  {
    question: "Do you work on small and large projects?",
    answer:
      "Yes, we handle everything from single furniture pieces to complete furnishing projects.",
  },
];

const About = () => {
  useEffect(() => {
    document.title =
      "About MG Furniture Jaipur | Custom Furniture & Contracting Experts";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about MG Furniture, a Jaipur-based custom furniture and contracting company known for quality craftsmanship, durable materials, and reliable project execution.",
      );
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />

      <ContractingHeroSection
        hollowTitle="About MG Furniture – "
        line1="Custom Furniture in Jaipur"
        description="We design, build, and install custom furniture for homes and offices in Jaipur, along with complete furnishing and on-demand services."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />

      {/* Welcome Section */}
      <div className="mx-auto w-[90%] lg:w-[80%] mt-20 lg:mt-40 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[37%]">
          <p className="text-4xl lg:text-5xl font-bold leading-relaxed">
            Welcome To The MG Furniture
          </p>

          <p className="pt-10">
            MG Furniture is a Jaipur-based furniture service focused on custom
            furniture, complete furnishing projects, and repair and installation
            services. We don’t sell ready-made furniture. Every project is
            planned based on your space, usage, and budget to ensure the final
            result fits properly and lasts long.
          </p>

          <ul className="pt-10 space-y-4">
            <li>✔ Custom furniture on order</li>
            <li>✔ Complete home furnishing</li>
            <li>✔ Office furnishing solutions</li>
            <li>✔ Wedding furniture sets</li>
            <li>✔ Furniture repair and servicing</li>
            <li>✔ Installation and setup services</li>
          </ul>
        </div>

        <div className="w-full lg:w-72 h-96 lg:h-[80vh] overflow-hidden">
          <img
            src="./image_collection/aboutus image 1.webp"
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

            <p className="text-lg text-white pb-5">Why Choose MG Furniture</p>
          </div>

          <div className="w-full">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="h-20 w-full lg:w-[60vh] bg-white rounded-r-full p-5 flex items-center gap-4 mb-6"
              >
                <p className="text-3xl font-bold text-[#6b6b6b]">
                  {item.number}
                </p>

                <p className="text-lg font-bold text-[#6b6b6b]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-[90%] lg:w-[80%] mt-10">
          <img
            src="./image_collection/aboutus sofa image.webp"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Process Section */}

      <FAQSection title="Common Questions" faqs={contractFAQs} />

      <Footer />
    </div>
  );
};

export default About;
