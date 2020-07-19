import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FiveDaysForecastStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .daily-forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    min-height: 200px;
    border-radius: 10px;
    margin: 0 5px 15px 5px;
    text-align: center;
    background-color: rgba(0, 93, 255, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    

    .day-title {
      margin: 15px 0 5px 0;
    }

    .weather-icon {
      width: 180px;
      height: 108px;
    }
  }
`;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];

const FiveDaysForecast = () => {
  const fiveDaysForecast = useSelector(state => state.fiveDaysForecast.DailyForecasts);
  return (
    <FiveDaysForecastStyled>
      {fiveDaysForecast && fiveDaysForecast.map((forecast, i) => {
        return (
          <div className="daily-forecast" key={i}>
            <h1 className="day-title">{days[new Date(forecast.Date).getDay()]}</h1>
            <img className="weather-icon" src={require(`../images/weather-icons/${forecast.Day.Icon}.png`)} alt={`five days ${i}`}/>
            <h2>{forecast.Temperature.Minimum.Value}{'\xB0F'} - {forecast.Temperature.Maximum.Value}{'\xB0F'}</h2>
          </div>
        )
      })}
    </FiveDaysForecastStyled>
  );
};

export default FiveDaysForecast;