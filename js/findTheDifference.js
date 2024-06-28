var findTheDifference = function (s, t) {
    for (let letter of s) {
        t = t.replace(letter, '')
    }
    console.log(t);
};

// цикл проходит и убирает символы что были и по факту остается символ, который нам нужен

// example

findTheDifference(s = "a", t = "aa")