var filter = function (arr, fn) {
     let filteredArr = [];
     for (let i = 0; i < arr.length; i++) {
          if (fn(arr[i], i)) {
               filteredArr.push(arr[i]);
          }
     }
     return filteredArr;
};

//Example
let arr = [0, 10, 20, 30];

let fn = function greaterThan10(n) {
     return n > 10;
};

filter(arr, fn);
