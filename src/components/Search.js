import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { selectedCity, getForecast } from '../redux/actions';
import AsyncSelect from 'react-select/async';
import { searchCities } from '../helpers/endpoints';

const SearchStyled = styled.div`
  width: 290px;
  margin: 15px 0;
`;

const Search = () => {
  const dispatch = useDispatch();

  const fetchCities = async (inputValue, callback) => {
    try {
      const res = await fetch(searchCities(inputValue));
      const cities = await res.json();
      const newCities = [];
      cities.forEach(item => {
        newCities.push({ ...item, label: `${item.LocalizedName}`, value: `${item.Country.LocalizedName}` });
      });
      callback(newCities);
    } catch(err) {
      console.log(err);
    }
  };

  const onSearchChange = city => {
    if (city) {
      dispatch(getForecast(city.Key));
      dispatch(selectedCity(city))
    }
  };

  const customStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: '#0596C5',
      borderRadius: '20px',
    }),
    placeholder: styles => ({ ...styles, color: '#fff', paddingLeft: '10px' }),
    option: styles => ({ ...styles, color: '#000', cursor: 'default', textShadow: 'none' }),
    dropdownIndicator: styles => ({ ...styles, color: '#fff' }),
    input: styles => ({ ...styles, color: '#fff', textShadow: 'none' }),
    singleValue: styles => ({ ...styles, color: '#fff', paddingLeft: '10px' })
  };

  return (
    <SearchStyled>
      <AsyncSelect
        styles={customStyles}
        loadOptions={fetchCities}
        placeholder="Search a city..."
        onChange={onSearchChange}
      />
    </SearchStyled>
  )
}

export default Search;