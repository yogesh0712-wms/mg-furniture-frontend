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
    question: "Do you provide cabinet servicing in Jaipur?",
    answer:
      "Yes, we provide cabinet servicing across Jaipur for homes and offices.",
  },
  {
    question: "What types of cabinets do you service?",
    answer:
      "We service kitchen cabinets, storage cabinets, office cabinets, and more.",
  },
  {
    question: "Can you fix cabinet doors and hinges?",
    answer: "Yes, we repair cabinet doors, hinges, and alignment issues.",
  },
  {
    question: "Do you provide on-site servicing?",
    answer:
      "Yes, our team visits your location in Jaipur for servicing and inspection.",
  },
  {
    question: "How long does cabinet servicing take?",
    answer:
      "The time depends on the issue, but most servicing work is completed quickly.",
  },
];

const CabinetService = () => {
  useEffect(() => {
    document.title =
      "Cabinet Service in Jaipur | Repair, Hinges & Maintenance | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional cabinet service in Jaipur for kitchen, office & home cabinets. Get hinge repair, alignment fixing & complete maintenance by MG Furniture. Fast service near you.",
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
          Cabinet Servicing in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20cabinet%20servicing%20for%20my%20home%20in%20Jaipur.%20Can%20you%20check%20and%20share%20details%3F"
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
          Professional Cabinet Servicing for Home and Office
        </h2>
        <p>
          Our cabinet servicing includes fixing alignment issues, repairing
          damaged parts, and improving the overall functionality of your
          cabinets. Whether it’s kitchen cabinets, storage units, or office
          cabinets, we handle all types with precision.
        </p>
        <p className="pt-2">
          We focus on proper fitting, smooth operation, and clean finishing to
          ensure your cabinets work efficiently. If your cabinets are facing
          issues like loose hinges, stuck drawers, or wear and tear, our team
          provides practical and effective solutions.
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
          <p>✔ Quick and reliable service across Jaipur</p>
          <p>✔ Experienced professionals</p>
          <p>✔ Affordable servicing solutions</p>
          <p>✔ Clean and precise work</p>
          <p>✔ Improved cabinet functionality</p>
          <p>✔ On-site support and inspection</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default CabinetService;
