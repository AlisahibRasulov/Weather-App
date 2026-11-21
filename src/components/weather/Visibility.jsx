import React from "react";
import VisibilityImg from "../../images/Visibility.png";
import VisibilityIcon from "../../images/eye-outline.png";
const Visibility = ({ weather }) => {
  return (
    <div className="w-[290px] h-[245px] flex flex-col justify-between gap-4 rounded-[15px] overflow-hidden bg-[#1B1B1D] text-[#FFFFFF] p-5">
      <h2>Visibility</h2>
      <div className="flex flex-col justify-center items-center">
        <img
          src={VisibilityImg}
          alt="Visibility Icon"
          className="w-[127px] h-[127px]"
        />

        <p className="text-[20px] flex items-center justify-between text-[#FFFFFF] font-normal gap-15">
          {weather.visibility / 1000}km
          <span className="flex items-center w-[150px] font-normal text-[#ffff] text-[12px]">
            <img src={VisibilityIcon} alt="Visibility Icon" />
            Haze is affecting visibility
          </span>
        </p>
      </div>
    </div>
  );
};

export default Visibility;
