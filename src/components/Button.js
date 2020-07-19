import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

const ButtonStyled = styled.button`
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 18px;
  background-color: #009900;
  color: #fff;
  min-width: 200px;
  outline: none;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;

  &.remove-btn {
    background-color: #C30000;
  }
`;

const Button = () => {
  const city = useSelector(state => state.selectedCity);
  const favorites = useSelector(state => state.favoriteCities);
  const dispatch = useDispatch();

  const isFavorite = () => favorites.includes(city);
 
  const favoritesClickHandler = () => {
    if (isFavorite(city)) {
      dispatch(removeFromFavorites(city));
    } else {
      dispatch(addToFavorites(city));
    }
  }

  return <ButtonStyled className={isFavorite() && "remove-btn"} onClick={favoritesClickHandler}>{isFavorite() ? 'Remove from favorites' : 'Add to favorites'}</ButtonStyled>;
};

export default Button;