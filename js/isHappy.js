var isHappy = function (n) {
    let num = n;
    while (num > 9) {
        num = num.toString().split('').map(item => {
            return item * item
        }).reduce((result, currentValue) => result + currentValue, 0);
    }

    if(num != 1 && num != 7){
        return false
    }

    return true
};



// example

isHappy(7)