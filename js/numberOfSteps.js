var numberOfSteps = function(num) {
    let count = 0;
    while(num){
        num % 2 == 0 ? num /= 2 : num -= 1 
        count++
    }
    console.log(count)
};

// example

numberOfSteps(8)