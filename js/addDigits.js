var addDigits = function(num) {
    while(num > 9){
        let numData = num.toString().split('').map(Number);
        num = numData.reduce(function(result,item){
            return result + item
        }, 0)
    }
    console.log(num)
};

// example
addDigits(942)