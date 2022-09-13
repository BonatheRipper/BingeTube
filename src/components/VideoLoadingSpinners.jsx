import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { BingeTubeProvider } from "./../context/contextProvider";

const VideoLoadingSpinners = () => {
  const { themeBG } = BingeTubeProvider();
  return (
    <div className="h-screen bg-black  z-50 relative w-full flex justify-center items-center">
      <span
        className={`text-${themeBG} bg-${themeBG} rounded-full opacity-80 hover:opacity-90`}
      >
        <BounceLoader className="" />
      </span>
    </div>
  );
};

export default VideoLoadingSpinners;
