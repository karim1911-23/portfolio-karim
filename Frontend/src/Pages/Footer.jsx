import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "../Context/PortfolioContext";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function Footer() {
  const { mode, setMode } = useTheme();
  const [language, setLanguage] = useState("en"); // Par défaut, la langue est l'anglais

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // Met à jour la langue sélectionnée
  };

  const [open, setOpen] = useState(false);
  const [openMode, setOpenMode] = useState(true);
  const modeDL = mode === "dark";

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  const themes = [
    { id: 1, theme: "#e4004c" },
    { id: 2, theme: "#e4a900" },
    { id: 3, theme: "#149fbb" },
    { id: 4, theme: "#aa45f5" },
  ];

  const { theme, settheme } = useTheme();

  function themeClicked(id) {
    const newTheme = themes.find((t) => t.id === id);
    settheme(newTheme.theme);
    localStorage.setItem("theme", newTheme.theme);
    setOpen(false);
  }
  return (
    <div className="w-full bg-slate-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Section 1: Logo et réseaux sociaux */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <a
            href="#home"
            className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
          >
            <span className="lastName">Q</span>.Karim
          </a>
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/karim1911-23/"
              className="hover:text-blue-400 transition-colors"
            >
              <GitHubIcon style={{ fontSize: "32px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/karim-qasid-a31264315/"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon style={{ fontSize: "32px" }} />
            </a>
          </div>
          <p className="text-sm text-center md:text-left">
            Copyright © 2025 par QASID Karim. <br />
            Tous droits réservés.
          </p>
        </div>

        {/* Section 2: Liens utiles */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Liens Utiles</h3>
          <div className="flex flex-col gap-2">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              À propos
            </a>
            <a
              href="#project"
              className="hover:text-blue-400 transition-colors"
            >
              Projets
            </a>
          </div>
        </div>

        {/* Section 3: Contact */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <PhoneIcon style={{ fontSize: "24px" }} />
              <p>+212 601626878</p>
            </div>
            <div className="flex items-center gap-2">
              <AddLocationIcon style={{ fontSize: "24px" }} />
              <p>Maroc, Casablanca</p>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon style={{ fontSize: "24px" }} />
              <p>qasidkarim23@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Section 4: Paramètres */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <div className="flex gap-2 mb-4">
            {themes.map((t) => (
              <div
                onClick={() => themeClicked(t.id)}
                key={t.id}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: t.theme,
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
