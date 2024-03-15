var separateDigits = function (nums) {
     let separateDig = nums.map(function (num) {
          let strNum = String(num);
          if (strNum.split("").length > 1) {
               let tempArr = [];
               for (item of strNum.split("")) {
                    tempArr.push(parseInt(item));
               }
               return tempArr;
          } else {
               return num;
          }
     });

     console.log(separateDig.flat()); // flat помогает убирать вложенность массива (т.е. из подмассивов они перекладываются в массив освной)
};

//Второй способ, в первом случае все цифры деляется и соеднияются запятыми, далее через реплейс запятые убираются, через сплит становится массив по каждой цифре но со значением стринг, а потом через map они переходят в намбер
// var separateDigits = function(nums) {
//     const array=nums.toString().split('').join()
//     const array1=array.replace(/,/g,'').split('').map(Number)
//     return array1
// };

// exampel
// separateDigits([7, 12, 3, 9]);
separateDigits([13, 25, 83, 77]);
