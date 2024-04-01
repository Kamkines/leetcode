var sumOfTheDigitsOfHarshadNumber = function(x) {
    let num = x.toString().split("").reduce(function(total,item){
        return total + Number(item)
    },0);
    return x % num == 0 ? num : -1;
};


// example
sumOfTheDigitsOfHarshadNumber(18)