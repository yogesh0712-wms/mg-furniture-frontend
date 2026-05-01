import React, { lazy } from "react";
import { Route } from "react-router-dom";

const BlogPage = lazy(() => import("../SEOCONTENT/BlogPage.jsx"));

// Pillar
const CustomWoodFPillar = lazy(
  () => import("../SEOCONTENT/Pillar Pages/CustomWoodFPillar.jsx"),
);

// Content
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

export default function ContentRoutes() {
  return (
    <>
      <Route path="/blogs" element={<BlogPage />} />

      {/* Pillar */}

      <Route
        path="/blogs/custom-wood-furniture-in-jaipur"
        element={<CustomWoodFPillar />}
      />

      {/* Cluster Content */}

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
    </>
  );
}
