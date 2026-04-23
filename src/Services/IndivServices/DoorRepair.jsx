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
    question: "Do you provide door and window repair service in Jaipur?",
    answer:
      "Yes, we provide repair services for doors and windows across Jaipur.",
  },
  {
    question: "What issues can you fix in doors and windows?",
    answer:
      "We fix alignment issues, hinges, locks, handles, and structural problems",
  },
  {
    question: "Do you repair wooden doors and windows?",
    answer: "Yes, we repair wooden doors and windows along with other types.",
  },
  {
    question: "Do you provide on-site repair service?",
    answer:
      "Yes, our team visits your location in Jaipur for inspection and repair.",
  },
  {
    question: "How long does the repair take?",
    answer: "Most repairs are completed quickly depending on the issue.",
  },
];

const DoorRepair = () => {
  useEffect(() => {
    document.title =
      "Door & Window Repair in Jaipur | Wooden Door Fix & Service | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get professional door & window repair in Jaipur. Fix wooden doors, windows, hinges, locks & alignment issues with MG Furniture. Fast, reliable service near you. Book today!",
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
          Door and Window Repair Service in Jaipur
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
            href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20door%20and%20window%20repair%20service%20for%20my%20home%20in%20Jaipur.%20Can%20you%20check%20and%20share%20details%3F"
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
          Professional Door and Window Repair Services for Home
        </h2>
        <p className="">
          Our door and window repair service covers common issues such as
          misalignment, damaged hinges, broken panels, and fitting problems.
          Whether your door is not closing properly or your window is difficult
          to operate, we provide effective repair solutions.
        </p>
        <p className="pt-2">
          We focus on restoring proper alignment, smooth movement, and
          durability. Our team ensures clean and precise work at your location
          in Jaipur, helping improve both functionality and appearance.
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
          <p>✔ Smooth and proper functionality</p>
          <p>✔ Clean and precise work</p>
          <p>✔ On-site support and inspection</p>
        </p>
      </div>
      <FAQSection title="Common Questions" faqs={servicesFAQs} />
      <Footer />
    </div>
  );
};

export default DoorRepair;
