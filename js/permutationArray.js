var buildArray = function (nums) {
     let ans = [];
     for (let i = 0; i < nums.length; i++) {
          ans[i] = nums[nums[i]];
     }
     return ans;
};

// nums[nums[i]]; как пример, в случае с нулем будет выглядеть так nums[nums[0]] это nums[5], а это цифра 4 из массива nums

// var buildArray = function (nums) {
//      return nums.map(x => nums[x])
// };
// Данный вариант работает так, что map для каждого элемент X будет браться свой индекс, т.е. (5 => nums[5]), а это цифра 4 из массива nums

// example
let nums = [5, 0, 1, 2, 3, 4];

buildArray(nums);
