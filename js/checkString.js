var checkString = function (s) {
    let flag = 0; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "a" && flag == 1) { //проверка на флаг, если он тру, значит b уже было и а не может быть, т.к. потеряется последовательность
            return false;
        }
        if (s[i] == 'b') {
            flag = 1;
        }
    }
    return true;
};

// example

checkString()