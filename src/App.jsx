import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";

// Lazy loaded pages
const Shop = lazy(() => import("./Shop/Shop"));
const Services = lazy(() => import("./Services/Services"));
const Contracting = lazy(() => import("./Contracting/Contracting"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const BlogPage = lazy(() => import("./SEOCONTENT/BlogPage.jsx"));
const Testimonials = lazy(() => import("./Testimonials"));

// Contracting

const HomeLivingDesign = lazy(() => import("./Contracting/Home_Living_Design"));
const OfficeDesign = lazy(() => import("./Contracting/Office_Design"));

const Weddingfurniture = lazy(() => import("./Contracting/Wedding_furniture"));

// Shop pages (IMPORTANT)
const Chairs = lazy(() => import("./Shop/Chairs"));
const Sofas = lazy(() => import("./Shop/Sofas"));
const Doors = lazy(() => import("./Shop/Doors"));
const Windows = lazy(() => import("./Shop/Windows"));
const Almiras = lazy(() => import("./Shop/Almiras"));
const Bads = lazy(() => import("./Shop/Bads"));
const DinningTable = lazy(() => import("./Shop/Dinning_Table"));
const ShoeRacks = lazy(() => import("./Shop/Shoe_Racks"));
const StudyTable = lazy(() => import("./Shop/Study_Table"));
const Woodenceiling = lazy(() => import("./Shop/Wooden_celing"));

// Services
const WarddrobeServicing = lazy(
  () => import("./Services/IndivServices/WardrobeServicing"),
);
const BedRepair = lazy(() => import("./Services/IndivServices/BedRepair.jsx"));
const BedSofa = lazy(() => import("./Services/IndivServices/BedSofa.jsx"));
const CabinetInstallation = lazy(
  () => import("./Services/IndivServices/CabinetInstallation.jsx"),
);
const CabinetService = lazy(
  () => import("./Services/IndivServices/CabinetService.jsx"),
);
const ChairRepair = lazy(
  () => import("./Services/IndivServices/ChairRepair.jsx"),
);
const ClothHanger = lazy(
  () => import("./Services/IndivServices/ClothHanger.jsx"),
);
const DoorRepair = lazy(
  () => import("./Services/IndivServices/DoorRepair.jsx"),
);
const DoorWindow = lazy(
  () => import("./Services/IndivServices/DoorWindow.jsx"),
);
const LockHandle = lazy(
  () => import("./Services/IndivServices/LockHandle.jsx"),
);
const ModularKitchen = lazy(
  () => import("./Services/IndivServices/ModularKitchen.jsx"),
);
const ShelfRepair = lazy(
  () => import("./Services/IndivServices/ShelfRepair.jsx"),
);
const ShelvesInstallation = lazy(
  () => import("./Services/IndivServices/ShelvesInstallation.jsx"),
);
const SofaFrameRepair = lazy(
  () => import("./Services/IndivServices/SofaFrameRepair.jsx"),
);
const TableRepair = lazy(
  () => import("./Services/IndivServices/TableRepair.jsx"),
);
const Wardrobe = lazy(() => import("./Services/IndivServices/Wardrobe.jsx"));

//Pillar Pges
const CustomWoodFPillar = lazy(
  () => import("./SEOCONTENT/Pillar Pages/CustomWoodFPillar.jsx"),
);

//SEO CONTENT
const CustomFurnitureGuide = lazy(
  () => import("./SEOCONTENT/Contents/CustomWoodFurnitureGuide.jsx"),
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-gray-700 font-medium">Loading...</p>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contracting" element={<Contracting />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/contracting/home-living-design"
          element={<HomeLivingDesign />}
        />
        <Route
          path="/contracting/wedding-furniture"
          element={<Weddingfurniture />}
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
        <Route
          path="/services/sofa-frame-repair"
          element={<SofaFrameRepair />}
        />
        <Route path="/services/table-repair" element={<TableRepair />} />
        <Route path="/services/wardrobe-installation" element={<Wardrobe />} />

        {"Pillar pages"}

        <Route
          path="/blogs/custom-wood-furniture-in-jaipur"
          element={<CustomWoodFPillar />}
        />

        {"SEO CONTENT"}

        <Route
          path="/blogs/custom-wood-furniture-in-jaipur/custom-wood-furniture-guide"
          element={<CustomFurnitureGuide />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
