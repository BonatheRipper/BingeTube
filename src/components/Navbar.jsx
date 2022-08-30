import React from "react";
import { Stack } from "@mui/material";
import { YellowLogo, RedLogo } from "../utils/global";
// import { RedLogo } from "../utils/global";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
const siteTheme = [
  { BG: "c-yellow", Logo: YellowLogo },
  { BG: "c-green", Logo: YellowLogo },
  { BG: "c-red", Logo: RedLogo },
  { BG: "c-blue", Logo: YellowLogo },
  { BG: "c-LightDark", Logo: YellowLogo },
];
const Navbar = () => {
  const [themeBG, setThemeBg] = useState(siteTheme[0].BG);
  const [themeLogo, setThemeLogo] = useState(siteTheme[0].Logo);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        zIndex: "9999",
        bottom: "0",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        className="flex flex-row  justify-center items-center px-2 py-2 text-white font-bold md:text-xl text-lg my-2 mx-2 "
      >
        <span>Binge </span>
        <span className="text-c-yellow">Tube</span>
        {/* <img src={themeLogo} alt="Logo" className="h-16 md:h-20 " /> */}
      </Link>
      <SearchBar />
    </Stack>
  );
};

// YELLOW #FFD232
//green #01E801
//purple #FF0070
//red #FF1414
//lightBlue #38B6FF
//LightDark #A6A6A6
export default Navbar;
