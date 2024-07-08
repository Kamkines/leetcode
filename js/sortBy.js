var sortBy = function(arr, fn) {
    let newArr = arr.sort((x,y) => fn(x) - fn(y)); // с помощью функции fn(x/y) мы устанавливаем значение, которые принадлежат X/Y, т.е. мы делаем присваивание по типу как в цикле массива arr[i]
    console.log(newArr)
};

// example

sortBy(arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1])