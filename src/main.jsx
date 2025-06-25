import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Loader.jsx";

const About = lazy(() => import("./About.jsx"));
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);
