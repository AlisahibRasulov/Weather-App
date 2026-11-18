// CURRENT WEATHER
export const currentWeather = {
  coord: {
    lon: 90.4074,
    lat: 23.7104,
  },

  weather: [
    {
      id: 701,
      main: "Mist",
      description: "mist",
      icon: "50n",
    },
  ],

  main: {
    temp: 22.99,
    feels_like: 23.64,
    temp_min: 22.99,
    temp_max: 22.99,
    pressure: 1012,
    humidity: 88,
    sea_level: 1012,
    grnd_level: 1011,
  },

  visibility: 1500,

  wind: {
    speed: 0,
    deg: 0,
  },

  clouds: {
    all: 20,
  },

  dt: 1794864604,

  sys: {
    country: "BD",
    sunrise: 1794874446,
    sunset: 1794913960,
  },

  timezone: 21600,

  id: 1185241,
  name: "Dhaka",
  cod: 200,
};

export const weeklyForecast = {
    "cnt": 40,
    "list": [
        {
            "dt": 1795014000,
            "main": {
                "temp": 24.99,
                "feels_like": 25.58,
                "temp_min": 24.99,
                "temp_max": 26.5,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 78,
                "temp_kf": -1.51,
                "dew_point": 20.89
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 4.01,
                "deg": 198,
                "gust": 5.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-18 15:00:00"
        },
        {
            "dt": 1795024800,
            "main": {
                "temp": 24.69,
                "feels_like": 25.09,
                "temp_min": 24.09,
                "temp_max": 24.69,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 72,
                "temp_kf": 0.6,
                "dew_point": 19.31
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 2.98,
                "deg": 208,
                "gust": 4.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-18 18:00:00"
        },
        {
            "dt": 1795035600,
            "main": {
                "temp": 23.91,
                "feels_like": 24.11,
                "temp_min": 23.37,
                "temp_max": 23.91,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 67,
                "temp_kf": 0.54,
                "dew_point": 17.41
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 3.19,
                "deg": 187,
                "gust": 4.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-18 21:00:00"
        },
        {
            "dt": 1795046400,
            "main": {
                "temp": 20.95,
                "feels_like": 20.95,
                "temp_min": 20.95,
                "temp_max": 20.95,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 71,
                "temp_kf": 0,
                "dew_point": 16.81
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.24,
                "deg": 131,
                "gust": 4.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-19 00:00:00"
        },
        {
            "dt": 1795057200,
            "main": {
                "temp": 18.32,
                "feels_like": 18.22,
                "temp_min": 18.32,
                "temp_max": 18.32,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1018,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 17.28
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.02,
                "deg": 132,
                "gust": 5.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-19 03:00:00"
        },
        {
            "dt": 1795068000,
            "main": {
                "temp": 20.48,
                "feels_like": 20.54,
                "temp_min": 20.48,
                "temp_max": 20.48,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 75,
                "temp_kf": 0,
                "dew_point": 17.28
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.95,
                "deg": 109,
                "gust": 3.92
            },
            "visibility": 10000,
            "pop": 0.24,
            "rain": {
                "3h": 0.14
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-19 06:00:00"
        },
        {
            "dt": 1795078800,
            "main": {
                "temp": 21.5,
                "feels_like": 21.69,
                "temp_min": 21.5,
                "temp_max": 21.5,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 76,
                "temp_kf": 0,
                "dew_point": 17.42
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.96,
                "deg": 94,
                "gust": 3.07
            },
            "visibility": 10000,
            "pop": 0.27,
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-19 09:00:00"
        },
        {
            "dt": 1795089600,
            "main": {
                "temp": 21.47,
                "feels_like": 21.74,
                "temp_min": 21.47,
                "temp_max": 21.47,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 79,
                "temp_kf": 0,
                "dew_point": 17.66
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.71,
                "deg": 165,
                "gust": 1.91
            },
            "visibility": 10000,
            "pop": 0.4,
            "rain": {
                "3h": 0.47
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-19 12:00:00"
        },
        {
            "dt": 1795100400,
            "main": {
                "temp": 20.64,
                "feels_like": 21.01,
                "temp_min": 20.64,
                "temp_max": 20.64,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 86,
                "temp_kf": 0,
                "dew_point": 18.19
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.73,
                "deg": 144,
                "gust": 3.88
            },
            "visibility": 10000,
            "pop": 0.88,
            "rain": {
                "3h": 1.79
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-19 15:00:00"
        },
        {
            "dt": 1795111200,
            "main": {
                "temp": 21.06,
                "feels_like": 21.47,
                "temp_min": 21.06,
                "temp_max": 21.06,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 86,
                "temp_kf": 0,
                "dew_point": 18.62
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.16,
                "deg": 127,
                "gust": 1.32
            },
            "visibility": 10000,
            "pop": 0.77,
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-19 18:00:00"
        },
        {
            "dt": 1795122000,
            "main": {
                "temp": 21.24,
                "feels_like": 21.56,
                "temp_min": 21.24,
                "temp_max": 21.24,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 18.08
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.84,
                "deg": 39,
                "gust": 2.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-19 21:00:00"
        },
        {
            "dt": 1795132800,
            "main": {
                "temp": 20.95,
                "feels_like": 21.24,
                "temp_min": 20.95,
                "temp_max": 20.95,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 82,
                "temp_kf": 0,
                "dew_point": 17.73
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.79,
                "deg": 58,
                "gust": 2.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-20 00:00:00"
        },
        {
            "dt": 1795143600,
            "main": {
                "temp": 22.15,
                "feels_like": 22.43,
                "temp_min": 22.15,
                "temp_max": 22.15,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 17.97
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.03,
                "deg": 97,
                "gust": 2.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-20 03:00:00"
        },
        {
            "dt": 1795154400,
            "main": {
                "temp": 25.7,
                "feels_like": 26.08,
                "temp_min": 25.7,
                "temp_max": 25.7,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 67,
                "temp_kf": 0,
                "dew_point": 19.06
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 2.33,
                "deg": 131,
                "gust": 2.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-20 06:00:00"
        },
        {
            "dt": 1795165200,
            "main": {
                "temp": 24.25,
                "feels_like": 24.74,
                "temp_min": 24.25,
                "temp_max": 24.25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1014,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 20.07
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.88,
                "deg": 132,
                "gust": 2.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-20 09:00:00"
        },
        {
            "dt": 1795176000,
            "main": {
                "temp": 23.41,
                "feels_like": 24.03,
                "temp_min": 23.41,
                "temp_max": 23.41,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 85,
                "temp_kf": 0,
                "dew_point": 20.71
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.57,
                "deg": 126,
                "gust": 5.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-20 12:00:00"
        },
        {
            "dt": 1795186800,
            "main": {
                "temp": 23.06,
                "feels_like": 23.77,
                "temp_min": 23.06,
                "temp_max": 23.06,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 90,
                "temp_kf": 0,
                "dew_point": 21.41
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.82,
                "deg": 107,
                "gust": 6.75
            },
            "visibility": 10000,
            "pop": 0.99,
            "rain": {
                "3h": 0.48
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-20 15:00:00"
        },
        {
            "dt": 1795197600,
            "main": {
                "temp": 22.46,
                "feels_like": 23.14,
                "temp_min": 22.46,
                "temp_max": 22.46,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 91,
                "temp_kf": 0,
                "dew_point": 20.88
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.31,
                "deg": 99,
                "gust": 7.69
            },
            "visibility": 10000,
            "pop": 0.97,
            "rain": {
                "3h": 0.45
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-20 18:00:00"
        },
        {
            "dt": 1795208400,
            "main": {
                "temp": 22.33,
                "feels_like": 23.07,
                "temp_min": 22.33,
                "temp_max": 22.33,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 94,
                "temp_kf": 0,
                "dew_point": 21.42
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.11,
                "deg": 130,
                "gust": 5.25
            },
            "visibility": 10000,
            "pop": 0.68,
            "rain": {
                "3h": 0.57
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-20 21:00:00"
        },
        {
            "dt": 1795219200,
            "main": {
                "temp": 21.74,
                "feels_like": 22.45,
                "temp_min": 21.74,
                "temp_max": 21.74,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 95,
                "temp_kf": 0,
                "dew_point": 20.96
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.11,
                "deg": 95,
                "gust": 6.08
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.2
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-21 00:00:00"
        },
        {
            "dt": 1795230000,
            "main": {
                "temp": 21.89,
                "feels_like": 22.51,
                "temp_min": 21.89,
                "temp_max": 21.89,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 91,
                "temp_kf": 0,
                "dew_point": 20.47
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4,
                "deg": 92,
                "gust": 6.34
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.73
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-21 03:00:00"
        },
        {
            "dt": 1795240800,
            "main": {
                "temp": 22.11,
                "feels_like": 22.7,
                "temp_min": 22.11,
                "temp_max": 22.11,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 89,
                "temp_kf": 0,
                "dew_point": 20.28
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.3,
                "deg": 92,
                "gust": 4.21
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 0.65
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-21 06:00:00"
        },
        {
            "dt": 1795251600,
            "main": {
                "temp": 22.63,
                "feels_like": 23.19,
                "temp_min": 22.63,
                "temp_max": 22.63,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 86,
                "temp_kf": 0,
                "dew_point": 20.2
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.38,
                "deg": 91,
                "gust": 2.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-21 09:00:00"
        },
        {
            "dt": 1795262400,
            "main": {
                "temp": 22.31,
                "feels_like": 22.92,
                "temp_min": 22.31,
                "temp_max": 22.31,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 89,
                "temp_kf": 0,
                "dew_point": 20.43
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.03,
                "deg": 105,
                "gust": 2.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-21 12:00:00"
        },
        {
            "dt": 1795273200,
            "main": {
                "temp": 22.07,
                "feels_like": 22.71,
                "temp_min": 22.07,
                "temp_max": 22.07,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 91,
                "temp_kf": 0,
                "dew_point": 20.49
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.11,
                "deg": 117,
                "gust": 2.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-21 15:00:00"
        },
        {
            "dt": 1795284000,
            "main": {
                "temp": 21.71,
                "feels_like": 22.31,
                "temp_min": 21.71,
                "temp_max": 21.71,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 91,
                "temp_kf": 0,
                "dew_point": 20.26
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 1.52,
                "deg": 59,
                "gust": 1.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-21 18:00:00"
        },
        {
            "dt": 1795294800,
            "main": {
                "temp": 21.56,
                "feels_like": 22.15,
                "temp_min": 21.56,
                "temp_max": 21.56,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 91,
                "temp_kf": 0,
                "dew_point": 20.09
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.54,
                "deg": 66,
                "gust": 2.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-21 21:00:00"
        },
        {
            "dt": 1795305600,
            "main": {
                "temp": 21.44,
                "feels_like": 22.02,
                "temp_min": 21.44,
                "temp_max": 21.44,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 91,
                "temp_kf": 0,
                "dew_point": 20.02
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.54,
                "deg": 58,
                "gust": 1.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-22 00:00:00"
        },
        {
            "dt": 1795316400,
            "main": {
                "temp": 24.51,
                "feels_like": 25.03,
                "temp_min": 24.51,
                "temp_max": 24.51,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 77,
                "temp_kf": 0,
                "dew_point": 20.23
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 1.38,
                "deg": 83,
                "gust": 1.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-22 03:00:00"
        },
        {
            "dt": 1795327200,
            "main": {
                "temp": 28.16,
                "feels_like": 29.69,
                "temp_min": 28.16,
                "temp_max": 28.16,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 60,
                "temp_kf": 0,
                "dew_point": 19.74
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 50
            },
            "wind": {
                "speed": 1.35,
                "deg": 67,
                "gust": 1.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-22 06:00:00"
        },
        {
            "dt": 1795338000,
            "main": {
                "temp": 29.94,
                "feels_like": 31.12,
                "temp_min": 29.94,
                "temp_max": 29.94,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1013,
                "humidity": 51,
                "temp_kf": 0,
                "dew_point": 18.8
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 0.12,
                "deg": 301,
                "gust": 0.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-22 09:00:00"
        },
        {
            "dt": 1795348800,
            "main": {
                "temp": 27.95,
                "feels_like": 29.38,
                "temp_min": 27.95,
                "temp_max": 27.95,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 60,
                "temp_kf": 0,
                "dew_point": 19.42
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 0.95,
                "deg": 210,
                "gust": 1.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-22 12:00:00"
        },
        {
            "dt": 1795359600,
            "main": {
                "temp": 27.1,
                "feels_like": 28.6,
                "temp_min": 27.1,
                "temp_max": 27.1,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 65,
                "temp_kf": 0,
                "dew_point": 19.99
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 2.13,
                "deg": 231,
                "gust": 2.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-22 15:00:00"
        },
        {
            "dt": 1795370400,
            "main": {
                "temp": 26.45,
                "feels_like": 26.45,
                "temp_min": 26.45,
                "temp_max": 26.45,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1015,
                "humidity": 67,
                "temp_kf": 0,
                "dew_point": 19.92
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 1.53,
                "deg": 267,
                "gust": 2.03
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.22
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-22 18:00:00"
        },
        {
            "dt": 1795381200,
            "main": {
                "temp": 25.44,
                "feels_like": 25.84,
                "temp_min": 25.44,
                "temp_max": 25.44,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 69,
                "temp_kf": 0,
                "dew_point": 19.47
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 42
            },
            "wind": {
                "speed": 1.66,
                "deg": 0,
                "gust": 1.68
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-22 21:00:00"
        },
        {
            "dt": 1795392000,
            "main": {
                "temp": 24.73,
                "feels_like": 25.11,
                "temp_min": 24.73,
                "temp_max": 24.73,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 71,
                "temp_kf": 0,
                "dew_point": 19.16
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 1.07,
                "deg": 87,
                "gust": 1.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-23 00:00:00"
        },
        {
            "dt": 1795402800,
            "main": {
                "temp": 27.45,
                "feels_like": 28.76,
                "temp_min": 27.45,
                "temp_max": 27.45,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1016,
                "humidity": 61,
                "temp_kf": 0,
                "dew_point": 19.47
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 1.34,
                "deg": 217,
                "gust": 1.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-23 03:00:00"
        },
        {
            "dt": 1795413600,
            "main": {
                "temp": 30.6,
                "feels_like": 31.45,
                "temp_min": 30.6,
                "temp_max": 30.6,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 1014,
                "humidity": 47,
                "temp_kf": 0,
                "dew_point": 18.22
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 23
            },
            "wind": {
                "speed": 0.94,
                "deg": 211,
                "gust": 1.23
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-23 06:00:00"
        },
        {
            "dt": 1795424400,
            "main": {
                "temp": 30.45,
                "feels_like": 31.23,
                "temp_min": 30.45,
                "temp_max": 30.45,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 1012,
                "humidity": 47,
                "temp_kf": 0,
                "dew_point": 17.97
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.97,
                "deg": 209,
                "gust": 2.09
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2026-11-23 09:00:00"
        },
        {
            "dt": 1795435200,
            "main": {
                "temp": 27.98,
                "feels_like": 29.31,
                "temp_min": 27.98,
                "temp_max": 27.98,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1013,
                "humidity": 59,
                "temp_kf": 0,
                "dew_point": 19.35
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 2.95,
                "deg": 163,
                "gust": 4.06
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2026-11-23 12:00:00"
        }
    ],
    "city": {
        "id": 1185241,
        "name": "Dhaka",
        "coord": {
            "lat": 23.7104,
            "lon": 90.4074
        },
        "country": "BD",
        "population": 10356500,
        "timezone": 21600,
        "sunrise": 1794960887,
        "sunset": 1795000344
    }
}

// OTHER CITIES
export const otherCities = [
  {
    country: "China",
    city: "Beijing",
    weather: "Cloudy",
    icon: "03n",
  },
  {
    country: "US",
    city: "California",
    weather: "Overcast Clouds",
    icon: "04d",
  },
  {
    country: "Dubai",
    city: "Arab Emirates",
    weather: "Mostly Sunny",
    "icon": "01d"
  },
  {
    country: "Canada",
    city: "Charlottetown",
    weather: "Light Rain",
    icon: "10d",
  },
];