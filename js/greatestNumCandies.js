var kidsWithCandies = function (candies, extraCandies) {
     let candyMax = Math.max(...candies);
     let array = [];

     for (let i = 0; i < candies.length; i++) {
          if (candies[i] + extraCandies >= candyMax) {
               array.push(true);
          } else {
               array.push(false);
          }
     }

     return array;
};

// var kidsWithCandies = function (candies, extraCandies) {
//      let candyMax = Math.max(...candies);
//      console.log(candies.map((candy) => candy + extraCandies >= candyMax));
// };

// Два способа реализации, второй лаконичный способ, с функцией map, которая создает новую функцию исходя из условия, прописанного внутри.
//метод spread помогает разделить массив на отдельные значения, который в дальнейшем можно использовать

// example

kidsWithCandies([2, 3, 5, 1, 3], 3);
