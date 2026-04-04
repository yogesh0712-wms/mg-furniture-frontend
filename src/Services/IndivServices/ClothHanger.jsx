import React from "react";
import Header, { Footer } from "../../Header";
import heroImage from "../../assets/images/services/ServicesHeroSectionImage.webp";
import ServiceImage from "../../assets/images/services/ServiceImage.webp";
import { Home, ArrowUpIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "../../FAQSection";

const servicesFAQs = [
  {
    question: "Do you provide cloth hanger installation in Jaipur?",
    answer:
      "Yes, we provide cloth hanger installation services across Jaipur..",
  },
  {
    question: "What types of cloth hangers do you install?",
    answer: "We install wall-mounted, ceiling-mounted, and foldable hangers.",
  },
  {
    question: "Is the installation strong and durable?",
    answer: "Yes, we ensure proper fixing for long-term use.",
  },
  {
    question: "Do you provide on-site installation?",
    answer: "Yes, our team visits your location in Jaipur for installation.",
  },
  {
    question: "How long does installation take?",
    answer: "Most installations are completed quickly depending on the setup.",
  },
];

const ClothHanger = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center  text-white h-64 w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-lg pt-14 text-center">
          Cloth Hanger Installation Service in Jaipur
        </h1>
        <div className="flex gap-2 justify-center mt-2">
          <a href="/" className="flex gap-1 items-center">
            <Home className="w-5 h-5" />
            Home <ArrowUpIcon className="w-5 h-5 rotate-90" />
          </a>
          <a href="/services">Services</a>
        </div>
        <div className="mt-4 px-4 flex flex-col  gap-2">
          <a
            href="tel:919782545485"
            className="inline-flex justify-center items-center border bg-orange-500 border-black px-3 py-2 rounded-full text-sm md:text-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20cloth%20hanger%20installation%20service%20in%20Jaipur.%20Can%20you%20assist%20with%20setup%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center border bg-green-500 border-black px-3 py-3 rounded-full text-sm md:text-lg"
          >
            WhtsApp Now
          </a>
        </div>
      </div>
      <div className="mt-5 p-2">
        <h2 className="text-[#3b3b39] text-2xl py-2">
          Professional Cloth Hanger Installation for Home
        </h2>
        <p className="">
          Our cloth hanger installation service focuses on proper alignment,
          strong fixing, and clean finishing. Whether it’s for balconies,
          bathrooms, or utility areas, we ensure your hanger is installed
          securely for daily use.
        </p>
        <p className="pt-2">
          We handle different types of hangers including wall-mounted,
          ceiling-mounted, and foldable designs. If you're installing a cloth
          hanger in Jaipur, our team ensures a hassle-free and durable setup.
        </p>
      </div>
      <div
        className="bg-cover bg-center my-4 p-14 text-white h-64 w-full"
        style={{ backgroundImage: `url(${ServiceImage})` }}
      >
        <FaWhatsapp className="w-8 h-8 text-blue-600" />
        <h4 className="text-lg">Call Us Anytime</h4>
        <a href="tel:919782545485">
          <h2 className="text-2xl">+91-9782545485</h2>
        </a>
        <a href="/contact">
          <div className=" mt-2 rounded-md text-lg font-bold bg-blue-500 w-40 py-2 text-center">
            Contact US
          </div>
        </a>
      </div>
      <div className="mt-5 p-2">
        <h2 className="text-[#3b3b39] text-2xl py-2">What the Benifits?</h2>
        <p>
          <p>✔ Strong and secure installation</p>
          <p>✔ Quick and hassle-free setup</p>
          <p>✔ Experienced professionals</p>
          <p>✔ Clean and precise work</p>
          <p>✔ Long-lasting support</p>
          <p>✔ On-site service across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default ClothHanger;
