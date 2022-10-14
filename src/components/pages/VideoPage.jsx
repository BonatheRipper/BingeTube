import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { CheckCircle } from "@mui/icons-material";
import { loadFromApi } from "../../utils/loadFromRapid";
import VideosParent from "../VideosParent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RecommendIcon from "@mui/icons-material/Recommend";
import VideoLoadingSpinners from "../VideoLoadingSpinners";
import { BingeTubeProvider } from "../../context/contextProvider";
const VideoPage = () => {
  const { themeBG } = BingeTubeProvider();
  const [videoDetail, setVideoDetails] = useState(false);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();
  const { snippet, statistics } = videoDetail;
  useEffect(() => {
    loadFromApi(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    loadFromApi(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => setVideos(data.items));
  }, [videoId]);
  return (
    <div className="h-full w-full relative">
      <Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ display: "relative" }}
        >
          {videoDetail ? (
            <Box flex={1}>
              <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                <div className={`border-b rounded-sm  border-${themeBG}`}>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    className="react-player "
                  />
                </div>
                <Typography sx={{ color: "#fff", padding: "10px" }}>
                  {videoDetail ? snippet.title : "..."}
                </Typography>
                <Stack
                  sx={{ color: "#fff" }}
                  direction={`row`}
                  py={1}
                  px={2}
                  justifyContent="space-between"
                >
                  <span>
                    <Typography
                      variant={{ sm: "subtitle1", md: "h6" }}
                      color="#fff"
                    >
                      {videoDetail ? snippet.channelTitle : "0"}
                      <CheckCircle
                        sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                      />
                    </Typography>
                  </span>
                  <div className="flex flex-row">
                    {/* LIKE COUNTS OF VIDEOS */}
                    <span>
                      <Typography
                        variant="body1"
                        className={`text-${themeBG} flex justify-between items-center opacity-60 hover:opacity-90`}
                      >
                        <span>
                          {videoDetail
                            ? parseInt(statistics.likeCount).toLocaleString()
                            : "0"}
                        </span>
                        <span className="mx-2">
                          <RecommendIcon />
                        </span>
                      </Typography>
                    </span>
                    {/* LIKE COUNTS OF VIDEOS ENDS */}

                    {/* VIEWS COUNTS OF VIDEOS */}

                    <span>
                      <Typography
                        variant="body1"
                        className={`text-${themeBG} flex justify-between items-center opacity-60 hover:opacity-90`}
                      >
                        <span>
                          {videoDetail
                            ? parseInt(statistics.viewCount).toLocaleString()
                            : ""}
                        </span>
                        <span className="mx-2">
                          <VisibilityIcon />
                        </span>
                      </Typography>
                    </span>
                    {/* VIEWS COUNTS OF VIDEOS ENDS*/}
                  </div>
                </Stack>
              </Box>
            </Box>
          ) : (
            <VideoLoadingSpinners />
          )}
          <>
            {videos.length ? (
              <Box
                px={2}
                py={{ md: 1, xs: 5 }}
                justifyContent="center"
                alignItems="center"
              >
                <VideosParent
                  videos={videos}
                  css="flex pb-12 h-full flex-col flex-wrap justify-center"
                />
              </Box>
            ) : (
              <VideoLoadingSpinners />
            )}
          </>
        </Stack>
      </Box>
    </div>
  );
};

export default VideoPage;
