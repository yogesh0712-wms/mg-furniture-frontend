import React from "react";
import Header, { Footer } from "../Header";
import { ShoppingCart, Folder, CheckCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import FAQSection from "../FAQSection";

const ChairsFAQs = [
  {
    question: "Do you provide custom wooden chairs in Jaipur?",
    answer:
      "Yes, we design and build custom wooden chairs based on your space, style, and requirements across Jaipur.",
  },
  {
    question: "What type of wood is used for chairs?",
    answer:
      "We use high-quality solid wood to ensure durability, strength, and long-term use.",
  },
  {
    question: "How long does it take to complete an order?",
    answer:
      "The timeline depends on the design and quantity, but we ensure timely delivery for all custom orders in Jaipur.",
  },
  {
    question: "Can I customize the design and size of the chairs?",
    answer:
      "Yes, all our chairs are made on order, so you can customize the design, size, and finish according to your needs.",
  },
  {
    question: "Are these chairs suitable for dining and office use?",
    answer:
      "Yes, our chairs are designed for multiple uses including dining areas, living rooms, and office spaces.",
  },
];

const Chairs = () => {
  useEffect(() => {
    document.title =
      "Wooden Chairs in Jaipur | Custom Dining & Living Chairs | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Shop custom wooden chairs in Jaipur for dining rooms, living spaces, and offices. MG Furniture crafts durable and stylish chairs tailored to your needs.",
      );
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      url: "/image_collection/shop/CHAIRS/chairs hero.webp",
      alt: "Mountain Landscape",
      caption: "Majestic Mountains",
    },
    {
      url: "/image_collection/shop/CHAIRS/chair hero2.webp",
      alt: "Beach Paradise",
      caption: "Tropical Paradise",
    },
    {
      url: "/image_collection/shop/CHAIRS/chair hero3.webp",
      alt: "City Skyline",
      caption: "City Lights",
    },
    {
      url: "/image_collection/shop/CHAIRS/hero chair4.webp",
      alt: "Forest Path",
      caption: "Enchanted Forest",
    },
  ];

  const totalSlides = slides.length; // or however you're defining it

  const chairImage = [
    "/image_collection/shop/CHAIRS/chair 1.webp",
    "/image_collection/shop/CHAIRS/chair2.webp",
    "/image_collection/shop/CHAIRS/chair3.webp",
    "/image_collection/shop/CHAIRS/chair4.webp",
    "/image_collection/shop/CHAIRS/chair5.webp",
    "/image_collection/shop/CHAIRS/chair6.webp",
    "/image_collection/shop/CHAIRS/chair7.webp",
    "/image_collection/shop/CHAIRS/chair8.webp",
    "/image_collection/shop/CHAIRS/chair10.webp",
    "/image_collection/shop/CHAIRS/chair11.webp",
    "/image_collection/shop/CHAIRS/chair12.webp",
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
            Wooden Chairs for Home in Jaipur
          </p>

          <p className="px-4 md:pl-10 pt-6 md:pt-10 text-sm md:text-base">
            Comfortable and durable wooden chairs designed for everyday use in
            your home. Built with quality wood and clean finishing, each chair
            can be customized based on your space, style, and budget in Jaipur.
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
              href="https://wa.me/919782545485?text=Hi%2C%20I%20am%20interested%20in%20wooden%20chairs%20for%20home.%20I%20want%20a%20custom%20design%20in%20Jaipur.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center border-2 border-black px-6 py-3 rounded-full text-sm md:text-lg"
            >
              👉 Get Custom Quote
            </a>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-8 px-4 md:ml-10 items-center">
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
            Product Description
          </p>

          <p className="mt-5 mb-8 text-sm md:text-base">
            <p>
              Our wooden chairs are designed to bring comfort, durability, and a
              clean look to your home. Whether you need chairs for dining,
              living spaces, or work setups, we create designs that fit
              perfectly into your space.
            </p>{" "}
            <br />
            <p>
              Each piece is made using solid wood and crafted with attention to
              detail, ensuring long-lasting performance. From modern styles to
              classic designs, we build custom chairs based on your exact
              requirements.,
            </p>
            <br /> If you’re looking for comfort chairs that match your interior
            and usage needs, we provide fully customizable options in Jaipur
            with a focus on quality and finishing.
          </p>

          <img
            src="/image_collection/shop/CHAIRS/chairs hero.webp"
            alt="custom wooden chairs for home in Jaipur
                   solid wood comfort chairs design
                  modern wooden chairs for dining and living space"
            className="w-full"
          />

          <p className="text-lg md:text-xl font-poppins mt-5 mb-5">
            Product Features
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex  gap-3">
              <CheckCircle size={24} />
              <p>Made with high-quality solid wood</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <p>Fully customizable design, size, and finish</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <p>Suitable for dining, living, and workspaces</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <p>Strong, durable, and long-lasting build</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <p>Clean finishing with attention to detail</p>
            </div>
            <div className="flex items-center gap-3">
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

export default Chairs;
