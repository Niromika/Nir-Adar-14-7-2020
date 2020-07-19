import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  height: 40px;
  min-width: inherit;
  background-color: rgb(5, 51, 107); 
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 20px 40px;

  .company-title {
    max-width: 50px;
    font-size: 14px;
    text-align: center;
  }

  .links {
    display: flex;
    list-style-type: none;
    padding: 0;

    .link {
      text-decoration: none;
      color: #fff;
    }

    .right {
      padding-left: 35px;
    }
  }

  @media (max-width: 680px) {
    .company-title {

    }
  } 
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1 className="company-title">Herolo weather app</h1>
      <nav>
        <ul className="links">
          <li>
            <Link to='/' className="link">HOME</Link>
          </li>
          <li>
            <Link to='/favorites' className="link right">FAVORITES</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;