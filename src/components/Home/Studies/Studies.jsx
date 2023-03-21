import React from "react";
import StudiesCard from "./StudiesCard";
import pl from "../../../assets/pl.webp";
import cse from "../../../assets/CSE.jpeg";
import eee from "../../../assets/EEE.jpg";
import civil from "../../../assets/CIVIL.jpeg";

const Studies = () => {
  const studies = [
    {
      name: "Programming",
      image: pl,
      title: "PL",
    },
    {
      name: "Computer Science and Engineering",
      image: cse,
      title: "CSE",
    },
    {
      name: "Electrical and Electronics Engineering",
      image: eee,
      title: "EEE",
    },
    {
      name: "Civil Engineering",
      image: civil,
      title: "CE",
    },
  ];
  return (
    <div className="py-24 px-10 ">
      <div className=" p-10 bg-gradient-to-r from-slate-300 to-slate-100">
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            AVAILABLE <span className="text-purple-600">COURSES</span>
          </h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            placeat soluta obcaecati recusandae a odio provident perspiciatis
            magnam distinctio voluptatem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {studies?.map((data, i) => (
            <StudiesCard key={i} data={data}></StudiesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studies;
