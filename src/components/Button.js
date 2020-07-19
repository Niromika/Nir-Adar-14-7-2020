import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

const ButtonStyled = styled.button`
  text-decoration: none;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  outline: none;
  position: relative;
  overflow: hidden;
  background: #169F0B;
  color: #f4f4f4;
  padding: 5px;
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 18px;
  min-width: 200px; 

  &.remove-btn {
    background-color: #C30000;
  }

  &:hover {
    box-shadow: 1px 1px 15px 4px rgba(146, 148, 248, 0.4);
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(146, 148, 248, 0.4),
      transparent
    );
    transition: all 650ms;
  }

  &:hover:before {
    left: 100%;
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