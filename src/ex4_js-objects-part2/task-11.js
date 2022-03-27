const calcUniqLetter = (str) => {
  const arr = str.split('');
  const result = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (result.hasOwnProperty(arr[i])) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  const keys = Object.keys(result);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i]);
  }
};

module.exports = calcUniqLetter;
