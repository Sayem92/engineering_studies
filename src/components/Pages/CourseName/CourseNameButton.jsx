import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CourseNameButton = ({ data }) => {
  // console.log(data);
  const { setDetailsId } = useContext(AuthContext);
  // console.log(detailsId);

  return (
    <Link
      onClick={() => setDetailsId(data?._id)}
      to={`/studies/${data?.categoryName}`}
      type="button"
      className="px-8 mx-10 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-purple-300 to-purple-600"
    >
      {data?.subjectCode}
    </Link>
  );
};

export default CourseNameButton;
