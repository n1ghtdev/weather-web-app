import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchForecastByIP,
  fetchForecastSuccess,
} from '../modules/weather/actions';

import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

import Main from '../components/Main';

const WeatherSection = () => {
  const { loaded, data } = useSelector(state => state.weather);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const cache = sessionStorage.getItem('weather');
    if (cache) {
      dispatch(fetchForecastSuccess(JSON.parse(cache)));
    } else {
      dispatch(fetchForecastByIP());
    }
    if (loaded) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
    return () => sessionStorage.setItem('weather', JSON.stringify(data));
  }, []);
  // async componentDidMount() {
  //   // this.props.getForecastByIP();
  //   const cache = sessionStorage.getItem('weather');
  //   if (cache) {
  //     this.setState({ weather: JSON.parse(cache), loaded: true });
  //     console.log(this.state);
  //   } else {
  //     try {
  //       const response = await getRequest('/api/forecast/by-ip');
  //       const data = await response.json();
  //       this.setState({ weather: data, loaded: true });
  //       sessionStorage.setItem('weather', JSON.stringify(data));
  //     } catch (err) {
  //       this.setState({ loaded: false });
  //     }
  //   }
  // }
  // dispatch resize event to fix height of carousel with dynamic element
  // https://github.com/FormidableLabs/nuka-carousel/issues/521
  // TODO: dispatch resize event in loading component

  if (!loaded) return <Main />;
  const { currently, hourly, daily, timezone } = data;
  return (
    <Main>
      <CurrentWeather weather={currently} timezone={timezone} />
      <HourlyForecast weather={hourly} />
      <DailyForecast weather={daily} />
    </Main>
  );
};

export default WeatherSection;
