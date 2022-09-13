import React, { useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SettingsIcon from "@mui/icons-material/Settings";
import { ScrollRotate } from "react-scroll-rotate";
import { BingeTubeProvider } from "../context/contextProvider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const RightSideBar = () => {
  const [rightbarActive, setRightBarActive] = useState(true);
  const { themeBG, siteTheme, setThemeBg } = BingeTubeProvider();

  useEffect(() => {
    function ShowRightBarOnce() {
      var x = 0;
      const SetTime = setInterval(() => {
        x++;
        if (x === 5) {
          setRightBarActive(false);
          clearInterval(SetTime);
        }
      }, 1000);
    }
    ShowRightBarOnce();
  }, []);
  console.log(themeBG);
  return (
    <>
      <>
        {
          <div
            className={`${
              rightbarActive ? "right-0" : "-right-full "
            }  fixed  bg-black h-screen flex flex-col opacity-80 hover:opacity-90 justify-start w-8/12 md:w-3/12 shadow-md shadow-${themeBG} z-50 `}
          >
            <div
              className="flex flex- row  justify-center py-8"
              style={{ fontSize: "28px" }}
            >
              <h1 className="text-white px-2">Theme </h1>{" "}
              <h6 className="text-c-yellow px-2">Settings</h6>
            </div>
            <h1
              style={{ fontSize: "20px" }}
              className="text-white px-4 md:px-8 w-full "
            >
              Colors
            </h1>
            <h1 className="text-white px-4 w-full border-b opacity-20 py-1">
              {" "}
            </h1>
            <div className=" grid grid-cols-3 gap-2 md:px-10 my-4 px-3">
              {siteTheme.map((item) => {
                return (
                  <span
                    onClick={() => setThemeBg(item.BG)}
                    key={item + Math.floor(Math.random() * 34843992848)}
                    className={`w-16 h-16 rounded-lg mx-1  md:mx-6  border  bg-${item.BG}  flex justify-center items-center`}
                  >
                    {item.BG === themeBG && <CheckCircleOutlineIcon />}
                  </span>
                );
              })}
            </div>
            <div className="flex justify-center ">
              <button
                onClick={() => setRightBarActive(!rightbarActive)}
                className={`border border-${themeBG} px-8 py-2 my-8 text-white font-bold rounded-lg`}
              >
                Close
              </button>
            </div>
          </div>
        }
      </>

      <>
        {" "}
        <div
          onClick={() => setRightBarActive(!rightbarActive)}
          className={`fixed w-16 flex justify-start items-center opacity-60 hover:opacity-90 text-2xl rounded-l-full h-10 border-x-4 border-${themeBG} top-80 z-40 right-0`}
        >
          <div className="w-full h-full flex flex-row">
            <ScrollRotate>
              <i
                className={`fa fa-cog w-full h-full text-3xl text-${themeBG} opacity-60 hover:opacity-90`}
                aria-hidden="true"
              ></i>
            </ScrollRotate>
          </div>
        </div>
      </>
    </>
  );
};

export default RightSideBar;
