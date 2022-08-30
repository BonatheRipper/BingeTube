import React, { useState } from "react";
import { Stack } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import DataObjectIcon from "@mui/icons-material/DataObject";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import SideBarButton from "./SideBarButton";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HistoryIcon from "@mui/icons-material/History";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import StreamIcon from "@mui/icons-material/Stream";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
const Sidebar = ({ selectedCat, setSelectedCat }) => {
  return (
    <div className="flex text-white flex-row md:flex-col md:px-10 overflow-y-auto h-auto md:h-5/6">
      <SideBarButton
        text="Movies"
        icon={<LiveTvIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Musics"
        icon={<MusicVideoIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Comedy"
        icon={<TheaterComedyIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Programming"
        icon={<DataObjectIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Animals"
        icon={<EmojiNatureIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Documentry"
        icon={<LibraryBooksIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Sports"
        icon={<SportsSoccerIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="History"
        icon={<HistoryIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Motivation"
        icon={<ModeStandbyIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Education"
        icon={<CastForEducationIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Science"
        icon={<ScienceIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="News"
        icon={<NewspaperIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Cartoons"
        icon={<ChildCareIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Psycology"
        icon={<PsychologyIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
      <SideBarButton
        text="Live"
        icon={<StreamIcon />}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />
    </div>
  );
};

export default Sidebar;
