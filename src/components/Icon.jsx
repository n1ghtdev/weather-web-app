import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const icons = {
  'clear-day': {
    src: 'B',
  },
  'clear-night': {
    src: 'C',
  },
  rain: {
    src: 'R',
  },
  snow: {
    src: 'W',
  },
  sleet: {
    src: 'X',
  },
  wind: {
    src: 'F',
  },
  fog: {
    src: 'M',
  },
  'partly-cloudy-day': {
    src: 'H',
  },
  'partly-cloudy-night': {
    src: 'I',
  },
  thunderstorm: {
    src: 'p',
  },
  cloudy: {
    src: 'Y',
  },
};

const Wrapper = styled.i`
  color: #000;
  font-size: 1.5rem;
  font-weight: normal;
  font-style: normal;
  font-family: 'MeteoconsRegular';
`;

const Icon = (props) => (
  <Wrapper>{ icons[props.iconName].src }</Wrapper>
);

Icon.propTypes = {
  iconName: PropTypes.oneOf([
    'clear-day',
    'clear-night',
    'rain',
    'snow',
    'sleet',
    'wind',
    'fog',
    'partly-cloudy-day',
    'partly-cloudy-night',
    'thunderstorm',
    'cloudy',
  ]),
};

export default Icon;
