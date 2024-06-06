var isPowerOfTwo = function (n) {
    let exponent = Math.log2(n);

    console.log(Number.isInteger(exponent)); // метод для определения целочисленное число или плавающее с точкой, также можно использовать exponent%1==0
};

// example

isPowerOfTwo(13)