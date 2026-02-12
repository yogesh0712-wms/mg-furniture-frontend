import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Shop from "./Shop/Shop";
import Services from "./Services/Services";
import Contracting from "./Contracting/Contracting";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import InteriorDesign from "./Contracting/Interior_Design";
import HomeLivingDesign from "./Contracting/Home_Living_Design";
import OfficeDesign from "./Contracting/Office_Design";
import Chairs from "./Shop/Chairs";
import Sofas from "./Shop/Sofas";
import Doors from "./Shop/Doors";
import Windows from "./Shop/Windows";
import Almiras from "./Shop/Almiras";
import Bads from "./Shop/Bads";
import DinningTable from "./Shop/Dinning_Table";
import ShoeRacks from "./Shop/Shoe_Racks";
import StudyTable from "./Shop/Study_Table";
import Woodenceiling from "./Shop/Wooden_celing";
import FurnitureReparation from "./Contracting/Furniture_Reparation";
import Weddingfurniture from "./Contracting/Wedding_furniture";
import Designconsultation from "./Contracting/Design_consultation";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://mg-furniture-backend.onrender.com/api/health").catch(
      () => {},
    );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contracting" element={<Contracting />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contracting/interior-design" element={<InteriorDesign />} />
      <Route
        path="/contracting/home-living-design"
        element={<HomeLivingDesign />}
      />
      <Route
        path="/contracting/furniture-reparation"
        element={<FurnitureReparation />}
      />
      <Route
        path="/contracting/wedding-furniture"
        element={<Weddingfurniture />}
      />
      <Route
        path="/contracting/design-consultation"
        element={<Designconsultation />}
      />
      <Route path="/contracting/office-design" element={<OfficeDesign />} />
      <Route path="/shop/chairs" element={<Chairs />} />
      <Route path="/shop/sofas" element={<Sofas />} />
      <Route path="/shop/doors" element={<Doors />} />
      <Route path="/shop/windows" element={<Windows />} />
      <Route path="/shop/almiras" element={<Almiras />} />
      <Route path="/shop/bads" element={<Bads />} />
      <Route path="/shop/dinning-table" element={<DinningTable />} />
      <Route path="/shop/shoe-racks" element={<ShoeRacks />} />
      <Route path="/shop/study-table" element={<StudyTable />} />
      <Route path="/shop/wooden-ceiling" element={<Woodenceiling />} />
    </Routes>
  );
}

export default App;
