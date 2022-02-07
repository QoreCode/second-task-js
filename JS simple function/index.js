const DEFAULT_VALUE = -1;

const getCharFromString = ({ index, string }) =>
  string.substring(index, index + 1);

function func(s, a, b) {
  if (s.match(/^$/) && (a || b)) {
    return DEFAULT_VALUE;
  }

  const isA = (index) =>
    a && getCharFromString({ index, string: s }) === a.toString();
  const isB = (index) =>
    b && getCharFromString({ index, string: s }) === b.toString();

  let i = s.length - 1;
  let aIndex = DEFAULT_VALUE;
  let bIndex = DEFAULT_VALUE;

  while (aIndex === DEFAULT_VALUE && bIndex === DEFAULT_VALUE && i > 0) {
    if (isA(i)) return i;
    else if (isB(i)) return i;

    i = i - 1;
  }

  // вариант 2 - через forEach, если бы он был доступен
  //
  //    s.forEach((char, index) => {
  //      if (a && char === a.toString()) return index;
  //      else if (b && char === b.toString()) return index;
  //    });

  return DEFAULT_VALUE;
}

module.exports = func;
