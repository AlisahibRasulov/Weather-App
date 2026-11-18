import React from "react";
import WindImage from "../../images/Wind.png";
const WindStatus = ({ weather }) => {
  const formatTime = (timestamp) => {
    return new Date((timestamp + weather.timezone) * 1000).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
      },
    );
  };

  return (
    <div className="w-[290px] h-[245px] flex flex-col justify-between gap-4 rounded-[15px] overflow-hidden bg-[#1B1B1D] text-[#FFFFFF] p-5">
      <h2>Wind Status</h2>
      <img src={WindImage} alt="Wind Icon" />
      <div className="flex justify-between gap-4">
        <p>{weather.wind.speed} km/h</p>
        <p> {formatTime(weather.dt)}</p>
      </div>
    </div>
  );
};

export default WindStatus;
