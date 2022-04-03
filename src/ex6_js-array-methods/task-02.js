const mySome = (arr, callback) => {
  // function foo(item = arr[0], i = 0, array = [...arr]) {
  //   let j = i;
  //   let newItem = item;

  //   for (j = 0; j < array.length; j += 1) {
  //     newItem = arr[j];
  //     if (callback(newItem, j, array)) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }

  // return foo();

  let item = arr[0];
  let i = 0;
  const array = [...arr];

  for (i; i < array.length; i += 1) {
    item = arr[i];
    if (callback(item, i, array)) {
      return true;
    }
  }

  return false;
};

module.exports = mySome;
