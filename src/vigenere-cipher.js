const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (this.message === undefined || this.key === undefined) {
      // throw new Error;
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

    let tempKey = key.repeat(Math.ceil(string.length / key.length));
    let newKey = tempKey
      .slice(0, -(tempKey.length - string.length))
      .toUpperCase();
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

    for (let i = 0; i < numStrArr.length; i++) {
      if (typeof numStrArr[i] === "string") {
        numStrArr[i] = numStrKey[i];
      } else if (numStrArr[i] + numStrKey[i] > 26) {
        numStrArr[i] = numStrArr[i] + numStrKey[i] - 26;
      } else {
        numStrArr[i] = numStrArr[i] + numStrKey[i];
      }
    }
    // [ 0, 19, 19, 0, 2, 10, " ", 0, 19, " " ]
    // [ 0, 11, 15, 7, 14, 13, 18, 4, 0, 11 ]
    // [ 0, 4, 8, 7, 16, 23, " ", 4, 19, " " ]

    let resArr = [];
    numStrArr.forEach((el) => {
      if (typeof el === "number") {
        resArr.push(Object.keys(ABC).find((key) => ABC[key] === el));
      } else {
        resArr.push(el);
      }
    });

    console.log("numStrArr", numStrArr);
    console.log("numStrKey", numStrKey);
    console.log("resArr", resArr.join(""));
  }

  decrypt(encryptedMessage, key) {
    throw new CustomError("Not implemented");
    // console.log(encryptedMessage, key);
  }
}

module.exports = VigenereCipheringMachine;
