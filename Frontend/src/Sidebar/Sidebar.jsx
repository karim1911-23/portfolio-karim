import React, { useState } from "react";
import Menu from "./Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../Context/PortfolioContext";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar() {
  const { mode, setMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
  };

  return (
    <div
      className="rounded-lg w-full p-4"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#3b3b3b",
        position: "relative", // Position relative pour le menu déroulant
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontSize: "28px",
          color: "white",
          textDecoration: "none",
        }}
      >
        <span className="lastName">Q</span>.Karim
      </a>

      {/* Menu principal */}
      <div className="allMenu">
        <Menu />
      </div>

      {/* Icônes des réseaux sociaux et paramètres */}
      <div className="gitLinkd">
        <a href="https://github.com/karim1911-23/" className="hover:opacity-80">
          <GitHubIcon
            style={{
              fontSize: "32px",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/karim-qasid-a31264315/"
          className="hover:opacity-80"
        >
          <LinkedInIcon
            style={{
              fontSize: "32px",
              color: "white",
            }}
          />
        </a>
      </div>

      {/* Icône du menu déroulant */}
      <div
        className="iconeMenu"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        {isMenuOpen ? (
          <CloseIcon style={{ fontSize: "26px", color: "white" }} />
        ) : (
          <MenuIcon style={{ fontSize: "26px", color: "white" }} />
        )}
      </div>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px", // Position en dessous de la barre de navigation
            right: "20px",
            backgroundColor: "#494949",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000, // Pour s'assurer que le menu est au-dessus des autres éléments
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a
              href="#home"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: mode === "dark" ? "#3b3b3b" : "#555555",
              }}
            >
              Acceuil
            </a>
            <a
              href="#about"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: mode === "dark" ? "#3b3b3b" : "#555555",
              }}
            >
              A propos
            </a>
            <a
              href="#project"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: mode === "dark" ? "#3b3b3b" : "#555555",
              }}
            >
              Projets
            </a>
            <a
              href="#contact"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                backgroundColor: mode === "dark" ? "#3b3b3b" : "#555555",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
