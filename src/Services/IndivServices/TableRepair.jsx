import React from "react";
import Header, { Footer } from "../../Header";
import heroImage from "../../assets/images/services/ServicesHeroSectionImage.webp";
import ServiceImage from "../../assets/images/services/ServiceImage.webp";
import { Home, ArrowUpIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "../../FAQSection";

const servicesFAQs = [
  {
    question: "Do you provide table repair service in Jaipur?",
    answer:
      "Yes, we provide table repair services across Jaipur for all types of tables.",
  },
  {
    question: "What type of table issues can you fix?",
    answer:
      "We fix loose joints, broken legs, damaged tops, and structural problems.",
  },
  {
    question: "Do you repair dining and study tables?",
    answer: "Yes, we repair dining tables, study tables, and office tables.",
  },
  {
    question: "Do you provide on-site repair service?",
    answer:
      "Yes, our team visits your location in Jaipur for inspection and repair.",
  },
  {
    question: "How long does it take to repair a table?",
    answer: "Most table repairs are completed quickly depending on the issue.",
  },
];

const TableRepair = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center  text-white h-64 w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-lg pt-14 text-center">
          Table Repair Service in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20table%20repair%20service%20for%20my%20home%20in%20Jaipur.%20My%20table%20is%20damaged%20or%20unstable.%20Can%20you%20check%20and%20share%20details%3F"
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
          Professional Table Repair Services for Home and Office
        </h2>
        <p className="">
          Our table repair service covers all types of issues, including loose
          joints, broken legs, damaged tops, and structural problems. Whether
          it’s a dining table, study table, or office table, we provide proper
          repair solutions to restore strength and usability.
        </p>
        <p className="pt-2">
          We focus on fixing the root cause of the issue to ensure long-lasting
          results. If your table is unstable, making noise, or damaged, our team
          delivers clean and effective repair work at your location in Jaipur.
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
          <p>✔ Quick and reliable repair service</p>
          <p>✔ Experienced team with proper tools</p>
          <p>✔ Affordable repair solutions</p>
          <p>✔ Strong and long-lasting fixes</p>
          <p>✔ Clean and precise work</p>
          <p>✔ On-site support across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default TableRepair;
