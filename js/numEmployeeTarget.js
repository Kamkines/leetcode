// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//      let countTarget = 0;
//      for (element of hours) {
//           if (element >= target) {
//                countTarget++;
//           }
//      }
//      console.log(countTarget);
// };

var numberOfEmployeesWhoMetTarget = function (hours, target) {
     console.log(hours.filter((hour) => hour >= target).length);
};

//два способа, первый способ через цикл for of проверяет каждую запись и записывает итог в переменную счетчика, второй способ фильтрует записи по установленному условию и считает количество отфильтрованных значений
// example

numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
