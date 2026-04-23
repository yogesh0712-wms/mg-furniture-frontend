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
    question: "Do you provide wardrobe installation service in Jaipur?",
    answer: "Yes, we provide wardrobe installation services across Jaipur.",
  },
  {
    question: "Do you install all types of wardrobes?",
    answer: "Yes, we install wooden, modular, and wall-fitted wardrobes.",
  },
  {
    question: "Can you install pre-made wardrobes?",
    answer: "Yes, we install both custom-made and ready wardrobes.",
  },
  {
    question: "Do you ensure proper alignment and fitting?",
    answer: "Yes, we focus on accurate fitting and smooth functionality.",
  },
  {
    question: "How long does wardrobe installation take?",
    answer:
      "The time depends on the size and setup, but we ensure timely completion.",
  },
];

const Wardobe = () => {
  useEffect(() => {
    document.title =
      "Wardrobe Installation in Jaipur | Custom Wardrobe Setup | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get wardrobe installation in Jaipur with expert fitting for sliding & hinged wardrobes. MG Furniture ensures durable, space-efficient setup tailored to your home. Book now!",
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
          Wardrobe Installation Service in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20wardrobe%20installation%20service%20in%20Jaipur.%20Can%20you%20share%20details%20and%20availability%3F"
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
          Expert Wardrobe Installation for Home and Office
        </h2>
        <p className="">
          Our wardrobe installation service focuses on proper fitting,
          alignment, and clean finishing. Whether it’s a new wardrobe or
          re-installation, we ensure every part is installed correctly for
          long-term use.
        </p>
        <p className="pt-2">
          We handle all types of wardrobes including wooden, modular, and
          wall-fitted units. From doors and drawers to internal fittings, our
          team ensures smooth operation and a perfect fit in your space in
          Jaipur.
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
          <p>✔ Smooth and proper functionality</p>
          <p>✔ Long-lasting fitting and support</p>
          <p>✔ On-site service across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default Wardobe;
