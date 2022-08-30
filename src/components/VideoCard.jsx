import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      className="!rounded-ful w-full"
      sx={{ width: { md: 420, xs: 360 }, height: "310px", marginTop: 2 }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/${"error"} r`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          // className={`w-4/12 h-20`}
          sx={{ width: "100%", height: 210 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <div>
          {" "}
          <Link to={videoId ? `/video/${videoId}` : ""}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 40)}
            </Typography>
          </Link>
          <span>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              className="text-c-yellow opacity-50"
            >
              {snippet?.channelTitle.slice(0, 60) || ""}
              <CheckCircle
                sx={{ fontSize: 12, ml: "5px" }}
                className="text-c-yellow "
              />
            </Typography>
          </span>
        </div>
        <div className="flex text-white flex-row justify-between mt-1 font-bold h-full">
          <div className="flex flex-row justify-between">
            <span className="text-sm text-gray-500 opacity-80">Share</span>
            <span className="text-xs px-2 opacity-40 text-c-yellow hover:opacity-100">
              <SendIcon />
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-sm text-gray-500 opacity-80 px-2 ">
              Download
            </span>
            <span className="text-xs px-2 opacity-40 hover:opacity-100 text-c-yellow">
              <CloudDownloadIcon />
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
