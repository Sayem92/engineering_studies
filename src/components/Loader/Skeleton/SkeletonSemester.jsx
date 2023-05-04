import React from "react";

const SkeletonSemester = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, i) => (
            <div key={i} className="w-full ">
              <div className="w-full h-10 bg-gray-300 rounded-lg  dark:bg-gray-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkeletonSemester;
