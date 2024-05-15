var createTargetArray = function (nums, index) {
    let tempArr = [];
    for (let i = 0; i < index.length; i++) {
        tempArr.splice(index[i], 0, nums[i]);
    }
    console.log(tempArr)
};

// example

createTargetArray(nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1])