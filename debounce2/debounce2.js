/*

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounces invocations of the callback function following the behavior described above.

Additionally, the debounce function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke them.

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: Cancel the delayed increment.
debouncedIncrement.cancel();

// t = 100: increment() was not invoked and i is still 0.




let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
debouncedIncrement.flush(); // i = 0

// t = 51: i is now 1 because flush causes the callback to be
// immediately invoked.

// t = 100: i is already 1. The callback has been called before
// and won't be called again.


*/

function debounce(callback, wait = 0) {
  let interval = null;
  let argsToCall = undefined;
  function clear() {
    clearTimeout(interval);
    interval = null;
  }
  function quickCall() {
    if (interval == null) return;
    clear();
    callback.apply(this, [...argsToCall]);
  }
  function debounced(...args) {
    clear();
    argsToCall = [...args];
    context = this;
    interval = setTimeout(function () {
      quickCall();
    }, wait);
  }
  debounced.cancel = clear;
  debounced.flush = quickCall;
  return debounced;
}

module.exports = {
  debounce,
};
