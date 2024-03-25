var sumIndicesWithKSetBits = function (nums, k) {
  console.log(nums.filter(function (item, index) {
    return index.toString(2).split("").filter(function (item) { return item == 1 }).length == k;
  }).reduce(function (total, num) {
    return total + num
  }, 0))
};


// example
sumIndicesWithKSetBits(nums = [4,3,2,1], k = 2)