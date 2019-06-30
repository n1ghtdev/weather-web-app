import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgb(215, 231, 255);
  text-decoration: none;
  font-size: 1.5rem;
  transition: transform 0.25s;
  width: 32px;
  height: 32px;
  &:hover {
    transform: scale(1.5);
  }
  &:disabled,
  &[disabled] {
    & > svg {
      & > path {
        fill: rgb(131, 152, 184);
      }
    }
    cursor: not-allowed;
  }
  & > svg {
    & > path {
      fill: #fff;
    }
  }
`;

CarouselButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CarouselButton;
