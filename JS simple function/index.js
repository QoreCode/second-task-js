const func = (s, a, b) => {
  let i;
  let aIndex = 0;
  let bIndex = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] == a) {
      aIndex = i;
    } else if (s[i] == b) {
      bIndex = i;
    }
  }
  return Math.max(aIndex, bIndex);
};
