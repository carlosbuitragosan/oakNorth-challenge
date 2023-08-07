function getType(item) {
  const elem = Object.prototype.toString.call(item);
  switch (elem) {
    case '[object Object]':
      return 'object';
    case '[object Array]':
      return 'array';
    case '[object Number]':
      return 'number';
    case '[object String]':
      return 'string';
    default:
      return 'unknown';
  }
}

function compareObjects(obj1, obj2) {
  if (typeof obj1 !== 'object') {
    if (obj1 !== obj2) {
      throw new Error(`Expected ${obj1} but found ${obj2}.`);
    }
    return;
  }
  const obj1Keys = Object.keys(obj1);

  for (const key of obj1Keys) {
    compareObjects(obj1[key], obj2[key]);
  }
  return 'No error.';
}

module.exports = { getType, compareObjects };
