var runningSum = function (nums) {
     let sum = 0;
     let arrayNums = [];
     for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
          arrayNums.push(sum);
     }
     console.log(arrayNums);
};

// example

runningSum([3, 1, 2, 10, 1]);
