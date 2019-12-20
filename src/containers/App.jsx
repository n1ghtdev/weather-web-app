import React from 'react';
import styled from 'styled-components';
import { WindowProvider } from './WindowProvider';
import Header from '../components/Header';
import WeatherSection from './WeatherSection';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #3171af;
  color: #fff;
`;

const App = () => (
  <WindowProvider>
    <Wrapper>
      <Header />
      <WeatherSection />
    </Wrapper>
  </WindowProvider>
);

export default App;
