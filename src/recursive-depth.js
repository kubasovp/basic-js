const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrEx = 0;
    let depth = 1;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        arrEx = 1;
      }
    });

    if (arrEx) {
      depth++;
      this.calculateDepth(arr.flat());
    }

    return depth;
  }
};
