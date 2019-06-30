import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const Item = styled.li`
  flex-basis: 33%;
  font-size: 0.875rem;
  margin-bottom: 0.3rem;
`;

const WeatherInfo = ({ children }) => <Wrapper>{children}</Wrapper>;

WeatherInfo.propTypes = {
  children: PropTypes.any,
};

WeatherInfo.Item = Item;

export default WeatherInfo;
