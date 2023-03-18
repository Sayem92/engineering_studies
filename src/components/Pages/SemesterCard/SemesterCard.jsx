import React from "react";
import { Link } from "react-router-dom";

const SemesterCard = ({ data }) => {
  return (
    <button class="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 md:px-20 py-3 text-lg font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
      <Link to={`/${data?.name}/${data?.id}`}>{data?.name}</Link>
    </button>
  );
};

export default SemesterCard;
