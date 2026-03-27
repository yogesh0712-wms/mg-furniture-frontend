import React from "react";
import Header from "../Header";
import { Footer } from "../Header";
import HeroSection, { HeroSection2 } from "./HeroSection";
import Categories, { Collections } from "./Categories";
import Products, { ProductsQuality } from "../Products";
import { useEffect } from "react";

const popularProducts = [
  {
    image: "image_collection/shop/Beds.webp",
    type: "Beds",
    Descrip: "Solid wooden beds designed for rest and balance",
    link: "/shop/beds",
  },
  {
    image: "image_collection/shop/Almiras.webp",
    type: "Almiras",
    Descrip: "Strong storage furniture built with balance and care",
    link: "/shop/almiras",
  },
  {
    image: "image_collection/shop/Sofa.webp",
    type: "Sofas",
    Descrip:
      "Solid wood sofas crafted for comfort, strength, and lasting style..",
    link: "/shop/sofas",
  },
  {
    image: "image_collection/shop/Doors.webp",
    type: "Doors",
    Descrip: "Handcrafted wooden doors built for daily use!!",
    link: "/shop/doors",
  },
];

const HomePage = () => {
  useEffect(() => {
    document.title =
      "MG Furniture Jaipur | Custom Wooden Furniture & Contracting Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "MG Furniture offers custom wooden furniture and complete contracting services in Jaipur. Crafted for durability, designed for real spaces.",
      );
    }
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <Categories />
      <Collections />
      <ProductsQuality />
      <Products
        title="Popular Furniture Designs in Jaipur"
        subtitle="Explore some of our most requested custom furniture designs, crafted for real homes and spaces in Jaipur. Each piece is made to order with quality materials and precise finishing."
        products={popularProducts}
        showAllLink
      />
      <Footer />
    </div>
  );
};

export default HomePage;
