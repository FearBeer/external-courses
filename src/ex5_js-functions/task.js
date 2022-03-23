function Calculator() {
  let current = 0;

  const Balculator = {

    add(a) {
      if (typeof a !== 'number') {
        current = 0;
      } else {
        current += a;
      }
      return Balculator.add;
    },

    subtract(a) {
      if (typeof a !== 'number') {
        current = 0;
      } else {
        current -= a;
      }
      return Balculator.subtract;
    },

    divide(a) {
      if (typeof a !== 'number') {
        current = 0;
      } else {
        current /= a;
      }
      return Balculator.divide;
    },

    multiply(a) {
      if (typeof a !== 'number') {
        current = 0;
      } else {
        current *= a;
      }
      return Balculator.multiply;
    },

    getResult() {
      return current;
    },

    reset() {
      current = 0;
    },
  };

  return Balculator;
}

const calculator = Calculator();

module.exports = calculator;
