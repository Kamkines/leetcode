var sortByBits = function (arr) {
     return arr.sort((a, b) => {
          let countA = a
               .toString(2) // число разбивается на биты
               .split("") // создается массив из чисел бита
               .filter((bit) => bit === "1").length; // фильтр которые устанавливает сколько в массиве ЧИСЛА-бит 1 и получает длинну массива, состящий только из 1
          let countB = b
               .toString(2)
               .split("")
               .filter((bit) => bit === "1").length;
          return countA - countB || a - b;
     });
};

// example
sortByBits((arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]));
