function Calculator() {
  var methods = {
    '+': function(a, b) {
      return a + b;
    },
    '-': function(a, b) {
      return a - b;
    }
  }

  this.calculate = function(expression) {
    var c = +expression.substring(0, expression.indexOf(' '));
    var d = +expression.substring(expression.lastIndexOf(' ') + 1, expression.length);
    var method = expression.substring(expression.indexOf(' ') + 1, expression.lastIndexOf(' '));

    return methods[method](c, d);
  };
  this.addMethod = function(name, func) {
    methods[name] = func;
  }
}

var calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
