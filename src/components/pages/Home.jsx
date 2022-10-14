import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar";
import VideosParent from "../VideosParent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { BingeTubeProvider } from "../../context/contextProvider";
import { loadFromApi } from "../../utils/loadFromRapid";
import VideoLoadingSpinners from "../VideoLoadingSpinners";
const sortByNum = ["5", "10", "20", "40", "50", "80", "100"];
const Home = () => {
  const [selectedCat, setSelectedCat] = useState("Movies");
  const [FilterNum, setFilterNum] = useState("50");
  const [FilterNumActive, setFilterNumActive] = useState(true);
  const { themeBG } = BingeTubeProvider();

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setVideos([]);
    loadFromApi(
      `search?part=snippet&q=${selectedCat}`,
      selectedCat,
      FilterNum
    ).then((data) => setVideos(data.items));
  }, [selectedCat, FilterNum]);
  return (
    <div className="flex md:flex-row flex-col w-full relative h-full">
      {videos.length ? (
        <>
          <Box
            className={`px-0 md:px-2   md:h-screen border-${themeBG} md:border-r border-r-2 md:w-2/12  relative`}
          >
            <Sidebar
              selectedCat={selectedCat}
              setSelectedCat={setSelectedCat}
            />
            <Typography
              className="copyright absolute bottom-4 mt-2 text-white"
              variant="body2"
            >
              Copyright BingeTube 2022
            </Typography>
          </Box>
          <Box className="relative">
            <div className="flex flex-col p-0 m-0">
              <div className="flex items-center justify-between px-4">
                {" "}
                <Typography
                  variant="h4"
                  className=" font-extrabold p-4 text-white   duration-1000"
                >
                  {selectedCat}{" "}
                  <span
                    className={`text-${themeBG} opacity-60 hover:opacity-90`}
                  >
                    Videos
                  </span>
                </Typography>
                <span
                  onClick={() => setFilterNumActive(!FilterNumActive)}
                  className={`!text-${themeBG} hover:animate-pulse opacity-60 hover:opacity-90`}
                >
                  <DashboardIcon />
                </span>
              </div>
              {FilterNumActive && (
                <span className=" w-full h-8 flex justify-center items-center px-1">
                  {sortByNum.map((item) => {
                    return (
                      <span
                        value={item}
                        onClick={(e) => setFilterNum(item)}
                        key={item}
                        className={`${
                          FilterNum === item
                            ? `text-black ${`bg-${themeBG} opacity-40 hover:opacity-90`}`
                            : "text-white"
                        }  border p-2 h-8 w-8 flex mx-2 md:mx-4 items-center justify-center border-${themeBG} opacity-60 hover:opacity-90 rounded-full `}
                      >
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </span>
              )}
            </div>

            <VideosParent
              videos={videos}
              css="flex pb-12 h-full flex-row flex-wrap justify-center"
            />
          </Box>
        </>
      ) : (
        <>
          <VideoLoadingSpinners />{" "}
        </>
      )}
    </div>
  );
};

export default Home;
