import { getDailyWeather, getFiveDaysForecast } from '../helpers/endpoints';

export const GET_FORECAST = 'GET_FORECAST';
export const getForecast = key => async dispatch => {

  try {
    const dailyWeatherRes = await fetch(getDailyWeather(key));
    const dailyWeatherBody = await dailyWeatherRes.json();

    const fiveDaysForecastRes = await fetch(getFiveDaysForecast(key));
    const fiveDaysForecastBody = await fiveDaysForecastRes.json();

    dispatch({
      type: GET_FORECAST,
      oneDayForecast: dailyWeatherBody,
      fiveDaysForecast: fiveDaysForecastBody
    });
  } catch(err) {
    console.error(err);
  }
};

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const addToFavorites = city => {
  return {
    type: ADD_TO_FAVORITES,
    city
  }
};

export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const removeFromFavorites = city => {
  return {
    type: REMOVE_FROM_FAVORITES,
    city
  }
};

export const SELECTED_CITY = 'SELECTED_CITY';
export const selectedCity = city => {
  return {
    type: SELECTED_CITY,
    selectedCity: city
  }
};