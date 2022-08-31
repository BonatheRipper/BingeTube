import React from "react";
import { Stack } from "@mui/material";
import { YellowLogo, RedLogo } from "../utils/global";
// import { RedLogo } from "../utils/global";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

import { BingeTubeProvider } from "./../context/contextProvider";

const Navbar = () => {
  const { themeBG } = BingeTubeProvider();
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
        <span className={`text-${themeBG}`}>Tube</span>
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
