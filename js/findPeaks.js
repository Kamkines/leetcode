var findPeaks = function(mountain) {
    let arr = [];
    for(let i = 1; mountain.length - 1 > i; i++){
        if((mountain[i-1] < mountain[i]) && (mountain[i] > mountain[i+1])) arr.push(i)
        // mountain[i-1]; проверка на первое число и второе
        // cmountain[i+1] проверка на последнее число и предпослденне
    }
    console.log(arr)
};


// example

findPeaks([1,4,3,8,5])