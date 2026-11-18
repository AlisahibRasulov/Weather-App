// const TodayCard = ({ weather }) => {
//   const formatTime = (timestamp) => {
//     return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "2-digit",
//       timeZone: "UTC",
//     });
//   };

//   const weekDay = (timestamp) => {
//     return new Date(timestamp * 1000).toLocaleDateString("en-US", {
//       weekday: "long",
//       timeZone: "UTC",
//     });
//   };
//   return (
//     <div className="flex flex-col items-center justify-center w-[257px] h-[226px] rounded-[25px] bg-[#BBD7EC] text-[#EDEDED] space-y-2">
//       {/* card */}
//       <div className="w-full flex justify-between items-center rounded-t-[25px] text-[16px] font-semibold text-[#0F0F11] p-4">
//         {/* card-header */}
//         <h2 className="">{weekDay(weather.dt)}</h2>
//         <h2 className="">{formatTime(weather.timezone)}</h2>
//       </div>
//       <div className="bg-[#AECADF] w-full rounded-b-[25px] p-4">
//         {/* card-body */}
//         <div className="flex justify-center items-center justify-be space-x-4">
//           {/* card-body-top */}
//           <h1 className="text-4xl font-bold text-[#0F0F11]">
//             {Math.round(weather.main.temp)}°
//           </h1>
//           <img
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt={weather.weather[0].description}
//           />
//         </div>
//         <div className="flex items-center justify-center space-x-3 w-full mt-2 text-[14px] font-bold text-[#0F0F11]">
//           {/* card-body-bottom */}
//           <div className="text-[12px]">
//             {/* card-body-bottom-left */}
//           <p className="text-[#4F5658]">Real Feel: <span className="text-[#0F0F11] font-bold">{Math.round(weather.main.feels_like)}°</span></p>
//           <p className="text-[#4F5658]">Wind N-E: <span className="text-[#0F0F11] font-bold">{weather.wind.speed} km/h</span></p>
//           <p className="text-[#4F5658]">Pressure: <span className="text-[#0F0F11] font-bold">{weather.main.pressure}MB</span></p>
//           <p className="text-[#4F5658]">Humidity: <span className="text-[#0F0F11] font-bold">{weather.main.humidity}%</span></p>
//           </div>
//           <div className="text-[12px]">
//             {/* card-body-bottom-right */}
//           <p className="text-[#4F5658]">Sunrise: <span className="text-[#0F0F11] font-bold">{formatTime(weather.sys.sunrise)}</span></p>
//           <p className="text-[#4F5658]">Sunset: <span className="text-[#0F0F11] font-bold">{formatTime(weather.sys.sunset)}</span></p>
//           </div>
//           {/* <p>{weather.weather[0].description}</p> */}
//           {/* <p>Visibility: {weather.visibility / 1000} km</p>  */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodayCard;


const TodayCard = ({ weather }) => {
  const formatTime = (timestamp) => {
    return new Date(
      (timestamp + weather.timezone) * 1000
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
    });
  };

  const weekDay = (timestamp) => {
    return new Date(
      (timestamp + weather.timezone) * 1000
    ).toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: "UTC",
    });
  };

  return (
    <div className="w-[257px] h-[226px] flex flex-col rounded-[25px] overflow-hidden bg-[#AECADF] text-[#0F0F11]">
      {/* Card Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-base font-semibold">
          {weekDay(weather.dt)}
        </h2>

        <h2 className="text-sm font-semibold">
          {formatTime(weather.dt)}
        </h2>
      </div>

      {/* Card Body */}
      <div className="flex-1  bg-[#BBD7EC] px-4 py-3">
        {/* Temperature and Icon */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl font-bold">
            {Math.round(weather.main.temp)}°
          </h1>

          <img
            className="w-14 h-14 object-contain"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-x-3 mt-3 text-[11px]">
          {/* Left Column */}
          <div className="space-y-2">
            <p className="text-[#4F5658]">
              Real Feel:
              <span className="ml-1 font-bold text-[#0F0F11]">
                {Math.round(weather.main.feels_like)}°
              </span>
            </p>

            <p className="text-[#4F5658]">
              Wind:
              <span className="ml-1 font-bold text-[#0F0F11]">
                {(weather.wind.speed * 3.6).toFixed(1)} km/h
              </span>
            </p>

            <p className="text-[#4F5658]">
              Pressure:
              <span className="ml-1 font-bold text-[#0F0F11]">
                {weather.main.pressure} MB
              </span>
            </p>

            <p className="text-[#4F5658]">
              Humidity:
              <span className="ml-1 font-bold text-[#0F0F11]">
                {weather.main.humidity}%
              </span>
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <p className="text-[#4F5658]">
              Sunrise:
              <span className="ml-1 font-bold text-[#0F0F11]">
                {formatTime(weather.sys.sunrise)}
              </span>
            </p>

            <p className="text-[#4F5658]">
              Sunset:
              <span className="ml-1 font-bold text-[#0F0F11]">
                {formatTime(weather.sys.sunset)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayCard;
