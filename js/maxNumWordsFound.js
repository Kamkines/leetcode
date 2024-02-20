var mostWordsFound = function (sentences) {
     let arrayWord = [];
     for (word of sentences) {
          arrayWord.push(word.split(" ").length);
     }
     return Math.max(...arrayWord);
};

// example

let sentences = [
     "alice and bob love leetcode",
     "i think so too",
     "this is great thanks very much",
];

mostWordsFound(sentences);
