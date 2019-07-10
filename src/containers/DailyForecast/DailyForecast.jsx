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

import { convertDate } from '../../utils/convertUNIXtoDate';

const DailyForecast = React.memo(({ weather }) => {
  const weatherData = weather.data;
  return (
    <Section>
      <Container>
        <Row>
          <Col textAlign="center" Margin="40px auto 20px auto">
            <H2>Daily Forecast</H2>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col lg={12} Margin="0 auto">
            <ForecastList>
              <CarouselWrapper
                slidesToShow={6}
                dragging={false}
                heightMode="max"
              >
                {weatherData.map((item, index) => (
                  <ForecastItem
                    key={index}
                    icon={item.icon}
                    temperatureHigh={Math.round(item.temperatureHigh)}
                    temperatureLow={Math.round(item.temperatureLow)}
                    summary={item.summary}
                    time={convertDate(item.time)}
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

DailyForecast.propTypes = {
  weather: PropTypes.object,
};

export default DailyForecast;
