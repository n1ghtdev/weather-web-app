import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../components/Icon';
const Wrapper = styled.div``;
const StyledIcon = styled(Icon)``;
const Temperature = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  font-size: 4rem;
  margin-bottom: 1rem;
`;
const Summary = styled.span`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
const UpdatedTime = styled.span`
  display: block;
  font-size: 0.875rem;
`;

const TemperatureInfo = ({ icon, temperature, summary, updatedTime }) => (
  <Wrapper>
    <Temperature>
      <StyledIcon FontSize="2.5rem" iconName={icon} />
      {temperature}°
    </Temperature>
    <Summary>{summary}</Summary>
    <UpdatedTime>Updated as of {updatedTime}</UpdatedTime>
  </Wrapper>
);

TemperatureInfo.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.number,
  summary: PropTypes.string,
  updatedTime: PropTypes.string,
};

export default TemperatureInfo;
