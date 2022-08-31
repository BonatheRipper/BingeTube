import React from "react";
import { BingeTubeProvider } from "./../context/contextProvider";

const SideBarButton = ({
  icon,
  text,
  selectedCat,
  setSelectedCat,
  searchTerm,
}) => {
  const { themeBG } = BingeTubeProvider();
  return (
    <button
      onClick={() => setSelectedCat(text)}
      className={`sidebarCat hover:bg-${themeBG} opacity-60 hover:opacity-90 animate duration-700 hover:!text-white px-4 flex justify-start items-center rounded-full py-1 md:py-2 md:my-2 my-4 ${
        text === selectedCat ? `bg-${themeBG} text` : `!text-${themeBG} `
      }`}
    >
      <span className={` mr-4 hover:text-white`}>{icon}</span>
      <span className="text-white">{text}</span>
    </button>
  );
};

export default SideBarButton;
