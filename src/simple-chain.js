const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain.length = 0;
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    if (this.chain.length === 0) {
      throw new Error();
    } else {
      let res = this.chain.join("~~");
      this.chain.length = 0;
      return res;
    }
  },
};

module.exports = chainMaker;
