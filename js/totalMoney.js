var totalMoney = function (n) {
    let result = 0;
    let money = 1;
    for (let i = 1; i <= n; i++) { // цикл по каждому дню
        result += money; // суммируем число отложенных денег по дням
        if (i % 7 == 0) money = Math.floor(i / 7); // проверяем наступил ли конец недели для увеличения отложенных денег
        money++; // прибавляем
    }

    console.log(result)
};

// example

totalMoney(10)