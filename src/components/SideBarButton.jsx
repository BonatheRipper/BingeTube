import React from "react";

const SideBarButton = ({
  icon,
  text,
  selectedCat,
  setSelectedCat,
  searchTerm,
}) => {
  return (
    <button
      onClick={() => setSelectedCat(text)}
      className={`sidebarCat hover:bg-c-yellow animate duration-700 hover:!text-white px-4 flex justify-start items-center rounded-full py-1 md:py-2 md:my-2 my-4 ${
        text === selectedCat ? "bg-c-yellow text" : "!text-c-yellow"
      }`}
    >
      <span className={` mr-4 hover:text-white`}>{icon}</span>
      <span className="text-white">{text}</span>
    </button>
  );
};

export default SideBarButton;
