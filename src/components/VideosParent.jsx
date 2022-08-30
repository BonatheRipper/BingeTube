import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import React from "react";
import ChannelCard from "./ChannelCard";
const VideosParent = ({ videos, css }) => {
  return (
    <div className={`${css} my-2 items-center gap-2 first-line:px-1`}>
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
          </Box>
        );
      })}
    </div>
  );
};

export default VideosParent;
