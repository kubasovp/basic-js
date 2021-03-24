const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let newArr = [];
  let discardNext = false;
  let doubleNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    } else if (doubleNext) {
      newArr.push(arr[i]);
      newArr.push(arr[i]);
      doubleNext = false;
    } else if (arr[i] === "--discard-next") {
      if (arr[i + 1] !== false || arr[i + 1] === false || isNaN(arr[i + 1])) {
        discardNext = true;
      }
    } else if (arr[i] === "--discard-prev") {
      if (
        arr[i - 2] !== "--discard-next" &&
        (arr[i - 1] !== false || arr[i - 1] === false || isNaN(arr[i - 1]))
      ) {
        newArr.splice(newArr.length - 1, 1);
      }
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1] !== false || arr[i + 1] === false || isNaN(arr[i + 1])) {
        doubleNext = true;
      }
    } else if (arr[i] === "--double-prev") {
      if (
        arr[i - 2] !== "--discard-next" &&
        (arr[i - 1] !== false || arr[i - 1] === false || isNaN(arr[i - 1]))
      ) {
        if (arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
        }
      }
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};
