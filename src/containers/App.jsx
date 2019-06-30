import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #3171af;
  color: #fff;
`;

const App = () => (
  <AppWrapper>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contacts" component={ContactsPage} />
    </Switch>
  </AppWrapper>
);

export default App;
