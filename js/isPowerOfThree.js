var isPowerOfThree = function (n) {
    const baseNum = 3;
    const result = Math.log(n) / Math.log(baseNum);
    if (Math.abs(Math.round(result) - result) < 0.0000000001) { // проверка на то, явялется ли число целым
        return true;
    }
    return false;
};

// Самое простое решение. Тут в цикл загоняется число и пока оно делится на 3 и в конце выходит 1, то значит число будет считаться, что у него есть степень 3, если выходит из цикла и не 1, то степени нет
// var isPowerOfThree = function (n) {
//     while (n > 1) {
//         n /= 3
//     }
//     return n === 1
// }

// example

isPowerOfThree(27)