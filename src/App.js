import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, RightSideBar, SearchBar } from "./components";
import {
  ChannelPage,
  Home,
  VideoPage,
  SearchItem,
  NotFound,
} from "./components/pages";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        padding={0}
        margin={0}
        sx={{
          backgroundColor: "#000",
          padding: "0",
          margin: "0",
          display: "relative",
        }}
      >
        <Navbar />
        <RightSideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <Route path="/search/:searchString" element={<SearchItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
