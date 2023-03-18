import React from "react";
import SemesterCard from "../SemesterCard/SemesterCard";

const CE = () => {
  const moduleSemester = [
    {
      id: 1,
      name: "Module",
    },
    {
      id: 2,
      name: "1st Semester",
    },
    {
      id: 3,
      name: "2nd Semester",
    },
    {
      id: 4,
      name: "3rd Semester",
    },
    {
      id: 5,
      name: "4th Semester",
    },
    {
      id: 6,
      name: "5th Semester",
    },
    {
      id: 7,
      name: "6th Semester",
    },
    {
      id: 8,
      name: "7th Semester",
    },
    {
      id: 9,
      name: "8th Semester",
    },
  ];
  return (
    <div className=" my-40 mx-10 md:mr-20 lg:mr-72">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {moduleSemester?.map((data, i) => (
          <SemesterCard key={i} data={data}></SemesterCard>
        ))}
      </div>
    </div>
  );
};

export default CE;
