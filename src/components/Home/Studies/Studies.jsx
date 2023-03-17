import React from "react";
import StudiesCard from "./StudiesCard";
import cse from '../../../assets/CSE.jpeg';
import eee from '../../../assets/EEE.jpeg';
import civil from '../../../assets/CIVIL.jpeg';

const Studies = () => {
  const studies = [
    {
      name: "Computer Science and Engineering",
      image: cse,
    },
    {
      name: "Electrical and Electronics Engineering",
      image: eee,
    },
    {
      name: "Civil Engineering",
      image: civil,
    },
  ];
  return (
    <div className="py-16 px-10 bg-gradient-to-r from-slate-300 to-slate-100">
      <div className="text-center">
        <h1 className="font-bold text-3xl">AVAILABLE <span className="text-purple-600">COURSES</span></h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat
          soluta obcaecati recusandae a odio provident perspiciatis magnam
          distinctio voluptatem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {studies?.map((data, i) => (
          <StudiesCard key={i} data={data}></StudiesCard>
        ))}
      </div>
    </div>
  );
};

export default Studies;
