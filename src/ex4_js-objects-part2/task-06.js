const upperFirstLetter = require('./task-04');

const upperAllFirstLetter = (str) => {
  let arr = str.split(' ');
  arr = arr.map((element) => upperFirstLetter(element));

  return arr.join(' ');
};

module.exports = upperAllFirstLetter;
