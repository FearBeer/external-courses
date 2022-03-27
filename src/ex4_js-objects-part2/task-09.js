const concatStr = (str, subStr, num) => {
  const arr = str.split(' ');
  //   const newStr = `${arr.slice(0, num + 1)} ${subStr} ${arr.slice(num + 1, arr.length)}`;
  // return newStr.replaceAll(',', ' ');
  const start = arr.slice(0, num + 1).join(' ');
  const end = arr.slice(num + 1, arr.length).join(' ');

  return `${start} ${subStr} ${end}`;
};

module.exports = concatStr;
