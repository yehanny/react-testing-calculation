export default class Calculation {
  constructor(expression) {
    this.expression = expression;
    this.a = 0;
    this.b = 0;
  }

  addition() {
    return this.a + this.b;
  }

  subtraction() {
    return this.a - this.b;
  }

  production() {
    return this.a * this.b;
  }

  division() {
    return this.a / this.b;
  }

  calculate() {
    /* @TODO Add regular expression */
    let pattern = /(\d+\.?\d*)([+\*\/\-])(\d+\.?\d*)$/;

    if (this.expression.match(pattern)) {
      let matches = pattern.exec(this.expression);

      let sign = matches[2];

      /**
       * @TODO Implement it
       */

      let result = false;

      switch (sign) {
        case "+":
          this.a = parseFloat(matches[1]);
          this.b = parseFloat(matches[3]);
          result = this.addition();
          break;
        case "-":
          this.a = parseFloat(matches[1]);
          this.b = parseFloat(matches[3]);
          result = this.subtraction();
          break;
        case "*":
          this.a = parseFloat(matches[1]);
          this.b = parseFloat(matches[3]);
          result = this.production();
          break;
        case "/":
          this.a = parseFloat(matches[1]);
          this.b = parseFloat(matches[3]);
          result = this.division();
          break;
        default:
          break;
      }

      return result;
    } else {
      return false;
    }
  }
}
