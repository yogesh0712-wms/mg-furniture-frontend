import React, { useState, useEffect, useCallback } from "react";
import Header, { Footer } from "../Header";
import { ShoppingCart, Folder, CheckCircle } from "lucide-react";
import FAQSection from "../FAQSection";

const ChairsFAQs = [
  {
    question: "Do you provide customized wooden almirah in Jaipur?",
    answer:
      "Yes, we design and build customized wooden almirahs based on your space and storage requirements across Jaipur.",
  },
  {
    question: "Can I choose the design and layout of the almirah?",
    answer:
      "Yes, all almirahs are made on order, so you can customize the design, size, and internal layout.",
  },
  {
    question: "Do you make wall almirah designs?",
    answer:
      "Yes, we provide wall almirah designs that are perfect for saving space and improving storage.",
  },
  {
    question: "Are these almirahs suitable for office use?",
    answer:
      "Yes, we also create almirah design for office spaces with practical storage solutions.",
  },
  {
    question: "How long does it take to complete a custom almirah?",
    answer:
      "The timeline depends on the design and size, but we ensure timely delivery across Jaipur.",
  },
];

const Almiras = () => {
  useEffect(() => {
    document.title =
      "Wooden Almira in Jaipur | Custom Bedroom Wardrobes | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore custom wooden almira and bedroom wardrobes in Jaipur by MG Furniture. Built for durability, smart storage, and perfect space fitting.",
      );
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { url: "/image_collection/shop/Almira/almirahero1.webp", alt: "Slide 1" },
    { url: "/image_collection/shop/Almira/almirahero2.webp", alt: "Slide 2" },
    { url: "/image_collection/shop/Almira/almirahero3.webp", alt: "Slide 3" },
    { url: "/image_collection/shop/Almira/almirahero4.webp", alt: "Slide 4" },
  ];

  const totalSlides = slides.length;

  const chairImage = [
    "/image_collection/shop/Almira/almira1.webp",
    "/image_collection/shop/Almira/almira2.webp",
    "/image_collection/shop/Almira/almira3.webp",
    "/image_collection/shop/Almira/almira4.webp",
    "/image_collection/shop/Almira/almira5.webp",
    "/image_collection/shop/Almira/almira6.webp",
    "/image_collection/shop/Almira/almira7.webp",
    "/image_collection/shop/Almira/almira8.webp",
    "/image_collection/shop/Almira/almira9.webp",
    "/image_collection/shop/Almira/almira10.webp",
    "/image_collection/shop/Almira/almira11.webp",
    "/image_collection/shop/Almira/almira12.webp",
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
            Customized Wooden Almirah in Jaipur
          </p>

          <p className="px-4 md:pl-10 pt-6 md:pt-10 text-sm md:text-base">
            Spacious and durable customized wooden almirah designed for everyday
            use in your home. Built with quality wood and clean finishing, each
            unit can be customized based on your space, storage needs, and
            budget in Jaipur.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 px-4 md:ml-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:917878658974"
              className="inline-flex justify-center items-center border-2 border-black px-6 py-3 rounded-full text-sm md:text-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20looking%20for%20a%20customized%20wooden%20almirah%20for%20my%20home%20in%20Jaipur.%20Can%20you%20share%20design%20options%20and%20pricing%3F"
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
            Custom Wooden Almirah Designs for Home and Office
          </p>

          <p className="flex flex-col gap-4 mt-5 mb-8 text-sm md:text-base">
            <p>
              Our customized wooden almirahs are designed to provide smart
              storage and a clean look for your space. Whether you need a wall
              almirah design for compact areas or a larger storage unit for
              bedrooms and offices, we create solutions that fit perfectly.
            </p>
            <p>
              Each almirah is built using high-quality wood, ensuring durability
              and long-term use. From modern layouts to practical storage
              designs, we offer custom options based on your space and usage
              requirements.
            </p>
            <p>
              If you're looking for almirah design for office or home in Jaipur,
              we focus on functionality, proper space utilization, and clean
              finishing in every piece.
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
              <p>Fully customizable design, size, and layout</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Wall almirah and full-size storage options available</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Suitable for home and office use</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Smart storage design for better space utilization</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Clean finishing with durable build</p>
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
              className="w-full sm:w-56 h-full md:h-96 overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
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

export default Almiras;
