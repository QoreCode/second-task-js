const largestIndexOfLetters = (string, ...letters) => {
  const indexesArr = [ ...letters ]
    .map((letter) => letter.length === 1 ? string.lastIndexOf(letter) : -1);
  return Math.max(...indexesArr);
}

module.exports = largestIndexOfLetters;
