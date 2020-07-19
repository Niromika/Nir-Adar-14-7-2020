import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from './Button';
import Search from './Search';

const CurrentWeatherStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 40px 40px 40px;
  min-height: 277px;
  box-sizing: border-box;

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 511px;

    .title {
      font-size: 40px;
      margin: 0;
      text-align: center
    }
  }
    
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #C2E9FF;
    margin-left: auto;
  }
  
  .weather-condition {
    font-size: 30px;
    margin: 0;
  }

  .temperature {
    margin: 10px 0 5px 0;
    font-size: 22px;
  }

  @media (max-width: 890px) {
    flex-direction: column;
    justify-content: center;

    .details, .weather-condition {
      margin: 0;
    }
  }  
`;

const CurrentWeather = () => {
  const { WeatherIcon, WeatherText, Temperature } = useSelector(state => state.oneDayForecast[0]);
  const { LocalizedName, Country } = useSelector(state => state.selectedCity);

  return (
    <CurrentWeatherStyled>
      <div className="title-container">
        <h1 className="title">Weather in {LocalizedName}, {Country.LocalizedName}</h1>
        <Search />
      </div>
      <div className="details">
        <h2 className="weather-condition">{WeatherText}</h2>
        <h3 className="temperature">{Temperature.Imperial.Value}{'\xB0F'}</h3>
        <img src={require(`../../public/images/weather-icons/${WeatherIcon}.png`)} />
        <Button />
      </div>
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;