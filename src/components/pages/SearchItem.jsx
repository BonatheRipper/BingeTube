import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { loadFromApi } from "../../utils/loadFromRapid";
import { useNavigate, useParams } from "react-router-dom";
import VideosParent from "../VideosParent";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VideoLoadingSpinners from "../VideoLoadingSpinners";
import { BingeTubeProvider } from "../../context/contextProvider";
const SearchItem = () => {
  const { themeBG } = BingeTubeProvider();
  const [videos, setVideos] = useState([]);
  const { searchString } = useParams();
  useEffect(() => {
    setVideos([]);
    loadFromApi(`search?part=snippet&q=${searchString}`, searchString, 40).then(
      (data) => setVideos(data.items)
    );
  }, [searchString]);
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex md:flex-row flex-col w-full relative h-full">
      {videos.length ? (
        <>
          {" "}
          <Box>
            <Typography
              variant="h4"
              className=" h-full font-extrabold p-4 text-white items-center flex flex-row justify-between  duration-1000"
            >
              <div className="text-base md:text-lg">
                <span className="">
                  Results for
                  {searchString.charAt(0).toUpperCase() + searchString.slice(1)}
                </span>
                <span className={`text-${themeBG}`}> Videos</span>
              </div>

              <span
                onClick={() => backToHome()}
                className={`!text-xl text-black opacity-60 hover:opacity-90 md:mx-10 mr-4 bg-${themeBG} px-4 md:px-`}
              >
                <KeyboardBackspaceIcon />
              </span>
            </Typography>
            {<VideosParent videos={videos} />}
          </Box>
        </>
      ) : (
        <VideoLoadingSpinners />
      )}
    </div>
  );
};

export default SearchItem;
