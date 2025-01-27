import React, { useState } from "react";
import { useTheme } from "../Context/PortfolioContext";

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const menu = [
    { id: 1, menu: "Acceuil", target: "#home" },
    { id: 2, menu: "A propos ", target: "#about" },
    { id: 3, menu: "Projet", target: "#project" },
    { id: 4, menu: "Contact", target: "#contact" },
  ];
  const { mode } = useTheme();
  const modeDL = mode === "dark";

  const handleMenuClick = (id) => {
    setActiveMenu(id);
  };

  return (
    <div
      className="flex p-2 shadow-lg ml-1"
      style={{
        width: "310px",
        borderRadius: "10px",
        height: "45px",
        backgroundColor: "#494949",
      }}
    >
      {menu.map((m) => (
        <div
          key={m.id}
          className={`flex-1 flex justify-center items-center transition-colors duration-200 ${
            activeMenu === m.id
              ? "bg-white text-black"
              : "text-white hover:bg-gray-700"
          }`}
          style={{
            borderRadius: "8px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleMenuClick(m.id)}
        >
          <a
            href={m.target}
            className="flex justify-center items-center"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 className="text-sm">{m.menu}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
