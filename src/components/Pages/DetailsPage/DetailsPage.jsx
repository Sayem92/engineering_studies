import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Pdf from "./Pdf";

const DetailsPage = () => {
  const allSemesterDetails = useLoaderData();
  const { detailsId} = useContext(AuthContext);
  // console.log(detailsId);
  const navigate = useNavigate();

  const filterDetails = allSemesterDetails?.filter(
    (semester) => semester?._id === detailsId
  );

useEffect(()=>{
  if(!detailsId){
    return navigate('/studies')
  }
},[detailsId, navigate])




  // console.log(filterDetails[0]?.file);

  return (
    <div className="mt-20 mb-96 mx-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20">
        {filterDetails[0]?.file.map((pdf, i) => (
          <Pdf pdf={pdf} key={i}></Pdf>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
