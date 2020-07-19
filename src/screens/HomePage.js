import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../redux/actions';
import CurrentWeather from '../components/CurrentWeather';
import FiveDaysForecast from '../components/FiveDaysForecast';

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const HomePage = () => {
  const daileyForcast = useSelector(state => state.oneDayForecast[0]);
  const city = useSelector(state => state.selectedCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast(city.Key));
  }, []);

  return (
    <HomeStyled>
      {daileyForcast && 
        <CurrentWeather />
      }
      <FiveDaysForecast />
    </HomeStyled>
  );
};

export default HomePage;