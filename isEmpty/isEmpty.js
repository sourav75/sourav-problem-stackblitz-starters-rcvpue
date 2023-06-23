/*

Implement a function isEmpty(value) to check if a value is an empty object, collection, map, or set.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.

However for this question, we only need to consider arrays, buffers, strings, objects, maps and sets.

Arguments
value (*): The value to check.
Returns
(boolean): Returns true if value is empty, else false.


isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ a: 1 }); // => false
isEmpty(Buffer.alloc(0)); // true
isEmpty(Buffer.alloc(1)); // false;



*/

// Refer to https://github.com/lodash/lodash/blob/4.17.15-es/TODO_REPLACE_ME.js

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  const valueType = typeof value;

  // Arrays/Strings/Buffers.
  if (
    Array.isArray(value) ||
    valueType === 'string' ||
    Buffer.isBuffer(value)
  ) {
    return value.length === 0;
  }

  // Map/Set.
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Plain object.
  const prototype = Object.getPrototypeOf(value);
  if (prototype === null || prototype === Object.prototype) {
    return Object.keys(value).length === 0;
  }

  return true;
}

module.exports = {
  isEmpty,
};
