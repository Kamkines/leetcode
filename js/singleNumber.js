var singleNumber = function (nums) {
    const elementCount = new Map(); // объект MAP  хранит каждый элемент массива как ключ и количество его вхождений в массив как значение

    nums.forEach(item => { // подсчет количества вхождений каждого элемента
        elementCount.set(item, (elementCount.get(item) || 0) + 1); // elementCount.get(item) проверяет если элемент в elementCount, если он есть, то мы увеличиваем значение, а если нет то ставим 1
    });

    console.log(nums.filter(item => elementCount.get(item) === 1)); //убираем все элементы, у которых значение вхождения больше 1 или 0 
};

// example

singleNumber([2, 2, 1]) 