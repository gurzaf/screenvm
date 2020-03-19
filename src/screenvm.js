const getElement = (id, type) => {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement(type);
    element.id = id;
    document.body.appendChild(element);
  }
  return element;
};

const getValue = (data) => {
  const defaultTable = data.tables.DEFAULT;
  if (defaultTable.length > 0) {
    const { label } = defaultTable[0];
    if (label.length > 0) {
      return label[0];
    }
  }
  return 'NO DEFINIDO';
};

const getStyles = (data) => {
  const fontSize = data.style.textFontSize.value
    || data.style.textFontSize.defaultValue;
  const fontColor = data.style.fontColor.value
    ? data.style.fontColor.value.color
    : data.style.fontColor.defaultValue.color;
  let fontFamily = data.style.fontFamily.value
    || data.style.fontFamily.defaultValue;
  if (fontFamily === 'auto') {
    fontFamily = data.theme.themeFontColor.color;
  }
  return `font-family: "${fontFamily}"; color: ${fontColor}; font-size: ${fontSize}px;`;
};

const showMessage = (data) => {
  const value = getValue(data);
  const styles = getStyles(data);
  const MESSAGE_ID = 'message';
  const messageElement = getElement(MESSAGE_ID, 'p');
  messageElement.setAttribute('style', styles);
  messageElement.innerText = value;
};

export {
  showMessage,
};
