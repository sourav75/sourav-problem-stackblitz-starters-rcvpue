/*

Implement a function camelCaseKeys, that takes an object and returns a new object with all its keys converted to camel case.

Camel case is a practice where words are separated with a single capitalized letter and the first letter of the word will be lower case. Some examples:

camelCaseKeys({ foo_bar: true });
// { fooBar: true }

camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
// { fooBar: true, barBaz: { bazQux: '1' } }

camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]


*/

const camelCaseKeys = function (obj) {
  let res = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    let key = '' + i;
    let str = '';
    if (/^[a-zA-Z_]+$/.test(i)) {
      while (key.includes('_')) {
        let ind = key.indexOf('_');
        str += key.substring(0, ind);
        key = key.substring(ind + 1, key.length);
        let upper = key[0].toUpperCase();
        key = upper + key.substring(1, key.length);
      }
      str += key;
      key = str;
    } else key = parseInt(i);
    let value = obj[i];
    if (typeof value == 'object') {
      value = camelCaseKeys(value);
    }
    res[key] = value;
  }
  return res;
};

module.exports = {
  camelCaseKeys,
};
