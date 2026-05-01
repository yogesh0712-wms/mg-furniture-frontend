import React, { Suspense } from "react";
import { Routes } from "react-router-dom";

import WebsiteRoutes from "./routes/WebsiteRoutes";
import ContentRoutes from "./routes/ContentRoutes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {WebsiteRoutes()}
        {ContentRoutes()}
      </Routes>
    </Suspense>
  );
}

export default App;
