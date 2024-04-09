var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }
    nums.push(target);
    nums.sort(function (a, b) {
        return a - b;
    });
    return nums.indexOf(target)
};

// example

searchInsert(nums = [1, 3, 5, 6], target = 2)