var countDistinctIntegers = function(nums) {
    let length = nums.length;

    for(let i = 0; length > i; i++){
        if(nums[i] > 9){
            let reverseNum = String(nums[i]).split('').reverse().join('');
            nums.push(Number(reverseNum));
        }
        else{
            nums.push(nums[i])
        }

    }

    console.log([...new Set(nums)].length)
};

// example

countDistinctIntegers([2,2,2])