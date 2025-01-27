import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Resume() {
  const isSmall = useMediaQuery({ query: "(max-width: 300px)" });

  return (
    <div className="resume">
      <h1 className="text-4xl font-bold text-center mb-8"></h1>

      {/* Section Formation */}
      <div style={{ width: "100%", textAlign: "center", marginBottom: "40px" }}>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold"
          style={{
            width: "fit-content",
            backgroundColor: "black",
            margin: "auto",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Formation
        </motion.h3>
      </div>

      {/* Timeline */}
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Alignement à gauche
          paddingLeft: isSmall ? "20px" : "50px", // Padding pour la bordure
        }}
      >
        {/* Élément 1 : Baccalauréat */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: "80%",
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            marginBottom: "60px",
            position: "relative",
            zIndex: 2,
            flexDirection: isSmall ? "column" : "row",
            textAlign: isSmall ? "center" : "left",
          }}
        >
          <SchoolIcon
            style={{
              fontSize: "45px",
              color: "black",
              marginRight: "20px",
            }}
          />
          <div>
            <p className="text-lg font-semibold">2020-2021</p>
            <p className="text-gray-700">
              Baccalauréat en Sciences Mathématiques
            </p>
          </div>
        </motion.div>

        {/* Élément 2 : Cycle Préparatoire Intégré */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: "80%",
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            marginBottom: "60px",
            position: "relative",
            zIndex: 2,
            flexDirection: isSmall ? "column" : "row",
            textAlign: isSmall ? "center" : "left",
          }}
        >
          <SchoolIcon
            style={{
              fontSize: "45px",
              color: "black",
              marginRight: "20px",
            }}
          />
          <div>
            <p className="text-lg font-semibold">2021-2023</p>
            <p className="text-gray-700">Cycle Préparatoire Intégré</p>
            <p className="text-gray-600">
              École Nationale des Sciences Appliquées, Khouribga
            </p>
          </div>
        </motion.div>

        {/* Élément 3 : Cycle d'Ingénierie */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            width: "80%",
            maxWidth: "600px",
            display: "flex",
            alignItems: "center",
            marginBottom: "60px",
            position: "relative",
            zIndex: 2,
            flexDirection: isSmall ? "column" : "row",
            textAlign: isSmall ? "center" : "left",
          }}
        >
          <SchoolIcon
            style={{
              fontSize: "45px",
              color: "black",
              marginRight: "20px",
            }}
          />
          <div>
            <p className="text-lg font-semibold">2023 - En cours</p>
            <p className="text-gray-700">
              Cycle d'Ingénierie - Informatique et Ingénierie des Données
            </p>
            <p className="text-gray-600">
              École Nationale des Sciences Appliquées, Khouribga
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
