import React from "react";

const WeeklyForecast = ({ forecast }) => {
  const weekDay = (timestamp) => {
    return new Date(
      (timestamp + forecast.city.timezone) * 1000,
    ).toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: "UTC",
    });
  };


  const dailyForecast = forecast.list.filter((day) =>
  day.dt_txt.includes("12:00:00")
);


console.log(
  forecast.list
    .filter((day) => day.dt_txt.includes("12:00:00"))
    .map((day) => day.dt_txt)
);
console.log(forecast.list[0].dt_txt);
console.log(forecast.list[forecast.list.length - 1].dt_txt);
  console.log(forecast.list.map((day) => day.weather[0].icon));
  return (
    <div className=" flex gap-10 rounded-[25px] overflow-hidden text-[#0F0F11]">
      
      {dailyForecast.map((day) => (
        <div
          key={day.dt}
          className="w-[100px] h-[226px] flex flex-col items-center justify-center bg-[#1B1B1D] gap-7 rounded-[30px]"
        >
          {/* Card Content */}
          <div className="border-b border-[#626161] w-full flex items-center justify-center py-1">
            {/* Card Title */}
            <p className="text-[#ffff] text-[20px] font-semibold mb-3">
              {weekDay(day.dt).toLocaleUpperCase().slice(0, 3)}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              className="w-14 h-14 object-contain"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p className="text-[#ffff] text-[20px] font-bold">
              {Math.round(day.main.temp)}°
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
