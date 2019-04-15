import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MainPage from '../pages/MainPage';

const App = () => (
  <div>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
