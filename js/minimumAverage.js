var minimumAverage = function(nums) {
    let numsArr = nums;
    let averages = [];
    const lengthArr = numsArr.length/2;
    for(let i = 0; lengthArr >= i; i++){
        if(numsArr.length != 0){
            let maxNum = Math.max(...numsArr);
            let minNum = Math.min(...numsArr);
            numsArr.splice(numsArr.indexOf(maxNum), 1);
            numsArr.splice(numsArr.indexOf(minNum), 1);
    
            averages.push((minNum + maxNum) / 2);
        }
    }
    
    return Math.min(...averages)
};

//также можно было удалить ненужное с помощью сортировки и функция удаления первого  и последнего элемента

// example

minimumAverage([7,8,3,4,15,13,4,1])