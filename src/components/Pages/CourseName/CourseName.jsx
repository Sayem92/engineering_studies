import React from "react";
import CourseNameButton from "./CourseNameButton";

const CourseName = () => {
  const courseName = [
    {
      id: 1,
      name: "Syllabus",
    },
    {
      id: 2,
      name: "Course Name",
    },
    {
      id: 3,
      name: "Course Name",
    },
    {
      id: 4,
      name: "Course Name",
    },
    {
      id: 5,
      name: "Course Name",
    },
    {
      id: 6,
      name: "Course Name",
    },
    {
      id: 7,
      name: "Course Name",
    },
  ];
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
