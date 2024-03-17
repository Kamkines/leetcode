// var commonFactors = function (a, b) {
//      let count = 0;
//      for (let i = 1; i <= 1000; i++) {
//           if (a % i === 0 && b % i === 0) count++;
//      }
//      console.log(count);
// };

var commonFactors = function (a, b) {
     let num = a > b ? b : a;
     let res = 0;
     for (let i = 1; i <= num; i++) {
          if (a % i === 0 && b % i === 0) {
               res++;
          }
     }
     return res;
};

// example
commonFactors((a = 25), (b = 30));
