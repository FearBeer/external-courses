const createObjectWith = (string, obj) => {
  const newObj = obj;

  if (!newObj.hasOwnProperty(string)) {
    newObj[string] = 'new';
  }

  return newObj;
};

module.exports = createObjectWith;
