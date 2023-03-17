import React from "react";

const StudiesCard = ({ data }) => {
  return (
    <div>
      <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img src={data?.image} alt="plant" class="h-64 w-full" />
        <div class="p-5">
          <h1 className="text-center font-bold py-2">{data?.name}</h1>
          <div className="flex justify-center mt-5">
            <button class=" rounded-md bg-indigo-600 px-3 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesCard;
