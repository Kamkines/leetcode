var xorOperation = function (n, start) {
    count = 0;
    let value = 0;
    while (count != n) {
        value ^=start + 2 * count;
        count++
    }
    console.log(value)
};



// example

xorOperation(n = 4, start = 3)