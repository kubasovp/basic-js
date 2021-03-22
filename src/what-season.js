const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error();
  } else {
    if (date.getMonth() > 10) return "winter";
    if (date.getMonth() > 7) return "autumn";
    if (date.getMonth() > 4) return "summer";
    if (date.getMonth() > 1) return "spring";
    if (date.getMonth() > -1) return "winter";
  }
};
