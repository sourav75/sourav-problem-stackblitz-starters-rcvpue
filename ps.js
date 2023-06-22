function curry(func) {
  const curried = function (...args) {
    if (func.length <= args.length) {
      const result = func(...args);
      return result;
    }
    return function (...x) {
      const res = curried.apply(this, [...args, ...x]);
      return res;
    };
  };
  return curried;
}
module.exports = {
  curry,
};
