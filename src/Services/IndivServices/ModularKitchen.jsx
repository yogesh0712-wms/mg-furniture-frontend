import React from "react";
import Header, { Footer } from "../../Header";
import heroImage from "../../assets/images/services/ServicesHeroSectionImage.webp";
import ServiceImage from "../../assets/images/services/ServiceImage.webp";
import { Home, ArrowUpIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "../../FAQSection";
import { useEffect } from "react";

const servicesFAQs = [
  {
    question: "Do you provide modular kitchen installation in Jaipur?",
    answer:
      "Yes, we provide modular kitchen installation services across Jaipur.",
  },
  {
    question: "Do you install complete modular kitchens?",
    answer:
      "Yes, we handle complete installation including cabinets, drawers, and fittings.",
  },
  {
    question: "Can you install pre-made modular kitchen units?",
    answer: "Yes, we install both custom-made and ready modular kitchen units.",
  },
  {
    question: "Do you ensure proper alignment and fitting?",
    answer:
      "Yes, we focus on accurate fitting and proper alignment for smooth functionality.",
  },
  {
    question: "How long does installation take?",
    answer:
      "The time depends on the size and setup, but we ensure timely completion.",
  },
];

const ModularKitchen = () => {
  useEffect(() => {
    document.title =
      "Modular Kitchen Installation in Jaipur | Custom Kitchen Setup | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get modular kitchen installation in Jaipur with expert design, fitting & setup. MG Furniture delivers durable, space-efficient kitchens tailored to your home. Book your installation today!",
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center  text-white h-64 w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-lg pt-14 text-center">
          Modular Kitchen Installation in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20modular%20kitchen%20installation%20service%20in%20Jaipur.%20Can%20you%20share%20details%20and%20availability%3F"
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
          Expert Modular Kitchen Installation for Modern Homes
        </h2>
        <p className="">
          Our modular kitchen installation service focuses on accurate fitting,
          proper alignment, and clean finishing. Whether it’s a new kitchen
          setup or re-installation, we ensure every component is installed
          correctly for long-term performance.
        </p>
        <p className="pt-2">
          We handle cabinets, drawers, shelves, and fittings with precision to
          ensure smooth functionality and a clean look. If you're setting up a
          modular kitchen in Jaipur, our team ensures a hassle-free and
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
          <p>✔ Professional and precise installation</p>
          <p>✔ Experienced installation team</p>
          <p>✔ Clean and organized work</p>
          <p>✔ Proper alignment and finishing</p>
          <p>✔ Hassle-free setup process</p>
          <p>✔ On-site service across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default ModularKitchen;
