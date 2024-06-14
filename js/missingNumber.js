var missingNumber = function (nums) {
    let sumRange = 0
    let sumVals = 0
    for (let i = 0; i < nums.length; i++) {
        sumRange += i // сумма всех индексов
        sumVals += nums[i] // сумма всех значение 
    }

    return nums.length + sumRange - sumVals // Сумма всех чисел от 0 до n может быть рассчитана как n * (n + 1) / 2
};

// example
missingNumber(nums = [1, 2])