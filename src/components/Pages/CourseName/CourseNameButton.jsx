import React from "react";

const CourseNameButton = ({ data }) => {
  return (
  
      <button
        type="button"
        className="px-8 mx-10 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-purple-300 to-purple-600"
      >
        {data?.name}
      </button>
 
  );
};

export default CourseNameButton;
