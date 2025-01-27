import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useTheme } from "../Context/PortfolioContext";
export default function Setting() {
  const themes = [
    { id: 1, theme: "#e4004c" },
    { id: 2, theme: "#e4a900" },
    { id: 3, theme: "#149fbb" },
    { id: 4, theme: "#aa45f5" },
  ];
  const { theme, settheme, setMode, mode } = useTheme();

  function themeClicked(id) {
    const newTheme = themes.find((t) => t.id === id);

    settheme(newTheme.theme); // Utilise setThem pour mettre à jour le thème dans l'état local
    localStorage.setItem("theme", newTheme.theme); // Stocker directement la nouvelle valeur dans le localStorage
    setOpen(false);
  }

  const [open, setOpen] = useState(false);
  const [openMode, setOpenMode] = useState(true);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let modeDL = mode === "dark";
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "150px",
          position: "relative",
          right: 0,
          top: open ? "430px" : "-300px",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex ",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1
            className="lastName"
            style={{ marginTop: "20px", fontSize: "20px", fontSize: "15px" }}
          >
            Themes color
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {themes.map((t) => {
              return (
                <div
                  onClick={() => themeClicked(t.id)}
                  key={t.id}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: t.theme,
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <hr style={{ color: "white", marginTop: "10px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <InputLabel
            style={{ marginLeft: "12px", fontSize: "15px", color: "white" }}
            className="lastName"
          >
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Language"
            onChange={handleChange}
            style={{
              width: "47%",
              height: "40px",
              color: "white",
              marginLeft: "66px",
            }}
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>French</MenuItem>
          </Select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          position: "absolute",
          right: 0,
          top: "-10px",
        }}
      >
        <SettingsIcon
          style={{
            fontSize: "30px",
            marginTop: "7px",
            color: modeDL ? "white" : "black",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        />
        <DarkModeIcon
          style={{
            fontSize: "30px",
            marginTop: "7px",
            color: modeDL ? "white" : "black",
            cursor: "pointer",
            display: openMode ? "block" : "none",
          }}
          onClick={() => {
            setOpenMode(!openMode);
            toggleMode();
          }}
        />
        <LightModeIcon
          style={{
            fontSize: "30px",
            marginTop: "7px",
            color: modeDL ? "white" : "black",
            cursor: "pointer",
            position: "absolute",
            top: "47px",
            display: !openMode ? "block" : "none",
          }}
          onClick={() => {
            setOpenMode(!openMode);
            toggleMode();
          }}
        />
      </div>
    </>
  );
}
