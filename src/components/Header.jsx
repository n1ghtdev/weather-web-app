import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import Row from './Row';
import SearchBar from './SearchBar';

const Wrapper = styled.header`
  display: flex;
  position: relative;
  height: 60px;
  background-color: #2466a8;
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Row alignItems="center">
        <SearchBar />
      </Row>
    </Container>
  </Wrapper>
);
export default Header;
