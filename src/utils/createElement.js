const anElement = (element, props, children) => {
  if (typeof(element) === 'function') {
    return element(props);
  } else {
    const anElement = document.createElement(element);
    children.forEach(child => {
      if (typeof(child) === 'object') {
        anElement.appendChild(child);
      } else {
        anElement.innerHTML += child;
      }
    });
    if (props) {
      Object.keys(props).forEach(propName => {
        if (/^on.*$/.test(propName)) {
          anElement.addEventListener(propName.substring(2).toLowerCase(), props[propName]);
        } else {
          anElement.setAttribute(propName, props[propName]);
        }
      });
    }
    return anElement;
  }
};

const createElement = (el, props, ...children) => {
  return anElement(el, props, children);
};

export default createElement;
