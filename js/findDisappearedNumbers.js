var findDisappearedNumbers = function (nums) {
    let objNums = {}
    for (let n of nums) {
        objNums[n] = 1
    }
    //объект для сбора объекта, который устанавлвиает, если число в массиве, если есть то он устанавливает ключ + это убирает дубликаты

    let arrNums = []

    for (let i = 1; i <= nums.length; i++) {
        if (!objNums[i]) arrNums.push(i) // Проверка если число в объекте, если его нет, значит и не в массиве и добавляем его во временный массив
    }
    return arrNums
};

// example
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])