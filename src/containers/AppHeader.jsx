import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

const AppHeader = () => (
  <Header>
    <Nav>
      <Nav.Item>
        <Nav.Link href="#">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Contacts</Nav.Link>
      </Nav.Item>
    </Nav>
  </Header>
);

export default AppHeader;
