// var minOperations = function (nums, k) {
//      let count = 0;
//      for (num of nums) {
//           if (num < k) {
//                count++;
//           }
//      }
//      console.log(count);
// };

var minOperations = function (nums, k) {
     return nums.filter((num) => num < k).length;
};

// example
minOperations([1, 1, 2, 4, 9], (k = 9));
