import React, { Fragment } from 'react';
import WeatherSection from '../containers/WeatherSection';
import SearchForm from '../containers/SearchForm';

const MainPage = () => (
  <Fragment>
    <SearchForm />
    <WeatherSection />
  </Fragment>
);

export default MainPage;
