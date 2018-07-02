function makeBuffer() {
  var buffer = '';
  return function() {
    if(arguments.length > 0) {
      buffer += arguments[0];
    }
    else {
      return buffer;
    }
  }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log( buffer2() ); // '010'