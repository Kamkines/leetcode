var leftRightDifference = function (nums) {
    let rightArr = [0];
    let leftArr = [0];
    let res = []
    for (let i = 0, j = nums.length - 1; i < nums.length - 1; i++) {
        rightArr.push(nums[i] + rightArr[i])
        leftArr.push(nums[j--] + leftArr[i]);
    }

    let revArr = leftArr.reverse()

    for (let i = 0; i < rightArr.length; i++) {
        res.push(Math.abs(revArr[i] - rightArr[i]))
    }
    return res
};

// example

leftRightDifference([10, 4, 8, 3])