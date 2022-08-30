import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, SearchBar } from "./components";
import { ChannelPage, Home, VideoPage, SearchItem } from "./components/pages";
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
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <Route path="/channel/:channelId" element={<ChannelPage />} />
          <Route path="/search/:searchString" element={<SearchItem />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
