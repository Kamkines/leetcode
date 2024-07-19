var findWords = function(words) {
    const rows = [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/];
  
    return words.filter(word => rows.some(row => row.test(word.toLowerCase())));
};

// example

findWords(["Hello","Alaska","Dad","Peace"])