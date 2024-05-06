var canBeTypedWords = function (text, brokenLetters) {
    let arrText = text.split(" ");
    let regexp = "[" + brokenLetters + "]\+"
    let count = 0;
    for (let i = 0; i < arrText.length; i++) {
        if (!arrText[i].match(regexp)) count++;
    }
    console.log(count)
};

// example

canBeTypedWords(text = "leet code", brokenLetters = "e")