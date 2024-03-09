var maximum69Number = function (num) {
     let arrayNum = num.toString().split("");
     for (let i = 0; i < arrayNum.length; i++) {
          if (arrayNum[i] == 6) {
               arrayNum[i] = "9";
               break;
          }
     }

     console.log(arrayNum.join(""));
};

// example

maximum69Number(9669);
