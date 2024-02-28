var balancedStringSplit = function (s) {
     let count = 0;
     let countBalanced = 0;

     for (let i = 0; i < s.length; i++) {
          s[i] === "L" ? count++ : count--;

          if (count === 0) {
               countBalanced++;
          }
     }

     console.log(countBalanced);
};

// example

balancedStringSplit("RLRRLLRLRL");

//  Условие на 6 строке устанавливает количество повторяющихся элементов, если дальше count будет равен 0, значит пара уже была и засчитывается в другую переменную счестчика, которая в дальнейшем и будет выводиться!
