import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const VideoLoadingSpinners = () => {
  return (
    <div className="h-screen  z-50 relative w-full flex justify-center items-center">
      <span className="!text-c-yellow !bg-c-yellow rounded-full">
        <BounceLoader className="" />
      </span>
    </div>
  );
};

export default VideoLoadingSpinners;
