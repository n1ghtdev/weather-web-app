const setTextContentByID = (el, content) => {
  if (typeof el === 'string' && content) {
    document.getElementById(el).textContent = content;
  }
  return null;
};

export default setTextContentByID;
