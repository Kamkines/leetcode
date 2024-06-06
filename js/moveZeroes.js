function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;

    // Перемещение всех ненулевых элементов вперед
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }

    // Заполнение оставшихся позиций нулями
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums)
}

// example

moveZeroes(nums = [0, 1, 0, 3, 12])