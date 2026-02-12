import React from "react";
import Header, { Footer } from "../Header";
import { ShoppingCart, Folder, CheckCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import FAQSection from "../FAQSection";

const ChairsFAQs = [
  {
    question: "Do you make furniture only on order?",
    answer:
      "Yes, all our furniture is custom-made based on your space and requirements.",
  },
  {
    question: "Do you take complete furnishing projects?",
    answer:
      "Yes, we handle full home, office, and building-level furnishing contracts.",
  },
];

const ShoeRacks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length; // or however you're defining it

  const slides = [
    {
      url: "/image_collection/shop/shoes rack/rackhero1.png",
      alt: "Mountain Landscape",
      caption: "Majestic Mountains",
    },
    {
      url: "/image_collection/shop/shoes rack/rackhero2.png",
      alt: "Beach Paradise",
      caption: "Tropical Paradise",
    },
    {
      url: "/image_collection/shop/shoes rack/rackhero3.png",
      alt: "City Skyline",
      caption: "City Lights",
    },
    {
      url: "/image_collection/shop/shoes rack/rackhero4.png",
      alt: "Forest Path",
      caption: "Enchanted Forest",
    },
  ];

  const chairImage = [
    "/image_collection/shop/shoes rack/rack1.jpg",
    "/image_collection/shop/shoes rack/rack2.jpg",
    "/image_collection/shop/shoes rack/rack3.jpg",
    "/image_collection/shop/shoes rack/rack4.jpg",
    "/image_collection/shop/shoes rack/rack5.png",
    "/image_collection/shop/shoes rack/rack6.jpg",
    "/image_collection/shop/shoes rack/rack7.jpg",
    "/image_collection/shop/shoes rack/rack8.jpg",
    "/image_collection/shop/shoes rack/rack9.jpg",
    "/image_collection/shop/shoes rack/rack10.png",
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

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, changeSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") changeSlide(-1);
      if (e.key === "ArrowRight") changeSlide(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeSlide]);

  return (
    <div>
      <Header />

      <div className="mx-auto w-[90%] flex">
        <div className="flex  p-4">
          <div
            className="relative w-full max-w-3xl h-[500px] overflow-hidden rounded-3xl shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-w-full h-full relative flex-shrink-0"
                >
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={() => changeSlide(-1)}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-none w-12 h-12 rounded-full cursor-pointer text-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 shadow-lg"
              aria-label="Previous slide"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={() => changeSlide(1)}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-none w-12 h-12 rounded-full cursor-pointer text-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 shadow-lg"
              aria-label="Next slide"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/80 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" w-[40%]">
          <p className="font-serif text-4xl pl-10 pt-20">Modern Wooden Chair</p>
          <p className="pl-10 pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
            turpis tincidunt id aliquet risus feugiat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet
            risus feugiat.
          </p>

          <div className="mt-10 ml-10">
            <a
              href="tel:917878658974"
              className="inline-flex items-center gap-3 border-2 mr-3 border-black p-4 px-9 rounded-full text-lg font-medium leading-loose"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.18a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62a2 2 0 0 1 1.72 2z" />
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/917878658974?text=Hello%20I%20want%20to%20discuss%20a%20custom%20furniture%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-black p-4 px-9 rounded-full text-lg font-medium leading-loose"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M16.001 2.003c-7.732 0-14.001 6.268-14.001 13.999 0 2.468.646 4.882 1.872 7.015L2 30l7.174-1.853c2.042 1.115 4.341 1.702 6.827 1.702 7.731 0 14-6.268 14-13.999S23.732 2.003 16.001 2.003zm0 25.848c-2.262 0-4.483-.609-6.423-1.761l-.46-.273-4.253 1.1 1.134-4.14-.299-.479c-1.171-1.882-1.79-4.052-1.79-6.297 0-6.55 5.34-11.889 11.89-11.889 6.549 0 11.889 5.339 11.889 11.889 0 6.549-5.34 11.89-11.889 11.89zm6.535-8.438c-.356-.178-2.106-1.04-2.432-1.16-.326-.118-.563-.178-.801.178-.237.356-.92 1.16-1.129 1.398-.207.237-.415.267-.771.089-.356-.178-1.504-.555-2.864-1.771-1.058-.945-1.772-2.113-1.979-2.469-.207-.356-.022-.548.156-.726.16-.159.356-.415.533-.623.178-.207.237-.356.356-.593.118-.237.059-.445-.03-.623-.089-.178-.801-1.929-1.098-2.646-.289-.694-.582-.6-.801-.611-.207-.01-.445-.012-.683-.012-.237 0-.623.089-.949.445-.326.356-1.247 1.218-1.247 2.97 0 1.751 1.277 3.444 1.455 3.682.178.237 2.513 3.837 6.092 5.381.852.367 1.518.586 2.036.75.855.272 1.633.234 2.248.142.685-.102 2.106-.861 2.402-1.692.297-.831.297-1.543.207-1.692-.089-.148-.326-.237-.683-.415z" />
              </svg>
              Order Now
            </a>
          </div>
          <div className="flex gap-3 mt-10 ml-10">
            <Folder size={25} strokeWidth={1.5} color="#D6D6B5" />
            <p>Furniture</p>
            <ShoppingCart size={25} strokeWidth={1.5} color="#D6D6B5" />
            <p>chair, modern, wood, sale</p>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-[#f8ffe2]">
        <div className="mx-auto w-[50%] pt-14">
          <p className="text-3xl text-center font-poppins">
            Product Description
          </p>
          <p className="mt-5 mb-8">
            Ac ut consequat semper viverra nam libero justo laoreet. In dictum
            non consectetur a erat. Mattis enim ut tellus elementum sagittis.
            Ipsum consequat nisl vel pretium. Neque vitae tempus quam
            pellentesque nec nam. Pharetra magna ac placerat vestibulum. Arcu
            non sodales neque sodales ut etiam. Odio tempor orci dapibus
            ultrices in iaculis nunc.
          </p>
          <img src="/image_collection/shop/shoes rack/rackcenter.png" alt="" />
          <div>
            <p className="text-xl font-poppins mt-5 mb-5">Product Features</p>
            <div className="flex gap-4">
              <div>
                <CheckCircle
                  size={30}
                  strokeWidth={1}
                  color="black"
                  className=""
                />
                <CheckCircle
                  size={30}
                  strokeWidth={1}
                  color="black"
                  className=""
                />
                <CheckCircle
                  size={30}
                  strokeWidth={1}
                  color="black"
                  className=""
                />
              </div>
              <div>
                <p className="text-lg">Good quality furniture</p>
                <p className="text-lg">Quick delivery</p>
                <p className="text-lg">Various payment methods</p>
              </div>
            </div>
            <p className="mt-5">
              Ac ut consequat semper viverra nam libero justo laoreet. In dictum
              non consectetur a erat. Mattis enim ut tellus elementum sagittis.
              Ipsum consequat nisl vel pretium. Neque vitae tempus quam
              pellentesque nec nam. Pharetra magna ac placerat vestibulum. Arcu
              non sodales neque sodales ut etiam. Odio tempor orci dapibus
              ultrices in iaculis nunc.
            </p>
          </div>
        </div>
        <FAQSection title="Common Questions" faqs={ChairsFAQs} />
      </div>
      <div className="mb-20">
        <p className="ml-28 mt-10 text-4xl font-bold mb-5">Gallery</p>
        <div className="flex flex-wrap w-[85%] mx-auto gap-10 ">
          {chairImage.map((item) => (
            <div
              className=" w-56 h-80 transition-all duration-300 ease-out
      transform-gpu

      hover:-translate-y-4 hover:shadow-2xl hover:shadow-black/40
      active:-translate-y-4 active:shadow-2xl active:shadow-black/40 overflow-hidden"
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

export default ShoeRacks;
