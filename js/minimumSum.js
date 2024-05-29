var minimumSum = function(num) {
    const arrNum = num.toString().split('').sort();
    return parseInt(arrNum[0] + arrNum[2]) + parseInt(arrNum[1] + arrNum[3])
};

// example

minimumSum(4009)