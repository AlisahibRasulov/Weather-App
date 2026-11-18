import React from "react";
import UVImg from "../../images/UV.png";
const UVIndex = ({ weather }) => {
  return (
    <div className="w-[290px] h-[245px] flex flex-col justify-between gap-4 rounded-[15px] overflow-hidden bg-[#1B1B1D] text-[#FFFFFF] p-5">
      <h2>UV Index</h2>
      <div className="flex flex-col justify-center items-center">
        <img src={UVImg} alt="UV Icon" className="w-[127px] h-[127px]" />
        <p className="text-[20px] text-[#FFFFFF] font-bold">
          5.50 <span className="font-normal">UV</span>
        </p>
      </div>
    </div>
  );
};

export default UVIndex;
