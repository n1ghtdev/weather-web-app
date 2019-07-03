import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from './A';

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
`;

const Item = styled.li`
  height: 100%;
  transition: background-color 0.15s;
  &:hover {
    background-color: #3171af;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled(A)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  ${({ active }) =>
    active &&
    `
    background-color: green;
  `}
`;

Nav.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

Nav.Item = Item;
Nav.Link = Link;

export default Nav;
