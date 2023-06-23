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

const isEmpty = function (value) {
  let res = false;
  if (!value || typeof value != 'object') res = true;
  else res = value.length < 1;
  console.log(res);
  return res;
};

module.exports = {
  isEmpty,
};
