import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';

const App = () => (
  <Fragment>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contacts" component={ContactsPage} />
    </Switch>
  </Fragment>
);

export default App;
