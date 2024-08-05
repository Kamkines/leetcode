var minimumOperations = function (nums) {
    let count = 0;
    nums.map(number => {
        if (number % 3 != 0) {
            number++;
            if (number % 3 == 0) {
                count++;
            }
            else {
                number = number - 2;
                if (number % 3 == 0) {
                    count++;
                }
            }
        }
    })
    console.log(count)
};

// example

minimumOperations([3, 6, 9])