var reduce = function (nums, fn, init) {
    let count = init;
    for (let i = 0; nums.length > i; i++){
        count = fn(count, nums[i]);
    }
    console.log(count)
};


// example

reduce(nums = [],
    fn = function sum(accum, curr) { return 0; },
    init = 25)