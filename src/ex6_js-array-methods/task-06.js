const myReduce = (arr, callback, initialValue) => {
  // const foo = (previousValue, currentItem, i, array = [...arr]) => {
  //   let cbpreviousValue = previousValue;
  //   let j = i;
  //   let newItem = currentItem;
  //   const length = array.length;

  //   if (initialValue === undefined) {
  //     cbpreviousValue = array[0];
  //     j = 1;
  //   } else {
  //     cbpreviousValue = initialValue;
  //     j = 0;
  //   }

  //   for (j; j < length; j += 1) {
  //     newItem = array[j];
  //     callback(cbpreviousValue, newItem, j, array);
  //     cbpreviousValue = callback(cbpreviousValue, newItem, j, array);
  //   }

  //   return cbpreviousValue;
  // };

  // return foo();

  let previousValue;
  let currentItem;
  let i;
  const array = [...arr];

  if (initialValue === undefined) {
    previousValue = array[0];
    i = 1;
  } else {
    previousValue = initialValue;
    i = 0;
  }

  for (i; i < array.length; i += 1) {
    currentItem = array[i];
    callback(previousValue, currentItem, i, array);
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
};

module.exports = myReduce;
