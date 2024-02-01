var compose = function (functions) {
     return function (x) {
          for (let i = functions.length - 1; i >= 0; i--) {
               x = functions[i](x); // тут берется по отдельности каждая функция из массива functions с помощью индекса [i] и передается значения x, которое в дальнейшем возвращается
          }
          return x;
     };
};

// Example
let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

x = 4;

compose(functions);
