var isStrictlyPalindromic = function (n) {
    for (let i = 2; n - 2 >= i; i++) {
        if (n.toString(i) != n.toString(i).split('').reverse().join('')) return false;
    }        
    return true
};

// example

isStrictlyPalindromic(4)