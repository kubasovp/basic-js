const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};

  obj.turns = Math.pow(2, disksNumber) - 1;
  obj.seconds = Math.floor((3600 / turnsSpeed) * obj.turns);

  return obj;
};
