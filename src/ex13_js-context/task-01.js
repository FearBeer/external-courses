const Calculator = {
  current: 0,

  add(a) {
    if (typeof a !== 'number') {
      this.current = 0;
    } else {
      this.current += a;
    }
    return this;
  },

  multiply(a) {
    if (typeof a !== 'number') {
      this.current = 0;
    } else {
      this.current *= a;
    }
    return this;
  },

  divide(a) {
    if (typeof a !== 'number') {
      this.current = 0;
    } else {
      this.current /= a;
    }
    return this;
  },

  subtract(a) {
    if (typeof a !== 'number') {
      this.current = 0;
    } else {
      this.current -= a;
    }
    return this;
  },

  getResult() {
    return this.current;
  },

  reset() {
    this.current = 0;
    return this;
  },

  setState(a = 0) {
    this.current = a;
    return this;
  },

  async fetchData(cb) {
    const response = await cb(500);
    console.log(response);
    this.setState(response);
  },
};

module.exports = Calculator;
