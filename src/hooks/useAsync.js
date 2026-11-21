import { useState } from "react";
import { getCurrentWeather, getForecast } from "../services/weatherApi";

export function useAsync() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    setStatus("loading");
    setError(null);

    try {
      const currentResponse = await getCurrentWeather(city);
      const forecastResponse = await getForecast(city);
      setCurrent(currentResponse);
      setForecast(forecastResponse);
      setStatus("success");
    } catch (error) {
      if (error.response?.status === 404) {
        setError("City not found. Please enter a valid city name.");
      } else {
        setError("Something went wrong. Please try again.");
      }

      setStatus("error");
    }
  };
  return {
    current,
    forecast,
    error,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
    getWeather,
  };
}
