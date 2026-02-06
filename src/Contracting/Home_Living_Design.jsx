import React from "react";
import Header, { Footer } from "../Header";
import ContractingSinglePageContntSection from "./ContractingSinglePageContntSection";
import ContractingHeroSection from "./ContractingHeroSection";
import FAQSection from "../FAQSection";

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
  image1:
    "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2017/06/luxurious-kitchen-with-white-furniture-2022-03-02-19-09-47-utc.jpg",
  Descrip1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique senectus et netus et malesuada fames ac. Volutpat
            consequat mauris nunc congue nisi vitae suscipit. Convallis a cras
            semper auctor neque. Orci dapibus ultrices in iaculis. Pharetra
            magna ac placerat vestibulum lectus mauris. Quam vulputate dignissim
            suspendisse in est ante in nibh mauris. Phasellus vestibulum lorem
            sed risus. Sem fringilla ut morbi tincidunt augue interdum velit
            euismod in. Volutpat odio facilisis mauris sit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Tristique senectus et
            netus et malesuada fames ac. Volutpat consequat mauris nunc congue
            nisi vitae suscipit. Convallis a cras semper auctor neque. Orci
            dapibus ultrices in iaculis. Pharetra magna ac placerat vestibulum
            lectus mauris. Quam vulputate dignissim suspendisse in est.`,
  Grp4img1:
    "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2017/06/luxurious-kitchen-with-white-furniture-2022-03-02-19-09-47-utc.jpg",
  Grp4img2:
    "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2017/06/luxurious-kitchen-with-white-furniture-2022-03-02-19-09-47-utc.jpg",
  Grp4img3:
    "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2017/06/luxurious-kitchen-with-white-furniture-2022-03-02-19-09-47-utc.jpg",
  Grp4img4:
    "https://elementorkits.nathatype.com/phapan/wp-content/uploads/sites/32/2017/06/luxurious-kitchen-with-white-furniture-2022-03-02-19-09-47-utc.jpg",
  Descrip2: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tristique senectus et netus et malesuada fames ac. Volutpat
                consequat mauris nunc congue nisi vitae suscipit. Convallis a
                cras semper auctor neque. Orci dapibus ultrices in iaculis.
                Pharetra magna ac placerat vestibulum lectus mauris. Quam
                vulputate dignissim suspendisse in est ante in nibh mauris.
                Phasellus vestibulum lorem sed risus. Sem fringilla ut morbi
                tincidunt augue interdum velit euismod in. Volutpat odio
                facilisis mauris sit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Tristique senectus et netus et malesuada
                fames ac. Volutpat consequat mauris nunc congue nisi vitae
                suscipit. Convallis a cras semper auctor neque. Orci dapibus
                ultrices in iaculis. Pharetra magna ac placerat vestibulum
                lectus mauris. Quam vulputate dignissim suspendisse in est."`,
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

const Home_Living_Design = () => {
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
      <ContractingSinglePageContntSection products={Home_livingItem} />
      <FAQSection title="Common Questions" faqs={interiorFAQs} />
      <Footer />
    </div>
  );
};

export default Home_Living_Design;
