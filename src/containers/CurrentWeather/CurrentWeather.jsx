import React from 'react';
import PropTypes from 'prop-types';

import Location from './Location';
import TemperatureInfo from './TemperatureInfo';
import WeatherInfo from './WeatherInfo';

import Section from '../../components/Section';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';

import { convertTime } from '../../utils/convertUNIXtoDate';

const CurrentWeather = ({ weather, timezone }) => (
  <Section Padding="20px 0 40px 0">
    <Container>
      <Row justifyContent="center">
        <Col lg={6} sm={12} textAlign="center">
          <Location>{timezone}</Location>
        </Col>
      </Row>
      <Row justifyContent="center" Padding="15px 0">
        <Col lg={6} sm={12} textAlign="center">
          <TemperatureInfo
            icon={weather.icon}
            temperature={Math.round(weather.temperature)}
            summary={weather.summary}
            updatedTime={convertTime(weather.time)}
          />
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col lg={6} sm={12} textAlign="center">
          <WeatherInfo>
            <WeatherInfo.Item>
              Feels like {Math.round(weather.apparentTemperature)}°
            </WeatherInfo.Item>
            <WeatherInfo.Item>
              Wind {Math.round(weather.windSpeed)} km/h
            </WeatherInfo.Item>
            <WeatherInfo.Item>
              Visibility {weather.visibility} km
            </WeatherInfo.Item>
            <WeatherInfo.Item>Barometer {weather.pressure} mb</WeatherInfo.Item>
            <WeatherInfo.Item>
              Humidity {Math.round(weather.humidity * 100)}%
            </WeatherInfo.Item>
            <WeatherInfo.Item>
              Dew Point {Math.round(weather.dewPoint)}°
            </WeatherInfo.Item>
          </WeatherInfo>
        </Col>
      </Row>
    </Container>
  </Section>
);

CurrentWeather.propTypes = {
  weather: PropTypes.object,
  timezone: PropTypes.any,
};

export default CurrentWeather;
