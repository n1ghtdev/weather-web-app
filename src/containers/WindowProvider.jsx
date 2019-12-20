import React from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import checkIsMobile from '../utils/isMobile';

export const WindowContext = React.createContext({
  width: undefined,
  isMobile: false,
});

export const WindowProvider = ({ children }) => {
  const widthRef = React.useRef();
  React.useEffect(() => {
    const updateDimensions = throttle(200, () => {
      const w = window;
      const d = document;
      const { documentElement } = d;
      const body = d.getElementsByTagName('body')[0];
      const width =
        w.innerWidth || documentElement.clientWidth || body.clientWidth;

      widthRef.current = width;
    });

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <WindowContext.Provider
      value={{ width: widthRef.current, isMobile: checkIsMobile() }}
    >
      {children}
    </WindowContext.Provider>
  );
};
