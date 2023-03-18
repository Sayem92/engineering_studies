import React from "react";
import { Link } from "react-router-dom";

const StudiesCard = ({ data }) => {
  return (
    <div>
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img src={data?.image} alt="plant" className="h-64 w-full" />
        <div className="p-5">
          <h1 className="text-center font-bold py-2">{data?.name}</h1>
          <div className="flex justify-center mt-5">
            <Link to={`/studies/${data?.title}`}>
              <button className="rounded-md px-3 py-2 text-white bg-gradient-to-br from-[#6025F5] to-[#FF5555]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesCard;
