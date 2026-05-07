import React, { lazy } from "react";
import { Route } from "react-router-dom";

const BlogPage = lazy(() => import("../SEOCONTENT/BlogPage.jsx"));

// Pillar PAGES

const CustomWoodFPillar = lazy(
  () => import("../SEOCONTENT/Pillar Pages/CustomWoodFPillar.jsx"),
);

// CONTENT PAGES

const CustomFurnitureGuide = lazy(
  () => import("../SEOCONTENT/Contents/CustomWoodFurnitureGuide.jsx"),
);

const CustomFurnitureTutorial = lazy(
  () => import("../SEOCONTENT/Contents/CustomWoodFurnitureTutorial.jsx"),
);

const CustomWoodFurnitureCaseStudy = lazy(
  () => import("../SEOCONTENT/Contents/CustomWoodFurnitureCaseStudy.jsx"),
);

const CustomWoodFurnitureSuccessStory = lazy(
  () => import("../SEOCONTENT/Contents/CustomWoodFurnitureSuccessStory.jsx"),
);

const CustomWoodFurnitureFAQs = lazy(
  () => import("../SEOCONTENT/Contents/CustomeWoodFurnitureFAQs.jsx"),
);
const JaipurFurnitureReport = lazy(
  () => import("../SEOCONTENT/Contents/CustomWoodFurnitureReport.jsx"),
);

// LANDING PAGE

const JaipurFurnitureLanding = lazy(
  () => import("../LANDINGPAGES/CustomWoodFurnitureLP.jsx"),
);
const FurnishingJaipur = lazy(() => import("../LANDINGPAGES/FurnishingLP.jsx"));

const FurnitureRepairJaipur = lazy(
  () => import("../LANDINGPAGES/FurnitureServicesLP.jsx"),
);

// LANDING PAGE CONTENT

const BestFurnitureOptionsJaipur = lazy(
  () => import("../LANDINGPAGES/LANDINGPAGEContent/shop1"),
);

export default function ContentRoutes() {
  return (
    <>
      <Route path="/blogs" element={<BlogPage />} />

      {/* Pillar PAGES*/}

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur"
        element={<CustomWoodFPillar />}
      />

      {/* CONTENT PAGES*/}

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur/custom-wood-furniture-guide"
        element={<CustomFurnitureGuide />}
      />

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur/how-to-order-custom-wood-furniture-jaipur"
        element={<CustomFurnitureTutorial />}
      />

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur/custom-wood-furniture-jaipur-before-after"
        element={<CustomWoodFurnitureCaseStudy />}
      />

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur/jaipur-home-success-story"
        element={<CustomWoodFurnitureSuccessStory />}
      />

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur/faqs-jaipur-buyers-guide"
        element={<CustomWoodFurnitureFAQs />}
      />
      <Route
        path="/blogs/custom-wood-furniture-in-jaipur/jaipur-furniture-market-report-2026"
        element={<JaipurFurnitureReport />}
      />

      {/* LANDING PAGE*/}
      <Route
        path="/custom-wood-furniture/custom-furniture-makers-jaipur"
        element={<JaipurFurnitureLanding />}
      />
      <Route
        path="/furniture-services/furniture-installation-repair-jaipur"
        element={<FurnitureRepairJaipur />}
      />
      <Route
        path="/complete-furnishing-work/full-furnishing-jaipur"
        element={<FurnishingJaipur />}
      />

      {/*LANDINGPAGEContent */}
      <Route
        path="/custom-furniture-makers-jaipur/best-furniture-options-jaipur-homes"
        element={<BestFurnitureOptionsJaipur />}
      />
    </>
  );
}
