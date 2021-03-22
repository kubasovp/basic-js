const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach((arr) => {
    if (
      arr.filter((item) => {
        if (item === "^^") {
          cats++;
        }
      })
    ) {
    }
  });
  return cats;
};
