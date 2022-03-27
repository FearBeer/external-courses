const upperFirstLetter = require('./task-04');

const toLower = (str) => {
  const arr = str.toLowerCase().split(' ');
  for (let i = 1; i < arr.length; i += 1) {
    arr[i] = upperFirstLetter(arr[i]);
  }

  return arr.join('');
};
module.exports = toLower;
