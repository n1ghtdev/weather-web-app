import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: block;
`;

Section.propTypes = {
  children: PropTypes.any,
};

export default Section;
