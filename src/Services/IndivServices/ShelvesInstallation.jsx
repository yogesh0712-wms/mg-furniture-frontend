import React from "react";
import Header, { Footer } from "../../Header";
import heroImage from "../../assets/images/services/ServicesHeroSectionImage.webp";
import ServiceImage from "../../assets/images/services/ServiceImage.webp";
import { Home, ArrowUpIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "../../FAQSection";

const servicesFAQs = [
  {
    question: "Do you provide shelves and wall unit installation in Jaipur?",
    answer:
      "Yes, we provide installation services for shelves and wall units across Jaipur.",
  },
  {
    question: "What types of wall units do you install?",
    answer:
      "We install TV units, storage units, display units, and wall-mounted shelves.",
  },
  {
    question: "Do you ensure strong wall support during installation?",
    answer:
      "Yes, we ensure secure fixing and proper support for long-term use.",
  },
  {
    question: "Can you install pre-made units?",
    answer: "Yes, we install both custom-made and ready units.",
  },
  {
    question: "How long does installation take?",
    answer:
      "The time depends on the size and setup, but most installations are completed efficiently.",
  },
];

const ShelvesInstallation = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center  text-white h-64 w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-lg pt-14 text-center">
          Shelves and Wall Unit Installation in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20shelves%20and%20wall%20unit%20installation%20service%20in%20Jaipur.%20Can%20you%20assist%20with%20setup%3F"
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
          Expert Shelves and Wall Unit Installation for Home and Office
        </h2>
        <p className="">
          Our installation service covers wall-mounted shelves, TV units,
          storage units, and display setups. We ensure proper alignment, strong
          support, and clean finishing so your units are safe and visually
          well-fitted.
        </p>
        <p className="pt-2">
          Whether you are installing new units or re-installing existing ones,
          our team focuses on secure fixing and long-term durability. If you're
          setting up shelves or wall units in Jaipur, we ensure a smooth and
          professional installation process.
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
          <p>✔ Experienced installation team</p>
          <p>✔ Clean and organized work</p>
          <p>✔ Proper alignment and finishing</p>
          <p>✔ Long-lasting support and durability</p>
          <p>✔ On-site service across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default ShelvesInstallation;
