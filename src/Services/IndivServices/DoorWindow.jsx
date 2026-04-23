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
    question: "Do you provide door and window installation in Jaipur?",
    answer:
      "Yes, we provide installation services for doors and windows across Jaipur.",
  },
  {
    question: "What types of doors and windows do you install?",
    answer: "We install wooden doors, windows, and different frame types..",
  },
  {
    question: "Do you install locks and fittings as well?",
    answer: "Yes, we install hinges, handles, locks, and other fittings.",
  },
  {
    question: "Can you replace old doors and windows?",
    answer: "Yes, we handle both new installations and replacements.",
  },
  {
    question: "How long does installation take?",
    answer:
      "The time depends on the setup, but most installations are completed efficiently.",
  },
];

const DoorWindow = () => {
  useEffect(() => {
    document.title =
      "Door & Window Installation in Jaipur | Wooden Door Setup | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get door & window installation in Jaipur with expert fitting for wooden doors, windows, frames & hardware. MG Furniture ensures secure, durable setup. Book your service today!",
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
          Door and Window Installation in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20door%20and%20window%20installation%20service%20in%20Jaipur.%20Can%20you%20share%20details%20and%20availability%3F"
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
          Expert Door and Window Installation for Home
        </h2>
        <p className="">
          Our door and window installation service focuses on proper alignment,
          secure fitting, and long-term durability. Whether you are installing
          new doors and windows or replacing old ones, we ensure every component
          is fixed correctly.
        </p>
        <p className="pt-2">
          We handle wooden doors, windows, frames, and fittings with precision
          to ensure smooth operation and a perfect fit. If you're setting up
          doors and windows in Jaipur, our team ensures a hassle-free and
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
          <p>✔ Smooth opening and closing functionality</p>
          <p>✔ Clean and precise work</p>
          <p>✔ Long-lasting fitting and durability</p>
          <p>✔ On-site service across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default DoorWindow;
