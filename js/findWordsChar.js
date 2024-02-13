var findWordsContaining = function (words, x) {
     let arrayIndex = [];
     for (word in words) {
          if (words[word].includes(x)) arrayIndex.push(parseInt(word));
     }
     return arrayIndex;
};

// example
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
