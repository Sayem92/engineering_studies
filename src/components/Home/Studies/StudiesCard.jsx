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
              <button className=" rounded-md bg-indigo-600 px-3 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
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
