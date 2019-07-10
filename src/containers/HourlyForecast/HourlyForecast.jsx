import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Section from '../../components/Section';
import { H2 } from '../../components/Headings';

import ForecastList from './ForecastList';
import ForecastItem from './ForecastItem';
import CarouselWrapper from '../CarouselWrapper';

import { convertTime } from '../../utils/convertUNIXtoDate';

const HourlyForecast = React.memo(({ weather }) => {
  const weatherData = weather.data.slice(0, 23);
  return (
    <Section>
      <Container>
        <Row>
          <Col textAlign="center" Margin="20px auto 20px auto">
            <H2>Hourly Forecast</H2>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col lg={12}>
            <ForecastList>
              <CarouselWrapper slidesToShow={10} dragging={false}>
                {weatherData.map((item, index) => (
                  <ForecastItem
                    key={index}
                    icon={item.icon}
                    temperature={Math.round(item.temperature)}
                    summary={item.summary}
                    time={convertTime(item.time)}
                  />
                ))}
              </CarouselWrapper>
            </ForecastList>
          </Col>
        </Row>
      </Container>
    </Section>
  );
});

HourlyForecast.propTypes = {
  weather: PropTypes.object,
};

export default HourlyForecast;
