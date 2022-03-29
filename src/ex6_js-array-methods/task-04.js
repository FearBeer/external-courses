const myFilter = (arr, callback) => {
  const result = [];
  const foo = (item, i, array = [...arr]) => {
    const length = array.length;
    let j = i;
    let newItem = item;

    for (j = 0; j < length; j += 1) {
      newItem = array[j];

      if (callback(newItem, j, array)) {
        result.push(array[j]);
      }
    }

    return result;
  };

  return foo();
};

module.exports = myFilter;
