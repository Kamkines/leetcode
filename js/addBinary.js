var addBinary = function (a, b) {
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);

    return sum.toString(2);
};
// BigInt нужна для работы с большими целыми числами
// 0b указывает, что число записано в двоичной системе счисления.
// BigInt(0b${a})/BigInt(`0b${b}`) создает число типа BigInt из двоичной строки 
// example

addBinary(a = "11", b = "1")