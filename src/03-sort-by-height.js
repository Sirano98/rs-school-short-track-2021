/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const newArr = arr.slice();
  let i;
  let k;
  let c;
  const size = arr.length;
  let min;
  for (i = 0; i < size; i++) {
    if (newArr[i] === -1) {
      result.push(-1);
    } else {
      min = newArr[i];
      for (k = i + 1; k < size; k++) {
        if (newArr[k] !== -1 && newArr[k] < min) {
          c = min;
          min = newArr[k];
          newArr[k] = c;
        }
      }
      result.push(min);
    }
  }
  return result;
}

module.exports = sortByHeight;
