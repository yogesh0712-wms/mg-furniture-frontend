import React from "react";
import Header, { Footer } from "../Header";
import ShopHeroSection from "./ShopHeroSection";
import Products, { ProductsQuality } from "../Products";
import { useEffect } from "react";

const popularProducts = [
  {
    image: "image_collection/shop/chairs.webp",
    type: "Wooden Chairs for Home",
    Descrip:
      "Comfortable and durable wooden chairs designed for everyday use in your home. Built with quality wood and clean finishing, each chair can be customized based on your space, style, and budget in Jaipur.",
    link: "/custom-wood-furniture/chairs",
  },
  {
    image: "image_collection/shop/Sofa.webp",
    type: "Wooden Sofa Set ",
    Descrip:
      "Comfortable and durable solid wood sofa designed for everyday use in your home. Built with quality wood and clean finishing, each wooden sofa set can be customized based on your space, style, and budget in Jaipur.",
    link: "/custom-wood-furniture/sofas",
  },
  {
    image: "image_collection/shop/Doors.webp",
    type: "Custom Wooden Doors",
    Descrip:
      "Strong and durable wooden doors designed for everyday use in your home. Built with quality wood and clean finishing, each piece can be customized based on your space, design preference, and budget in Jaipur.",
    link: "/custom-wood-furniture/doors",
  },
  {
    image: "image_collection/shop/Windows.webp",
    type: "Custom Wooden Windows",
    Descrip:
      "Strong and durable wooden windows designed for everyday use in your home. Built with quality wood and clean finishing, each piece can be customized based on your space, design style, and budget in Jaipur.",
    link: "/custom-wood-furniture/windows",
  },
  {
    image: "image_collection/shop/Almiras.webp",
    type: "Customized Wooden Almirah",
    Descrip:
      "Spacious and durable customized wooden almirah designed for everyday use in your home. Built with quality wood and clean finishing, each unit can be customized based on your space, storage needs, and budget in Jaipur.",
    link: "/custom-wood-furniture/almiras",
  },
  {
    image: "image_collection/shop/Beds.webp",
    type: "Solid Wood Beds with Storage",
    Descrip:
      "Strong and comfortable solid wood beds designed for everyday use in your home. Built with quality wood and clean finishing, each bed can be customized with storage options based on your space, style, and budget in Jaipur.",
    link: "/custom-wood-furniture/beds",
  },
  {
    image: "image_collection/shop/dinning table.webp",
    type: "Handmade Dining Tables",
    Descrip:
      "Strong and elegant handmade dining tables designed for everyday use in your home. Built with quality wood and clean finishing, each table can be customized based on your space, seating needs, and budget in Jaipur.",
    link: "/custom-wood-furniture/dining-table",
  },
  {
    image: "image_collection/shop/Shoe rack.webp",
    type: "Wooden Shoe Racks for Home",
    Descrip:
      "Compact and durable wooden shoe racks designed for everyday use in your home. Built with quality wood and clean finishing, each unit can be customized based on your space, storage needs, and budget in Jaipur.",
    link: "/custom-wood-furniture/shoe-racks",
  },
  {
    image: "image_collection/shop/study table.webp",
    type: "Study and Computer Table",
    Descrip:
      "Functional and durable study tables designed for everyday use in your home. Built with quality wood and clean finishing, each study table with storage design can be customized based on your space, usage needs, and budget in Jaipur.",
    link: "/custom-wood-furniture/study-table",
  },
  {
    image: "image_collection/shop/wooden ceiling.webp",
    type: "Custom Wooden Ceiling Design",
    Descrip:
      "Stylish and durable wooden ceiling designs crafted to enhance your interior space. Built with quality wood and clean finishing, each ceiling can be customized based on your layout, design preference, and budget in Jaipur.",
    link: "/custom-wood-furniture/wooden-ceiling",
  },
];

const Shop = () => {
  useEffect(() => {
    document.title =
      "Furniture Store in Jaipur | Custom Wooden Furniture | MG Furniture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore custom wooden furniture in Jaipur including sofas, beds, dining tables, wardrobes and more. Designed for durability and crafted for real homes by MG Furniture.",
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <ShopHeroSection />
      <Products products={popularProducts} />
      {/* =========================================
CUSTOM WOOD FURNITURE PAGE
/custom-wood-furniture
Tailwind Animated Internal Link Section
========================================= */}

      <section className="py-24 px-6 bg-[#f8f5f0] overflow-hidden">
        <div className="max-w-6xl mx-auto text-center animate-[fadeUp_1s_ease]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e2c23] mb-6 leading-tight">
            Custom Furniture Services Available Across Jaipur
          </h2>

          <p className="text-lg text-gray-600 leading-8 max-w-4xl mx-auto mb-10">
            We provide made-to-order wooden furniture solutions for homes,
            offices, apartments, and commercial spaces across Jaipur including
            Vaishali Nagar, Mansarovar, Malviya Nagar, and Jagatpura.
          </p>

          <a
            href="/custom-wood-furniture/custom-furniture-makers-jaipur"
            className="inline-block bg-[#6d4c41] hover:bg-[#4e342e]
      text-white text-lg font-semibold px-8 py-4 rounded-full
      shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          >
            Explore Custom Furniture Makers in Jaipur
          </a>
        </div>

        <style>
          {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
        </style>
      </section>
      <ProductsQuality />
      <Footer />
    </div>
  );
};

export default Shop;
