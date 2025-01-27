import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import Contact from "./Pages/Contact";
import Technologie from "./Pages/Technologie";
import About from "./Pages/About";
import Project from "./Pages/Project";
import { useTheme } from "./Context/PortfolioContext";
import MenuMedia from "./Component/MenuMedia";
import Footer from "./Pages/Footer";

export default function App() {
  const { isMobile } = useTheme();
  useEffect(() => {
    console.log(window.scrollY > 100 ? "oui" : "non");
  }, [window.scrollX]);

  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="scroll-container bg-green-400"
      >
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
