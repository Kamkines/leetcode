var sumOfUnique = function (nums) {
     return nums
          .filter(function (num) {
               return nums.indexOf(num) == nums.lastIndexOf(num); // поиск по индексу, для удаления всех элементов с дублирующим цифрами, т.е. если 2 встречается 2 раза, обе 2 будут удалены, включая и изначальную
          })
          .reduce((num, total) => num + total, 0); // num это каждый элемент, тотал это начальная переменная для подсчетов, в конце стоит 0, который устанавливает что, total начинается с 0
};

// example
sumOfUnique([1, 1, 1, 1, 1]);
