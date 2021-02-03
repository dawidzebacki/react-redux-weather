import { IWeatherData, IExtendedForecastData } from "../../api/weatherTypes";
import {
  fetchWeatherData,
  fetchExtendedForecastData,
} from "../../api/weatherApi";
import { kelvinToCelcius } from "../../utils/unitConversions";
import { getNextSevenDays } from "../../utils/dates";
import { WeatherActionTypes } from "../actionTypes";
import { setIsInitialState, setIsLoading } from "./appActions";

const transformWeatherData = (
  response: any
): { weather: IWeatherData; forecast: IExtendedForecastData[] } => {
  const weather = response[0] as IWeatherData;
  const forecast: IExtendedForecastData[] = [];

  weather.weather = response[0].weather[0];
  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
    feels_like: kelvinToCelcius(weather.main.feels_like),
    temp_max: kelvinToCelcius(weather.main.temp_max),
    temp_min: kelvinToCelcius(weather.main.temp_min),
  };
  weather.wind.speed = Math.round(weather.wind.speed * 3.6);

  const next7Days = getNextSevenDays();

  response[1].list.forEach((element: any, index: number) => {
    forecast.push({
      day: next7Days[index],
      temp: {
        temp_max: kelvinToCelcius(element.temp.max),
        temp_min: kelvinToCelcius(element.temp.min),
      },
      weather: {
        id: element.weather[0].id,
        main: element.weather[0].main,
      },
    });
  });

  return { weather, forecast };
};

export const fetchWeatherStart = () => ({
  type: WeatherActionTypes.FETCH_WEATHER_START,
});

export const fetchWeatherSuccess = (
  weather: IWeatherData,
  forecast: IExtendedForecastData[]
) => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: { weather, forecast },
});

export const fetchWeatherError = (error: any) => ({
  type: WeatherActionTypes.FETCH_WEATHER_ERROR,
  payload: error,
});

export const fetchWeatherFromApi = (
  city: string | { lat: number; lng: number }
) => {
  return (dispatch: any) => {
    dispatch(setIsLoading(true));
    dispatch(fetchWeatherStart());

    Promise.all([fetchWeatherData(city), fetchExtendedForecastData(city)])
      .then((response) => Promise.all([response[0].json, response[1].json()]))
      .then((response) => {
        const { weather, forecast } = transformWeatherData(response);
        dispatch(fetchWeatherSuccess(weather, forecast));
        dispatch(setIsInitialState(false));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.error('error with fetching weather data:', error);
        dispatch(fetchWeatherError(error));
        dispatch(setIsLoading(false));
      })
  };
};
