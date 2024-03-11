var numOfStrings = function (patterns, word) {
     let count = 0;
     for (elem of patterns) {
          if (word.includes(elem)) {
               count++;
          }
     }
     console.log(count);
};

// var numOfStrings = function(patterns, word) {
//     return patterns.filter((a)=>word.includes(a)).length
// };
// В данной функции идет фильтрация под условие, что pattern будет входить в word, если да,то соберется отфильтрованный массив и по его длине можно понять сколько будет таких патерренов

// example

numOfStrings(["cjevwg"], "jevwg");
