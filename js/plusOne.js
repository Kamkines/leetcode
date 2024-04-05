var plusOne = function(digits) {
    let num = BigInt(digits.join("")) + BigInt(1);
    console.log(num.toString().split(''))
};

// BigInt нужно использовать, потому что при больших числах [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3], типа таких, может потеряться точность

// example

plusOne([1,2,3])