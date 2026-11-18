import React from "react";

const OtherCities = ({ cities }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <h2 className="text-white text-lg font-semibold">Other Cities</h2>
        <button className=" text-white">See All</button>
      </div>
      {cities.map((cityItem) => (
        <div
          key={cityItem.id}
          className="w-[297px] h-[110px] bg-[#1B1B1D] text-white p-4 rounded-lg flex items-center justify-between"
        >
          {/* City Information */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">{cityItem.country}</p>

            <h3 className="text-sm font-medium">{cityItem.city}</h3>

            <p className="text-xs text-gray-400">{cityItem.weather}</p>
          </div>

          {/* Weather Icon */}
          <img
            src={`https://openweathermap.org/img/wn/${cityItem.icon}@2x.png`}
            alt={cityItem.weather}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default OtherCities;
