var clearDigits = function (s) {
    val = []
    for (i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            val.pop()
        } else {
            val.push(s[i])
        }
    }
    return val.join('')
};

// Самое простое это написать регулярное выражение, которое ищет цифры и убирает их

// var clearDigits = function (s) {
//     while (/\d/g.test(s)) {
//         s = s.replace(/.\d/, '')
//     }

//     return s
// };


// example

clearDigits(s = "g0")