import React from "react";
import Header, { Footer } from "../../Header";
import PillarPage from "./PillarPage";
import { useEffect } from "react";

const customFurnitureData = {
  title: "Custom Wood Furniture Near You in Jaipur — Design, Build & Install",
  keyword: "Custom Wood Furniture in Jaipur",

  introParagraph:
    "Looking for custom wood furniture in Jaipur? We design and build made-to-order furniture tailored to your space, style, and budget. From beds and wardrobes to complete home furnishing, our Jaipur-based team delivers high-quality craftsmanship using Sheesham, teak, and engineered wood.",

  benefits: [
    "Made-to-order furniture (no ready stock)",
    "Perfect fit for your space and layout",
    "Choice of wood, finish, and design",
    "Local Jaipur craftsmen with experience",
    "End-to-end service: design to installation",
  ],

  services: [
    {
      title: "Custom Beds",
      description:
        "Solid wood beds with storage, hydraulic systems, and modern designs tailored to your bedroom.",
      icon: "home", // IMPORTANT → must match Icon component keys
    },
    {
      title: "Wardrobes & Storage",
      description:
        "Floor-to-ceiling wardrobes, sliding doors, and smart storage solutions built for your space.",
      icon: "office",
    },
    {
      title: "Dining & Living Furniture",
      description:
        "Dining tables, coffee tables, TV units, and sofas crafted to match your interiors.",
      icon: "wood",
    },
    {
      title: "Full Home Furniture",
      description:
        "Complete furnishing solutions for homes including bedroom, living room, and kitchen units.",
      icon: "home",
    },
  ],

  processSteps: [
    {
      title: "Share Your Requirement",
      description: "Tell us your design idea, space size, and furniture needs.",
    },
    {
      title: "Design & Material Selection",
      description: "Choose wood type, finish, and approve design or 3D layout.",
    },
    {
      title: "Production",
      description: "Furniture is built from scratch in our Jaipur workshop.",
    },
    {
      title: "Delivery & Installation",
      description:
        "We deliver and install furniture at your location with proper finishing.",
    },
  ],

  contentCards: [
    {
      title: "Custom Wood Furniture Guide – Jaipur",
      description:
        "Everything you need to know before ordering custom furniture in Jaipur.",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      link: "/blogs/custom-wood-furniture-in-jaipur/custom-wood-furniture-guide",
    },
    {
      title: "How to Order Custom Wood Furniture Near You ?",
      description: "Understand the real difference before making a decision.",
      category: "Tutorial",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      link: "/blogs/custom-wood-furniture-in-jaipur/how-to-order-custom-wood-furniture-jaipur",
    },
    {
      title: "3BHK Full Home Custom Furniture in Jaipur (Case Study)",
      description:
        "See how we designed and installed furniture for a complete home.",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221",
      link: "/blogs/custom-wood-furniture-in-jaipur/custom-wood-furniture-jaipur-before-after",
    },
    {
      title:
        "How a Jaipur Family Transformed Their Home with Custom Wood Furniture",
      description: "Avoid common mistakes that can cost you time and money.",
      category: "Success-Story",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      link: "/blogs/custom-wood-furniture-in-jaipur/jaipur-home-success-story",
    },
    {
      title: "Custom Wood Furniture in jaipur – FAQs for Jaipur Buyers",
      description:
        "Everything you need to know before ordering custom wood furniture in Jaipur — costs, materials, timelines, and how to avoid common mistakes.",
      category: "FAQs",
      image:
        "https://th.bing.com/th/id/OIP.0saGyzat10lMIxUox0Ax5QHaJO?w=203&h=252&c=7&r=0&o=7&pid=1.7&rm=3",
      link: "/blogs/custom-wood-furniture-in-jaipur/faqs-jaipur-buyers-guide",
    },
    {
      title:
        "Custom Wood Furniture Market in Jaipur: Trends, Pricing & Demand Report",
      description:
        "A comprehensive look at how the demand for custom wood furniture in Jaipur has evolved in 2026—covering pricing tiers, material preferences, buyer behavior, and the growing shift away from ready-made solutions.",
      category: "Report",
      image:
        "data:image/webp;base64,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",
      link: "/blogs/custom-wood-furniture-in-jaipur/jaipur-furniture-market-report-2026",
    },
  ],

  trustPoints: [
    {
      title: "Made-to-Order Furniture",
      description: "Every piece is built after order — no ready-made stock.",
      icon: "check",
    },
    {
      title: "Local Jaipur Expertise",
      description:
        "We understand Jaipur homes, climate, and design preferences.",
      icon: "location",
    },
    {
      title: "Quality Materials",
      description: "We use Sheesham, teak, and high-grade engineered wood.",
      icon: "shield",
    },
    {
      title: "Transparent Pricing",
      description: "Clear pricing with no hidden costs.",
      icon: "price",
    },
    {
      title: "End-to-End Service",
      description:
        "From design to installation — everything handled by one team.",
      icon: "wrench",
    },
  ],

  faqs: [
    {
      question: "How much does custom wood furniture cost in Jaipur?",
      answer:
        "The cost depends on material, design, and size. Basic furniture starts from ₹8,000, while premium pieces can go higher.",
    },
    {
      question: "How long does custom furniture take?",
      answer:
        "Most custom furniture takes 2–4 weeks depending on design and complexity.",
    },
  ],

  areas: [
    "Vaishali Nagar",
    "Mansarovar",
    "Jagatpura",
    "Malviya Nagar",
    "Tonk Road",
    "Raja Park",
    "Sitapura",
  ],

  ctaPhone: "+919782545485",

  // IMPORTANT FIX
  ctaWhatsApp: "919782545485",
};

const CustomWoodFPillar = () => {
  useEffect(() => {
    document.title =
      "Custom Wood Furniture Near You in Jaipur | Design, Build & Install";

    let meta = document.querySelector("meta[name='description']");

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Looking for custom wood furniture near you in Jaipur? Get made-to-order beds, wardrobes & full home furniture with design, build, and installation services.",
    );
  }, []);
  return (
    <>
      <Header />
      <PillarPage {...customFurnitureData} />
      <Footer />
    </>
  );
};

export default CustomWoodFPillar;
