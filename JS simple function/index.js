const findMaxIndexOfWord = (string, ...words) => {
  if (!string.length) {
    return -1;
  }

  return Math.max(...words.map((word) => [...string].lastIndexOf(word)));
};
