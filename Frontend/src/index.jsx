import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import PortfolioProvider from "./Context/PortfolioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PortfolioProvider>
  </React.StrictMode>
);
