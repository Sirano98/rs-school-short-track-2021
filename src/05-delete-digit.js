/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const len = n.toString().length;
  const arr = n.toString().repeat(len).split('');
  const size = arr.length;
  const numbers = [];
  let i;
  for (i = 0; i < size; i += len + 1) {
    arr[i] = '';
  }
  for (i = 0; i < size; i += len) {
    numbers.push(+arr.slice(i, i + len).join(''));
  }
  return Math.max(...numbers);
}

module.exports = deleteDigit;
