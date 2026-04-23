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
    question: "Do you provide wardrobe repair service in Jaipur?",
    answer:
      "Yes, we offer wardrobe repair services across Jaipur for all types of wardrobes..",
  },
  {
    question: "What kind of wardrobe issues can you fix?",
    answer:
      "We fix doors, hinges, drawers, locks, alignment issues, and structural damage.",
  },
  {
    question: "Do you repair both wooden and modular wardrobes?",
    answer: "Yes, we repair wooden, modular, and wall-fitted wardrobes.",
  },
  {
    question: "Do you provide on-site repair service?",
    answer:
      "Yes, our team visits your location in Jaipur for inspection and repair.",
  },
  {
    question: "How quickly can the repair be done?",
    answer:
      "Most repairs are completed quickly depending on the issue, and we ensure timely service.",
  },
];

const WardrobeServicing = () => {
  useEffect(() => {
    document.title =
      "Wardrobe Servicing in Jaipur | Repair, Sliding Fix & Maintenance | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get professional wardrobe servicing in Jaipur with expert repair, sliding door fixing, hinge replacement & maintenance. MG Furniture ensures smooth, long-lasting performance. Book now!",
      );
    }
  }, []);
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center  text-white h-full w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-lg pt-14 text-center">
          Wardrobe Repair Service in Jaipur
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
          Professional Wardrobe Repair Services for Home and Office
        </h2>
        <p className="">
          Our wardrobe repair service is designed to fix all common and complex
          issues, including damaged doors, loose hinges, broken drawers, and
          alignment problems. Whether your wardrobe needs minor adjustments or
          complete repair, our team ensures clean and precise work.
        </p>
        <p className="pt-2">
          We handle different types of wardrobes, including wooden, modular, and
          wall-fitted units. If you're facing issues with storage functionality
          or structure, we provide practical solutions that improve durability
          and usability.
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
          <p>✔ Experienced team with proper tools</p>
          <p>✔ Affordable repair solutions</p>
          <p>✔ Clean and precise work</p>
          <p>✔ Long-lasting results</p>
          <p>✔ On-site support and inspection</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default WardrobeServicing;
