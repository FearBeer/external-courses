const getProperty = (object, propertyPath) => {
  const prop = propertyPath.split('.');
  // const newProp = `'${propertyPath.replaceAll('.', '\'][\'')}'`;
  // console.log(newProp);
  // console.log('Object from prop : ', object[prop[0]]);
  let current = object;

  for (let i = 0; i < prop.length; i += 1) {
    if (current.hasOwnProperty(prop[i])) {
      current = current[prop[i]];
    } else {
      return undefined;
    }
  }

  return current;
};

module.exports = getProperty;
