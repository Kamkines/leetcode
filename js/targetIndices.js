var targetIndices = function (nums, target) {
    let arr = [];
    nums.sort(function (a, b) {
        return a - b;
    });

    for (let i=0; nums.length > i; i++){
        if(nums[i] == target){
            arr.push(i)
        }
    }

    console.log(arr);
};

// example

targetIndices(nums = [1,2,5,2,3], target = 2)