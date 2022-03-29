const myEvery = (arr, callback) => {
  const foo = (item, i, array = [...arr]) => {
    let j = i;
    let newItem = item;

    for (j = 0; j < array.length; j += 1) {
      newItem = arr[j];
      if (!callback(newItem, j, array)) {
        return false;
      }
    }
    return true;
  };

  return foo();
};

module.exports = myEvery;
