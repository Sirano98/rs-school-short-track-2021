/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = names.slice();
  let i;
  let k;
  const size = newNames.length;
  const indexes = [];
  let counter = 0;
  for (i = 0; i < size; i++) {
    for (k = i + 1; k < size; k++) {
      if (newNames[i] === newNames[k] && !indexes.includes(k)) {
        counter++;
        newNames[k] += `(${counter})`;
        indexes.push(k);
      }
    }
    counter = 0;
  }
  return newNames;
}

module.exports = renameFiles;
