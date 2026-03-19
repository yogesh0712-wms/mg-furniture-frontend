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
import WarddrobeServicing from "./Services/IndivServices/WardrobeServicing";
import BedRepair from "./Services/IndivServices/BedRepair.jsx";
import BedSofa from "./Services/IndivServices/BedSofa.jsx";
import CabinetInstallation from "./Services/IndivServices/CabinetInstallation.jsx";
import CabinetService from "./Services/IndivServices/CabinetService.jsx";
import ChairRepair from "./Services/IndivServices/ChairRepair.jsx";
import ClothHanger from "./Services/IndivServices/ClothHanger.jsx";
import DoorRepair from "./Services/IndivServices/DoorRepair.jsx";
import DoorWindow from "./Services/IndivServices/DoorWindow.jsx";
import LockHandle from "./Services/IndivServices/LockHandle.jsx";
import ModularKitchen from "./Services/IndivServices/ModularKitchen.jsx";
import ShelfRepair from "./Services/IndivServices/ShelfRepair.jsx";
import ShelvesInstallation from "./Services/IndivServices/ShelvesInstallation.jsx";
import SofaFrameRepair from "./Services/IndivServices/SofaFrameRepair.jsx";
import TableRepair from "./Services/IndivServices/TableRepair.jsx";
import Wardrobe from "./Services/IndivServices/Wardrobe.jsx";

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
      <Route path="/contracting/interior-design" element={<InteriorDesign />} />
      <Route
        path="/contracting/home-living-design"
        element={<HomeLivingDesign />}
      />
      <Route
        path="/contracting/furniture-repair"
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
      <Route path="/shop/beds" element={<Bads />} />
      <Route path="/shop/dining-table" element={<DinningTable />} />
      <Route path="/shop/shoe-racks" element={<ShoeRacks />} />
      <Route path="/shop/study-table" element={<StudyTable />} />
      <Route path="/shop/wooden-ceiling" element={<Woodenceiling />} />
      <Route
        path="/services/wardrobe-servicing"
        element={<WarddrobeServicing />}
      />

      <Route path="/services/bed-repair" element={<BedRepair />} />
      <Route path="/services/bed-sofa-installation" element={<BedSofa />} />
      <Route
        path="/services/cabinet-installation"
        element={<CabinetInstallation />}
      />
      <Route path="/services/cabinet-service" element={<CabinetService />} />
      <Route path="/services/chair-repair" element={<ChairRepair />} />
      <Route
        path="/services/cloth-hanger-installation"
        element={<ClothHanger />}
      />
      <Route path="/services/door-window-repair" element={<DoorRepair />} />
      <Route
        path="/services/door-window-installation"
        element={<DoorWindow />}
      />
      <Route
        path="/services/lock-handle-installation"
        element={<LockHandle />}
      />
      <Route
        path="/services/modular-kitchen-installation"
        element={<ModularKitchen />}
      />
      <Route
        path="/services/shelves-wallunit-repair"
        element={<ShelfRepair />}
      />
      <Route
        path="/services/shelves-wallunit-installation"
        element={<ShelvesInstallation />}
      />

      <Route path="/services/sofa-frame-repair" element={<SofaFrameRepair />} />
      <Route path="/services/table-repair" element={<TableRepair />} />
      <Route path="/services/wardrobe-installation" element={<Wardrobe />} />
    </Routes>
  );
}

export default App;
