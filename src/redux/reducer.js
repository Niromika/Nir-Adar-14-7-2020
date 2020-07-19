import * as actions from './actions';
import { defaultCity } from '../config';

const initialState = {
  oneDayForecast: [],
  fiveDaysForecast: {},
  selectedCity: defaultCity,
  favoriteCities: [],
};

export const reducer = (state = initialState, action) => {
  const { oneDayForecast, fiveDaysForecast, selectedCity, city } = action;
  switch (action.type) {
    case actions.GET_FORECAST:
      return Object.assign({}, state, {
        oneDayForecast,
        fiveDaysForecast
      });
    case actions.SELECTED_CITY:
      return Object.assign({}, state, {
        selectedCity
      });
    case actions.ADD_TO_FAVORITES:
      return Object.assign({}, state, {
        favoriteCities: [...state.favoriteCities, city]
      });
    case actions.REMOVE_FROM_FAVORITES:
      return Object.assign({}, state, {
        favoriteCities: state.favoriteCities.filter(item => item.Key !== city.Key)
      });
    default:
      return state;
  }
};

export default reducer;