import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../Context/PortfolioContext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";

export default function Project() {
  const [them, setThem] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 618px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 522px)" });
  const isVerySmallMobile = useMediaQuery({ query: "(max-width: 421px)" });
  const isTinyMobile = useMediaQuery({ query: "(max-width: 258px)" }); // Nouvelle requête média

  const { theme, mode } = useTheme();
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState({
    id: null,
    descr: "",
    project: "",
    img: "",
    imgDet: [],
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour gérer l'index de l'image actuelle
  const projects = [
    {
      id: 1,
      descr:
        "Centre de formation, développé en PHP et basé sur une base de données robuste, propose des cours de soutien et de langue. Grâce à l'utilisation de Bootstrap, notre interface utilisateur est réactive et conviviale. Nous organisons des cours en petits groupes de huit élèves, chacun encadré par un enseignant spécialisé dans une matière. La plateforme en ligne facilite la gestion des enseignants, des matières et des groupes, avec des fonctionnalités telles qu'une page de connexion sécurisée et des listes détaillées des groupes, élèves et enseignants.",
      project: "Centre de Formation",
      img: "/img/formation1.jpg",
      imgDet: ["/img/formation2.jpg"], // Tableau pour les images détaillées
      dev: "PHP", // Technologies utilisées
      linkGit: "https://github.com/karim1911-23/centre-formation.git",
    },
    {
      id: 2,
      descr:
        "L'application de gestion de stock, une application de bureau développée en Java, offre une solution complète pour la gestion des clients, commandes, produits, livraisons et factures. Basée sur une base de données relationnelle, l'application propose une interface intuitive pour le suivi et la gestion des stocks. Les clients peuvent passer des commandes, les produits sont suivis efficacement, les livraisons sont planifiées, et les factures sont générées et imprimées directement depuis l'application. Une page d'accueil présente des statistiques clés, offrant une vue d'ensemble en temps réel de la gestion des stocks.",
      project: "Gestion de Stock",
      img: "/img/project_java.jpg",
      imgDet: [
        "/img/java1.jpg",
        "/img/java2.jpg",
        "/img/java3.jpg",
        "/img/java4.jpg",
        "/img/java5.jpg",
      ], // Tableau pour les images détaillées
      dev: "Java", // Technologies utilisées
      linkGit: "https://github.com/karim1911-23/gestion-stock.git",
    },
    {
      id: 3,
      descr:
        "Notre application web de gestion de stock, développée avec React et Spring Boot, offre une plateforme moderne et sécurisée pour gérer efficacement les clients, commandes, produits, livraisons et factures. Grâce à l'intégration de Spring Security, les utilisateurs bénéficient d'une page de connexion sécurisée et d'une création de compte simplifiée. La page d'accueil dynamique affiche des histogrammes pour suivre en temps réel les statistiques clés de l'application. Cette solution complète répond aux besoins de gestion de stock avec des outils intuitifs et une interface utilisateur réactive.",
      project: "Gestion de Stock Web",
      img: "/img/gestione1.png",
      imgDet: ["/img/gestion1.png", "/img/gestion2.png", "/img/gestion3.png"], // Tableau pour les images détaillées
      dev: "React", // Technologies utilisées
      dev1: "Spring Boot", // Technologies utilisées
      linkGit: "",
    },
    {
      id: 4,
      descr:
        "Notre site web de restaurant, développé avec le framework PHP Laravel, offre une expérience utilisateur élégante et intuitive. La page d'accueil, stylisée avec Bootstrap, accueille les visiteurs avec une présentation soignée. Le menu, présenté sous forme de cartes avec titres et descriptions, permet aux clients de découvrir nos plats. Une page de commandes intuitive facilite la réservation de tables. De plus, une page 'À propos' fournit des informations sur notre histoire et notre équipe, créant un lien plus personnel avec nos clients.",
      project: "Réservation de Restaurant",
      img: "/img/restau.jpg",
      imgDet: [
        "/img/rest1.jpg",
        "/img/rest2.jpg",
        "/img/rest3.jpg",
        "/img/rest4.jpg",
        "/img/rest5.jpg",
      ], // Tableau pour les images détaillées
      dev: "PHP", // Technologies utilisées
      dev1: "Laravel", // Technologies utilisées
      linkGit: "",
    },
    {
      id: 5,
      descr:
        "Cette application web, développée en HTML, CSS et JavaScript natifs, offre une solution simple et efficace pour consulter les horaires de prière. En se connectant à une API dédiée, l'application affiche les horaires des prières pour Fajr, Dhuhr, Asr, Maghrib et Isha. Les utilisateurs peuvent sélectionner leur ville pour obtenir des horaires précis en fonction de leur localisation, grâce à une intégration fluide avec l'API.",
      project: "Horaires de Prières",
      img: "/img/priere.jpg",
      imgDet: ["/img/priere.jpg"], // Tableau pour les images détaillées
      dev: "HTML", // Technologies utilisées
      dev1: "CSS", // Technologies utilisées
      dev2: "JS", // Technologies utilisées
      linkGit: "https://github.com/karim1911-23/horaire-priere.git",
    },
    {
      id: 6,
      project: "Gestion Scolaire",
      descr:
        "Ce projet consiste à développer une application web pour gérer les notes dans une école. L'application est conçue pour gérer les professeurs, les programmes académiques, les modules, les composantes de module, les méthodes d'évaluation et les notes des élèves. Elle est destinée à deux types d'utilisateurs : les administrateurs et les professeurs. Les administrateurs peuvent gérer les professeurs, les programmes académiques et les modules, tandis que les professeurs peuvent gérer les composantes de module, les méthodes d'évaluation et les notes des élèves. L'application est développée avec React et Spring Boot, garantissant une plateforme moderne et sécurisée pour gérer les données scolaires.",
      img: "/img/ecole.png",
      imgDet: [
        "/img/ecole1.png",
        "/img/ecole2.png",
        "/img/ecole3.png",
        "/img/ecole4.png",
        "/img/ecole5.png",
        "/img/ecole6.png",
      ], // Tableau pour les images détaillées
      dev: "React", // Technologies utilisées
      dev1: "Spring Boot", // Technologies utilisées
      linkGit: "https://github.com/karim1911-23/gestion-ecole.git",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThem(savedTheme);
    }
  }, [theme]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentImageIndex(0); // Réinitialiser l'index de l'image lors de la fermeture de la modal
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 900,
    height: isMobile ? "70%" : 530,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    color: "white",
  };

  const moreInf = (id) => {
    const more = projects.find((p) => p.id === id);
    setMoreInfo({
      id: more.id,
      descr: more.descr,
      project: more.project,
      img: more.img,
      linkGit: more.linkGit,
      imgDet: more.imgDet.filter(Boolean), // Filtrer les images non définies
    });
    setCurrentImageIndex(0); // Initialiser avec la première image
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? moreInfo.imgDet.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === moreInfo.imgDet.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              ...style,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <CloseIcon
              onClick={handleClose}
              style={{
                position: "absolute",
                right: 20,
                top: 20,
                cursor: "pointer",
                transition: "color 0.3s ease",
                color: "transparent", // Supprime la couleur par défaut
              }}
              onMouseEnter={(e) => (e.target.style.color = them)} // Applique la couleur du thème au survol
            />

            <div
              className="w-full h-full flex flex-col md:flex-row justify-between items-center"
              style={{
                backgroundColor: mode === "dark" ? "#1e1e1e" : "#f9f9f9",
                borderRadius: "12px",
                color: mode === "dark" ? "white" : "black",
                border: `1px solid ${mode === "dark" ? "#333" : "#ddd"}`,
              }}
            >
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6">
                {/* Slider d'images */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  {moreInfo.imgDet.length > 0 && (
                    <img
                      alt={moreInfo.project}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        transition: "transform 0.3s ease",
                      }}
                      src={moreInfo.imgDet[currentImageIndex]}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  )}

                  {/* Boutons de navigation du slider */}
                  <button
                    onClick={goToPreviousImage}
                    style={{
                      position: "absolute",
                      left: 20,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      padding: "12px",
                      borderRadius: "50%",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)")
                    }
                  >
                    <ArrowBackIosIcon />
                  </button>
                  <button
                    onClick={goToNextImage}
                    style={{
                      position: "absolute",
                      right: 20,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      padding: "12px",
                      borderRadius: "50%",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)")
                    }
                  >
                    <ArrowForwardIosIcon />
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    borderLeft: `1px solid ${
                      mode === "dark" ? "#333" : "#ddd"
                    }`,
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4">
                    Project:{" "}
                    <span style={{ color: them, fontWeight: 700 }}>
                      {moreInfo.project}
                    </span>
                  </h2>
                  <div
                    className="scroll-container"
                    style={{
                      overflowY: "scroll",
                      overflowX: "hidden",
                      width: "100%",
                      height: "80%",
                      overflowY: "auto",
                      border: `1px solid ${them}`,
                      borderRadius: "8px",
                      padding: "12px",
                      backgroundColor: mode === "dark" ? "#2a2a2a" : "#fff",
                    }}
                  >
                    <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
                      {moreInfo.descr}
                    </p>
                  </div>
                  {moreInfo.linkGit && moreInfo.linkGit.trim() !== "" ? (
                    <div className="flex mt-3">
                      <h1>Source code :</h1>
                      <a
                        href={moreInfo.linkGit}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginLeft: "10px", color: `${them}` }}
                      >
                        Github
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </>

      <div
        id="project"
        style={{
          minHeight: "1200px",
          padding: "20px",
          backgroundColor: mode === "dark" ? "#2e3030" : "white",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <div className="m-auto text-center" style={{ width: "100%" }}>
          <h1
            style={{
              fontSize: isTinyMobile
                ? "24px" // Taille réduite pour les écrans < 258px
                : isVerySmallMobile
                ? "28px"
                : isSmallMobile
                ? "32px"
                : "36px", // Taille par défaut
              fontWeight: "bold",
            }}
          >
            Portfolio
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            margin: "40px 0",
            fontSize: isTinyMobile
              ? "16px" // Taille réduite pour les écrans < 258px
              : isVerySmallMobile
              ? "18px"
              : isSmallMobile
              ? "20px"
              : "24px", // Taille par défaut
          }}
          className="lastProject"
        >
          <p>
            Mes <span style={{ color: them, fontWeight: 500 }}>Projet:</span>
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                width: isMobile ? "100%" : "300px",
                height: "450px",
                position: "relative",
                backgroundColor: "#3d3d3d",
                padding: "15px",
                borderRadius: "10px",
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  width: "100%",
                  height: "80%",
                  backgroundColor: "black",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={p.img}
                  alt={p.project}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: isTinyMobile
                      ? "16px" // Taille réduite pour les écrans < 258px
                      : isVerySmallMobile
                      ? "18px"
                      : isSmallMobile
                      ? "20px"
                      : "22px", // Taille par défaut
                    fontWeight: "500",
                    margin: "10px 0",
                    color: "#fff",
                  }}
                >
                  {p.project}
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#555555",
                      padding: "5px",
                      borderRadius: "6px",
                      color: "#b4b4b4",
                      fontSize: isTinyMobile
                        ? "10px" // Taille réduite pour les écrans < 258px
                        : isVerySmallMobile
                        ? "12px"
                        : "14px", // Taille par défaut
                    }}
                  >
                    {p.dev}
                  </span>
                  {p.dev1 && (
                    <span
                      style={{
                        backgroundColor: "#555555",
                        padding: "5px",
                        borderRadius: "6px",
                        color: "#b4b4b4",
                        fontSize: isTinyMobile
                          ? "10px" // Taille réduite pour les écrans < 258px
                          : isVerySmallMobile
                          ? "12px"
                          : "14px", // Taille par défaut
                      }}
                    >
                      {p.dev1}
                    </span>
                  )}
                  {p.dev2 && (
                    <span
                      style={{
                        backgroundColor: "#555555",
                        padding: "5px",
                        borderRadius: "6px",
                        color: "#b4b4b4",
                        fontSize: isTinyMobile
                          ? "10px" // Taille réduite pour les écrans < 258px
                          : isVerySmallMobile
                          ? "12px"
                          : "14px", // Taille par défaut
                      }}
                    >
                      {p.dev2}
                    </span>
                  )}
                </div>
              </div>

              <a
                className="github"
                href={p.linkGit}
                style={{
                  marginLeft: "10px",
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  border: "1px solid #212f3d",
                  padding: "7px 10px",
                  borderRadius: "3px",
                  color: `${them}`,
                }}
              >
                Github
              </a>
              <button
                className="more"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  backgroundColor: "#24829e",
                  border: "1px solid #212f3d",
                  padding: "7px 10px",
                  borderRadius: "3px",
                  color: "white",
                }}
                onClick={() => {
                  handleOpen();
                  moreInf(p.id);
                }}
              >
                <ArrowOutwardIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
