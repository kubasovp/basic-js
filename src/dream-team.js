const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = [];
  if (Array.isArray(members)) {
    members.forEach((name) => {
      if (typeof name === "string") {
        res.push(name.toUpperCase().trim().charAt());
      } else {
        return false;
      }
    });
    return res.sort().join("");
  } else {
    return false;
  }
};
