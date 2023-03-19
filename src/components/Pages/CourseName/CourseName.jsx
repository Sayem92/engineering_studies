import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseNameButton from "./CourseNameButton";

const CourseName = () => {
  const courseName = useLoaderData();
  // console.log(courseName);


  return (
    <div className="my-40 mx-10 md:mr-20 lg:mr-72">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10">
        {courseName?.map((data, i) => (
          <CourseNameButton key={i} data={data}></CourseNameButton>
        ))}
      </div>
    </div>
  );
};

export default CourseName;
