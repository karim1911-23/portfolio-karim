import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/PortfolioContext";
import Resume from "../Component/Resume";
import Tools from "../Component/Tools";

export default function About() {
  const [them, setThem] = useState("");
  const { theme, mode } = useTheme();
  let modeDL = mode === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThem(savedTheme);
    }
    document.documentElement.style.setProperty("--theme-color", them);
  }, [theme]);

  return (
    <>
      <div id="about" className="scroll-container">
        <div className="m-auto text-center" style={{ width: "100%" }}>
          <h1 className="text-4xl font-bold">À propos de moi</h1>
          <hr
            className="ligne"
            style={{
              borderRadius: "5px",
              width: "140px",
              margin: "10px auto",
              border: `3px solid ${them}`,
            }}
          />
          <hr
            className="ligne"
            style={{
              borderRadius: "5px",
              width: "80px",
              margin: "10px auto",
              border: `3px solid ${them}`,
            }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 max-w-6xl mx-auto">
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "20px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontFamily: "'Playfair Display', serif",
                lineHeight: "1.8",
                color: "#a0a0a0",
              }}
            >
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Karim Qasid.{" "}
              </span>
              <br />
              Bienvenue sur mon portfolio ! Je m'appelle Karim Qasid, étudiant
              en 4ème année à l'ENSA Khouribga, spécialisé dans le développement
              et l'ingénierie des données. Passionné par la technologie et
              l'innovation, j'aime relever des défis techniques et partager mes
              connaissances à travers des articles et des projets. Mon parcours
              académique et mes projets personnels m'ont permis de développer
              des compétences solides en développement logiciel et en gestion
              des données. J'ai travaillé sur une variété de projets, allant de
              la conception d'applications web à l'analyse de données et à
              l'intégration de systèmes complexes. Ces expériences m'ont donné
              une compréhension approfondie des écosystèmes modernes, y compris
              les microservices, les bases de données et les outils d'analyse de
              données. Je suis constamment à la recherche de nouvelles
              opportunités pour améliorer mes compétences et contribuer à des
              projets innovants dans les domaines du développement et des
              données.
            </p>
            <a
              href="/CV.pdf"
              download="cv_karim_qasid.pdf" // Nom du fichier téléchargé
            >
              <button
                className="downolad mt-6"
                style={{
                  width: "170px",
                  backgroundColor: `${them}`,
                  padding: "12px",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Télécharger CV
              </button>
            </a>
          </div>

          <div
            id="me"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              marginTop: "40px",
            }}
          >
            <img
              width="90%"
              alt="Profile"
              src="/karim.png"
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                marginLeft: "20px",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Resume />
      </div>

      <div className="Toools">
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#ffffff",
          }}
        >
          Outils essentiels que j'utilise
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#a0a0a0",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Découvrez les outils et technologies puissants que j'utilise pour
          créer des sites web et des applications exceptionnels et performants.
        </p>

        <div
          style={{
            width: "90%",
            maxWidth: "1300px",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#2a2a2a",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            overflow: "scroll",
            overflowX: "scroll",
          }}
          id="toolsC"
          className="tools max-h-[400px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <Tools />
        </div>
      </div>
    </>
  );
}
