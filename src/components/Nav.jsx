import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from './A';

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
  margin-top: -3px;
`;

const Item = styled.li`
  height: 100%;
  &:hover {
      background-color: #e9e9e9;
      & > ${Link} {
        color: #2a2d30;
      } 
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
  color: #4a5157;
  text-decoration: none;
  font-size: 0.875rem;
  ${({ active }) => active && `
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
