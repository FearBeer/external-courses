/* eslint-disable no-param-reassign */
const mySlice = (array, begin = 0, end = array.length) => {
  const result = [];
  let i = begin;
  // const begin = sliceBegin;
  // const end = sliceEnd;

  // if ((begin < 0) && (Math.abs(begin) > array.length)) {
  //   begin = 0;
  // }

  // if ((end < 0) && (Math.abs(end) > array.length)) {
  //   end = 0;
  // } else if (end > 0 && (Math.abs(end) > array.length)) {
  //   end = array.length;
  // }

  // if ((begin < 0) && (end > 0)) {
  //   for (let i = end + begin; i < end; i += 1) {
  //     result.push(array[i]);
  //   }
  // } else if ((begin > 0) && (end < 0)) {
  //   for (let i = begin; i < array.length + end; i += 1) {
  //     result.push(array[i]);
  //   }
  // } else if ((begin < 0) && (end < 0)) {
  //   for (let i = array.length + begin; i < array.length + end; i += 1) {
  //     result.push(array[i]);
  //   }
  // } else {
  //   for (let i = begin; i < end; i += 1) {
  //     result.push(array[i]);
  //   }
  // }

  if (begin < 0) {
    i = array.length + begin;

    if (-begin > array.length) { // насколько такая запись имеет право на жизнь?
      i = 0;
    }
  }

  if (end < 0) {
    end = array.length + end;

    if (end > array.length) {
      return result;
    }
  }

  if (end > array.length) {
    end = array.length;
  }

  for (i; i < end; i += 1) {
    result.push(array[i]);
  }

  return result;
};

module.exports = mySlice;
