import React from "react";
import Header, { Footer } from "../../Header";
import PillarPage from "./PillarPage";
import { useEffect } from "react";

const completeHomeFurnishingData = {
  title:
    "Complete Home Furnishing in Jaipur — Design, Furniture & Interior Setup",

  keyword: "Complete Home Furnishing in Jaipur",

  introParagraph:
    "Looking for complete home furnishing in Jaipur? We help homeowners furnish their entire home with custom furniture, modular solutions, décor styling, and space planning tailored to their lifestyle. From bedrooms and living rooms to kitchens and storage spaces, our Jaipur-based team handles everything from design to installation.",

  benefits: [
    "Complete furnishing solution under one team",
    "Custom furniture designed for your layout",
    "Modern, luxury & space-saving furnishing options",
    "Jaipur-based production and installation team",
    "Furniture, décor & storage planning included",
  ],

  services: [
    {
      title: "Bedroom Furnishing",
      description:
        "Custom beds, wardrobes, side tables, dressing units, and storage solutions designed for modern Jaipur homes.",
      icon: "home",
    },
    {
      title: "Living Room Setup",
      description:
        "TV units, sofas, coffee tables, wall panels, and elegant living room furniture tailored to your interiors.",
      icon: "office",
    },
    {
      title: "Modular Kitchen",
      description:
        "Functional modular kitchens with smart storage, premium finishes, and optimized layouts.",
      icon: "wood",
    },
    {
      title: "Full Home Furnishing",
      description:
        "Complete furnishing for flats, villas, apartments, and newly constructed homes in Jaipur.",
      icon: "home",
    },
  ],

  processSteps: [
    {
      title: "Consultation & Space Discussion",
      description:
        "We understand your home layout, style preference, and furnishing requirements.",
    },
    {
      title: "Design & Material Planning",
      description:
        "Select furniture designs, finishes, colors, materials, and approve the final layout.",
    },
    {
      title: "Manufacturing & Execution",
      description:
        "Furniture and furnishing elements are crafted in our Jaipur workshop.",
    },
    {
      title: "Delivery & Final Installation",
      description:
        "Our team installs and finishes the entire setup at your location.",
    },
  ],

  contentCards: [
    {
      title: "Furniture Designed Around Real Homes in Jaipur",
      description:
        "Custom home furnishing solutions crafted for modern families, compact apartments, growing homes, and beautifully organized interiors.",
      category: "Guide",
      image:
        "https://th.bing.com/th/id/OIP.fnS1Hmrho9IJWQDjkHMM8AHaEc?w=278&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      link: "/blogs/complete-home-furnishing-in-jaipur/custom-wood-furnishing",
    },

    {
      title: "How to Plan Complete Home Furnishing in Jaipur",
      description:
        "A complete, honest guide to furnishing your Jaipur home — room by room, budget by budget, without the overwhelm.",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      link: "/blogs/complete-home-furnishing-in-jaipur/complete-home-furnishing-guide-jaipur",
    },

    {
      title: "3BHK Complete Furnishing Project in Jaipur",
      description:
        "Explore a sample case study of how an empty apartment was transformed into a fully furnished home.",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      link: "/blogs/complete-home-furnishing-jaipur/3bhk-home-furnishing-case-study",
    },

    {
      title: "How a Jaipur Family Furnished Their Dream Home",
      description:
        "See how thoughtful furniture planning improved comfort, storage, and aesthetics.",
      category: "Success-Story",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      link: "/blogs/complete-home-furnishing-jaipur/dream-home-success-story",
    },

    {
      title: "Complete Home Furnishing FAQs for Jaipur Buyers",
      description:
        "Answers to common questions about pricing, timelines, materials, and furnishing process.",
      category: "FAQs",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      link: "/blogs/complete-home-furnishing-jaipur/faqs-home-furnishing-jaipur",
    },

    {
      title: "Jaipur Home Furnishing Market Trends & Pricing Report 2026",
      description:
        "Understand furnishing trends, modular furniture demand, pricing ranges, and buyer behavior in Jaipur.",
      category: "Report",
      image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
      link: "/blogs/complete-home-furnishing-jaipur/jaipur-furnishing-market-report",
    },

    {
      title: "Complete Home Furnishing Checklist Before You Start",
      description:
        "A practical checklist to help homeowners avoid mistakes before furnishing their home.",
      category: "CheckList",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      link: "/blogs/complete-home-furnishing-jaipur/home-furnishing-checklist",
    },

    {
      title: "Why Complete Home Furnishing is Growing in Jaipur",
      description:
        "Discover why more Jaipur homeowners are choosing customized furnishing solutions over ready-made setups.",
      category: "Article",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      link: "/blogs/complete-home-furnishing-jaipur/why-home-furnishing-growing-jaipur",
    },
  ],

  trustPoints: [
    {
      title: "Customized for Every Home",
      description:
        "Every furnishing project is tailored to your space and lifestyle.",
      icon: "check",
    },
    {
      title: "Jaipur-Based Team",
      description:
        "Local expertise with understanding of Jaipur homes and preferences.",
      icon: "location",
    },
    {
      title: "Premium Materials",
      description:
        "High-quality plywood, laminates, solid wood, and hardware used.",
      icon: "shield",
    },
    {
      title: "Transparent Pricing",
      description: "Detailed quotations with no hidden furnishing charges.",
      icon: "price",
    },
    {
      title: "Complete End-to-End Execution",
      description: "From planning and production to delivery and installation.",
      icon: "wrench",
    },
  ],

  faqs: [
    {
      question: "How much does complete home furnishing cost in Jaipur?",
      answer:
        "The cost depends on home size, furniture requirements, materials, and customization level. Basic furnishing can start from ₹2–4 lakhs while premium furnishing projects can go significantly higher.",
    },

    {
      question: "How long does a complete home furnishing project take?",
      answer:
        "Most furnishing projects take between 4–10 weeks depending on scope, customization, and material availability.",
    },
  ],

  areas: [
    "Vaishali Nagar",
    "Mansarovar",
    "Jagatpura",
    "Malviya Nagar",
    "Raja Park",
    "Tonk Road",
    "Sitapura",
  ],

  ctaPhone: "+919782545485",

  ctaWhatsApp: "919782545485",
};

const CompleteHomeFurnishingPillar = () => {
  useEffect(() => {
    document.title =
      "Complete Home Furnishing in Jaipur | Design, Furniture & Interior Setup";

    let meta = document.querySelector("meta[name='description']");

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      "Get complete home furnishing services in Jaipur including custom furniture, modular kitchens, wardrobes, living room setup, and full interior furnishing solutions.",
    );
  }, []);

  return (
    <>
      <Header />
      <PillarPage {...completeHomeFurnishingData} />
      <Footer />
    </>
  );
};

export default CompleteHomeFurnishingPillar;
