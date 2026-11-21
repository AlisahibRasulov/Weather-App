import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import TabBar from "./components/ui/TabBar";
import { currentWeather,otherCities} from "./lib/mockData";
import SevenDaysWeather from "./components/weather/SevenDaysWeather";
import TodayWeather from "./components/weather/TodayWeather";
import TomorrowWeather from "./components/weather/TomorrowWeather";
import ToggleSwitch from "./components/ui/ToggleSwitch";
import RainChart from "./components/weather/RainChart";
import WindStatus from "./components/weather/WindStatus";
import Humidity from "./components/weather/Humidity";
import UVIndex from "./components/weather/UVIndex";
import Visibility from "./components/weather/Visibility";
import MapBanner from "./components/weather/MapBanner";
import OtherCities from "./components/weather/OtherCities";
import { useAsync } from "./hooks/useAsync";
import { useEffect } from "react";


function App() {
  // const [count, setCount] = useState(0)
  const {
    current,
    forecast,
    error,
    isLoading,
    isSuccess,
    isError,
    getWeather,
  } = useAsync();

    useEffect(() => {
    getWeather("Baku");
  }, []);
    if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2 className="">{error}</h2>;
  }

  if (!isSuccess) {
    return null;
  }
  return (
    <>
      <Navbar weather={current} getWeather={getWeather} />
      <div className="p-6 w-full flex justify-between items-start gap-6">
        {/* Left Side */}
        <div className="flex flex-col justify-between items-start gap-4 mb-6">
          <div className="w-[70rem] flex justify-between items-center gap-4 mb-6">
            <TabBar />
            <ToggleSwitch />
          </div>
          <div className="min-w-0">
            <Routes>
              <Route path="/" element={<SevenDaysWeather weather={current} forecast={forecast} />} />
              <Route path="/todayweather" element={<TodayWeather />} />
              <Route path="/tomorrowweather" element={<TomorrowWeather />} />
            </Routes>
          </div>

          <h2 className="flex-1 text-white text-lg font-semibold">Today's Overview</h2>
          <div className="flex justify-center items-start gap-14 mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4 mb-6">
              <WindStatus weather={current} />
              <UVIndex weather={current} />
            </div>
            <div className="flex justify-between items-start gap-4 mb-6">
              <Humidity weather={current} />
              <Visibility weather={current} />
            </div>
          </div>
            <MapBanner />
          </div>
        </div>
        {/* Right Side */}
        <div className="w-[280px] shrink-0 flex flex-col gap-6">
          <h2 className="text-white text-lg font-semibold mb-10">
            Chance Of Rain
          </h2>
          <RainChart />
          {/* <h2 className="text-white text-lg font-semibold mb-10">
            Other Cities
          </h2>    */}
          <OtherCities cities={otherCities} />
        </div>

      </div>
    
    </>
  );
}

export default App;
