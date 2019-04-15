import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.main`
  display: block;
  position: relative;
  height: ${({ Height }) => Height};
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  padding: ${({ Padding }) => Padding};
`;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  Height: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  Padding: PropTypes.string,
};

export default Section;
