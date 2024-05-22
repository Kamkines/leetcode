var arrayStringsAreEqual = function (word1, word2) {
    let wordOne = "";
    let wordTwo = "";

    word1.map(item => {
        wordOne += item
    });

    word2.map(item => {
        wordTwo += item
    })

    return wordOne == wordTwo ? true : false
};

// example
arrayStringsAreEqual(word1 = ["k", "h", "a", "yqzoutp", "d", "k"], word2 = ["kh", "ayqz", "out", "p", "dk"])