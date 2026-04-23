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
    question: "Do you provide sofa frame repair service in Jaipur?",
    answer:
      "Yes, we provide sofa frame repair services across Jaipur for all types of sofas.",
  },
  {
    question: "What kind of sofa frame issues can you fix?",
    answer:
      "We fix broken frames, loose joints, weak structures, and stability problems.",
  },
  {
    question: "Can you repair wooden sofa frames?",
    answer: "Yes, we repair all types of wooden sofa frames and structures",
  },
  {
    question: "Do you provide on-site repair service?",
    answer:
      "Yes, our team visits your location in Jaipur for inspection and repair.",
  },
  {
    question: "How long does it take to repair a sofa frame?",
    answer:
      "The time depends on the damage, but most repairs are completed efficiently.",
  },
];

const SofaFrameRepair = () => {
  useEffect(() => {
    document.title =
      "Sofa Frame Repair in Jaipur | Wooden Frame Fix & Support | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get expert sofa frame repair in Jaipur for broken wood, weak support & structural issues. MG Furniture ensures strong, durable fixing for long-lasting comfort. Book now!",
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
          Sofa Frame Repair Service in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20sofa%20frame%20repair%20service%20for%20my%20home%20in%20Jaipur.%20My%20sofa%20frame%20is%20loose%20or%20damaged.%20Can%20you%20check%20and%20share%20details%3F"
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
          Professional Sofa Frame Repair for Strength and Durability
        </h2>
        <p className="">
          Our sofa frame repair service focuses on fixing structural issues such
          as broken frames, loose joints, and weakened support. Whether your
          sofa is made of wood or has a complex frame structure, we provide
          proper repair solutions to restore its strength and usability.
        </p>
        <p className="pt-2">
          We identify the root cause of the damage and reinforce the frame to
          ensure long-lasting performance. If your sofa is making noise, losing
          stability, or sinking, our team delivers clean and effective repair
          work at your location in Jaipur.
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
          <p>✔ Experienced professionals</p>
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

export default SofaFrameRepair;
