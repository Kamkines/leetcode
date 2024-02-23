var countPairs = function (nums, target) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] < target) {
                count++
            }
        }
    }
    console.log(count)
};

// example

countPairs([-1, 1, 2, 3, 1], 2)