import React from "react";
import Header from "../Header";
import { Footer } from "../Header";
import HeroSection, { HeroSection2 } from "./HeroSection";
import Categories, { Collections } from "./Categories";
import Products, { ProductsQuality } from "../Products";

const popularProducts = [
  {
    image: "image_collection/shop/Beds.png",
    type: "Beds",
    Descrip: "Solid wooden beds designed for rest and balance",
    link: "/shop/bads",
  },
  {
    image: "image_collection/shop/Almiras.png",
    type: "Almiras",
    Descrip: "Strong storage furniture built with balance and care",
    link: "/shop/almiras",
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
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeroSection2 />
      <Categories />
      <Collections />
      <ProductsQuality />
      <Products
        title="Popular Products"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        products={popularProducts}
        showAllLink
      />
      <Footer />
    </div>
  );
};

export default HomePage;
