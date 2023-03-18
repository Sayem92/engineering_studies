import React from "react";
import { Link } from "react-router-dom";

const SemesterButton = ({ data }) => {
  return (
    <Link
      to={`/studies/${data?.title}/${data?.route}`}
      className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 md:px-20 py-3 text-lg font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
    >
      {data?.name}
    </Link>
  );
};

export default SemesterButton;
