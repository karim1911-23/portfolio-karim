import React, { useState } from "react";
import Language from "../Component/Language";
import Database from "../Component/Database";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Technologie() {
  const [alignment, setAlignment] = useState("Language");
  const handleAlignment = (event, newAlignment) => {
    console.log(event.target.value);
    setAlignment(event.target.value);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#2e3030",
          padding: "20px",
          color: "white",
          overflowY: "scroll",
        }}
        className="scroll-container"
      >
        <h1 className="lasteName text-4xl" style={{}}>
          Technologies
        </h1>
        <hr
          style={{
            borderRadius: "5px",
            width: "140px",
            margin: "10px 0px",
            border: "3px solid red",
          }}
        />
        <hr
          style={{
            borderRadius: "5px",
            width: "80px",
            margin: "10px 0px 40px 0px",
            border: "3px solid red ",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "90%",
            marginTop: "60px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div className="w-full">
            {" "}
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              style={{ width: "100%", backgroundColor: "#3f4342" }}
            >
              <ToggleButton
                value="Language"
                aria-label="left aligned"
                style={{ width: "500px", color: "white" }}
              >
                Language
              </ToggleButton>
              <ToggleButton
                value="DataBase"
                aria-label="centered"
                style={{ width: "500px", color: "white" }}
              >
                DataBase
              </ToggleButton>{" "}
            </ToggleButtonGroup>
            <div
              style={{
                width: "100%",
                marginTop: "15px",
                position: "relative",
                height: "60%",
                marginBottom: "30px",
              }}
            >
              {alignment === "Language" && <Language />}
              {alignment === "DataBase" && <Database />}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
