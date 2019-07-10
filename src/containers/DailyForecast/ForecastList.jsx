import PropTypes from 'prop-types';
import styled from 'styled-components';
import bp from '../../breakpoints';

const ForecastList = styled.div`
  display: flex;
  justify-content: center;

  @media ${bp.mobile} {
    margin-bottom: 50px;
  }
`;

ForecastList.propTypes = {
  children: PropTypes.any,
};

export default ForecastList;
