var minimumChairs = function(s) {
    let count = 0;
    let leave = 0;
    let enter = 0;
    s.split('').map((char) => {
        if(char == 'E'){
            enter++
        }
        else if(char == 'L'){
            leave++
        }
        count = Math.max(enter - leave, count); // оставляем максимальное число из входа - выхода, и коунт переменной
    });
    console.log(count)
};

// example
minimumChairs(s = "ELELEEL")