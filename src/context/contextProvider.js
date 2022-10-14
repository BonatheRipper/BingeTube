import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextParentProvider = ({ children }) => {
  const siteTheme = [
    { BG: "c-yellow" },
    { BG: "c-green" },
    { BG: "c-red" },
    { BG: "c-blue" },
    { BG: "c-LightDark" },
    { BG: "c-xx" },
    { BG: "c-xxx" },
    { BG: "c-xxxx" },
    { BG: "c-xxxxx" },
  ];
  const [themeBG, setThemeBg] = useState(siteTheme[0].BG);
  const [themeLogo, setThemeLogo] = useState(siteTheme[0].Logo);

  return (
    <StateContext.Provider value={{ themeBG, siteTheme, setThemeBg }}>
      {children}
    </StateContext.Provider>
  );
};

export const BingeTubeProvider = () => useContext(StateContext);
