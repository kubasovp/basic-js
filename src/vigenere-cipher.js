const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    const ABC = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };
    let string = message.toUpperCase();
    let numStrArr = [];
    let tempKey = "";
    let newKey = "";
    if (string.length > key.length) {
      tempKey = key.repeat(Math.ceil(string.length / key.length));
      newKey = tempKey
        .slice(0, -(tempKey.length - string.length))
        .toUpperCase();
    } else if (string.length === key.length) {
      newKey = key.toUpperCase();
    } else {
      tempKey = key.toUpperCase();
      newKey = tempKey
        .slice(0, -(tempKey.length - string.length))
        .toUpperCase();
    }

    let numStrKey = [];

    string.split("").map((el) => {
      if (typeof ABC[el] === "number") {
        numStrArr.push(ABC[el]);
      } else {
        numStrArr.push(el);
      }
    });

    newKey.split("").map((el) => {
      if (typeof ABC[el] === "number") {
        numStrKey.push(ABC[el]);
      } else {
        numStrKey.push(el);
      }
    });

    let resNumArr = [];
    for (let i = 0; i < numStrArr.length; i++) {
      if (typeof numStrArr[i] === "string") {
        resNumArr.push(numStrArr[i]);
        numStrKey.splice(i, 0, " ");
      } else if (numStrArr[i] + numStrKey[i] >= 26) {
        resNumArr.push(numStrArr[i] + numStrKey[i] - 26);
      } else {
        resNumArr.push(numStrArr[i] + numStrKey[i]);
      }
    }

    let resArr = [];
    resNumArr.forEach((el) => {
      if (typeof el === "number") {
        resArr.push(Object.keys(ABC).find((key) => ABC[key] === el));
      } else {
        resArr.push(el);
      }
    });

    return this.mode ? resArr.join("") : resArr.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }
    const ABC = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };
    let string = encryptedMessage.toUpperCase();
    let numStrArr = [];

    let tempKey = "";
    let newKey = "";
    if (string.length > key.length) {
      tempKey = key.repeat(Math.ceil(string.length / key.length));
      newKey = tempKey
        .slice(0, -(tempKey.length - string.length))
        .toUpperCase();
    } else if (string.length === key.length) {
      newKey = key.toUpperCase();
    } else {
      tempKey = key.toUpperCase();
      newKey = tempKey
        .slice(0, -(tempKey.length - string.length))
        .toUpperCase();
    }

    let numStrKey = [];

    string.split("").map((el) => {
      if (typeof ABC[el] === "number") {
        numStrArr.push(ABC[el]);
      } else {
        numStrArr.push(el);
      }
    });

    newKey.split("").map((el) => {
      if (typeof ABC[el] === "number") {
        numStrKey.push(ABC[el]);
      } else {
        numStrKey.push(el);
      }
    });

    let resNumArr = [];
    for (let i = 0; i < numStrArr.length; i++) {
      if (typeof numStrArr[i] === "string") {
        resNumArr.push(numStrArr[i]);
        numStrKey.splice(i, 0, " ");
      } else if (numStrArr[i] - numStrKey[i] < 0) {
        resNumArr.push(numStrArr[i] - numStrKey[i] + 26);
      } else {
        resNumArr.push(numStrArr[i] - numStrKey[i]);
      }
    }

    let resArr = [];
    resNumArr.forEach((el) => {
      if (typeof el === "number") {
        resArr.push(Object.keys(ABC).find((key) => ABC[key] === el));
      } else {
        resArr.push(el);
      }
    });

    return this.mode ? resArr.join("") : resArr.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
