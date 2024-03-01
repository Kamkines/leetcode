var countKDifference = function (nums, k) {
     let count = 0;
     for (let i = 0; i < nums.length; i++) {
          for (let j = 0; j < nums.length; j++) {
               if (i < j && Math.abs(nums[i] - nums[j]) === k) {
                    count++;
               }
          }
     }
     console.log(count);
};

// example

countKDifference([3, 2, 1, 5, 4], 2);
