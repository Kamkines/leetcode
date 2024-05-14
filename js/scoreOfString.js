var scoreOfString = function (s) {
    let count = 0;
    for (let i = 0; s.length - 1 > i; i++) {
        count += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0))
    }
    console.log(count)
};


// example 
scoreOfString("zaz")