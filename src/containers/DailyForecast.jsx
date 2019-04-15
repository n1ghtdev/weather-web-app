import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CarouselButton from '../components/CarouselButton';
import Paragraph from '../components/Paragraph';
import Span from '../components/Span';
import Icon from '../components/Icon';
import List from '../components/List';
import { convertDate } from '../utils/convertUNIXtoDate';
import Section from '../components/Section';

const DailyForecast = React.memo((props) => {
  const { weather } = props;
  const weatherData = weather.data;
  return (
    <Section>
      <Container>
        <Row justifyContent="center">
          <Col lg={12} Margin="50px auto">
            <List flex justifyContent="center">
              <Carousel
                slidesToShow={5}
                slidesToScroll={5}
                dragging={false}
                heightMode="max"
                renderBottomCenterControls={() => null}
                renderTopCenterControls={() => null}
                renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                  <CarouselButton disabled={currentSlide === 0} onClick={previousSlide}>&lt;</CarouselButton>
                )}
                renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => (
                  <CarouselButton disabled={currentSlide + 5 === slideCount} onClick={nextSlide}>&gt;</CarouselButton>
                )}
              >
                { weatherData.map((item, index) => (
                  <List.Item key={index} textAlign="center" as="div">
                    <Icon iconName={item.icon} />
                    <Paragraph>
                      <Span FontSize="1.5rem">{Math.round(item.temperatureHigh)}°  </Span>
                      <Span FontSize="1.25rem">{Math.round(item.temperatureLow)}°</Span>
                    </Paragraph>
                    <Paragraph FontStyle="italic">{ item.summary }</Paragraph>
                    <Paragraph>{convertDate(item.time)}</Paragraph>
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

DailyForecast.propTypes = {
  weather: PropTypes.object,
};

export default DailyForecast;
