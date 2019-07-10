import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const Wrapper = styled.div`
  text-align: center;
`;
const Temperature = styled.span`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
  margin-left: 0.25rem;
`;
const Summary = styled.span`
  display: block;
  font-size: 0.875rem;
  min-height: 35px;
`;
const Time = styled.span`
  display: block;
  font-size: 0.875rem;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #4d88c3;
    margin: 5px 0;
  }
`;

const Forecast = ({ icon, temperature, summary, time }) => (
  <Wrapper>
    <Icon FontSize="2rem" iconName={icon} />
    <Temperature>{temperature}°</Temperature>
    <Summary>{summary}</Summary>
    <Time>{time}</Time>
  </Wrapper>
);

Forecast.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.number,
  summary: PropTypes.string,
  time: PropTypes.number,
};

export default Forecast;
