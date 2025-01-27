import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const PortfolioContext = createContext();

export default function PortfolioProvider({ children }) {
  const [theme, settheme] = useState("e4004c");
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const isMobile = useMediaQuery({ query: "(max-width: 618px)" });
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <PortfolioContext.Provider
      value={{ theme, settheme, mode, setMode, isMobile }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function useTheme() {
  return useContext(PortfolioContext);
}
