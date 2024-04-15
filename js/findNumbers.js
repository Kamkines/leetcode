var findNumbers = function(nums) {
    console.log(
        nums.filter(
            item => {
                return item.toString().length % 2 == 0
            }
        ).length
    )
};

// var findNumbers = (nums) => nums.map(String).filter(num => num.length % 2 === 0).length; MAP преобразует все значения в string и получается не надо делать toString()

// example

findNumbers([12,345,2,6,7896])