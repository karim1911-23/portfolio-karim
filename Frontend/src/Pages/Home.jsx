import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/PortfolioContext";
import Sidebar from "../Sidebar/Sidebar";
import { ArrowDownward } from "@mui/icons-material"; // Import d'une icône pour le défilement
import { motion } from "framer-motion"; // Pour les animations
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [them, setThem] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThem(savedTheme);
    }
  }, [theme]);

  const isSmall = useMediaQuery({ query: "(max-width: 300px)" });

  return (
    <div id="home" className="home" style={{ overflowX: "hidden" }}>
      {/* Barre de navigation fixe */}
      <div
        className="shadow-b-2xl w-full"
        style={{
          backgroundColor: "#3b3b3b",
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <Sidebar />
      </div>

      {/* Contenu principal */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          paddingTop: "80px", // Pour éviter que le contenu ne soit caché par la barre de navigation
        }}
      >
        <div style={{ width: "100%", padding: isSmall ? "10px" : "20px" }}>
          <div className="text-center">
            {/* Animation du titre */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontFamily:
                  'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: isSmall ? "20px" : "48px",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              BONJOUR JE SUIS{" "}<br></br>
              <span style={{ color: `${them}`, fontWeight: "400" }}>
                QASID KARIM
              </span>
            </motion.h1>
            {/* Animation de la description */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                fontFamily:
                  'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: isSmall ? "12px" : "18px",
                color: "#a0a0a0",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              Je suis étudiant à l'ENSA Khouribga, actuellement en 4ème année
              spécialisé en ingénierie et science des données. Mon expertise
              inclut le développement utilisant diverses technologies, ainsi que
              l'apprentissage automatique, me permettant de travailler sur des
              projets innovants et impactants.
            </motion.p>
            {/* Bouton avec animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                backgroundColor: `${them}`,
                width: "fit-content",
                margin: "auto",
                padding: "12px 24px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              className="hover:bg-opacity-90"
            >
              <a
                href="#about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h4
                  style={{
                    fontSize: isSmall ? "14px" : "18px",
                    fontWeight: "600",
                  }}
                >
                  Plus sur moi
                </h4>
              </a>
            </motion.div>
            {/* Icône de défilement */}
            {!isSmall && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowDownward
                  style={{
                    fontSize: "40px",
                    color: `${them}`,
                    animation: "bounce 2s infinite",
                  }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
