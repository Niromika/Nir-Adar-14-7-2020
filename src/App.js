import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './screens/HomePage';
import Favorites from './screens/Favorites';

const AppStyled = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <Router>
      <AppStyled>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/favorites" component={Favorites} />
      </AppStyled>
    </Router>
  );
};

export default App;