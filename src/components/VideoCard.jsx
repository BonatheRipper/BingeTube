import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      className="!rounded-ful w-full"
      sx={{ width: { md: 420, xs: 360 }, height: "auto", marginTop: 2 }}
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
        <Link to={videoId ? `/video/${videoId}` : ""}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray ">
            {snippet?.channelTitle.slice(0, 60) || ""}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
