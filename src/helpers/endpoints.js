// const API_KEY = 'hQJVxAF3GF0sEEgFcUS5bgL7FXJUPOGc';
// const API_KEY = 'vuA4zaDAJM9aGSnF40jeNs74GWlJ9F2m';
// const API_KEY = "ZT8YKichgkxFqK1aVDASRvOYOA9qA5iM";
const API_KEY = 'AHSzAxrPBDGneH9FL7KBX4DbuE3Whpxx';

export const getDailyWeather = key => {
  return `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`;
};

export const getFiveDaysForecast = key => {
  return `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`;
};

export const searchCities = inputValue => {
  return `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${inputValue}`;
};