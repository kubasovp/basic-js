const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 0;
  constructor(arr) {
    this.arr = arr;
  }

  calculateDepth(arr) {
    console.log("arr", arr);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.depth++;
        this.calculateDepth(arr[i]);
      }
    }
    return this.depth + 1;
  }
};
