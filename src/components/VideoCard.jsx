import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { BingeTubeProvider } from "./../context/contextProvider";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookMessengerIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import { useState } from "react";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const { themeBG } = BingeTubeProvider();
  const [share, setShare] = useState(false);
  return (
    <Card
      className="!rounded-ful w-full"
      sx={{ width: { md: 420, xs: 360 }, height: "100%", marginTop: 2 }}
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
              className={`text-${themeBG} opacity-50`}
            >
              {snippet?.channelTitle.slice(0, 60) || ""}
              <CheckCircle
                sx={{ fontSize: 12, ml: "5px" }}
                className={`text-${themeBG} `}
              />
            </Typography>
          </span>
        </div>
        <div className="flex text-white flex-row justify-between mt-1 font-bold h-full">
          {!share && (
            <>
              <div
                onClick={() => setShare(!share)}
                className="flex flex-row justify-between"
              >
                <span className="text-sm text-gray-500 opacity-80">Share</span>
                <span
                  className={`text-xs px-2 opacity-40 text-${themeBG} hover:opacity-100`}
                >
                  <SendIcon />
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-sm text-gray-500 opacity-80 px-2 ">
                  Download
                </span>
                <span
                  className={`text-xs px-2 opacity-40 hover:opacity-100 text-${themeBG}`}
                >
                  <CloudDownloadIcon />
                </span>
              </div>{" "}
            </>
          )}
          {share && (
            <>
              <div className="h-10 opacity-40 hover:opacity-100 justify-center items-center w-full mb-1 flex flex-row">
                <span onClick={() => setShare(!share)} className="px-4">
                  <FacebookShareButton
                    url={`https://www.youtu.be/${videoId ? videoId : ""}`}
                  >
                    {" "}
                    <FacebookIcon
                      size={25}
                      logoFillColor="white"
                      round={true}
                    ></FacebookIcon>
                  </FacebookShareButton>
                </span>

                <span onClick={() => setShare(!share)} className="px-4">
                  {" "}
                  <WhatsappShareButton
                    url={`https://www.youtu.be/${videoId ? videoId : ""}`}
                  >
                    {" "}
                    <WhatsappIcon
                      size={25}
                      logoFillColor="white"
                      round={true}
                    ></WhatsappIcon>
                  </WhatsappShareButton>
                </span>
                <span onClick={() => setShare(!share)} className="px-4">
                  {" "}
                  <TwitterShareButton
                    url={`https://www.youtu.be/${videoId ? videoId : ""}`}
                  >
                    {" "}
                    <TwitterIcon
                      size={25}
                      logoFillColor="white"
                      round={true}
                    ></TwitterIcon>
                  </TwitterShareButton>
                </span>
                <span onClick={() => setShare(!share)} className="px-4">
                  {" "}
                  <TelegramShareButton
                    url={`https://www.youtu.be/${videoId ? videoId : ""}`}
                  >
                    {" "}
                    <TelegramIcon
                      size={25}
                      logoFillColor="white"
                      round={true}
                    ></TelegramIcon>
                  </TelegramShareButton>
                </span>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
