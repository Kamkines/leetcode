var evenOddBit = function (n) {
    let bitNum = n.toString(2).split("").reverse();
    let odd = 0;
    let even = 0;
    for (let i = 0; i < bitNum.length; i++) {
      if (bitNum[i] == 1) { // проверка равно ли значение 1 
        if (i % 2 == 0) even++; //если равно проверка индекса значение 1 равна четному, то складываем в count четных переменных
        else odd++; //если равно проверка индекса значение 1 равна нечетному, то складываем в count нечетных переменных
      }
    }
    return [even, odd];
  };

// example

evenOddBit(3)