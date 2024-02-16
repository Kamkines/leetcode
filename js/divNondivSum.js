var differenceOfSums = function (n, m) {
     let divArray = [];
     let nondivArray = [];

     for (let i = 1; i < n + 1; i++) {
          if (i % m === 0) {
               divArray.push(i);
          } else {
               nondivArray.push(i);
          }
     }

     divArray = divArray.reduce((total, number) => total + number, 0);
     nondivArray = nondivArray.reduce((total, number) => total + number, 0);

     console.log(nondivArray - divArray);
};
//reduce суммирует все элементы массива, но есть более удобный способ, без reduce
// var differenceOfSums = function (n, m) {
//      let divArray = 0;
//      let nondivArray = 0;

//      for (let i = 1; i < n + 1; i++) {
//           if (i % m === 0) {
//                divArray += i;
//           } else {
//                nondivArray += i;
//           }
//      }

//      console.log(nondivArray - divArray);
// };
// example

differenceOfSums(5, 6);
