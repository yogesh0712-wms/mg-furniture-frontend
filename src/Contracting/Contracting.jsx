import React from "react";
import Header, { Footer } from "../Header";
import ContractingHeroSection from "./ContractingHeroSection";
import ContractingSection from "./ContractingSection";
import FAQSection from "../FAQSection";

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
      <FAQSection title="Common Questions" faqs={contractFAQs} />
      <Footer />
    </div>
  );
};

export default Contracting;
