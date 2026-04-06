import React from "react";
import Header, { Footer } from "../Header";
import ContractingSinglePageContntSection from "./ContractingSinglePageContntSection";
import ContractingHeroSection from "./ContractingHeroSection";
import FAQSection from "../FAQSection";
import homehero from "../assets/images/contracting/homefurnishing/home-furnishing-hero-image.jpg";
import home1 from "../assets/images/contracting/homefurnishing/home-image1.jpg";
import home2 from "../assets/images/contracting/homefurnishing/home-image-2.jpg";
import home3 from "../assets/images/contracting/homefurnishing/home-image3.jpg";
import home4 from "../assets/images/contracting/homefurnishing/home-image5.webp";

const interiorFAQs = [
  {
    question: "Do you provide complete interior design solutions?",
    answer:
      "Yes, we offer end-to-end interior design services from concept planning to final execution.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Yes, our team manages design, material selection, execution, and on-site coordination.",
  },
  {
    question: "Can you design interiors for residential and commercial spaces?",
    answer:
      "Yes, we work on homes, offices, showrooms, and commercial interiors of all sizes.",
  },
  {
    question: "Do you customize designs based on budget and space?",
    answer:
      "Absolutely. Every design is planned according to your space, functional needs, and budget.",
  },
];

const Home_livingItem = {
  image1: homehero,
  heading2: "Custom Furniture and Full Setup for Homes, Flats, and Villas",
  Descrip1: `Our home furnishing service covers complete setup for homes, flats, apartments, and villas in Jaipur. From planning to final installation, we handle everything required to create a functional and well-designed living space.

We focus on understanding your space, requirements, and budget to deliver customized solutions. Whether you need a modern home furnishing setup or a complete furniture package, our team ensures quality work, proper alignment, and clean finishing.`,
  Grp4img1: home1,
  Grp4img2: home2,
  Grp4img3: home3,
  Grp4img4: home4,
  Descrip2: `"We deliver complete home furnishing solutions that combine design, functionality, and durability. Our team ensures every piece of furniture is customized to fit your space perfectly while maintaining a clean and modern look.

From living rooms and bedrooms to dining areas and storage solutions, we handle the entire process with attention to detail and quality craftsmanship. If you're looking for the best home furniture and modern home furnishing in Jaipur, we provide a complete and hassle-free solution."`,
  p1: "✔ Complete home furniture setup",
  p2: "✔ Living room, bedroom, and dining furnishing",
  p3: "✔ Custom wardrobe and storage solutions",
  p4: "✔ Modular and space-saving furniture design",
  p5: "✔ End-to-end project handling",
  p6: "✔ On-site execution across Jaipur",
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
        line1="Complete Home Furnishing "
        line2="Services in Jaipur"
        description="We handle complete home furnishing for flats, apartments, and villas, covering everything from planning and furniture design to manufacturing and final installation."
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />
      <ContractingSinglePageContntSection products={Home_livingItem} />
      <FAQSection title="Common Questions" faqs={interiorFAQs} />
      <Footer />
    </div>
  );
};

export default HomeLivingDesign;
