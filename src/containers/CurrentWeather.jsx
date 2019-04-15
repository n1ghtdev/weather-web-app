import React, { PureComponent } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Span from '../components/Span';
import Paragraph from '../components/Paragraph';
import List from '../components/List';
import DegreeToggler from '../components/DegreeToggler';
import { H2 } from '../components/Headings';
import { convertTime } from '../utils/convertUNIXtoDate';
import getImageByWeather from '../utils/getImageByWeather';
import Section from '../components/Section';

/* eslint-disable */
class CurrentWeather extends PureComponent {
  render() {
    const { weather, timezone } = this.props;
    const bgProps = getImageByWeather(weather.icon);
    console.log(bgProps);
    return (
      <Section Color="#fff" Padding="20px 0 40px 0">
        <Section.Overlay bgImage={bgProps.url} bgColor={bgProps.background} bgPos={bgProps.pos} blurred={bgProps.blurred} />
        <Container>
          <Row justifyContent="center">
            <Col lg={6} sm={12} textAlign="center">
              <H2 FontSize="1.5rem" FontWeight="bold">{timezone}</H2>
            </Col>
          </Row>
          <Row justifyContent="center" Padding="15px 0">
            <Col lg={6} sm={12} textAlign="center">
              {/* <DegreeToggler>
                <DegreeToggler.Item active>C</DegreeToggler.Item>
                <DegreeToggler.Item>F</DegreeToggler.Item>
              </DegreeToggler> */}
              <Span Margin="20px 0" FontSize="4rem" FontWeight="bold">{Math.round(weather.temperature)}°</Span>
              <Paragraph FontSize="1.5rem">{weather.summary}</Paragraph>
              <Paragraph Margin="10px 0 15px 0" FontSize="0.875rem" FontWeight="bold" FontStyle="italic">Updated as of {convertTime(weather.time)}</Paragraph>
            </Col>
          </Row>
          <Row justifyContent="center">
            <Col lg={6} sm={12} textAlign="center">
              <List flexWrap="wrap" flex>
                <List.Item flexBasis="33%">Feels like {Math.round(weather.apparentTemperature)}°</List.Item>
                <List.Item flexBasis="33%">Wind {Math.round(weather.windSpeed)} km/h</List.Item>
                <List.Item flexBasis="33%">Visibility {weather.visibility} km</List.Item>
                <List.Item flexBasis="33%">Barometer {weather.pressure} mb</List.Item>
                <List.Item flexBasis="33%">Humidity {Math.round(weather.humidity * 100)}%</List.Item>
                <List.Item flexBasis="33%">Dew Point {Math.round(weather.dewPoint)}°</List.Item>
              </List>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default CurrentWeather;
