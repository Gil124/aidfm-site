import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import JoinUs from "./pages/JoinUs";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about/*" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="join" element={<JoinUs />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
