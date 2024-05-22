var subsetXORSum = function (nums) {
    let result = 0;

    for (let num of nums) {
        result |= num;
    }

    return result << (nums.length - 1); // побитовый сдвиг числа влево
};

// example

subsetXORSum([5,1,6])