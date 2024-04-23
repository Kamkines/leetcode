var findNonMinOrMax = function (nums) {
    let maxNum = Math.max(...nums);
    let minNum = Math.min(...nums);
    if (maxNum == minNum || nums.length <= 2) return -1

    let arrTemp = nums.filter(item => item != maxNum && item != minNum);

    console.log(Math.min(...arrTemp))

};

// Также можно сделать через сортировку и выборе 1 элемента, ибо 0 элемент это минимальное значение
// let ans=nums.sort((a,b)=>{return a-b});
// return ans[nums.length-2]

// example

findNonMinOrMax([1,2])