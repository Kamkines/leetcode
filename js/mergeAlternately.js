var mergeAlternately = function (word1, word2) {
     let newArray = [];
     let maxLength = Math.max(word1.length, word2.length);
     for (let i = 0; i < maxLength; i++) {
          newArray.push(word1[i], word2[i]);
     }
     console.log(newArray.join(""));
};

// example
mergeAlternately((word1 = "ab"), (word2 = "pqrs"));
