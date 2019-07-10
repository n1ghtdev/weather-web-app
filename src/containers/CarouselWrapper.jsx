import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import LeftArrow from 'svg-react-loader!../assets/svg/left-arrow.svg';
import RightArrow from 'svg-react-loader!../assets/svg/right-arrow.svg';
import CarouselButton from '../components/CarouselButton';
import { WindowContext } from './WindowProvider';
import { size } from '../breakpoints';

const CarouselWrapper = props => {
  const { width, isMobile } = React.useContext(WindowContext);
  const {
    children,
    slidesToShow,
    slidesToScroll,
    dragging,
    heightMode,
  } = props;

  const responsiveSlides =
    width >= size.mobileL ? slidesToShow : slidesToShow / 2;

  /* eslint-disable react/prop-types */
  const centerLeftControls = ({ previousSlide, curSlide }) => (
    <CarouselButton disabled={curSlide === 0} onClick={previousSlide}>
      <LeftArrow />
    </CarouselButton>
  );
  const centerRightControls = ({ nextSlide, curSlide, count }) => (
    <CarouselButton
      disabled={curSlide + slidesToShow === count}
      onClick={nextSlide}
    >
      <RightArrow />
    </CarouselButton>
  );
  /* eslint-enable */

  return (
    <Carousel
      slidesToShow={responsiveSlides}
      slidesToScroll={slidesToScroll || responsiveSlides}
      dragging={dragging}
      renderBottomCenterControls={() => null}
      renderCenterLeftControls={isMobile ? () => null : centerLeftControls}
      renderCenterRightControls={isMobile ? () => null : centerRightControls}
      heightMode={heightMode || 'first'}
    >
      {children}
    </Carousel>
  );
};

CarouselWrapper.propTypes = {
  children: PropTypes.node,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  dragging: PropTypes.bool,
  heightMode: PropTypes.oneOf(['first', 'current', 'max']),
};

export default CarouselWrapper;
