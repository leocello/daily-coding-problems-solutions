function isNumChar(v) {
  return /\d$/.test(v);
}

const encodeRunLength = str => {
  if (str.length <= 1) {
    return str;
  }

  let ret = '';
  let currentChar = '';
  let currentCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] != currentChar) {
      if (currentChar != '') {
        ret += (currentCount > 1 ? currentCount : '') + currentChar;
      }

      currentChar = str[i];
      currentCount = 1;
    } else {
      currentCount++;
    }
  }

  ret += (currentCount > 1 ? currentCount : '') + currentChar;

  return ret;
};

const decodeRunLength = str => {
  if (str.length <= 1) {
    return str;
  }

  let ret = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNumChar(str[i])) {
      ret += str[i];
    } else {
      let j = i;
      while (isNumChar(str[j])) {
        j++;
      }

      for (let count = parseInt(str.substring(i, j)); count > 0; count--) {
        ret += str[j];
      }

      i = j;
    }
  }

  return ret;
};

module.exports = {
  encodeRunLength,
  decodeRunLength,
};
