import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  position: relative;
  height: 60px;
  background-color: #2466a8;
`;

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
