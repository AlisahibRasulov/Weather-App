const TodayCard = ({ weather }) => {
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

  const weekDay = (timestamp) => {
    return new Date((timestamp + weather.timezone) * 1000).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        timeZone: "UTC",
      },
    );
  };

  return (
    <div className="w-[257px] h-[226px] flex flex-col rounded-[25px] overflow-hidden bg-[#AECADF] text-[#0F0F11]">
      {/* Card Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-base font-semibold">{weekDay(weather.dt)}</h2>

        <h2 className="text-sm font-semibold">{formatTime(weather.dt)}</h2>
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
