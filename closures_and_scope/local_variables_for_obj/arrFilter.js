function inBetween(begin, end) {
  return function(elem) {
    return elem >= begin && elem <= end;
  }
}

function inArray(array) {
  return function(elem) {
    return array.indexOf(elem) != -1;
  }
}

function filter(arr, func) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2