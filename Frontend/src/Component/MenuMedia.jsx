import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router";
import { useTheme } from "../Context/PortfolioContext";
export default function MenuMedia() {
  const [hoverd, setHoverd] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null); // State pour gérer l'ID actif
  const [them, setThem] = useState("");

  const { theme, mode } = useTheme();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThem(savedTheme);
    }
    document.documentElement.style.setProperty("--theme-color", them);
  }, [theme]);
  const menu = [
    {
      id: 1,
      menu: "Home",
      icon: (
        <HomeIcon
          style={{
            fontSize: "33px",
          }}
        />
      ),
    },
    {
      id: 2,
      menu: "About ",
      icon: <PersonIcon style={{ fontSize: "33px" }} />,
    },
    { id: 3, menu: "Project", icon: <WorkIcon style={{ fontSize: "33px" }} /> },
    {
      id: 4,
      menu: "Certification",
      icon: <SchoolIcon style={{ fontSize: "33px" }} />,
    },
    {
      id: 5,
      menu: "Technologie",
      icon: <CodeIcon style={{ fontSize: "33px" }} />,
    },
    {
      id: 6,
      menu: "Contact ",
      icon: <EmailIcon style={{ fontSize: "33px" }} />,
    },
  ];

  let modeDL = mode === "dark";
  
  return (
    <div
      style={{
        display: "flex",
        width: "360px",
        padding: "10px",
        borderRadius: "18px",
        border: modeDL ? "1px solid white" : "1px solid black",
      }}
    >
      {menu.map((m) => {
        const isActive = activeMenuId === m.id; // Vérifie si l'élément est actif

        return (
          <Link key={m.id} to={"/" + m.menu} className="">
            <div
              className="w-4/5 ml-3 pl-2 hover:text-yellow-500 "
              style={{
                display: "flex",
                alignItems: "center",
                color: modeDL ? "white" : "black",
              }}
            >
              <div
                style={{
                  color: `${them}`,
                  margin: "auto",
                  borderRadius:"10px",
                  backgroundColor: isActive ? "black" : "transparent", // BG dynamique
                }}
                onClick={() => setActiveMenuId(m.id)} // Définir l'ID actif
                onMouseEnter={() => setHoverd(!hoverd)}
              >
                {m.icon}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
