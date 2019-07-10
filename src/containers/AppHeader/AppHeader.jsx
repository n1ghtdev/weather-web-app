import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Container from '../../components/Container';
import Row from '../../components/Row';

import SearchForm from '../SearchForm';

const AppHeader = () => (
  <Header>
    <Container>
      <Row alignItems="center">
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Mainpage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contacts">
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <SearchForm />
      </Row>
    </Container>
  </Header>
);

export default AppHeader;
