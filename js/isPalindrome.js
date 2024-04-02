var isPalindrome = function(x) {
    let reverseNum = x.toString().split("").reverse().join("");
    return x == reverseNum ? true : false
};

// example
isPalindrome(-121)