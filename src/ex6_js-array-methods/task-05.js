const myMap = (arr, callback) => {
  // const result = [];
  // const foo = (item, i, array = [...arr]) => {
  //   const length = array.length;
  //   let j = i;
  //   let newItem = item;

  //   for (j = 0; j < length; j += 1) {
  //     newItem = array[j];
  //     result.push(callback(newItem, j, array));
  //   }

  //   return result;
  // };

  // return foo();

  let item = arr[0];
  let i = 0;
  const array = [...arr];
  const result = [];

  for (i; i < array.length; i += 1) {
    item = arr[i];
    result.push(callback(item, i, array));
  }

  return result;
};

module.exports = myMap;
