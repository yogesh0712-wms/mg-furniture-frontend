import React from "react";
import Header, { Footer } from "../Header";
import { ShoppingCart, Folder, CheckCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import FAQSection from "../FAQSection";

const ChairsFAQs = [
  {
    question: "Do you provide custom wooden doors in Jaipur?",
    answer:
      "Yes, we design and build custom wooden doors based on your space, style, and requirements across Jaipur.",
  },
  {
    question: "What type of wood is used for doors?",
    answer:
      "We use high-quality solid wood to ensure strength, durability, and long-term use.",
  },
  {
    question: "Can I customize the design of the doors?",
    answer:
      "Yes, all doors are made on order, so you can choose the design, size, and finish as per your needs.",
  },
  {
    question: "Do you install the doors as well?",
    answer:
      "Yes, we provide complete service including design, making, and installation across Jaipur.",
  },
  {
    question: "How long does it take to complete a door project?",
    answer:
      "The timeline depends on the design and quantity, but we ensure timely delivery and proper installation.",
  },
];

const Doors = () => {
  useEffect(() => {
    document.title =
      "Wooden Doors in Jaipur | Custom Interior Doors | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore custom wooden doors in Jaipur designed for durability, security, and elegant interiors. MG Furniture crafts doors tailored to your space and style.",
      );
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      url: "/image_collection/shop/doors/doorhero11.webp",
      alt: "Mountain Landscape",
      caption: "Majestic Mountains",
    },
    {
      url: "/image_collection/shop/doors/doorhero12.webp",
      alt: "Beach Paradise",
      caption: "Tropical Paradise",
    },
    {
      url: "/image_collection/shop/doors/doorhero13.webp",
      alt: "City Skyline",
      caption: "City Lights",
    },
    {
      url: "/image_collection/shop/doors/door14.webp",
      alt: "Forest Path",
      caption: "Enchanted Forest",
    },
  ];

  const totalSlides = slides.length; // or however you're defining it

  const chairImage = [
    "/image_collection/shop/doors/door1.webp",
    "/image_collection/shop/doors/door2.webp",
    "/image_collection/shop/doors/door3.webp",
    "/image_collection/shop/doors/door4.webp",
    "/image_collection/shop/doors/door5.webp",
    "/image_collection/shop/doors/door6.webp",
    "/image_collection/shop/doors/door7.webp",
    "/image_collection/shop/doors/door8.webp",
  ];

  const changeSlide = useCallback(
    (direction) => {
      setCurrentSlide((prev) => {
        if (direction === -1) {
          return prev === 0 ? totalSlides - 1 : prev - 1;
        } else {
          return prev === totalSlides - 1 ? 0 : prev + 1;
        }
      });
    },
    [totalSlides],
  );

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, changeSlide]);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="mx-auto w-[95%] md:w-[90%] flex flex-col md:flex-row">
        {/* Slider */}
        <div className="flex p-2 md:p-4 w-full md:w-auto">
          <div
            className="relative w-full max-w-3xl h-[280px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full">
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => changeSlide(-1)}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-white/90 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
            >
              ‹
            </button>

            <button
              onClick={() => changeSlide(1)}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-white/90 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-[40%]">
          <p className="font-serif text-2xl md:text-4xl px-4 md:pl-10 pt-8 md:pt-20">
            Wooden Furniture Doors in Jaipur
          </p>

          <p className="px-4 md:pl-10 pt-6 md:pt-10 text-sm md:text-base">
            Strong and durable wooden furniture doors designed for everyday use
            in your home. Built with quality wood and clean finishing, each door
            can be customized based on your space, design preference, and budget
            in Jaipur.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 px-4 md:ml-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:919782545485"
              className="inline-flex justify-center items-center border-2 border-black px-6 py-3 rounded-full text-sm md:text-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20custom%20wooden%20doors%20for%20my%20home%20in%20Jaipur.%20Can%20you%20share%20design%20options%20and%20pricing%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center border-2 border-black px-6 py-3 rounded-full text-sm md:text-lg"
            >
              👉 Get Custom Quote
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8 px-4 md:ml-10 items-center">
            <Folder size={20} />
            <p>Furniture</p>
            <ShoppingCart size={20} />
            <p>chair, modern, wood</p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16 bg-[#f8ffe2]">
        <div className="mx-auto w-[95%] md:w-[50%] pt-10 md:pt-14">
          <p className="text-2xl md:text-3xl text-center font-poppins">
            Custom Wooden Doors Designed for Strength and Style
          </p>

          <p className="flex flex-col gap-3 mt-5 mb-8 text-sm md:text-base">
            <p>
              Our wooden furniture doors are designed to provide both durability
              and a clean, finished look to your home. Whether you need doors
              for rooms, main entrances, or storage spaces, we create designs
              that match your interiors perfectly.
            </p>
            <p>
              Each door is built using high-quality wood, ensuring long-term
              strength and reliable performance. From simple designs to more
              detailed patterns, we offer custom wooden doors based on your
              space and style requirements.
              <p>
                If you're looking for strong and well-finished wooden doors in
                Jaipur, we focus on quality craftsmanship, proper fitting, and
                long-lasting results.
              </p>
            </p>
          </p>

          <img
            src="/image_collection/shop/Almira/almiracenter.webp"
            alt=""
            className="w-full"
          />

          <p className="text-lg md:text-xl font-poppins mt-5 mb-5">
            Product Features
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Made with high-quality solid wood</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Fully customizable design, size, and finish</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Suitable for room doors, main doors, and storage</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Strong, durable, and long-lasting build</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Clean finishing with precise fitting</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Made on order in Jaipur</p>
            </div>
          </div>
        </div>

        <FAQSection title="Common Questions" faqs={ChairsFAQs} />
      </div>

      {/* Gallery */}
      <div className="mb-16">
        <p className="px-4 md:ml-28 mt-10 text-2xl md:text-4xl font-bold mb-5">
          Gallery
        </p>

        <div className="flex flex-wrap w-[95%] md:w-[85%] mx-auto gap-6 md:gap-10 justify-center">
          {chairImage.map((item, index) => (
            <div
              key={index}
              className="w-[45%] sm:w-56 h-64 md:h-96 overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img src={item} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doors;
