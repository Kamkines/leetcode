var findGCD = function (nums) {
     let newNum = [Math.min(...nums), Math.max(...nums)]; //массив максимального и минимального числа
     let firstNum = newNum[0];
     let secondNum = newNum[1];
     while (secondNum) {
          //пока число максимального значения
          let newNum = secondNum;
          secondNum = firstNum % secondNum;
          firstNum = newNum;
     }
     return firstNum;
};

// example

findGCD([7, 5, 6, 8, 3]);
