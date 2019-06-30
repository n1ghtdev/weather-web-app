import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';

import LeftArrow from 'svg-react-loader!../../assets/svg/left-arrow.svg';
import RightArrow from 'svg-react-loader!../../assets/svg/right-arrow.svg';

import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
import CarouselButton from '../../components/CarouselButton';
import { convertDate } from '../../utils/convertUNIXtoDate';
import Section from '../../components/Section';
import { H2 } from '../../components/Headings';
import ForecastList from './ForecastList';
import ForecastItem from './ForecastItem';

const DailyForecast = React.memo(props => {
  const { weather } = props;
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
              <Carousel
                slidesToShow={6}
                slidesToScroll={6}
                dragging={false}
                heightMode="max"
                renderBottomCenterControls={() => null}
                renderTopCenterControls={() => null}
                renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                  <CarouselButton
                    disabled={currentSlide === 0}
                    onClick={previousSlide}
                  >
                    <LeftArrow />
                  </CarouselButton>
                )}
                renderCenterRightControls={({
                  nextSlide,
                  currentSlide,
                  slideCount,
                }) => (
                  <CarouselButton
                    disabled={currentSlide + 6 === slideCount}
                    onClick={nextSlide}
                  >
                    <RightArrow />
                  </CarouselButton>
                )}
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
              </Carousel>
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
