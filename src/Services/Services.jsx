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
      {/* =========================================
FURNITURE REPAIR PAGE
/furniture-repair-services
Tailwind Animated Internal Link Section
========================================= */}

      <section className="py-24 px-6 bg-[#f4f1eb] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center animate-[fadeUp_1s_ease]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f2f2f] mb-6 leading-tight">
            Furniture Repair & Installation Services in Jaipur
          </h2>

          <p className="text-lg text-gray-600 leading-8 max-w-4xl mx-auto mb-10">
            We provide professional furniture repair, installation, maintenance,
            and home visit services for homes, offices, shops, and showrooms
            across Jaipur.
          </p>

          <a
            href="/furniture-services/furniture-installation-repair-jaipur"
            className="inline-block bg-[#5d4037] hover:bg-[#3e2723]
      text-white text-lg font-semibold px-8 py-4 rounded-full
      shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          >
            Explore Jaipur Furniture Repair Services
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
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default Services;
