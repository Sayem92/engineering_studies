import React from "react";
import pdflogo from "../../../assets/pdf.svg";


const Pdf = ({ pdf }) => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        className="text-center m-3 py-3 font-semibold text-black rounded-full  cursor-pointer"
        href={pdf?.pdf1}
      >
         <img className="w-20 h-20" src={pdflogo} alt="" />
        Open Pdf Name 
      </a>
    </div>
  );
};

export default Pdf;
