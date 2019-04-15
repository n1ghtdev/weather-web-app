import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from '../components/Section';
import { getForecastByIP } from '../modules/weather/actions';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

class WeatherSection extends Component {
  static propTypes = {
    getForecastByIP: PropTypes.func,
    weather: PropTypes.object,
  };
  componentDidMount() {
    this.props.getForecastByIP();
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.weather.data.timezone !== nextProps.weather.data.timezone) {
      return true;
    }
    return false;
  }
  // dispatch resize event to fix height of carousel with dynamic element
  // https://github.com/FormidableLabs/nuka-carousel/issues/521
  // TODO: dispatch resize event in loading component
  componentDidUpdate() {
    if (this.props.weather.loaded) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }
  render() {
    const {
      currently, hourly, daily, timezone,
    } = this.props.weather.data;
    const { loaded } = this.props.weather;
    return (
      <Fragment>
        { loaded ?
          <Section>
            <CurrentWeather weather={currently} timezone={timezone} />
            <HourlyForecast weather={hourly} />
            <DailyForecast weather={daily} />
          </Section> :
          'loading...' }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {
  getForecastByIP,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSection);
