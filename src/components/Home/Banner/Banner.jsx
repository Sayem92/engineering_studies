import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className={`xl:min-h-screen banner-container px-4 py-5 mx-auto md:px-24 z-0`}
    >
      <div className="grid grid-cols-1 justify-center items-center">
        <div className="my-20 xl:mt-52 md:w-11/12 lg:w-8/12 xl:w-7/12 text-white">
          <div>
            <h1 className=" text-3xl xl:text-5xl leading-snug font-semibold mb-5">
              Welcome to way of productive{" "}
              <i className="text-purple-600">study </i>
              save your time
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
