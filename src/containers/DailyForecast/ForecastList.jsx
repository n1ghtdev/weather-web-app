import PropTypes from 'prop-types';
import styled from 'styled-components';

const ForecastList = styled.div`
  display: flex;
  justify-content: center;
`;

ForecastList.propTypes = {
  children: PropTypes.any,
};

export default ForecastList;
