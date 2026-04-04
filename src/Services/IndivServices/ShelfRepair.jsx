import React from "react";
import Header, { Footer } from "../../Header";
import heroImage from "../../assets/images/services/ServicesHeroSectionImage.webp";
import ServiceImage from "../../assets/images/services/ServiceImage.webp";
import { Home, ArrowUpIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "../../FAQSection";

const servicesFAQs = [
  {
    question: "Do you provide shelves and wall unit repair service in Jaipur?",
    answer:
      "Yes, we provide repair services for shelves and wall units across Jaipur.",
  },
  {
    question: "What types of wall units do you repair?",
    answer:
      "We repair TV units, storage units, display units, and wall-mounted shelves..",
  },
  {
    question: "Can you fix sagging or loose shelves?",
    answer:
      "Yes, we fix sagging shelves and improve support for better stability.",
  },
  {
    question: "Do you provide on-site repair service?",
    answer:
      "Yes, our team visits your location in Jaipur for inspection and repair.",
  },
  {
    question: "How long does it take to repair shelves or wall units?",
    answer: "Most repairs are completed quickly depending on the issue.",
  },
];

const ShelfRepair = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center  text-white h-64 w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-lg pt-14 text-center">
          Shelves and Wall Unit Repair Service in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20shelves%20and%20wall%20unit%20repair%20service%20for%20my%20home%20in%20Jaipur.%20Some%20parts%20are%20loose%20and%20damaged.%20Can%20you%20check%20and%20share%20details%3F"
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
          Professional Shelves and Wall Unit Repair for Home and Office
        </h2>
        <p className="">
          Our repair service covers all types of shelves and wall units,
          including wall-mounted shelves, TV units, storage units, and display
          setups. We fix common issues like sagging shelves, loose fittings,
          damaged panels, and alignment problems.
        </p>
        <p className="pt-2">
          We focus on restoring strength, proper balance, and long-term
          usability. Whether your wall unit is unstable or your shelves are not
          properly fitted, our team provides clean and effective repair
          solutions at your location in Jaipur.
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
          <p>✔ Affordable repair solutions</p>
          <p>✔ Strong and long-lasting fixes</p>
          <p>✔ Clean and precise work</p>
          <p>✔ On-site support and inspection</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default ShelfRepair;
