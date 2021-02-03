const API_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = (
  city: string | { lat: number; lng: number }
) => {
  return typeof city === "string"
    ? fetch(
        `${API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
    : fetch(
        `${API_URL}/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
};

export const fetchExtendedForecastData = (
  city: string | { lat: number; lng: number }
) => {
  return typeof city === "string"
    ? fetch(
        `${API_URL}/forecast/daily?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
    : fetch(
        `${API_URL}/forecast/daily?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
};
