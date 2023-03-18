import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ data }) => {
  const shortBody = data.body.slice(0, 150);
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          src={data?.blogImage}
          alt=""
        />

        <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={data?.authorImage}
            alt=""
          />

          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              {data?.authorName}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
        {data?.title}
      </h1>

      <hr className="w-32 my-6 text-blue-500" />

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {shortBody} ...
      </p>
      <p className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
        <Link to={`/blog/${data?.id}`}>Read more</Link>
      </p>
    </div>
  );
};

export default BlogPost;
