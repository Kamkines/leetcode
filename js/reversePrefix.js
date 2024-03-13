var reversePrefix = function (word, ch) {
     let charIndex = word.indexOf(ch) + 1;
     let prefix = word.slice(0, charIndex);
     let unprefix = word.slice(charIndex, word.length);
     console.log(prefix.split("").reverse().join("") + unprefix);
};

// example

reversePrefix((word = "abcdefd"), (ch = "d"));
