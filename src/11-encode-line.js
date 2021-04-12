/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i;
  let counter = 1;
  let result = '';
  const size = str.length;
  for (i = 0; i < size; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else if (counter === 1) {
      result += str[i];
      counter = 1;
    } else {
      result += counter + str[i];
      counter = 1;
    }
  }
  return result;
}

module.exports = encodeLine;
