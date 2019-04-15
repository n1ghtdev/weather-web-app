import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: ${({ flex }) => flex ? 'flex' : 'inline-block'};
  flex-direction: ${({ listDir }) => listDir};
  list-style-type: ${({ listStyle }) => listStyle};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const Item = styled.li`
  flex-basis: ${({ flexBasis }) => flexBasis};
  text-align: ${({ textAlign }) => textAlign};
`;

List.propTypes = {
  children: PropTypes.any,
  listDir: PropTypes.oneOf([
    'row', 'column',
  ]),
  listStyle: PropTypes.string,
  flexWrap: PropTypes.oneOf([
    'wrap', 'nowrap',
  ]),
  flexBasis: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'inherit',
  ]),
  textAlign: PropTypes.oneOf([
    'center', 'left', 'right', 'inherit',
  ]),
};

List.defaultProps = {
  listDir: 'row',
  listStyle: 'none',
  flexWrap: 'nowrap',
  flexBasis: 'auto',
  justifyContent: 'flex-start',
  textAlign: 'left',
};

List.Item = Item;

export default List;
