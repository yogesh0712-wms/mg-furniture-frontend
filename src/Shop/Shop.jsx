import React from "react";
import Header, { Footer } from "../Header";
import ShopHeroSection from "./ShopHeroSection";
import Products, { ProductsQuality } from "../Products";

const popularProducts = [
  {
    image: "image_collection/shop/chairs - Copy.png",
    type: "Chairs",
    Descrip:
      "Crafted wooden chairs designed for everyday comfort and strength.",
    link: "/shop/chairs",
  },
  {
    image: "image_collection/shop/Sofa.png",
    type: "Sofas",
    Descrip:
      "Solid wood sofas crafted for comfort, strength, and lasting style..",
    link: "/shop/sofas",
  },
  {
    image: "image_collection/shop/Doors.png",
    type: "Doors",
    Descrip: "Handcrafted wooden doors built for daily use!!",
    link: "/shop/doors",
  },
  {
    image: "image_collection/shop/Windows.png",
    type: "Windows",
    Descrip: "Premium wood windows crafted for airflow and light",
    link: "/shop/windows",
  },
  {
    image: "image_collection/shop/Almiras.png",
    type: "Almiras",
    Descrip: "Strong storage furniture built with balance and care",
    link: "/shop/almiras",
  },
  {
    image: "image_collection/shop/Beds.png",
    type: "Beds",
    Descrip: "Solid wooden beds designed for rest and balance",
    link: "/shop/bads",
  },
  {
    image: "image_collection/shop/dinning table.png",
    type: "Dinning Table",
    Descrip: "Premium wood tables built for everyday meals",
    link: "/shop/dinning-table",
  },
  {
    image: "image_collection/shop/Shoe rack.png",
    type: "Shoe Racks",
    Descrip: "Wooden shoe racks designed for neat entryways!",
    link: "/shop/shoe-racks",
  },
  {
    image: "image_collection/shop/study table.png",
    type: "Study Table",
    Descrip: "Premium wooden desks designed for daily learning",
    link: "/shop/study-table",
  },
  {
    image: "image_collection/shop/wooden ceiling.png",
    type: "Wooden Ceiling",
    Descrip: "Natural wood panels designed for elegant interiors.",
    link: "/shop/wooden-ceiling",
  },
];

const Shop = () => {
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
