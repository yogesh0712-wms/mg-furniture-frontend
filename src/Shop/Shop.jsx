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
    link: "/shop/chairs",
  },
  {
    image: "image_collection/shop/Sofa.webp",
    type: "Wooden Sofa Set ",
    Descrip:
      "Comfortable and durable solid wood sofa designed for everyday use in your home. Built with quality wood and clean finishing, each wooden sofa set can be customized based on your space, style, and budget in Jaipur.",
    link: "/shop/sofas",
  },
  {
    image: "image_collection/shop/Doors.webp",
    type: "Custom Wooden Doors",
    Descrip:
      "Strong and durable wooden doors designed for everyday use in your home. Built with quality wood and clean finishing, each piece can be customized based on your space, design preference, and budget in Jaipur.",
    link: "/shop/doors",
  },
  {
    image: "image_collection/shop/Windows.webp",
    type: "Custom Wooden Windows",
    Descrip:
      "Strong and durable wooden windows designed for everyday use in your home. Built with quality wood and clean finishing, each piece can be customized based on your space, design style, and budget in Jaipur.",
    link: "/shop/windows",
  },
  {
    image: "image_collection/shop/Almiras.webp",
    type: "Customized Wooden Almirah",
    Descrip:
      "Spacious and durable customized wooden almirah designed for everyday use in your home. Built with quality wood and clean finishing, each unit can be customized based on your space, storage needs, and budget in Jaipur.",
    link: "/shop/almiras",
  },
  {
    image: "image_collection/shop/Beds.webp",
    type: "Solid Wood Beds with Storage",
    Descrip:
      "Strong and comfortable solid wood beds designed for everyday use in your home. Built with quality wood and clean finishing, each bed can be customized with storage options based on your space, style, and budget in Jaipur.",
    link: "/shop/beds",
  },
  {
    image: "image_collection/shop/dinning table.webp",
    type: "Handmade Dining Tables",
    Descrip:
      "Strong and elegant handmade dining tables designed for everyday use in your home. Built with quality wood and clean finishing, each table can be customized based on your space, seating needs, and budget in Jaipur.",
    link: "/shop/dining-table",
  },
  {
    image: "image_collection/shop/Shoe rack.webp",
    type: "Wooden Shoe Racks for Home",
    Descrip:
      "Compact and durable wooden shoe racks designed for everyday use in your home. Built with quality wood and clean finishing, each unit can be customized based on your space, storage needs, and budget in Jaipur.",
    link: "/shop/shoe-racks",
  },
  {
    image: "image_collection/shop/study table.webp",
    type: "Study and Computer Table",
    Descrip:
      "Functional and durable study tables designed for everyday use in your home. Built with quality wood and clean finishing, each study table with storage design can be customized based on your space, usage needs, and budget in Jaipur.",
    link: "/shop/study-table",
  },
  {
    image: "image_collection/shop/wooden ceiling.webp",
    type: "Custom Wooden Ceiling Design",
    Descrip:
      "Stylish and durable wooden ceiling designs crafted to enhance your interior space. Built with quality wood and clean finishing, each ceiling can be customized based on your layout, design preference, and budget in Jaipur.",
    link: "/shop/wooden-ceiling",
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
      <ProductsQuality />
      <Footer />
    </div>
  );
};

export default Shop;
