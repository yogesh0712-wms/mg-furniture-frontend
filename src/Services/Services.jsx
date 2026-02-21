import React from "react";
import Header, { Footer } from "../Header";
import ServiceHeroSection from "./ServiceHeroSection";
import FurnitureServices from "./FurnitureServices";
import FAQSection from "../FAQSection";
import { useEffect } from "react";

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
  useEffect(() => {
    document.title = "Furniture Contracting Services in Jaipur | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional furniture contracting and interior woodwork services in Jaipur. MG Furniture delivers custom installations, residential projects, and reliable execution.",
      );
    }
  }, []);

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
