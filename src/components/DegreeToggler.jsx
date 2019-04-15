import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100px;
  margin: 0 auto;
  background: #eee;
`;

const Item = styled.div`
  flex-basis: 50%;
  font-size: 0.875rem;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;
  transition: all .25s;

  ${({ active }) => active && `
    background: rgb(55,135,255);
    color: #fff;
    font-weight: bold;
  `}

  &:hover {
    ${({ active }) => !active && `
      background: #ddd;
    `}
  }
`;

const DegreeToggler = ({ children, active }) => (
  <Wrapper>
    { children }
  </Wrapper>
);


DegreeToggler.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

DegreeToggler.Item = Item;

export default DegreeToggler;
