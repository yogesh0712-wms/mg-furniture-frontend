import React from "react";
import Header, { Footer } from "../Header";
import ContractingSinglePageContntSection from "./ContractingSinglePageContntSection";
import ContractingHeroSection from "./ContractingHeroSection";
import FAQSection from "../FAQSection";
import officehero from "../assets/images/contracting/officefurnishing/office-herosection.webp";
import home1 from "../assets/images/contracting/officefurnishing/office1.webp";
import home2 from "../assets/images/contracting/officefurnishing/office2.webp";
import home3 from "../assets/images/contracting/officefurnishing/office3.webp";

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
  image1: officehero,
  heading2: "Complete Office Furniture Setup for Workspaces",
  Descrip1: `We provide complete office furnishing solutions in Jaipur, covering workspaces, cabins, meeting areas, and storage setups. From planning to final installation, we handle the entire project with a focus on functionality and clean design.

Our team works closely with your layout and requirements to deliver efficient and well-organized office furniture setups. Whether you need luxury office furniture or practical workspace solutions, we ensure quality, durability, and a professional finish.`,
  Grp4img1: home1,
  Grp4img2: home2,
  Grp4img3: home3,

  Descrip2: `"Our office furnishing service focuses on creating functional and professional workspaces. We design and install complete office setups that support productivity while maintaining a clean and modern look.

From workstations and executive cabins to meeting rooms and storage solutions, we handle every aspect of the project. If you're looking for corporate office furniture design in Jaipur, we deliver solutions that combine durability, design, and efficient space utilization."`,
  p1: "✔ Complete office furniture setup",
  p2: "✔ Workstations and desk design",
  p3: "✔ Executive cabin furniture",
  p4: "✔ Conference and meeting room setup",
  p5: "✔ Storage and filing solutions",
  p6: "✔ End-to-end project execution in Jaipur",
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
        line1="Corporate Office Furniture  "
        line2="Design in Jaipur"
        description="We handle complete office furnishing for workspaces, studios, and corporate setups covering everything from planning and furniture design to manufacturing and final installation"
        imageSrc="https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2022/06/the-interior-has-a-armchair-on-empty-white-wall-ba-2021-09-04-06-48-51-utc_isolated.png"
      />
      <ContractingSinglePageContntSection products={Home_livingItem} />
      <FAQSection title="Common Questions" faqs={interiorFAQs} />
      <Footer />
    </div>
  );
};

export default HomeLivingDesign;
