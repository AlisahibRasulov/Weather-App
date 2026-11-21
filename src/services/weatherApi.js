import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log("API KEY:", API_KEY);
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const weatherApi = axios.create({
//     baseURL: BASE_URL,
//     params:{
//         appid: API_KEY,
//         units: "metric",
//     }
// })

export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
