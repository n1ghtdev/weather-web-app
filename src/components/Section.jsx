import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: block;
  height: ${({ Height }) => Height};
  color: ${({ Color }) => Color};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage})`};
  background-repeat: no-repeat;
  padding: ${({ Padding }) => Padding};
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-position: ${({ bgPos }) => bgPos};
  background-blend-mode: overlay;
  ${({ blurred }) => blurred && `
    filter: blur(2px);
    opacity: .7;
  `}
`;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  Height: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  Padding: PropTypes.string,
  Color: PropTypes.string,
  bgPos: PropTypes.string,
  blurred: PropTypes.bool,
};

Section.defaultProps = {
  Color: 'inherit',
};

Section.Overlay = Overlay;

export default Section;
