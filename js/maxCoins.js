var maxCoins = function (piles) {
    piles.sort((a, b) => b - a); // сортируем массив от большего к меньшему
    let len = piles.length / 3; // сколько троек можно создать
    let maxResult = 0;
    // добавляем каждый второй элемент, начиная с индекса 1 (2 элемент) и так делаем 
    for (let i = 1; i < piles.length - len; i += 2) {
        maxResult += piles[i];
    }

    console.log(maxResult)
};

// example 

maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])