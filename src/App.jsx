import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Shop from "./Shop/Shop";
import Services from "./Services/Services";
import Contracting from "./Contracting/Contracting";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Interior_Design from "./Contracting/Interior_Design";
import Home_Living_Design from "./Contracting/Home_Living_Design";
import Office_Design from "./Contracting/Office_Design";
import Chairs from "./Shop/Chairs";
import Sofas from "./Shop/Sofas";
import Doors from "./Shop/Doors";
import Windows from "./Shop/Windows";
import Almiras from "./Shop/Almiras";
import Bads from "./Shop/Bads";
import Dinning_Table from "./Shop/Dinning_Table";
import Shoe_Racks from "./Shop/Shoe_Racks";
import Study_Table from "./Shop/Study_Table";
import Wooden_ceiling from "./Shop/Wooden_celing";
import Furniture_Reparation from "./Contracting/Furniture_Reparation";
import Wedding_furniture from "./Contracting/Wedding_furniture";
import Design_consultation from "./Contracting/Design_consultation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contracting" element={<Contracting />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route
        path="/contracting/interior-design"
        element={<Interior_Design />}
      />
      <Route
        path="/contracting/home-living-design"
        element={<Home_Living_Design />}
      />
      <Route
        path="/contracting/furniture-reparation"
        element={<Furniture_Reparation />}
      />
      <Route
        path="/contracting/wedding-furniture"
        element={<Wedding_furniture />}
      />
      <Route
        path="/contracting/design-consultation"
        element={<Design_consultation />}
      />
      <Route path="/contracting/office-design" element={<Office_Design />} />
      <Route path="/shop/chairs" element={<Chairs />} />
      <Route path="/shop/sofas" element={<Sofas />} />
      <Route path="/shop/doors" element={<Doors />} />
      <Route path="/shop/windows" element={<Windows />} />
      <Route path="/shop/almiras" element={<Almiras />} />
      <Route path="/shop/bads" element={<Bads />} />
      <Route path="/shop/dinning-table" element={<Dinning_Table />} />
      <Route path="/shop/shoe-racks" element={<Shoe_Racks />} />
      <Route path="/shop/study-table" element={<Study_Table />} />
      <Route path="/shop/wooden-ceiling" element={<Wooden_ceiling />} />
    </Routes>
  );
}

export default App;
