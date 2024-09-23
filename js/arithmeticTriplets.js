var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    const lenNum = nums.length; 
    for (let j = 1; j < lenNum - 1; j++){ // берем со второго значения, оно будет основным и будет рассчитываться от него
        for(let i = 0; i < j; i++){ // далее мы ищем все числа, которые меньше нашего j
            for (let k = j + 1; k < lenNum; k++){ // тут мы делаем наоборот, мы берем все числа, которые больше нашего j и перебираем их
                if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) count++
            }
        }
    }
    console.log(count)
};

// example

arithmeticTriplets(nums = [4,5,6,7,8,9], diff = 2)