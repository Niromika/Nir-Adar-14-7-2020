import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, selectedCity } from '../redux/actions';
import { getDailyWeather } from '../helpers/endpoints';

const FavoritesStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  .daily-forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    text-decoration: none;
    font-size: 18px;
    color: #F5F5F5;
    padding: 20px;
    width: 250px;
    height: 300px;
    overflow: hidden;
    box-sizing: border-box;
    text-shadow:
      -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
    margin: 15px;
    background-color: rgba(200,255,255, .1);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

    &:hover {
      background: rgba(255,255,255,0.2);
      box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
    }

    .city-name, .temperature {
      margin: 0;
    }

    .weather-condition {
      font-size: 22px;
      margin: 10px;
    }
  }
`;

const Favorites = () => {
  const favorites = useSelector(state => state.favoriteCities);
  const [favCities, setFavCities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getForcast = async () => {
        const favs = [];
        for (const city of favorites) {
          const dailyWeatherRes = await fetch(getDailyWeather(city.Key));
          const [forecast] = await dailyWeatherRes.json();
          favs.push({
            city,
            forecast
          });
        }
        setFavCities(() => favs);
      }
      getForcast();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <FavoritesStyled>
      {favCities.map(({ city, forecast }, i) => {
        return (
          <Link to="/" className="daily-forecast" key={i} onClick={() => {
            dispatch(selectedCity(city));
            dispatch(getForecast(city.Key));
          }}>
            <h1 className="city-name">{city.LocalizedName}</h1>
            <img className="weather-icon" src={require(`../images/weather-icons/${forecast.WeatherIcon}.png`)} alt={`favorites ${i}`}/>
            <h2 className="temperature">{forecast.Temperature.Imperial.Value}{'\xB0F'}</h2>
            <h3 className="weather-condition">{forecast.WeatherText}</h3>
          </Link>
        )
      })}
    </FavoritesStyled>
  );
};

export default Favorites;