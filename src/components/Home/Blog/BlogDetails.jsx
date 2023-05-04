import React from "react";
import { useLoaderData } from "react-router-dom";
import Skeleton1Col from "../../Loader/Skeleton/Skeleton1Col";

const BlogDetails = () => {
  const details = useLoaderData();
  // console.log(details);

  if (!details?._id) {
    return <Skeleton1Col></Skeleton1Col>;
  }

  return (
    <div className="my-10">
      <div
        className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style={{ height: "24em" }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))",
          }}
        ></div>
        <img
          src={details?.blogImage}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-md"
          alt=""
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {details?.title}
          </h2>
          <div className="flex mt-3">
            <img
              src={details?.authorImage}
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt=""
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {" "}
                {details?.authorName}{" "}
              </p>
              <p className="font-semibold text-gray-400 text-xs">
                {" "}
                {details?.date}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        {details?.blog?.map((para, i) => (
          <p key={i} className="pb-6">
            {para.p}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
