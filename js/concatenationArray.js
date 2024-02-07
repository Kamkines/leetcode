var getConcatenation = function (nums) {
     let numsLen = nums.length;
     for (let i = 0; i < numsLen; i++) {
          nums[i + numsLen] = nums[i];
     }
     return nums;
};
// example

let nums = [1, 2, 1];

getConcatenation(nums);
