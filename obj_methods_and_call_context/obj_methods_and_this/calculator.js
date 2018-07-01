var calculator = {
  read: function() {
    this.a = +prompt('Введите a:', 0);
    this.b = +prompt('Введите b:', 0);
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );