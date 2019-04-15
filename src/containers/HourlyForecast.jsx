import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CarouselButton from '../components/CarouselButton';
import Paragraph from '../components/Paragraph';
import List from '../components/List';
import Icon from '../components/Icon';
import { convertTime } from '../utils/convertUNIXtoDate';
import Section from '../components/Section';
import { H2 } from '../components/Headings';

const HourlyForecast = React.memo((props) => {
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
            <List flex justifyContent="center">
              <Carousel
                slidesToShow={7}
                slidesToScroll={7}
                dragging={false}
                renderBottomCenterControls={() => null}
                renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                  <CarouselButton disabled={currentSlide === 0} onClick={previousSlide}>&lt;</CarouselButton>
                )}
                renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => (
                  <CarouselButton disabled={currentSlide + 7 === slideCount} onClick={nextSlide}>&gt;</CarouselButton>
                )}
              >
                { weatherData.map((item, index) => (
                  <List.Item key={index} textAlign="center" as="div">
                    <Icon iconName={item.icon} />
                    <Paragraph FontSize="1.5rem">{ Math.round(item.temperature) }°</Paragraph>
                    <Paragraph FontStyle="italic">{ item.summary }</Paragraph>
                    <Paragraph>{ convertTime(item.time) }</Paragraph>
                  </List.Item>
                )) }
              </Carousel>
            </List>
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
