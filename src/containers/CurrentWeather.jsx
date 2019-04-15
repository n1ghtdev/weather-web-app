import React, { PureComponent } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Span from '../components/Span';
import Paragraph from '../components/Paragraph';
import List from '../components/List';
import DegreeToggler from '../components/DegreeToggler';
import { H2 } from '../components/Headings';

/* eslint-disable */
class CurrentWeather extends PureComponent {
  render() {
    const { weather, timezone } = this.props;
    return (
      <Container>
        <Row justifyContent="center">
          <Col lg={6} sm={12} textAlign="center">
            <H2 FontSize="1.5rem" FontWeight="bold">{timezone}</H2>
          </Col>
        </Row>
        <Row justifyContent="center" Padding="15px 0">
          <Col lg={6} sm={12} textAlign="center">
            <DegreeToggler>
              <DegreeToggler.Item active>C</DegreeToggler.Item>
              <DegreeToggler.Item>F</DegreeToggler.Item>
            </DegreeToggler>
            <Span Margin="20px 0" FontSize="4rem" FontWeight="bold">{weather.temperature}°</Span>
            <Paragraph FontSize="1.5rem">{weather.summary}</Paragraph>
            <Paragraph Margin="10px 0 15px 0" FontSize="0.875rem" FontWeight="bold" FontStyle="italic">Updated as of {weather.time}</Paragraph>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col lg={6} sm={12} textAlign="center">
            <List flexWrap="wrap" flex>
              <List.Item flexBasis="33%">Feels like {weather.apparentTemperature}°</List.Item>
              <List.Item flexBasis="33%">Wind {weather.windSpeed} km/h</List.Item>
              <List.Item flexBasis="33%">Visibility {weather.visibility} km</List.Item>
              <List.Item flexBasis="33%">Barometer {weather.pressure} mb</List.Item>
              <List.Item flexBasis="33%">Humidity {weather.humidity} %</List.Item>
              <List.Item flexBasis="33%">Dew Point {weather.dewPoint}°</List.Item>
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CurrentWeather;
