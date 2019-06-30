import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
import CarouselButton from '../../components/CarouselButton';
import { convertTime } from '../../utils/convertUNIXtoDate';
import Section from '../../components/Section';
import { H2 } from '../../components/Headings';
import ForecastList from './ForecastList';
import ForecastItem from './ForecastItem';
import LeftArrow from 'svg-react-loader!../../assets/svg/left-arrow.svg';
import RightArrow from 'svg-react-loader!../../assets/svg/right-arrow.svg';

const HourlyForecast = React.memo(props => {
  const { weather } = props;
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
              <Carousel
                slidesToShow={10}
                slidesToScroll={10}
                dragging={false}
                renderBottomCenterControls={() => null}
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
                    disabled={currentSlide + 10 === slideCount}
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
                    temperature={Math.round(item.temperature)}
                    summary={item.summary}
                    time={convertTime(item.time)}
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

HourlyForecast.propTypes = {
  weather: PropTypes.object,
};

export default HourlyForecast;
