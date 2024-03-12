var sortPeople = function (names, heights) {
     let sortArray = [];
     for (let i = 0; i < names.length; i++) {
          let obj = {};
          obj[names[i]] = heights[i];
          sortArray.push(obj);
     }
     sortArray.sort((a, b) => {
          const valueA = Object.values(a)[0]; //берется первое значение, а не имя, благодаря values, которые возвращает именно количество значений из массива
          const valueB = Object.values(b)[0]; //берется втрое значение, а не имя, благодаря values, которые возвращает именно количество значений из массива
          return valueB - valueA;
     });

     console.log(sortArray.map((obj) => Object.keys(obj)[0])); // благодаря кейс, мы вытаскиваем ключи, т.е. первое поле перед значением и пересобиарем с помощью map массив
};

// var sortPeople = function (names, heights) {
//     return names.map((item, i) => [item, heights[i]])
//       .sort((a, b) => b[1] - a[1])
//       .map(item => item[0])
//   };

// example

(names = ["Mary", "John", "Emma"]), (heights = [180, 165, 170]);

sortPeople(names, heights);
