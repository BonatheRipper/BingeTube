import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SettingsIcon from "@mui/icons-material/Settings";
import { ScrollRotate } from "react-scroll-rotate";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const RightSideBar = () => {
  return (
    // <div className="fixed bg-black h-screen flex flex-col justify-start w-8/12 md:w-3/12 border-b border-l-4 border-c-yellow z-50 right-0">
    //   <div
    //     className="flex flex- row  justify-center py-8"
    //     style={{ fontSize: "28px" }}
    //   >
    //     <h1 className="text-white px-2">Theme </h1>{" "}
    //     <h6 className="text-c-yellow px-2">Settings</h6>
    //   </div>
    //   <h1
    //     style={{ fontSize: "20px" }}
    //     className="text-white px-4 md:px-8 w-full "
    //   >
    //     Colors
    //   </h1>
    //   <h1 className="text-white px-4 w-full border-b opacity-20 py-1"></h1>
    //   <div className=" grid grid-cols-3 gap-2 md:px-10 my-4">
    //     <span className="w-16 h-16 rounded-lg mx-1  md:mx-6  border bg-c-yellow flex justify-center items-center">
    //       <CheckCircleOutlineIcon />
    //     </span>
    //     <span className="w-16 h-16 rounded-lg  mx-1 md:mx-6 border bg-c-yellow flex justify-center items-center"></span>
    //     <span className="w-16 h-16 rounded-lg mx-1 md:mx-6  border bg-c-yellow flex justify-center items-center"></span>
    //     <span className="w-16 h-16  rounded-lg mx-1  md:mx-6 border bg-c-yellow flex justify-center items-center"></span>
    //   </div>
    // </div>
    <div className="fixed w-16 flex justify-start items-center text-2xl rounded-l-full h-10 border-2 border-c-yellow top-80 z-50 right-0">
      <ScrollRotate className="w-full h-full">
        <i className="fa fa-cog w-full h-full " aria-hidden="true"></i>
      </ScrollRotate>{" "}
    </div>
  );
};

export default RightSideBar;
