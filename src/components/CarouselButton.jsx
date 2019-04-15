import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgb(55,135,255);
  text-decoration: none;
  font-size: 1.5rem;
  transition: transform .25s;
  &:hover {
    transform: scale(1.5);
  }
  &:disabled,
  &[disabled] {
    color: rgb(131, 152, 184);
    cursor: not-allowed;
  }
`;

CarouselButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CarouselButton;
