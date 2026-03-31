import React from "react";
import Header, { Footer } from "../Header";
import { ShoppingCart, Folder, CheckCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import FAQSection from "../FAQSection";

const ChairsFAQs = [
  {
    question: "Do you provide handmade dining tables in Jaipur?",
    answer:
      "Yes, we design and build handmade dining tables based on your space and requirements across Jaipur.",
  },
  {
    question: "Can I customize the size and seating capacity?",
    answer:
      "Yes, all dining tables are made on order, so you can customize the size, seating capacity, and design.",
  },
  {
    question: "What type of wood is used for dining tables?",
    answer:
      "We use high-quality solid wood to ensure durability and long-term use.",
  },
  {
    question: "Do you offer custom dining room table designs?",
    answer:
      "Yes, we provide fully customized dining room tables based on your space and style preferences",
  },
  {
    question: "How long does it take to complete a dining table?",
    answer:
      "The timeline depends on the design and size, but we ensure timely delivery across Jaipur.",
  },
];

const DinningTable = () => {
  useEffect(() => {
    document.title =
      "Wooden Dining Tables in Jaipur | Custom Dining Sets | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore custom wooden dining tables in Jaipur crafted for durability and elegant dining spaces. MG Furniture designs dining sets tailored to your home.",
      );
    }
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      url: "/image_collection/shop/dinning table/herotable1.webp",
      alt: "Mountain Landscape",
      caption: "Majestic Mountains",
    },
    {
      url: "/image_collection/shop/dinning table/herotable2.webp",
      alt: "Beach Paradise",
      caption: "Tropical Paradise",
    },
    {
      url: "/image_collection/shop/dinning table/herotable3.webp",
      alt: "City Skyline",
      caption: "City Lights",
    },
    {
      url: "/image_collection/shop/dinning table/herotable4.webp",
      alt: "Forest Path",
      caption: "Enchanted Forest",
    },
  ];

  const totalSlides = slides.length; // or however you're defining it

  const chairImage = [
    "/image_collection/shop/dinning table/dinning2.webp",
    "/image_collection/shop/dinning table/dinning3.webp",

    "/image_collection/shop/dinning table/dinning5.webp",
    "/image_collection/shop/dinning table/dinning6.webp",

    "/image_collection/shop/dinning table/dinning8.webp",
    "/image_collection/shop/dinning table/dinning9.webp",
    "/image_collection/shop/dinning table/dinning10.webp",
    "/image_collection/shop/dinning table/dinning11.webp",
    "/image_collection/shop/dinning table/dinning12.webp",
    "/image_collection/shop/dinning table/dinning13.webp",
    "/image_collection/shop/dinning table/dinning14.webp",
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
            Handmade Dining Tables in Jaipur
          </p>

          <p className="px-4 md:pl-10 pt-6 md:pt-10 text-sm md:text-base">
            Strong and elegant handmade dining tables designed for everyday use
            in your home. Built with quality wood and clean finishing, each
            table can be customized based on your space, seating needs, and
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
              href="https://wa.me/917878658974"
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
            Custom Solid Wood Dining Tables Designed for Your Space
          </p>

          <p className="flex flex-col gap-3 mt-5 mb-8 text-sm md:text-base">
            <p>
              Our handmade dining tables are designed to bring durability,
              functionality, and a clean look to your dining space. Whether you
              need a compact setup or a larger custom dining room table, we
              create designs that fit perfectly into your home.
            </p>
            <p>
              Each table is crafted using solid wood, ensuring strength and
              long-term use. From modern styles to more traditional designs, we
              offer custom solid wood dining tables based on your space, seating
              requirements, and design preference.
            </p>
            <p>
              If you're looking for a dining table in Jaipur that is both
              practical and well-finished, we focus on quality craftsmanship and
              long-lasting performance.
            </p>
          </p>

          <img
            src="/image_collection/shop/dinning table/dinning7.webp"
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
              <p>Fully customizable size, design, and finish</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Suitable for small and large dining spaces</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Strong, durable, and long-lasting build</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Clean finishing with attention to detail</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle size={24} />
              <p>Available in multiple seating configurations</p>
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

export default DinningTable;
