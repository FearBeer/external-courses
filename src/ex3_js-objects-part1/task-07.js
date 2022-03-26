const deepClone = (obj) => {
  let newObj = { };
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof key === 'object') {
      newObj = { ...newObj, ...key };
    } else {
      newObj = { ...obj };
    }
  }

  return newObj;
};

module.exports(deepClone);
