import React from "react";
import { useTheme } from "../Context/PortfolioContext";
import { useMediaQuery } from "react-responsive";

export default function Tools() {
  const tools = [
    {
      id: 1,
      desc: "Framework JavaScript",
      img: "/img/react.svg",
      tool: "React",
    },
    {
      id: 2,
      desc: "Runtime JavaScript",
      img: "/img/nodejs.svg",
      tool: "Nodejs",
    },
    {
      id: 4,
      desc: "Framework Web",
      img: "/img/expressjs.svg",
      tool: "Express",
    },
    {
      id: 5,
      desc: "Framework CSS",
      img: "/img/ts.jpg",
      tool: "TypeScript",
    },
    {
      id: 6,
      desc: "Contrôle versions",
      img: "/img/spring-removebg-preview.png",
      tool: "Spring",
    },
    {
      id: 9,
      desc: "Langage",
      img: "/img/python-removebg-preview.png",
      tool: "Python",
    },
    {
      id: 10,
      desc: "Langage style",
      img: "/img/tailwindcss.svg",
      tool: "TailwindCSS",
    },
    {
      id: 11,
      desc: "Langage programmation",
      img: "/img/javascript.svg",
      tool: "JavaScript",
    },
    { id: 12, desc: "Base données", img: "/img/mongodb.svg", tool: "Mongodb" },
    { id: 13, desc: "Base données", img: "/img/mysql.png", tool: "Mysql" },
    {
      id: 14,
      desc: "Runtime JavaScript",
      img: "/img/next-removebg-preview.png",
      tool: "Next",
    },
    {
      id: 15,
      desc: "Framework JavaScript",
      img: "/img/nest.png",
      tool: "Nest",
    },
  ];
  const isMediumScreen = useMediaQuery({ query: "(max-width: 989px)" }); // Nouvelle media query

  const isMobile = useMediaQuery({ query: "(max-width: 618px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 522px)" });
  const isSmallMobile1 = useMediaQuery({ query: "(max-width: 433px)" });
  const isVerySmallMobile = useMediaQuery({ query: "(max-width: 421px)" });
  const isTinyMobile = useMediaQuery({ query: "(max-width: 263px)" });

  return (
    <div>
      <div
        className="containerTools"
        style={{
          display: "grid",
          gridTemplateColumns: isTinyMobile
            ? "1fr"
            : isSmallMobile1
            ? "1fr"
            : isSmallMobile
            ? "1fr"
            : isMobile
            ? "repeat(2, 1fr)"
            : "repeat(4, 1fr)",
          gap: "16px",
          marginTop: "12px",
          overflowx: !isMediumScreen ? "scroll" : "hidden",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="tool flex items-center"
            style={{
              width: isTinyMobile
                ? "100%"
                : isVerySmallMobile
                ? "90%"
                : isSmallMobile1
                ? "80%"
                : isSmallMobile
                ? "90%"
                : isMobile
                ? "100%"
                : "300px",
              height: isTinyMobile ? "50px" : "60px",
              padding: isTinyMobile ? "5px" : "9px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              border: "1px solid #b0b0b0",
              margin: isTinyMobile
                ? "0"
                : isSmallMobile1
                ? "0"
                : isSmallMobile
                ? "auto"
                : isMobile
                ? "0"
                : "auto",
              marginLeft: isTinyMobile
                ? "0px"
                : isSmallMobile1
                ? "20px"
                : "0px",
            }}
          >
            <div
              style={{
                backgroundColor: "#585858",
                width: isTinyMobile ? "40px" : "60px",
                height: isTinyMobile ? "40px" : "50px",
                borderRadius: "10px",
              }}
            >
              <img
                src={tool.img}
                alt={tool.tool}
                width={isTinyMobile ? 30 : 40}
                style={{
                  margin: isTinyMobile ? "5px" : "7px",
                  marginLeft: isTinyMobile ? "5px" : "9px",
                }}
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p
                style={{
                  fontSize: isTinyMobile
                    ? "12px"
                    : isVerySmallMobile
                    ? "14px"
                    : isSmallMobile1
                    ? "16px"
                    : isSmallMobile
                    ? "18px"
                    : "20px",
                  fontWeight: "500",
                }}
              >
                {tool.tool}
              </p>
              <p
                style={{
                  fontSize: isTinyMobile
                    ? "7px"
                    : isVerySmallMobile
                    ? "8px"
                    : isSmallMobile1
                    ? "9px"
                    : isSmallMobile
                    ? "10px"
                    : "12px",
                }}
              >
                {tool.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
