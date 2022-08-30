import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full relative  ">
      <div className=" relative  flex justify-center items-center w-full">
        <div className=" md:w-8/12 w-11/12 border-4 rounded-md border-c-yellow md:h-4/6 h-3/6 flex flex-col justify-center items-center">
          <span className=" text-c-yellow" style={{ fontSize: "60px" }}>
            404
          </span>
          <span className=" text-c-yellow" style={{ fontSize: "20px" }}>
            NOTHING TO SEE HERE
          </span>
          <Link
            to="/"
            className=" my-6 hover:text-white text-black bg-c-yellow px-6 py-2 rounded-xl "
            style={{ fontSize: "20px" }}
          >
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
