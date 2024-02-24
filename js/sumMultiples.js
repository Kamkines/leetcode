var sumOfMultiples = function(n) {
    let newArray = [];
    for (let i = 1; i < n + 1; i++) {
        if((i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0)){
            newArray.push(i)
        }
    }
    console.log(newArray.reduce((total, number) => total + number, 0))
};

// var sumOfMultiples = function (n) {
//     let s = 0; // sum
//     for (let i = 1; i <= n; i++) {
//         if (
//             i % 3 == 0 || //
//             i % 5 == 0 ||
//             i % 7 == 0
//         ) {
//             s += i;
//         }
//     }
//     return s;
// };

// example

sumOfMultiples(7)


