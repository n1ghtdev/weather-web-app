import React, { PureComponent, createContext } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';
import isMobile from '../utils/isMobile';

export const WindowContext = createContext({
  width: undefined,
  isMobile: false,
});

export class WindowProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  state = {
    width: undefined,
    isMobile: false,
  };
  componentDidMount() {
    if (isMobile() === true) {
      this.setState({ isMobile: true });
    }
    this.updateDimensions();
    window.addEventListener('resize', this.throttledUpdateDimension);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledUpdateDimension);
  }
  updateDimensions = () => {
    const w = window;
    const d = document;
    const { documentElement } = d;
    const body = d.getElementsByTagName('body')[0];
    const width =
      w.innerWidth || documentElement.clientWidth || body.clientWidth;

    this.setState({ width });
  };
  throttledUpdateDimension = throttle(200, this.updateDimensions);
  render() {
    return (
      <WindowContext.Provider
        value={{ width: this.state.width, isMobile: this.state.isMobile }}
      >
        {this.props.children}
      </WindowContext.Provider>
    );
  }
}
