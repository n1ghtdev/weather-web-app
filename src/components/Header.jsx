import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.header`
  position: relative;
  border-top: 3px solid rgb(55, 135, 255);
  box-shadow: 0 1px 0 rgba(12,13,14,0.1), 0 1px 6px rgba(59,64,69,0.1);
  height: 50px;
  background-color: #fff;
  overflow: hidden;
`;

const Header = ({ children }) => (
  <Wrapper>
    <Container>
      { children }
    </Container>
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
