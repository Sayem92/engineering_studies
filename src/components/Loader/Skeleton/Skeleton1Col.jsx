import React from "react";

const Skeleton1Col = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700">
          {}
        </h1>

        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div className="mt-8 ">
          <div className="">
            <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">
              {}
            </h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skeleton1Col;
