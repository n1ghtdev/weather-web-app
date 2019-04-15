import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

const AppHeader = () => (
  <Header>
    <Nav>
      <Nav.Item>
        <Nav.Link as={Link} to="/">Mainpage</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
      </Nav.Item>
    </Nav>
  </Header>
);

export default AppHeader;
