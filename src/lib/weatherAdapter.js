export function weatherAdapter(data) {
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind: data.wind.speed * 3.6,
    pressure: data.main.pressure,
  };
}