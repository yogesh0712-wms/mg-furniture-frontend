import Header, { Footer } from "../../Header";
import heroImage from "../../assets/images/services/ServicesHeroSectionImage.webp";
import ServiceImage from "../../assets/images/services/ServiceImage.webp";
import { Home, ArrowUpIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FAQSection from "../../FAQSection";
import { useEffect } from "react";

const servicesFAQs = [
  {
    question: "Do you provide bed and sofa setup service in Jaipur?",
    answer: "Yes, we provide setup services for beds and sofas across Jaipur.",
  },
  {
    question: "Do you assemble new furniture as well?",
    answer: "Yes, we assemble both new and existing furniture.",
  },
  {
    question: "Can you set up storage beds and modular sofas?",
    answer: "Yes, we handle storage beds and modular sofa setups.",
  },
  {
    question: "Do you provide on-site setup service?",
    answer:
      "Yes, our team visits your location in Jaipur for setup and installation.",
  },
  {
    question: "How long does the setup take?",
    answer:
      "The time depends on the furniture type, but most setups are completed quickly.",
  },
];

const BedSofa = () => {
  useEffect(() => {
    document.title =
      "Bed & Sofa Installation in Jaipur | Furniture Assembly Service | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get bed & sofa installation in Jaipur with expert assembly and setup. MG Furniture ensures strong, secure fitting for all types of beds & sofas. Fast service near you. Book now!",
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
          Bed and Sofa Setup Service in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20bed%20and%20sofa%20setup%20service%20in%20Jaipur.%20Can%20you%20assist%20with%20installation%3F"
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
          Expert Bed and Sofa Setup for Home
        </h2>
        <p className="">
          Our bed and sofa setup service includes complete assembly, fitting,
          and alignment of your furniture. Whether it’s a new purchase or
          shifting setup, we ensure everything is installed correctly for
          stability and comfort.
        </p>
        <p className="pt-2">
          We handle different types of beds and sofas, including storage beds
          and modular sofas. Our team ensures proper fitting, secure joints, and
          clean finishing so your furniture is safe and ready to use in your
          home in Jaipur.
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
          <p>✔ Quick and hassle-free setup</p>
          <p>✔ Experienced professionals</p>
          <p>✔ Proper alignment and fitting</p>
          <p>✔ Safe and secure installation</p>
          <p>✔ Clean and organized work</p>
          <p>✔ On-site service across Jaipur</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default BedSofa;
