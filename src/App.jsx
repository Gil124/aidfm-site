import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import JoinUs from "./pages/JoinUs";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/about/*" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
