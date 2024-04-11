var hammingWeight = function(n) {
    console.log (n.toString(2).split('').filter(elem => {
        return elem == 1
    }).length)
};

// можно сделать через count++
// var hammingWeight = function(n) {
//     let nStr = n.toString(2);
//     let count = 0;
//     for(let char of nStr){
//         if(char == '1') count++
//     }
//     return count
// };

// example

hammingWeight(11)