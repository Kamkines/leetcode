var isAcronym = function (words, s) {
     let acronym = [];
     for (let i = 0; i < words.length; i++) {
          acronym.push(words[i][0]);
     }
     console.log(acronym.join("") === s ? true : false);
     return acronym.join("") === s ? true : false;
};

// var isAcronym = function (words, s) {
//     return s === words.map((str) => str[0]).join("")
//   }
// map создает новый массив из этогоже исходя из установленной функции внутри

// example

isAcronym(["an", "apple"], "a");
