const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  if (
    typeof sampleActivity === "string" &&
    Number(sampleActivity) &&
    Number(sampleActivity) < MODERN_ACTIVITY &&
    Number(sampleActivity) > 0
  ) {
    let sA = Number(sampleActivity);

    return Math.ceil(Math.log(MODERN_ACTIVITY / sA) / k);
  } else {
    return false;
  }
};
