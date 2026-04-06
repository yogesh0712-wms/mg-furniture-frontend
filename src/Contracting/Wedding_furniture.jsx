import React from "react";
import Header, { Footer } from "../Header";
import ContractingSinglePageContntSection from "./ContractingSinglePageContntSection";
import ContractingHeroSection from "./ContractingHeroSection";
import FAQSection from "../FAQSection";
import homehero from "../assets/images/contracting/wedding/wedding-page-hero.webp";
import wedding1 from "../assets/images/contracting/wedding/wedding1.webp";
import wedding2 from "../assets/images/contracting/wedding/wedding2.webp";
import wedding3 from "../assets/images/contracting/wedding/wedding3.webp";
import wedding4 from "../assets/images/contracting/wedding/wedding4.webp";
const interiorFAQs = [
  {
    question: "Do you provide complete wedding furniture sets in Jaipur?",
    answer:
      "Yes, we provide complete furniture sets designed for wedding gifting.",
  },
  {
    question: "What is included in the wedding furniture set?",
    answer: "It includes bedroom, living room, dining, and storage furniture.",
  },
  {
    question: "Can the furniture be customized?",
    answer: "Yes, all furniture is customized based on your needs and budget.",
  },
  {
    question: "Do you handle complete setup?",
    answer: "Yes, we manage design, manufacturing, and installation.",
  },
  {
    question: "How long does it take to complete the furniture set?",
    answer:
      "The timeline depends on requirements, but we ensure timely delivery.",
  },
];

const Home_livingItem = {
  image1: homehero,
  heading2: "Custom Furniture Sets Designed for Wedding",
  Descrip1: `We provide complete wedding furniture sets in Jaipur, designed specifically for gifting purposes. From bedroom furniture to living and storage units, we create a full setup that is practical, durable, and well-finished.

Our focus is on customization based on family requirements, space, and budget. Whether you need a modern or traditional setup, we ensure the furniture is designed properly and delivered as a complete, ready-to-use solution.`,
  Grp4img1: wedding1,
  Grp4img2: wedding2,
  Grp4img3: wedding3,
  Grp4img4: wedding4,
  Descrip2: `"Our wedding furniture service covers complete sets designed for gifting with a focus on quality and usability. We ensure each piece is built to last and fits properly within the home.

From beds and wardrobes to sofas and dining sets, we provide a complete solution under one contract. If you're looking for a complete wedding furniture set in Jaipur, we deliver a well-planned and hassle-free setup."`,
  p1: "✔ Complete bedroom furniture set",
  p2: "✔ Living room furniture (sofa, tables)",
  p3: "✔ Dining table and chair setup",
  p4: "✔ Custom design based on requirements",
  p5: "✔ End-to-end execution in Jaipur",
};

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

const HomeLivingDesign = () => {
  return (
    <div>
      <Header />
      <ContractingHeroSection
        Headitem={Headitem}
        hollowTitle="Contract Work"
        line1="Complete Wedding Furniture "
        line2=" Set in Jaipur"
        description="We handle complete wedding furniture sets for gifting, covering bedroom, living, and storage furniture from design and manufacturing to final delivery and setup"
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />
      <ContractingSinglePageContntSection products={Home_livingItem} />
      <FAQSection title="Common Questions" faqs={interiorFAQs} />
      <Footer />
    </div>
  );
};

export default HomeLivingDesign;
