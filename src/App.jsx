import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// 🏗️ Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { LoaderProvider, useLoader } from "./components/layout/LoaderContext";
import Loader from "./components/layout/Loader";

// 🏡 Page Components
import Landing from "./pages/Landing";
import About from "./pages/About";
import AboutTeam from "./pages/AboutTeam";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails"; // Dynamic Project Page
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFoundPage";

const AppContent = () => {
  const location = useLocation();
  const { isLoading } = useLoader(); // Using the loader context

  return (
    <>
      {isLoading && <Loader />}
      <div className="bg-black text-white">
        <Navbar />
        <AnimatePresence mode="sync">
          <Routes location={location} key={location.pathname}>
            {/* 🌍 Main Pages */}
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:userId" element={<AboutTeam />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectName" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            {/* 🛑 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  </BrowserRouter>
);

export default App;
