import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { ChannelPage, Home, VideoPage, SearchItem } from "./components/pages";
const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
        <Route path="/search/:searchString" element={<SearchItem />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;
