module.exports = function func(s, a, b) {
  if (!s.length) {
    return -1;
  }

  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] == a || s[i] == b) {
      return i;
    }
  }

  return -1;
};
