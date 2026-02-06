import React from "react";
import Header, { Footer } from "../Header";
import ServiceHeroSection from "./ServiceHeroSection";
import FurnitureServices from "./FurnitureServices";
import FAQSection from "../FAQSection";

const servicesFAQs = [
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
const Services = () => {
  return (
    <div>
      <Header />
      <ServiceHeroSection />
      <FurnitureServices />
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default Services;
