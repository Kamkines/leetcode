var countSymmetricIntegers = function (low, high) {
    let count = 0;
    for (let i = low; high + 1 > i; i++) {
        let num = i.toString();

        if (num.length % 2 != 0) {
            continue
        }

        let firstElem = num.split('').slice(0, num.length / 2).map(Number);
        let secondElem = num.split('').slice(num.length / 2).map(Number);

        let sumFirst = firstElem.reduce((sum, current) => sum + current, 0);
        let secondFirst = secondElem.reduce((sum, current) => sum + current, 0);

        if (sumFirst == secondFirst) {
            count++
        }
    }
    console.log(count)
};

// example

countSymmetricIntegers(low = 1, high = 100)