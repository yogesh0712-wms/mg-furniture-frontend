import React from "react";
import Header, { Footer } from "../Header";
import ContractingHeroSection from "./ContractingHeroSection";
import ContractingSection from "./ContractingSection";
import FAQSection from "../FAQSection";
import { useEffect } from "react";

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

const Headitem = [
  "Chairs",
  "Sofas",
  "Doors",
  "Windows",
  "Beds",
  "Doors",
  "Almiras",
  "Dining tables",
  "Shooe racks",
  "Study tables",
  "Complete Kitchen work",
  "Wooden Ceiling",
];

const Contracting = () => {
  useEffect(() => {
    document.title =
      "Interior & Furniture Contracting Services in Jaipur | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Looking for reliable interior and furniture contracting services in Jaipur? MG Furniture handles custom woodwork, residential interiors, and complete project execution.",
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <ContractingHeroSection
        Headitem={Headitem}
        hollowTitle="Contract Work"
        line1="Full Furniture For"
        line2="Homes & Offices"
        description="We handle complete furniture work for homes, offices, apartments, and buildings under a single contract, from planning and manufacturing to final installation."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />
      <ContractingSection />
      {/* =========================================
COMPLETE FURNISHING PAGE
/complete-furnishing-work
Tailwind Animated Internal Link Section
========================================= */}

      <section className="py-24 px-6 bg-[#f7f3ee] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center animate-[fadeUp_1s_ease]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b2f2f] mb-6 leading-tight">
            Complete Furnishing Solutions Across Jaipur
          </h2>

          <p className="text-lg text-gray-600 leading-8 max-w-4xl mx-auto mb-10">
            We provide complete furnishing solutions for homes, offices, retail
            shops, and commercial showrooms throughout Jaipur with setup and
            installation support.
          </p>

          <a
            href="/complete-furnishing-work/full-furnishing-jaipur"
            className="inline-block bg-[#795548] hover:bg-[#5d4037]
      text-white text-lg font-semibold px-8 py-4 rounded-full
      shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          >
            Explore Furnishing Services in Jaipur
          </a>
        </div>

        <style>
          {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
        </style>
      </section>
      <FAQSection title="Common Questions" faqs={contractFAQs} />
      <Footer />
    </div>
  );
};

export default Contracting;
