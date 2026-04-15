import React from "react";
import Header, { Footer } from "../../Header";
import PillarPage from "./PillarPage";

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
      title: "Custom vs Ready-Made Furniture — Which is Better?",
      description: "Understand the real difference before making a decision.",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1582582494700-7f7b0c1a9c1a",
      link: "/blogs/custom-vs-ready-furniture",
    },
    {
      title: "3BHK Full Home Custom Furniture in Jaipur (Case Study)",
      description:
        "See how we designed and installed furniture for a complete home.",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221",
      link: "/blogs/3bhk-case-study",
    },
    {
      title: "Top 10 Mistakes to Avoid When Buying Custom Furniture",
      description: "Avoid common mistakes that can cost you time and money.",
      category: "Checklist",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
      link: "/blogs/furniture-mistakes",
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
  return (
    <>
      <Header />
      <PillarPage {...customFurnitureData} />
      <Footer />
    </>
  );
};

export default CustomWoodFPillar;
