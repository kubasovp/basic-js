const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resStr = "";
  let newstr = "";
  if (str === null) {
    newstr = "null";
  } else {
    newstr = str.toString();
  }
  let repeatTimes = 0;
  let separator = "+";
  let addition = 0;
  let additionRepeatTimes = 0;
  let additionSeparator = "|";

  let addSepStr = "";

  if (options) {
    repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
    separator = options.separator ? options.separator : "+";
    addition = options.addition ? options.addition.toString() : "";
    additionRepeatTimes = options.additionRepeatTimes
      ? options.additionRepeatTimes
      : 0;
    additionSeparator = options.additionSeparator
      ? options.additionSeparator
      : "|";
    if (options.addition === false) {
      addition = "false";
    }
    if (options.addition === null) {
      addition = "null";
    }
  }

  if (additionRepeatTimes > 0) {
    addSepStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes);
    addSepStr = addSepStr.slice(0, -additionSeparator.length);
  } else {
    addSepStr = `${addition}${additionSeparator}`.slice(
      0,
      -additionSeparator.length
    );
  }

  if (repeatTimes > 0) {
    resStr = `${newstr}${addSepStr}${separator}`.repeat(repeatTimes);
  } else {
    resStr = `${newstr}${addSepStr}${separator}`;
  }

  return resStr.slice(0, -separator.length);
};
