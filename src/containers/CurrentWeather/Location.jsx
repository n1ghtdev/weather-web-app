import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2 } from '../../components/Headings';

const Location = styled(H2).attrs(() => ({
  FontSize: '1.5rem',
  FontWeight: 'bold',
}))``;

Location.propTypes = {
  children: PropTypes.any,
};

export default Location;
